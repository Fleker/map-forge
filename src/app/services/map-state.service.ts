import { Injectable, computed, signal } from '@angular/core';
import {
  Building,
  CityMap,
  District,
  EditorTool,
  FeatureType,
  IsochroneResult,
  NaturalFeature,
  POI,
  Point2D,
  Road,
  RouteResult,
  TopoFeature,
  TransitLine,
  TransitStation,
  LayerVisibility
} from '../models/map.models';
import { AETHELBURG_PRESET, BLANK_MAP_PRESET, NOVARIA_METROPOLIS_PRESET, OAKHAVEN_PRESET } from './preset-maps';

const STORAGE_KEY = 'mapforge_saved_city_v1';

@Injectable({
  providedIn: 'root'
})
export class MapStateService {
  // Map Data
  readonly currentMap = signal<CityMap>(this.loadInitialMap());

  // Editor State
  readonly activeTool = signal<EditorTool>('select');
  readonly selectedFeature = signal<{ type: FeatureType; id: string } | null>(null);

  // Drawing state in progress
  readonly activeDrawingPoints = signal<Point2D[]>([]);

  // Navigation State
  readonly routeStart = signal<{ point: Point2D; name: string } | null>(null);
  readonly routeEnd = signal<{ point: Point2D; name: string } | null>(null);
  readonly routeResult = signal<RouteResult | null>(null);
  readonly travelMode = signal<'walk' | 'drive' | 'transit'>('walk');

  // Isochrone Reach State
  readonly currentIsochrone = signal<IsochroneResult | null>(null);

  // Modals & Panels
  readonly showPopulationModal = signal<boolean>(false);
  readonly showExportModal = signal<boolean>(false);
  readonly showNavigationPanel = signal<boolean>(false);
  readonly showLoreDrawer = signal<boolean>(false);

  // Layer Visibility
  readonly layerVisibility = signal<LayerVisibility>({
    districts: true,
    districtLabels: true,
    waterParks: true,
    roads: true,
    roadLabels: true,
    buildings: true,
    buildingLabels: true,
    transit: true,
    transitStations: true,
    stationLabels: true,
    pois: true,
    grid: false,
    topography: true,
    isochrone: true
  });

  toggleLayer(key: keyof ReturnType<typeof this.layerVisibility>) {
    this.layerVisibility.update(v => ({
      ...v,
      [key]: !v[key]
    }));
  }

  // Undo / Redo history
  private history: CityMap[] = [];
  private historyIndex = -1;

  // Selected item computed
  readonly selectedItem = computed(() => {
    const sel = this.selectedFeature();
    if (!sel) return null;
    const map = this.currentMap();
    switch (sel.type) {
      case 'building':
        return map.buildings.find(b => b.id === sel.id) || null;
      case 'road':
        return map.roads.find(r => r.id === sel.id) || null;
      case 'district':
        return map.districts.find(d => d.id === sel.id) || null;
      case 'transit_line':
        return map.transitLines.find(t => t.id === sel.id) || null;
      case 'transit_station':
        return map.transitStations.find(s => s.id === sel.id) || null;
      case 'poi':
        return map.pois.find(p => p.id === sel.id) || null;
      case 'water':
      case 'park':
        return map.naturalFeatures.find(f => f.id === sel.id) || null;
      case 'topography':
        return (map.topography || []).find(t => t.id === sel.id) || null;
      default:
        return null;
    }
  });

  constructor() {
    // Initialize history
    this.pushHistory(this.currentMap());
  }

  private loadInitialMap(): CityMap {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.roads && parsed.buildings && parsed.width > 0 && parsed.height > 0) {
          if (!parsed.gridStep) parsed.gridStep = 200;
          if (!parsed.topography) parsed.topography = [];
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not load from localStorage:', e);
    }
    return JSON.parse(JSON.stringify(AETHELBURG_PRESET));
  }

  saveToLocalStorage() {
    try {
      const serialized = JSON.stringify(this.currentMap());
      // Prevent browser QuotaExceededError crashes when dealing with large high-population maps (> 4.5MB)
      if (serialized.length > 4_500_000) {
        console.warn('Map data exceeds 4.5MB localStorage threshold. Skipping local storage update; please use "Export JSON" to persist large metropolises.');
        return;
      }
      localStorage.setItem(STORAGE_KEY, serialized);
    } catch (e) {
      console.warn('Could not save to localStorage (quota or disabled):', e);
    }
  }

  loadPreset(presetKey: 'aethelburg' | 'oakhaven' | 'novaria' | 'blank') {
    let preset: CityMap;
    if (presetKey === 'aethelburg') preset = AETHELBURG_PRESET;
    else if (presetKey === 'oakhaven') preset = OAKHAVEN_PRESET;
    else if (presetKey === 'novaria') preset = NOVARIA_METROPOLIS_PRESET;
    else preset = BLANK_MAP_PRESET;

    const cloned = JSON.parse(JSON.stringify(preset));
    if (!cloned.topography) cloned.topography = [];
    this.currentMap.set(cloned);
    this.selectedFeature.set(null);
    this.routeResult.set(null);
    this.currentIsochrone.set(null);
    this.pushHistory(cloned);
    this.saveToLocalStorage();
  }

  exportToJsonFile() {
    const map = this.currentMap();
    const json = JSON.stringify(map, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeName = (map.name || 'fictional-city').toLowerCase().replace(/[^a-z0-9]/g, '_');
    link.download = `${safeName}.mapforge.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  async importFromJsonFile(file: File): Promise<boolean> {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as CityMap;
      if (!parsed.roads || !parsed.buildings || !parsed.districts) {
        throw new Error('Invalid MapForge city file format.');
      }
      this.currentMap.set(parsed);
      this.selectedFeature.set(null);
      this.routeResult.set(null);
      this.pushHistory(parsed);
      this.saveToLocalStorage();
      return true;
    } catch (e) {
      console.error('Failed to import JSON file:', e);
      return false;
    }
  }

  // Element mutations
  addRoad(road: Road) {
    this.mutateMap(map => {
      map.roads.push(road);
    });
  }

  updateRoad(road: Road) {
    this.mutateMap(map => {
      const idx = map.roads.findIndex(r => r.id === road.id);
      if (idx >= 0) map.roads[idx] = road;
    });
  }

  deleteRoad(roadId: string) {
    this.mutateMap(map => {
      map.roads = map.roads.filter(r => r.id !== roadId);
    });
    if (this.selectedFeature()?.id === roadId) this.selectedFeature.set(null);
  }

  addBuilding(building: Building) {
    this.mutateMap(map => {
      map.buildings.push(building);
    });
  }

  updateBuilding(building: Building) {
    this.mutateMap(map => {
      const idx = map.buildings.findIndex(b => b.id === building.id);
      if (idx >= 0) map.buildings[idx] = building;
    });
  }

  deleteBuilding(buildingId: string) {
    this.mutateMap(map => {
      map.buildings = map.buildings.filter(b => b.id !== buildingId);
    });
    if (this.selectedFeature()?.id === buildingId) this.selectedFeature.set(null);
  }

  addDistrict(district: District) {
    this.mutateMap(map => {
      map.districts.push(district);
    });
  }

  updateDistrict(district: District) {
    this.mutateMap(map => {
      const idx = map.districts.findIndex(d => d.id === district.id);
      if (idx >= 0) map.districts[idx] = district;
    });
  }

  deleteDistrict(districtId: string) {
    this.mutateMap(map => {
      map.districts = map.districts.filter(d => d.id !== districtId);
    });
    if (this.selectedFeature()?.id === districtId) this.selectedFeature.set(null);
  }

  addNaturalFeature(feature: NaturalFeature) {
    this.mutateMap(map => {
      map.naturalFeatures.push(feature);
    });
  }

  updateNaturalFeature(feature: NaturalFeature) {
    this.mutateMap(map => {
      const idx = map.naturalFeatures.findIndex(f => f.id === feature.id);
      if (idx >= 0) map.naturalFeatures[idx] = feature;
    });
  }

  deleteNaturalFeature(featureId: string) {
    this.mutateMap(map => {
      map.naturalFeatures = map.naturalFeatures.filter(f => f.id !== featureId);
    });
    if (this.selectedFeature()?.id === featureId) this.selectedFeature.set(null);
  }

  addTransitLine(line: TransitLine) {
    this.mutateMap(map => {
      map.transitLines.push(line);
    });
  }

  updateTransitLine(line: TransitLine) {
    this.mutateMap(map => {
      const idx = map.transitLines.findIndex(l => l.id === line.id);
      if (idx >= 0) map.transitLines[idx] = line;
    });
  }

  deleteTransitLine(lineId: string) {
    this.mutateMap(map => {
      map.transitLines = map.transitLines.filter(l => l.id !== lineId);
      map.transitStations.forEach(st => {
        if (st.lineIds) {
          st.lineIds = st.lineIds.filter(id => id !== lineId);
        }
      });
    });
    if (this.selectedFeature()?.id === lineId) this.selectedFeature.set(null);
  }

  addTransitStation(station: TransitStation) {
    this.mutateMap(map => {
      map.transitStations.push(station);
    });
  }

  updateTransitStation(station: TransitStation) {
    this.mutateMap(map => {
      const idx = map.transitStations.findIndex(s => s.id === station.id);
      if (idx >= 0) map.transitStations[idx] = station;
    });
  }

  deleteTransitStation(stationId: string) {
    this.mutateMap(map => {
      map.transitStations = map.transitStations.filter(s => s.id !== stationId);
      map.transitLines.forEach(l => {
        if (l.stationIds) {
          l.stationIds = l.stationIds.filter(id => id !== stationId);
        }
      });
    });
    if (this.selectedFeature()?.id === stationId) this.selectedFeature.set(null);
  }

  addPOI(poi: POI) {
    this.mutateMap(map => {
      map.pois.push(poi);
    });
  }

  updatePOI(poi: POI) {
    this.mutateMap(map => {
      const idx = map.pois.findIndex(p => p.id === poi.id);
      if (idx >= 0) map.pois[idx] = poi;
    });
  }

  deletePOI(poiId: string) {
    this.mutateMap(map => {
      map.pois = map.pois.filter(p => p.id !== poiId);
    });
    if (this.selectedFeature()?.id === poiId) this.selectedFeature.set(null);
  }

  addTopoFeature(feature: TopoFeature) {
    this.mutateMap(map => {
      if (!map.topography) map.topography = [];
      map.topography.push(feature);
    });
  }

  updateTopoFeature(feature: TopoFeature) {
    this.mutateMap(map => {
      if (!map.topography) map.topography = [];
      const idx = map.topography.findIndex(t => t.id === feature.id);
      if (idx >= 0) map.topography[idx] = feature;
    });
  }

  deleteTopoFeature(featureId: string) {
    this.mutateMap(map => {
      if (!map.topography) return;
      map.topography = map.topography.filter(t => t.id !== featureId);
    });
    if (this.selectedFeature()?.id === featureId) this.selectedFeature.set(null);
  }

  setIsochrone(iso: IsochroneResult | null) {
    this.currentIsochrone.set(iso);
  }

  clearIsochrone() {
    this.currentIsochrone.set(null);
  }

  updateCityMetadata(name: string, author: string, era: CityMap['era'], description: string) {
    this.mutateMap(map => {
      map.name = name;
      map.author = author;
      map.era = era;
      map.description = description;
    });
  }

  updateCityDimensions(width: number, height: number, unitsPerKm: number, gridStep: number) {
    this.mutateMap(map => {
      map.width = Math.max(500, width);
      map.height = Math.max(500, height);
      map.unitsPerKm = Math.max(50, unitsPerKm);
      map.gridStep = Math.max(50, gridStep);
    });
  }

  setGridStep(step: number) {
    this.mutateMap(map => {
      map.gridStep = Math.max(50, step);
    });
  }

  private mutateMap(fn: (map: CityMap) => void) {
    const cloned: CityMap = JSON.parse(JSON.stringify(this.currentMap()));
    fn(cloned);
    this.currentMap.set(cloned);
    this.pushHistory(cloned);
    this.saveToLocalStorage();
  }

  private pushHistory(map: CityMap) {
    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }
    this.history.push(JSON.parse(JSON.stringify(map)));
    if (this.history.length > 30) this.history.shift();
    this.historyIndex = this.history.length - 1;
  }

  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const prev = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
      this.currentMap.set(prev);
      this.saveToLocalStorage();
    }
  }

  redo() {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      const next = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
      this.currentMap.set(next);
      this.saveToLocalStorage();
    }
  }
}
