export type FeatureType =
  | 'district'
  | 'water'
  | 'park'
  | 'road'
  | 'transit_line'
  | 'transit_station'
  | 'building'
  | 'poi'
  | 'topography';

export type TopoType = 'cliff' | 'ridge' | 'contour';

export interface TopoFeature {
  id: string;
  name?: string;
  type: TopoType;
  path: Point2D[];
  elevation?: number; // In meters/feet (e.g. 50, 100, 250)
  hachureFacing?: 'left' | 'right'; // Which side is downslope for cliffs
  cliffSide?: 'left' | 'right'; // Directional hachure side alias
}

export type RoadType =
  | 'highway'
  | 'avenue'
  | 'main_street'
  | 'local_street'
  | 'alley'
  | 'bridge'
  | 'pedestrian';

export type TransitType = 'metro' | 'tram' | 'bus' | 'ferry' | 'rail';

export type BuildingType =
  | 'residential_house'
  | 'residential_apartment'
  | 'residential_highrise'
  | 'commercial_retail'
  | 'commercial_office'
  | 'industrial'
  | 'institutional' // University, Library, City Hall, Hospital
  | 'mixed_use';

export type POICategory =
  | 'landmark'
  | 'character_home'
  | 'scene_location'
  | 'civic'
  | 'tavern_food'
  | 'shop_market'
  | 'danger_secret'
  | 'transit_hub';

export type NaturalType = 'river' | 'lake' | 'ocean' | 'canal' | 'park' | 'forest' | 'island';

export interface Point2D {
  x: number;
  y: number;
}

export interface District {
  id: string;
  name: string;
  description: string;
  type: 'residential' | 'commercial' | 'industrial' | 'historic' | 'academic' | 'waterfront' | 'civic';
  polygon: Point2D[];
  color: string;
  fillOpacity: number;
  targetDensity?: number; // target people/km²
}

export interface NaturalFeature {
  id: string;
  name: string;
  type: NaturalType;
  polygon: Point2D[];
  color?: string;
}

export interface Road {
  id: string;
  name: string;
  type: RoadType;
  path: Point2D[];
  lanes: number;
  speedLimitKmH: number;
  oneWay?: boolean;
}

export interface TransitStation {
  id: string;
  name: string;
  type: TransitType;
  location: Point2D;
  lineIds: string[];
  isTransferHub?: boolean;
}

export interface TransitLine {
  id: string;
  name: string;
  type: TransitType;
  color: string;
  path: Point2D[];
  stationIds: string[];
  frequencyMins: number;
}

export interface Building {
  id: string;
  name: string;
  type: BuildingType;
  footprint: Point2D[]; // Polygon vertices
  center: Point2D;
  floors: number;
  unitCount?: number; // E.g. apartments or offices
  notes?: string; // Creative writing notes, character homes, secret passages
  chapterReferences?: string[]; // E.g. ["Chapter 1", "Chapter 4: The Heist"]
  customColor?: string;
  isLandmark?: boolean; // Highlighted / named on book map
}

export interface POI {
  id: string;
  name: string;
  category: POICategory;
  location: Point2D;
  icon: string;
  description: string;
  chapterReference?: string;
  characterConnection?: string;
}

export type WorldEra = 'medieval' | 'victorian_steampunk' | 'contemporary_modern' | 'cyberpunk_scifi';

export interface CityMap {
  version: string;
  id: string;
  name: string;
  author: string;
  era: WorldEra;
  description: string;
  width: number;  // Grid units (e.g., 2000)
  height: number; // Grid units (e.g., 2000)
  unitsPerKm: number; // E.g., 500 units = 1 km (1 unit = 2 meters)
  gridStep?: number; // E.g. 100, 200, 400, 500 units per grid square
  districts: District[];
  naturalFeatures: NaturalFeature[];
  roads: Road[];
  transitLines: TransitLine[];
  transitStations: TransitStation[];
  buildings: Building[];
  pois: POI[];
  topography?: TopoFeature[];
}

export type EditorTool =
  | 'select'
  | 'pan'
  | 'draw_road'
  | 'draw_building'
  | 'draw_transit_line'
  | 'draw_station'
  | 'draw_district'
  | 'draw_water'
  | 'draw_park'
  | 'add_poi'
  | 'route'
  | 'isochrone'
  | 'draw_topo';

export interface IsochroneRing {
  minutes: number;
  polygon: Point2D[];
  label: string;
  color: string;
}

export interface IsochroneResult {
  origin: Point2D;
  center: Point2D;
  originName: string;
  mode: 'walk' | 'transit' | 'carriage';
  rings: IsochroneRing[];
}

export type TrimSize =
  | 'custom'
  | '6x9'
  | '5.5x8.5'
  | '5x8'
  | '7x10'
  | '8.5x11'
  | '12x9_spread';

export interface TrimSizeConfig {
  id: TrimSize;
  name: string;
  description: string;
  widthInches: number;
  heightInches: number;
  aspectRatio: number;
  gutterMarginInches: number;
  isSpread?: boolean;
  isTwoPageSpread?: boolean;
}

export const TRIM_SIZES: Record<TrimSize, TrimSizeConfig> = {
  custom: {
    id: 'custom',
    name: 'Map Native Ratio',
    description: 'Fit to full map dimensions without cropping',
    widthInches: 0,
    heightInches: 0,
    aspectRatio: 0,
    gutterMarginInches: 0
  },
  '6x9': {
    id: '6x9',
    name: '6" × 9" Trade Paperback',
    description: 'Standard fiction & fantasy novel format',
    widthInches: 6,
    heightInches: 9,
    aspectRatio: 6 / 9,
    gutterMarginInches: 0.75
  },
  '5.5x8.5': {
    id: '5.5x8.5',
    name: '5.5" × 8.5" Digest Fiction',
    description: 'Popular US digest novel paperback',
    widthInches: 5.5,
    heightInches: 8.5,
    aspectRatio: 5.5 / 8.5,
    gutterMarginInches: 0.65
  },
  '5x8': {
    id: '5x8',
    name: '5" × 8" Pocket Fiction',
    description: 'Compact mass market paperback',
    widthInches: 5,
    heightInches: 8,
    aspectRatio: 5 / 8,
    gutterMarginInches: 0.6
  },
  '7x10': {
    id: '7x10',
    name: '7" × 10" Tabletop RPG',
    description: 'Spacious format for gaming guides & atlases',
    widthInches: 7,
    heightInches: 10,
    aspectRatio: 7 / 10,
    gutterMarginInches: 0.75
  },
  '8.5x11': {
    id: '8.5x11',
    name: '8.5" × 11" Atlas / Folio',
    description: 'Full-size landscape or portrait atlas folio',
    widthInches: 8.5,
    heightInches: 11,
    aspectRatio: 8.5 / 11,
    gutterMarginInches: 0.75
  },
  '12x9_spread': {
    id: '12x9_spread',
    name: '12" × 9" Two-Page Spread',
    description: 'Double-page endpapers with center spine gutter',
    widthInches: 12,
    heightInches: 9,
    aspectRatio: 12 / 9,
    gutterMarginInches: 1.0,
    isSpread: true,
    isTwoPageSpread: true
  }
};

export interface RouteStep {
  instruction: string;
  distanceMeters: number;
  estimatedMinutes: number;
  mode: 'walk' | 'drive' | 'transit';
  lineName?: string;
  path: Point2D[];
}

export interface RouteResult {
  startName: string;
  endName: string;
  totalDistanceMeters: number;
  totalTimeMinutes: number;
  steps: RouteStep[];
  fullPath: Point2D[];
}

export interface PopulationStats {
  totalPopulation: number;
  totalJobs: number;
  residentialBuildingsCount: number;
  commercialBuildingsCount: number;
  industrialBuildingsCount: number;
  institutionalBuildingsCount: number;
  jobsToHousingRatio: number;
  totalAreaKm2: number;
  averageDensityPerKm2: number;
  districtStats: {
    districtId: string;
    districtName: string;
    population: number;
    jobs: number;
    buildingCount: number;
    densityPerKm2: number;
    targetDensity?: number;
    areaKm2?: number;
  }[];
  realismAnalysis: {
    title: string;
    score: 'good' | 'warning' | 'info';
    message: string;
  }[];
}

export type BookTheme = 'parchment' | 'grimoire' | 'modern_atlas' | 'print_bw' | 'print_color' | 'blueprint' | 'cyberpunk';

export interface LayerVisibility {
  districts: boolean;
  districtLabels: boolean;
  waterParks: boolean;
  roads: boolean;
  roadLabels: boolean;
  buildings: boolean;
  buildingLabels: boolean;
  transit: boolean; // Transit lines
  transitStations: boolean; // Transit stations (circles)
  stationLabels: boolean; // Station names
  pois: boolean;
  grid: boolean;
  topography: boolean;
  isochrone: boolean;
}

export interface ExportSettings {
  title: string;
  subtitle: string;
  theme: BookTheme;
  trimSize: TrimSize;
  showGutterGuide: boolean;
  spineSide?: 'left' | 'right';
  resolutionScale: number; // 1 = 72dpi, 2 = 150dpi, 4 = 300dpi (print), 6 = 450dpi
  format: 'png' | 'jpeg' | 'svg';
  jpegQuality: number; // 0.1 to 1.0
  showBorder: boolean;
  showCompassRose: boolean;
  showScaleBar: boolean;
  showGrid: boolean;
  showTitleBox: boolean;
  showLegend: boolean;
  // Feature visibility toggles
  showDistricts: boolean;
  showDistrictLabels: boolean;
  showWater: boolean;
  showParks: boolean;
  showNaturalFeatureLabels: boolean;
  showRoads: boolean;
  showRoadLabels: boolean;
  showMinorRoads: boolean;
  showBuildings: boolean;
  showBuildingLabels: boolean; // At lower res, maybe only show landmarks
  onlyLandmarkBuildingLabels: boolean;
  showTransitLines: boolean;
  showTransitStations: boolean;
  showStationLabels?: boolean;
  showPois: boolean;
  showPoiLabels: boolean;
  showTopography: boolean;
  showIsochrone?: boolean;
}
