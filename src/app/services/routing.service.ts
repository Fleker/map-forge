import { Injectable } from '@angular/core';
import { CityMap, Point2D, Road, RouteResult, RouteStep, TransitLine, TransitStation } from '../models/map.models';

interface GraphNode {
  id: string;
  point: Point2D;
  roadId?: string;
  roadName?: string;
  stationId?: string;
  stationName?: string;
  neighbors: {
    nodeId: string;
    distance: number;
    speedKmH: number;
    roadName?: string;
    lineName?: string;
    transitType?: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  findRoute(
    cityMap: CityMap,
    start: Point2D,
    end: Point2D,
    startName: string = 'Start Location',
    endName: string = 'Destination',
    mode: 'walk' | 'drive' | 'transit' = 'walk'
  ): RouteResult | null {
    // 1. Build road/transit graph
    const nodes = new Map<string, GraphNode>();

    // Helper to get or create node by rounded coordinate
    const getNodeKey = (p: Point2D) => `${Math.round(p.x)},${Math.round(p.y)}`;

    const getOrCreateNode = (p: Point2D, roadId?: string, roadName?: string): GraphNode => {
      const key = getNodeKey(p);
      if (!nodes.has(key)) {
        nodes.set(key, {
          id: key,
          point: { x: Math.round(p.x), y: Math.round(p.y) },
          roadId,
          roadName,
          neighbors: []
        });
      }
      return nodes.get(key)!;
    };

    // Add road segments to graph
    cityMap.roads.forEach(road => {
      for (let i = 0; i < road.path.length - 1; i++) {
        const p1 = road.path[i];
        const p2 = road.path[i + 1];
        const n1 = getOrCreateNode(p1, road.id, road.name);
        const n2 = getOrCreateNode(p2, road.id, road.name);

        const distUnits = this.distance(p1, p2);
        const distMeters = (distUnits / cityMap.unitsPerKm) * 1000;
        const speed = mode === 'walk' ? 5 : (road.speedLimitKmH || 40);

        n1.neighbors.push({
          nodeId: n2.id,
          distance: distMeters,
          speedKmH: speed,
          roadName: road.name
        });

        if (!road.oneWay || mode === 'walk') {
          n2.neighbors.push({
            nodeId: n1.id,
            distance: distMeters,
            speedKmH: speed,
            roadName: road.name
          });
        }
      }
    });

    // If transit mode, add transit lines with high speed (e.g. 45-60 km/h) and station connections
    if (mode === 'transit') {
      cityMap.transitLines.forEach(line => {
        for (let i = 0; i < line.path.length - 1; i++) {
          const p1 = line.path[i];
          const p2 = line.path[i + 1];
          const n1 = getOrCreateNode(p1);
          const n2 = getOrCreateNode(p2);

          const distUnits = this.distance(p1, p2);
          const distMeters = (distUnits / cityMap.unitsPerKm) * 1000;
          const transitSpeed = line.type === 'metro' ? 60 : (line.type === 'tram' ? 30 : 25);

          n1.neighbors.push({
            nodeId: n2.id,
            distance: distMeters,
            speedKmH: transitSpeed,
            lineName: line.name,
            transitType: line.type
          });
          n2.neighbors.push({
            nodeId: n1.id,
            distance: distMeters,
            speedKmH: transitSpeed,
            lineName: line.name,
            transitType: line.type
          });
        }
      });
    }

    // Connect start and end to closest graph nodes
    const startNode = getOrCreateNode(start);
    const endNode = getOrCreateNode(end);

    this.connectPointToNearestNodes(startNode, nodes, cityMap.unitsPerKm, mode === 'walk' ? 5 : 15);
    this.connectPointToNearestNodes(endNode, nodes, cityMap.unitsPerKm, mode === 'walk' ? 5 : 15);

    // Dijkstra / A* Search
    const distances = new Map<string, number>();
    const previous = new Map<string, { nodeId: string; edge: GraphNode['neighbors'][0] }>();
    const unvisited = new Set<string>();

    nodes.forEach(node => {
      distances.set(node.id, Infinity);
      unvisited.add(node.id);
    });

    distances.set(startNode.id, 0);

    while (unvisited.size > 0) {
      // Find node with minimum distance
      let currentId: string | null = null;
      let minDistance = Infinity;

      for (const id of unvisited) {
        const d = distances.get(id)!;
        if (d < minDistance) {
          minDistance = d;
          currentId = id;
        }
      }

      if (!currentId || minDistance === Infinity || currentId === endNode.id) {
        break;
      }

      unvisited.delete(currentId);
      const currentNode = nodes.get(currentId)!;

      for (const edge of currentNode.neighbors) {
        if (!unvisited.has(edge.nodeId)) continue;

        // Weight = time in minutes or distance
        // Let's optimize for travel time in minutes:
        const travelHours = (edge.distance / 1000) / edge.speedKmH;
        const timeMinutes = travelHours * 60;
        const alt = minDistance + timeMinutes;

        if (alt < distances.get(edge.nodeId)!) {
          distances.set(edge.nodeId, alt);
          previous.set(edge.nodeId, { nodeId: currentId, edge });
        }
      }
    }

    if (!previous.has(endNode.id) && startNode.id !== endNode.id) {
      // Fallback: direct line path if roads are disconnected
      const distUnits = this.distance(start, end);
      const distMeters = Math.round((distUnits / cityMap.unitsPerKm) * 1000);
      const timeMins = Math.max(1, Math.round((distMeters / 1000) / (mode === 'walk' ? 5 : 35) * 60));

      return {
        startName,
        endName,
        totalDistanceMeters: distMeters,
        totalTimeMinutes: timeMins,
        steps: [
          {
            instruction: `Head directly from ${startName} towards ${endName}`,
            distanceMeters: distMeters,
            estimatedMinutes: timeMins,
            mode,
            path: [start, end]
          },
          {
            instruction: `Arrive at ${endName}`,
            distanceMeters: 0,
            estimatedMinutes: 0,
            mode,
            path: [end]
          }
        ],
        fullPath: [start, end]
      };
    }

    // Reconstruct path
    const pathNodes: Point2D[] = [];
    const steps: RouteStep[] = [];
    let currId = endNode.id;
    let totalMeters = 0;
    let totalMins = 0;

    const segments: {
      fromPoint: Point2D;
      toPoint: Point2D;
      distanceMeters: number;
      timeMins: number;
      roadName?: string;
      lineName?: string;
    }[] = [];

    while (previous.has(currId)) {
      const prev = previous.get(currId)!;
      const fromNode = nodes.get(prev.nodeId)!;
      const toNode = nodes.get(currId)!;

      const timeMins = ((prev.edge.distance / 1000) / prev.edge.speedKmH) * 60;
      totalMeters += prev.edge.distance;
      totalMins += timeMins;

      segments.unshift({
        fromPoint: fromNode.point,
        toPoint: toNode.point,
        distanceMeters: prev.edge.distance,
        timeMins,
        roadName: prev.edge.roadName,
        lineName: prev.edge.lineName
      });

      currId = prev.nodeId;
    }

    // Build consolidated turn-by-turn steps
    pathNodes.push(start);
    let currentStepRoad = segments[0]?.roadName || segments[0]?.lineName || 'local path';
    let currentStepDist = 0;
    let currentStepTime = 0;
    let currentStepPoints: Point2D[] = [start];
    let isTransitStep = !!segments[0]?.lineName;

    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      pathNodes.push(seg.toPoint);

      const isSameWay = (seg.roadName && seg.roadName === currentStepRoad) ||
        (seg.lineName && seg.lineName === currentStepRoad);

      if (isSameWay) {
        currentStepDist += seg.distanceMeters;
        currentStepTime += seg.timeMins;
        currentStepPoints.push(seg.toPoint);
      } else {
        // Emit previous step
        steps.push({
          instruction: isTransitStep
            ? `Take ${currentStepRoad} for ${Math.round(currentStepDist)}m (~${Math.max(1, Math.round(currentStepTime))} mins)`
            : `Follow ${currentStepRoad} for ${Math.round(currentStepDist)}m`,
          distanceMeters: Math.round(currentStepDist),
          estimatedMinutes: Math.max(1, Math.round(currentStepTime)),
          mode: isTransitStep ? 'transit' : (mode === 'walk' ? 'walk' : 'drive'),
          lineName: isTransitStep ? currentStepRoad : undefined,
          path: [...currentStepPoints]
        });

        // Start new step
        currentStepRoad = seg.lineName || seg.roadName || 'road';
        isTransitStep = !!seg.lineName;
        currentStepDist = seg.distanceMeters;
        currentStepTime = seg.timeMins;
        currentStepPoints = [seg.fromPoint, seg.toPoint];
      }
    }

    if (currentStepPoints.length > 0 && currentStepDist > 0) {
      steps.push({
        instruction: isTransitStep
          ? `Take ${currentStepRoad} for ${Math.round(currentStepDist)}m (~${Math.max(1, Math.round(currentStepTime))} mins)`
          : `Continue along ${currentStepRoad} for ${Math.round(currentStepDist)}m`,
        distanceMeters: Math.round(currentStepDist),
        estimatedMinutes: Math.max(1, Math.round(currentStepTime)),
        mode: isTransitStep ? 'transit' : (mode === 'walk' ? 'walk' : 'drive'),
        lineName: isTransitStep ? currentStepRoad : undefined,
        path: [...currentStepPoints]
      });
    }

    steps.push({
      instruction: `Arrive at ${endName}`,
      distanceMeters: 0,
      estimatedMinutes: 0,
      mode,
      path: [end]
    });

    return {
      startName,
      endName,
      totalDistanceMeters: Math.round(totalMeters),
      totalTimeMinutes: Math.max(1, Math.round(totalMins)),
      steps,
      fullPath: pathNodes
    };
  }

  private connectPointToNearestNodes(target: GraphNode, allNodes: Map<string, GraphNode>, unitsPerKm: number, speedKmH: number) {
    let nearest: GraphNode | null = null;
    let minD = Infinity;

    for (const [id, node] of allNodes) {
      if (id === target.id) continue;
      const d = this.distance(target.point, node.point);
      if (d < minD) {
        minD = d;
        nearest = node;
      }
    }

    if (nearest) {
      const distMeters = (minD / unitsPerKm) * 1000;
      target.neighbors.push({
        nodeId: nearest.id,
        distance: distMeters,
        speedKmH,
        roadName: 'Walkway / Access Path'
      });
      nearest.neighbors.push({
        nodeId: target.id,
        distance: distMeters,
        speedKmH,
        roadName: 'Walkway / Access Path'
      });
    }
  }

  private distance(p1: Point2D, p2: Point2D): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
