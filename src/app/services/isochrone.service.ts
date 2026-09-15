import { Injectable } from '@angular/core';
import { CityMap, IsochroneResult, IsochroneRing, Point2D, Road } from '../models/map.models';

interface GraphNode {
  id: string;
  point: Point2D;
  edges: GraphEdge[];
}

interface GraphEdge {
  target: GraphNode;
  weightMinutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class IsochroneService {

  computeIsochrone(
    cityMap: CityMap,
    origin: Point2D,
    mode: 'walk' | 'transit' | 'carriage' = 'walk',
    cutoffs: number[] = [5, 10, 15, 20]
  ): IsochroneResult {
    const nodes = this.buildGraph(cityMap, mode);
    if (nodes.length === 0) {
      return {
        origin,
        center: origin,
        originName: 'Selected Point',
        mode,
        rings: []
      };
    }

    // Find nearest node to origin
    let startNode = nodes[0];
    let minDist = this.dist(origin, startNode.point);
    for (let i = 1; i < nodes.length; i++) {
      const d = this.dist(origin, nodes[i].point);
      if (d < minDist) {
        minDist = d;
        startNode = nodes[i];
      }
    }

    // Initial walk time from origin to startNode
    const walkSpeedKmh = 4.5;
    const unitsPerMin = (walkSpeedKmh * cityMap.unitsPerKm) / 60;
    const initialDelayMinutes = minDist / Math.max(1, unitsPerMin);

    // Dijkstra
    const times = new Map<GraphNode, number>();
    const unvisited = new Set<GraphNode>();

    nodes.forEach(n => {
      times.set(n, Infinity);
      unvisited.add(n);
    });
    times.set(startNode, initialDelayMinutes);

    while (unvisited.size > 0) {
      let current: GraphNode | null = null;
      let minTime = Infinity;

      for (const n of unvisited) {
        const t = times.get(n)!;
        if (t < minTime) {
          minTime = t;
          current = n;
        }
      }

      if (!current || minTime > Math.max(...cutoffs)) break;
      unvisited.delete(current);

      for (const edge of current.edges) {
        if (!unvisited.has(edge.target)) continue;
        const newTime = minTime + edge.weightMinutes;
        if (newTime < times.get(edge.target)!) {
          times.set(edge.target, newTime);
        }
      }
    }

    // Generate isochrone rings
    const ringColors: Record<number, string> = {
      5: '#10b981',   // Emerald
      10: '#f59e0b',  // Amber
      15: '#3b82f6',  // Sapphire
      20: '#8b5cf6'   // Purple
    };

    // Sort cutoffs descending so larger rings are placed first (outer to inner)
    const sortedCutoffs = [...cutoffs].sort((a, b) => b - a);
    const rings: IsochroneRing[] = [];

    sortedCutoffs.forEach(cutoff => {
      const reachedPoints: Point2D[] = [];

      // Collect nodes reached within cutoff
      nodes.forEach(n => {
        const t = times.get(n)!;
        if (t <= cutoff) {
          reachedPoints.push(n.point);
        }
      });

      // Also interpolate along edges that cross the cutoff boundary
      nodes.forEach(n => {
        const t1 = times.get(n)!;
        if (t1 > cutoff) return;
        n.edges.forEach(edge => {
          const t2 = times.get(edge.target)!;
          if (t2 > cutoff && t2 !== Infinity) {
            const fraction = (cutoff - t1) / (t2 - t1);
            reachedPoints.push({
              x: n.point.x + fraction * (edge.target.point.x - n.point.x),
              y: n.point.y + fraction * (edge.target.point.y - n.point.y)
            });
          }
        });
      });

      // Add direct radial buffer from origin based on off-road travel
      const offRoadSpeed = (mode === 'walk' ? 3.0 : 4.0) * cityMap.unitsPerKm / 60;
      const directDist = cutoff * offRoadSpeed * 0.75;
      const numRadial = 16;
      for (let i = 0; i < numRadial; i++) {
        const angle = (i / numRadial) * Math.PI * 2;
        reachedPoints.push({
          x: origin.x + Math.cos(angle) * directDist,
          y: origin.y + Math.sin(angle) * directDist
        });
      }

      const polygon = this.generateSmoothHull(origin, reachedPoints, 32);
      if (polygon.length >= 3) {
        rings.push({
          minutes: cutoff,
          polygon,
          label: `${cutoff} min`,
          color: ringColors[cutoff] || '#64748b'
        });
      }
    });

    return {
      origin,
      center: origin,
      originName: `Coordinates (${Math.round(origin.x)}, ${Math.round(origin.y)})`,
      mode,
      rings
    };
  }

  private generateSmoothHull(center: Point2D, points: Point2D[], sectors = 32): Point2D[] {
    const maxRadii = new Array<number>(sectors).fill(0);
    const sectorAngle = (Math.PI * 2) / sectors;

    points.forEach(p => {
      const dx = p.x - center.x;
      const dy = p.y - center.y;
      const r = Math.hypot(dx, dy);
      let angle = Math.atan2(dy, dx);
      if (angle < 0) angle += Math.PI * 2;
      const sector = Math.min(sectors - 1, Math.floor(angle / sectorAngle));
      if (r > maxRadii[sector]) {
        maxRadii[sector] = r;
      }
    });

    // Circular smooth filter: [0.25, 0.5, 0.25]
    const smoothedRadii = new Array<number>(sectors);
    for (let i = 0; i < sectors; i++) {
      const prev = maxRadii[(i - 1 + sectors) % sectors];
      const curr = maxRadii[i];
      const next = maxRadii[(i + 1) % sectors];
      smoothedRadii[i] = prev * 0.25 + curr * 0.5 + next * 0.25;
    }

    const hull: Point2D[] = [];
    for (let i = 0; i < sectors; i++) {
      const angle = i * sectorAngle + sectorAngle / 2;
      const r = smoothedRadii[i];
      hull.push({
        x: center.x + Math.cos(angle) * r,
        y: center.y + Math.sin(angle) * r
      });
    }
    return hull;
  }

  private buildGraph(cityMap: CityMap, mode: 'walk' | 'transit' | 'carriage'): GraphNode[] {
    const nodeMap = new Map<string, GraphNode>();

    const getNode = (p: Point2D): GraphNode => {
      const key = `${Math.round(p.x)},${Math.round(p.y)}`;
      let node = nodeMap.get(key);
      if (!node) {
        node = { id: key, point: { x: Math.round(p.x), y: Math.round(p.y) }, edges: [] };
        nodeMap.set(key, node);
      }
      return node;
    };

    cityMap.roads.forEach(road => {
      const speedKmH = this.getSpeedForRoad(road, mode);
      if (speedKmH <= 0) return;

      const unitsPerMin = (speedKmH * cityMap.unitsPerKm) / 60;

      for (let i = 0; i < road.path.length - 1; i++) {
        const p1 = road.path[i];
        const p2 = road.path[i + 1];
        const n1 = getNode(p1);
        const n2 = getNode(p2);

        const d = this.dist(p1, p2);
        const weightMinutes = d / unitsPerMin;

        n1.edges.push({ target: n2, weightMinutes });
        n2.edges.push({ target: n1, weightMinutes });
      }
    });

    // If transit mode, connect transit lines
    if (mode === 'transit' && cityMap.transitLines) {
      const transitSpeedKmH = 35; // 35 km/h metro/tram speed
      const unitsPerMin = (transitSpeedKmH * cityMap.unitsPerKm) / 60;

      cityMap.transitLines.forEach(line => {
        for (let i = 0; i < line.path.length - 1; i++) {
          const p1 = line.path[i];
          const p2 = line.path[i + 1];
          const n1 = getNode(p1);
          const n2 = getNode(p2);

          const d = this.dist(p1, p2);
          const weightMinutes = d / unitsPerMin;

          n1.edges.push({ target: n2, weightMinutes });
          n2.edges.push({ target: n1, weightMinutes });
        }
      });
    }

    return Array.from(nodeMap.values());
  }

  private getSpeedForRoad(road: Road, mode: 'walk' | 'transit' | 'carriage'): number {
    if (mode === 'carriage') {
      switch (road.type) {
        case 'highway': return 45;
        case 'avenue': return 30;
        case 'main_street': return 22;
        case 'local_street': return 16;
        case 'bridge': return 20;
        case 'alley': return 8;
        case 'pedestrian': return 0; // cannot drive
        default: return 18;
      }
    }

    // Walking / Transit walking speed
    switch (road.type) {
      case 'highway': return 5.0;
      case 'avenue': return 5.2;
      case 'main_street': return 5.0;
      case 'local_street': return 4.8;
      case 'pedestrian': return 4.8;
      case 'alley': return 3.8;
      case 'bridge': return 4.5;
      default: return 4.5;
    }
  }

  private dist(a: Point2D, b: Point2D): number {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
}
