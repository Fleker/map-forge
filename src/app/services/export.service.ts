import { Injectable } from '@angular/core';
import {
  BookTheme,
  CityMap,
  ExportSettings,
  IsochroneResult,
  Point2D,
  TopoFeature,
  TransitLine,
  TransitStation,
  TrimSize,
  TrimSizeConfig,
  TRIM_SIZES,
  WorldEra
} from '../models/map.models';

export interface ThemeTypography {
  titleFont: string;
  subtitleFont: string;
  bodyFont: string;
  roadFont: string;
  districtFont: string;
  buildingFont: string;
  stationFont: string;
  poiFont: string;
  monoFont: string;
  featureFont: string;
  topoFont: string;
}

export interface ThemeColors {
  background: string;
  water: string;
  waterBorder: string;
  park: string;
  parkBorder: string;
  districtLabel: string;
  roadAvenue: string;
  roadMain: string;
  roadLocal: string;
  roadBridge: string;
  roadLabel: string;
  buildingFill: string;
  buildingStroke: string;
  landmarkFill: string;
  landmarkStroke: string;
  buildingLabel: string;
  transitStation: string;
  poiFill: string;
  poiStroke: string;
  poiText: string;
  topoContour: string;
  topoRidge: string;
  topoCliff: string;
  gridLine: string;
  gridText: string;
  border: string;
  titleBoxBg: string;
  titleText: string;
  subtitleText: string;
}

export interface SafeExportDimensions {
  width: number;
  height: number;
  scale: number;
  clamped: boolean;
  offsetX: number;
  offsetY: number;
  trimConfig?: TrimSizeConfig;
  gutterMarginPx: number;
  outerMarginPx: number;
  safeX: number;
  safeY: number;
  safeWidth: number;
  safeHeight: number;
  pageScale: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  getThemeColors(theme: BookTheme): ThemeColors {
    switch (theme) {
      case 'parchment':
        return {
          background: '#f4ebd9',
          water: '#c8d6cb',
          waterBorder: '#7d9d88',
          park: '#d8dec5',
          parkBorder: '#8c9c73',
          districtLabel: '#6b4f3b',
          roadAvenue: '#4a3b32',
          roadMain: '#6d5a4d',
          roadLocal: '#9e8c7e',
          roadBridge: '#2e2118',
          roadLabel: '#3a2e26',
          buildingFill: '#ded0ba',
          buildingStroke: '#614d3f',
          landmarkFill: '#d4b28c',
          landmarkStroke: '#4a3525',
          buildingLabel: '#302218',
          transitStation: '#962d2d',
          poiFill: '#b0422c',
          poiStroke: '#40140b',
          poiText: '#2e1c12',
          topoContour: '#8b6f4e',
          topoRidge: '#5c4033',
          topoCliff: '#4a3325',
          gridLine: 'rgba(120, 95, 75, 0.15)',
          gridText: '#856a55',
          border: '#4a3525',
          titleBoxBg: 'rgba(244, 235, 217, 0.92)',
          titleText: '#2c1e14',
          subtitleText: '#684d3b'
        };

      case 'grimoire':
        // Dark aged vellum / grimoire for dark fantasy maps and non-glaring dark mode
        return {
          background: '#221c17',
          water: '#182633',
          waterBorder: '#365369',
          park: '#1b2619',
          parkBorder: '#3d5236',
          districtLabel: '#f3e8d2',
          roadAvenue: '#d97706',
          roadMain: '#baa085',
          roadLocal: '#78624d',
          roadBridge: '#e09848',
          roadLabel: '#f3e8d2',
          buildingFill: '#2e231a',
          buildingStroke: '#5c4938',
          landmarkFill: '#4d3219',
          landmarkStroke: '#d97706',
          buildingLabel: '#f3e8d2',
          transitStation: '#d97706',
          poiFill: '#f59e0b',
          poiStroke: '#451a03',
          poiText: '#fde68a',
          topoContour: '#c8a578',
          topoRidge: '#d97706',
          topoCliff: '#b45309',
          gridLine: 'rgba(200, 165, 120, 0.16)',
          gridText: '#c8a578',
          border: '#6b4f32',
          titleBoxBg: 'rgba(34, 28, 23, 0.95)',
          titleText: '#f3e8d2',
          subtitleText: '#c8a578'
        };

      case 'print_bw':
        // Specifically for black & white paperback book printing
        return {
          background: '#ffffff',
          water: '#eeeeee',
          waterBorder: '#333333',
          park: '#e4e4e4',
          parkBorder: '#555555',
          districtLabel: '#444444',
          roadAvenue: '#111111',
          roadMain: '#333333',
          roadLocal: '#777777',
          roadBridge: '#000000',
          roadLabel: '#111111',
          buildingFill: '#ffffff',
          buildingStroke: '#222222',
          landmarkFill: '#dcdcdc',
          landmarkStroke: '#000000',
          buildingLabel: '#000000',
          transitStation: '#000000',
          poiFill: '#000000',
          poiStroke: '#ffffff',
          poiText: '#000000',
          topoContour: '#666666',
          topoRidge: '#222222',
          topoCliff: '#000000',
          gridLine: 'rgba(0, 0, 0, 0.12)',
          gridText: '#555555',
          border: '#000000',
          titleBoxBg: '#ffffff',
          titleText: '#000000',
          subtitleText: '#333333'
        };

      case 'print_color':
        // Specifically for full-color book and publication printing (crisp CMYK-friendly contrast)
        return {
          background: '#ffffff',
          water: '#cce2f0',
          waterBorder: '#4a90e2',
          park: '#d5e8d4',
          parkBorder: '#82b366',
          districtLabel: '#2b3a4a',
          roadAvenue: '#d9534f',
          roadMain: '#ffffff',
          roadLocal: '#ffffff',
          roadBridge: '#c9302c',
          roadLabel: '#1a252f',
          buildingFill: '#f0f2f5',
          buildingStroke: '#6c757d',
          landmarkFill: '#fcf3cf',
          landmarkStroke: '#b7950b',
          buildingLabel: '#1a252f',
          transitStation: '#c0392b',
          poiFill: '#8e44ad',
          poiStroke: '#ffffff',
          poiText: '#1a252f',
          topoContour: '#784212',
          topoRidge: '#5d4037',
          topoCliff: '#3e2723',
          gridLine: 'rgba(0, 0, 0, 0.08)',
          gridText: '#5d6d7e',
          border: '#1a252f',
          titleBoxBg: 'rgba(255, 255, 255, 0.96)',
          titleText: '#1a252f',
          subtitleText: '#5d6d7e'
        };

      case 'blueprint':
        return {
          background: '#0d2b45',
          water: '#143d59',
          waterBorder: '#4a90e2',
          park: '#16425b',
          parkBorder: '#5bc0be',
          districtLabel: '#7ac5f7',
          roadAvenue: '#ffffff',
          roadMain: '#bcdff5',
          roadLocal: '#6ba4c8',
          roadBridge: '#ffffff',
          roadLabel: '#e3f2fd',
          buildingFill: '#1a4066',
          buildingStroke: '#7dc4f5',
          landmarkFill: '#27588b',
          landmarkStroke: '#ffffff',
          buildingLabel: '#ffffff',
          transitStation: '#ffcc00',
          poiFill: '#ffdd57',
          poiStroke: '#0d2b45',
          poiText: '#ffffff',
          topoContour: '#4a90e2',
          topoRidge: '#7dc4f5',
          topoCliff: '#ffffff',
          gridLine: 'rgba(125, 196, 245, 0.18)',
          gridText: '#7dc4f5',
          border: '#7dc4f5',
          titleBoxBg: 'rgba(13, 43, 69, 0.95)',
          titleText: '#ffffff',
          subtitleText: '#bcdff5'
        };

      case 'cyberpunk':
        return {
          background: '#0a0d14',
          water: '#091e2b',
          waterBorder: '#00f2ff',
          park: '#0c231f',
          parkBorder: '#00ff88',
          districtLabel: '#ff007f',
          roadAvenue: '#ff007f',
          roadMain: '#00f2ff',
          roadLocal: '#394b63',
          roadBridge: '#ffe600',
          roadLabel: '#ffffff',
          buildingFill: '#141a29',
          buildingStroke: '#253553',
          landmarkFill: '#1f2438',
          landmarkStroke: '#00f2ff',
          buildingLabel: '#00f2ff',
          transitStation: '#ffe600',
          poiFill: '#ff007f',
          poiStroke: '#000000',
          poiText: '#ffffff',
          topoContour: '#00f2ff',
          topoRidge: '#ff007f',
          topoCliff: '#ffe600',
          gridLine: 'rgba(0, 242, 255, 0.12)',
          gridText: '#00f2ff',
          border: '#00f2ff',
          titleBoxBg: 'rgba(10, 13, 20, 0.95)',
          titleText: '#00f2ff',
          subtitleText: '#ff007f'
        };

      case 'modern_atlas':
      default:
        return {
          background: '#f8f9fa',
          water: '#b8d5e5',
          waterBorder: '#8bb5cf',
          park: '#cce5c8',
          parkBorder: '#a1cca0',
          districtLabel: '#495057',
          roadAvenue: '#f39c12',
          roadMain: '#ffffff',
          roadLocal: '#ffffff',
          roadBridge: '#d35400',
          roadLabel: '#212529',
          buildingFill: '#e9ecef',
          buildingStroke: '#adb5bd',
          landmarkFill: '#ffeaa7',
          landmarkStroke: '#e17055',
          buildingLabel: '#212529',
          transitStation: '#d63031',
          poiFill: '#e74c3c',
          poiStroke: '#ffffff',
          poiText: '#1e272e',
          topoContour: '#a08468',
          topoRidge: '#7c5a3c',
          topoCliff: '#4a3828',
          gridLine: 'rgba(0, 0, 0, 0.08)',
          gridText: '#6c757d',
          border: '#2d3436',
          titleBoxBg: 'rgba(255, 255, 255, 0.95)',
          titleText: '#2d3436',
          subtitleText: '#636e72'
        };
    }
  }

  getThemeTypography(theme: BookTheme, era?: WorldEra): ThemeTypography {
    switch (theme) {
      case 'parchment':
        return {
          titleFont: '"Cinzel Decorative", "Cinzel", "MedievalSharp", Georgia, serif',
          subtitleFont: '"Playfair Display", Georgia, serif',
          bodyFont: '"Playfair Display", Georgia, serif',
          roadFont: '"Cinzel", Georgia, serif',
          districtFont: '"Cinzel Decorative", "Cinzel", serif',
          buildingFont: '"Playfair Display", Georgia, serif',
          stationFont: '"Cinzel", Georgia, serif',
          poiFont: '"Cinzel", Georgia, serif',
          monoFont: '"JetBrains Mono", "Courier New", monospace',
          featureFont: '"Playfair Display", Georgia, serif',
          topoFont: '"Playfair Display", Georgia, serif'
        };

      case 'grimoire':
        return {
          titleFont: '"Cinzel Decorative", "MedievalSharp", "Cinzel", Georgia, serif',
          subtitleFont: '"Playfair Display", Georgia, serif',
          bodyFont: '"Playfair Display", Georgia, serif',
          roadFont: '"Cinzel", "MedievalSharp", serif',
          districtFont: '"Cinzel Decorative", "Cinzel", serif',
          buildingFont: '"Playfair Display", Georgia, serif',
          stationFont: '"Cinzel", serif',
          poiFont: '"Cinzel", serif',
          monoFont: '"JetBrains Mono", "Courier New", monospace',
          featureFont: '"Playfair Display", Georgia, serif',
          topoFont: '"Playfair Display", Georgia, serif'
        };

      case 'print_bw':
        return {
          titleFont: '"Playfair Display", "Cinzel", Georgia, serif',
          subtitleFont: '"Playfair Display", Georgia, serif',
          bodyFont: '"Inter", -apple-system, sans-serif',
          roadFont: '"Playfair Display", Georgia, serif',
          districtFont: '"Playfair Display", "Cinzel", Georgia, serif',
          buildingFont: '"Inter", sans-serif',
          stationFont: '"Inter", sans-serif',
          poiFont: '"Inter", sans-serif',
          monoFont: '"JetBrains Mono", "Courier New", monospace',
          featureFont: '"Playfair Display", Georgia, serif',
          topoFont: '"Playfair Display", Georgia, serif'
        };

      case 'print_color':
        return {
          titleFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          subtitleFont: '"Inter", -apple-system, sans-serif',
          bodyFont: '"Inter", -apple-system, sans-serif',
          roadFont: '"Inter", -apple-system, sans-serif',
          districtFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          buildingFont: '"Inter", sans-serif',
          stationFont: '"Inter", sans-serif',
          poiFont: '"Inter", sans-serif',
          monoFont: '"SF Mono", "Roboto Mono", "Courier New", monospace',
          featureFont: '"Playfair Display", Georgia, serif',
          topoFont: '"Inter", sans-serif'
        };

      case 'blueprint':
        return {
          titleFont: '"Orbitron", "Share Tech Mono", monospace',
          subtitleFont: '"Share Tech Mono", monospace',
          bodyFont: '"Share Tech Mono", monospace',
          roadFont: '"Share Tech Mono", monospace',
          districtFont: '"Orbitron", "Share Tech Mono", monospace',
          buildingFont: '"Share Tech Mono", monospace',
          stationFont: '"Share Tech Mono", monospace',
          poiFont: '"Share Tech Mono", monospace',
          monoFont: '"Share Tech Mono", monospace',
          featureFont: '"Share Tech Mono", monospace',
          topoFont: '"Share Tech Mono", monospace'
        };

      case 'cyberpunk':
        return {
          titleFont: '"Orbitron", "Share Tech Mono", monospace',
          subtitleFont: '"Share Tech Mono", "Orbitron", monospace',
          bodyFont: '"Share Tech Mono", "Inter", monospace',
          roadFont: '"Share Tech Mono", monospace',
          districtFont: '"Orbitron", "Share Tech Mono", monospace',
          buildingFont: '"Share Tech Mono", monospace',
          stationFont: '"Share Tech Mono", monospace',
          poiFont: '"Share Tech Mono", monospace',
          monoFont: '"Share Tech Mono", monospace',
          featureFont: '"Orbitron", "Share Tech Mono", monospace',
          topoFont: '"Share Tech Mono", monospace'
        };

      case 'modern_atlas':
      default:
        return {
          titleFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          subtitleFont: '"Inter", -apple-system, sans-serif',
          bodyFont: '"Inter", -apple-system, sans-serif',
          roadFont: '"Inter", -apple-system, sans-serif',
          districtFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          buildingFont: '"Inter", sans-serif',
          stationFont: '"Inter", sans-serif',
          poiFont: '"Inter", sans-serif',
          monoFont: '"SF Mono", "Roboto Mono", "Courier New", monospace',
          featureFont: '"Playfair Display", Georgia, serif',
          topoFont: '"Inter", sans-serif'
        };
    }
  }

  getSafeDimensions(
    cityMap: CityMap,
    requestedScale: number,
    trimSize: TrimSize = 'custom',
    spineSide: 'left' | 'right' = 'left'
  ): SafeExportDimensions {
    const MAX_CANVAS_DIM = 16384;
    const MAX_CANVAS_AREA = 16384 * 8192; // 134,217,728 pixels safe browser limit
    let scale = requestedScale;
    let clamped = false;
    let offsetX = 0;
    let offsetY = 0;
    let width: number;
    let height: number;
    let gutterMarginPx = 0;
    let outerMarginPx = 0;
    let safeX = 0;
    let safeY = 0;
    let safeWidth = 0;
    let safeHeight = 0;

    const trimConfig = TRIM_SIZES[trimSize];

    if (trimSize !== 'custom' && trimConfig && trimConfig.widthInches > 0) {
      const dpi = scale >= 5 ? 450 : (scale >= 3 ? 300 : (scale >= 1.8 ? 150 : 72));
      width = Math.round(trimConfig.widthInches * dpi);
      height = Math.round(trimConfig.heightInches * dpi);

      const pxPerInch = dpi;
      gutterMarginPx = Math.round(trimConfig.gutterMarginInches * pxPerInch);
      outerMarginPx = Math.round(0.375 * pxPerInch); // 3/8" standard outer safety margin

      if (trimConfig.isTwoPageSpread) {
        // 2-page spread: outer margins around perimeter, spine gutter in exact center
        safeX = outerMarginPx;
        safeY = outerMarginPx;
        safeWidth = width - 2 * outerMarginPx;
        safeHeight = height - 2 * outerMarginPx;
      } else {
        // Single page: spine gutter on chosen binding edge (default left for recto / right-hand page)
        if (spineSide === 'right') {
          safeX = outerMarginPx;
          safeY = outerMarginPx;
          safeWidth = width - gutterMarginPx - outerMarginPx;
          safeHeight = height - 2 * outerMarginPx;
        } else {
          safeX = gutterMarginPx;
          safeY = outerMarginPx;
          safeWidth = width - gutterMarginPx - outerMarginPx;
          safeHeight = height - 2 * outerMarginPx;
        }
      }

      // Fit map cleanly inside safe printable area with 4% breathing room
      const fitScale = Math.min((safeWidth * 0.94) / cityMap.width, (safeHeight * 0.94) / cityMap.height);
      scale = fitScale;
      offsetX = safeX + Math.round((safeWidth - cityMap.width * scale) / 2);
      offsetY = safeY + Math.round((safeHeight - cityMap.height * scale) / 2);
    } else {
      width = Math.round(cityMap.width * scale);
      height = Math.round(cityMap.height * scale);
      safeX = 0;
      safeY = 0;
      safeWidth = width;
      safeHeight = height;
      offsetX = 0;
      offsetY = 0;
    }

    if (width > MAX_CANVAS_DIM || height > MAX_CANVAS_DIM || (width * height) > MAX_CANVAS_AREA) {
      clamped = true;
      const clampFactor = Math.min(
        MAX_CANVAS_DIM / Math.max(width, height),
        Math.sqrt(MAX_CANVAS_AREA / (width * height))
      );
      scale = Number((scale * clampFactor).toFixed(4));
      width = Math.round(width * clampFactor);
      height = Math.round(height * clampFactor);
      offsetX = Math.round(offsetX * clampFactor);
      offsetY = Math.round(offsetY * clampFactor);
      safeX = Math.round(safeX * clampFactor);
      safeY = Math.round(safeY * clampFactor);
      safeWidth = Math.round(safeWidth * clampFactor);
      safeHeight = Math.round(safeHeight * clampFactor);
      gutterMarginPx = Math.round(gutterMarginPx * clampFactor);
      outerMarginPx = Math.round(outerMarginPx * clampFactor);
    }

    const pageScale = Math.max(0.35, width / 1800);

    return {
      width,
      height,
      scale,
      clamped,
      offsetX,
      offsetY,
      trimConfig,
      gutterMarginPx,
      outerMarginPx,
      safeX,
      safeY,
      safeWidth,
      safeHeight,
      pageScale
    };
  }

  renderToCanvas(
    cityMap: CityMap,
    settings: ExportSettings,
    targetCanvas?: HTMLCanvasElement,
    customScale?: number,
    isochrone?: IsochroneResult | null
  ): HTMLCanvasElement {
    const safe = this.getSafeDimensions(cityMap, customScale ?? settings.resolutionScale, settings.trimSize, settings.spineSide);
    const scale = safe.scale;
    const width = safe.width;
    const height = safe.height;
    const offsetX = safe.offsetX;
    const offsetY = safe.offsetY;
    const pageScale = safe.pageScale;

    const canvas = targetCanvas || document.createElement('canvas');
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;

    const ctx = canvas.getContext('2d')!;
    const colors = this.getThemeColors(settings.theme);
    const typo = this.getThemeTypography(settings.theme, cityMap.era);

    const mapH = cityMap.height;
    const toCanvasX = (x: number) => offsetX + x * scale;
    const toCanvasY = (y: number) => offsetY + (mapH - y) * scale;

    // ==========================================
    // 1. BASE GEOMETRY PASS (Bottom to Top)
    // ==========================================

    // 1. Background
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, width, height);

    // 2. Grid Overlay (if enabled)
    if (settings.showGrid) {
      this.drawGrid(ctx, cityMap, safe, colors, typo);
    }

    // 3. Water & Natural Features (Polygons only)
    if (settings.showWater || settings.showParks) {
      cityMap.naturalFeatures.forEach(feat => {
        if ((feat.type === 'park' || feat.type === 'forest') && !settings.showParks) return;
        if ((feat.type === 'river' || feat.type === 'lake' || feat.type === 'ocean' || feat.type === 'canal') && !settings.showWater) return;
        if (feat.polygon.length < 3) return;

        const isPark = feat.type === 'park' || feat.type === 'forest';
        const fill = isPark ? colors.park : colors.water;
        const stroke = isPark ? colors.parkBorder : colors.waterBorder;

        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = Math.max(0.75, 1.5 * scale);

        ctx.beginPath();
        feat.polygon.forEach((pt, idx) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (idx === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    }

    // 4. Districts (Polygons & Boundaries only)
    if (settings.showDistricts) {
      const isBw = settings.theme === 'print_bw';
      cityMap.districts.forEach(d => {
        if (d.polygon.length < 3) return;
        ctx.fillStyle = isBw ? '#888888' : (d.color || '#cccccc');
        ctx.globalAlpha = d.fillOpacity || 0.12;

        ctx.beginPath();
        d.polygon.forEach((pt, idx) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (idx === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // District boundary line
        ctx.strokeStyle = isBw ? '#666666' : (d.color || '#aaaaaa');
        ctx.lineWidth = Math.max(0.5, 1 * scale);
        ctx.setLineDash([4 * scale, 4 * scale]);
        ctx.stroke();
        ctx.setLineDash([]);
      });
    }

    // 5. Topography (Cliffs, Ridges, Contours)
    if (settings.showTopography !== false && cityMap.topography && cityMap.topography.length > 0) {
      this.drawTopography(ctx, cityMap, scale, colors, toCanvasX, toCanvasY);
    }

    // 6. Roads (Casing & Inner Fills)
    if (settings.showRoads) {
      // First pass: road casing / outlines
      cityMap.roads.forEach(road => {
        if (!settings.showMinorRoads && (road.type === 'local_street' || road.type === 'alley' || road.type === 'pedestrian')) {
          return;
        }
        if (road.path.length < 2) return;

        const widthMultiplier = this.getRoadWidthMultiplier(road.type);
        const roadWidth = widthMultiplier * scale;

        ctx.strokeStyle = colors.border;
        ctx.lineWidth = roadWidth + Math.max(1, 2 * scale);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        road.path.forEach((pt, idx) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (idx === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.stroke();
      });

      // Second pass: road inner fill
      cityMap.roads.forEach(road => {
        if (!settings.showMinorRoads && (road.type === 'local_street' || road.type === 'alley' || road.type === 'pedestrian')) {
          return;
        }
        if (road.path.length < 2) return;

        const widthMultiplier = this.getRoadWidthMultiplier(road.type);
        const roadWidth = widthMultiplier * scale;

        ctx.strokeStyle = this.getRoadColor(road.type, colors);
        ctx.lineWidth = Math.max(0.5, roadWidth);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        road.path.forEach((pt, idx) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (idx === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.stroke();
      });
    }

    // 7. Buildings (3D Shadows & Footprints) - Batched rendering for massive performance on large cities
    if (settings.showBuildings && cityMap.buildings.length > 0) {
      const regularBlds: typeof cityMap.buildings = [];
      const landmarkBlds: typeof cityMap.buildings = [];

      for (let i = 0; i < cityMap.buildings.length; i++) {
        const b = cityMap.buildings[i];
        if (b.footprint.length >= 3) {
          if (b.isLandmark || b.type === 'institutional') {
            landmarkBlds.push(b);
          } else {
            regularBlds.push(b);
          }
        }
      }

      // Batch draw regular building shadows
      if (regularBlds.length > 0) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.beginPath();
        let hasShadows = false;
        for (let i = 0; i < regularBlds.length; i++) {
          const bld = regularBlds[i];
          const shadowOffset = Math.min(6, Math.max(1, (bld.floors || 1) * 0.8)) * scale;
          if (shadowOffset >= 0.6) {
            hasShadows = true;
            for (let j = 0; j < bld.footprint.length; j++) {
              const pt = bld.footprint[j];
              const cx = toCanvasX(pt.x) + shadowOffset;
              const cy = toCanvasY(pt.y) + shadowOffset;
              if (j === 0) ctx.moveTo(cx, cy);
              else ctx.lineTo(cx, cy);
            }
            ctx.closePath();
          }
        }
        if (hasShadows) {
          ctx.fill();
        }

        // Batch draw regular building footprints & strokes
        ctx.fillStyle = colors.buildingFill;
        ctx.strokeStyle = colors.buildingStroke;
        ctx.lineWidth = Math.max(0.5, 1 * scale);
        ctx.beginPath();
        for (let i = 0; i < regularBlds.length; i++) {
          const bld = regularBlds[i];
          for (let j = 0; j < bld.footprint.length; j++) {
            const pt = bld.footprint[j];
            const cx = toCanvasX(pt.x);
            const cy = toCanvasY(pt.y);
            if (j === 0) ctx.moveTo(cx, cy);
            else ctx.lineTo(cx, cy);
          }
          ctx.closePath();
        }
        ctx.fill();
        ctx.stroke();
      }

      // Draw Landmark Buildings with prominent highlights
      landmarkBlds.forEach(bld => {
        const shadowOffset = Math.min(6, Math.max(1, (bld.floors || 1) * 0.8)) * scale;
        if (shadowOffset >= 0.6) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
          ctx.beginPath();
          bld.footprint.forEach((pt, idx) => {
            const cx = toCanvasX(pt.x) + shadowOffset;
            const cy = toCanvasY(pt.y) + shadowOffset;
            if (idx === 0) ctx.moveTo(cx, cy);
            else ctx.lineTo(cx, cy);
          });
          ctx.closePath();
          ctx.fill();
        }

        ctx.fillStyle = colors.landmarkFill;
        ctx.strokeStyle = colors.landmarkStroke;
        ctx.lineWidth = Math.max(0.5, 2 * scale);
        ctx.beginPath();
        bld.footprint.forEach((pt, idx) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (idx === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    }

    // 8. Public Transit Lines & Station Symbols
    if (settings.showTransitLines) {
      const isBw = settings.theme === 'print_bw';
      cityMap.transitLines.forEach((line, lineIdx) => {
        if (line.path.length < 2) return;

        if (isBw) {
          ctx.strokeStyle = this.getBwTransitLineColor(lineIdx);
          ctx.lineWidth = Math.max(1.2, 3 * scale);
          ctx.setLineDash(this.getBwTransitDashPattern(lineIdx, scale));
        } else {
          ctx.strokeStyle = line.color || '#e74c3c';
          ctx.lineWidth = Math.max(1, 3 * scale);
          ctx.setLineDash([6 * scale, 3 * scale]);
        }

        ctx.beginPath();
        line.path.forEach((pt, idx) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (idx === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.stroke();
        ctx.setLineDash([]);
      });
    }

    if (settings.showTransitStations) {
      const isBw = settings.theme === 'print_bw';
      cityMap.transitStations.forEach(st => {
        const associatedLines = this.getStationLines(st, cityMap);
        const isMultiLine = associatedLines.length > 1;
        const isHub = !!st.isTransferHub || isMultiLine;

        const radius = Math.max(3, (isHub ? 7 : 5) * scale);
        const stationColor = isBw
          ? '#000000'
          : (isHub ? '#f59e0b' : (associatedLines[0]?.color || colors.transitStation));

        const cx = toCanvasX(st.location.x);
        const cy = toCanvasY(st.location.y);

        // Distinctive cartographic dual-ring symbol
        // Outer ring
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = stationColor;
        ctx.lineWidth = Math.max(1.2, (isHub ? 2.5 : 1.5) * scale);

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if (!isBw && isMultiLine && associatedLines.length >= 2) {
          // Draw multi-color segmented ring/arcs for interchange stations
          const sliceAngle = (Math.PI * 2) / associatedLines.length;
          associatedLines.forEach((line, i) => {
            ctx.beginPath();
            ctx.strokeStyle = line.color || colors.transitStation;
            ctx.lineWidth = Math.max(1.5, 2.5 * scale);
            ctx.arc(cx, cy, radius, i * sliceAngle, (i + 1) * sliceAngle);
            ctx.stroke();
          });
        } else if (isBw && isHub) {
          // In B&W, draw a concentric inner ring for interchange/hub stations
          ctx.beginPath();
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = Math.max(1, 1.5 * scale);
          ctx.arc(cx, cy, radius * 0.72, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Inner core
        ctx.fillStyle = stationColor;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    // 9. Points of Interest (POIs) Markers
    if (settings.showPois) {
      cityMap.pois.forEach(poi => {
        const radius = Math.max(2.5, 6 * scale);
        const cx = toCanvasX(poi.location.x);
        const cy = toCanvasY(poi.location.y);

        ctx.fillStyle = colors.poiFill;
        ctx.strokeStyle = colors.poiStroke;
        ctx.lineWidth = Math.max(0.5, 2 * scale);

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Inner marker dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // 10. Isochrone Travel Reach Rings (Geometry)
    if (settings.showIsochrone !== false && isochrone && isochrone.rings && isochrone.rings.length > 0) {
      this.drawIsochroneGeometry(ctx, isochrone, scale, toCanvasX, toCanvasY);
    }

    // ==========================================
    // 2. HIGHEST LAYER: LABELS & TEXT PASS
    // ==========================================

    // A. District Names
    if (settings.showDistricts && settings.showDistrictLabels) {
      cityMap.districts.forEach(d => {
        if (d.polygon.length < 3 || !d.name) return;
        const center = this.polygonCentroid(d.polygon);
        const cx = toCanvasX(center.x);
        const cy = toCanvasY(center.y);

        const lines = this.splitIntoBalancedLines(d.name.toUpperCase());
        let districtFontSize = Math.max(12, 19 * scale);
        if (districtFontSize < 6) return;

        ctx.save();
        ctx.globalAlpha = 0.72;
        ctx.font = `bold ${districtFontSize}px ${typo.districtFont}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Calculate polygon width in canvas space
        let minX = Infinity, maxX = -Infinity;
        d.polygon.forEach(p => {
          const px = toCanvasX(p.x);
          minX = Math.min(minX, px);
          maxX = Math.max(maxX, px);
        });
        const polyWidth = maxX - minX;

        // Check if text exceeds polygon width and adaptively shrink if necessary
        const maxLineWidth = Math.max(...lines.map(l => ctx.measureText(l).width));
        if (polyWidth > 40 * scale && maxLineWidth > polyWidth * 0.85) {
          const fitScale = (polyWidth * 0.85) / maxLineWidth;
          districtFontSize = Math.max(8.5, Math.round(districtFontSize * fitScale * 10) / 10);
          ctx.font = `bold ${districtFontSize}px ${typo.districtFont}`;
        }

        const lineHeight = districtFontSize * 1.25;
        const totalHeight = (lines.length - 1) * lineHeight;
        const startY = cy - totalHeight / 2;

        ctx.strokeStyle = colors.background;
        ctx.lineWidth = Math.max(2, 4 * scale);
        ctx.lineJoin = 'round';
        ctx.fillStyle = colors.districtLabel;

        lines.forEach((line, idx) => {
          const lineY = startY + idx * lineHeight;
          ctx.strokeText(line, cx, lineY);
          ctx.fillText(line, cx, lineY);
        });

        ctx.restore();
      });
    }

    // B. Natural Feature Names (Parks, Rivers, Lakes, Canals)
    // Rendered on top of all buildings, roads, and parkland so names are never obscured!
    if (settings.showNaturalFeatureLabels !== false && (settings.showWater || settings.showParks)) {
      cityMap.naturalFeatures.forEach(feat => {
        if ((feat.type === 'park' || feat.type === 'forest') && !settings.showParks) return;
        if ((feat.type === 'river' || feat.type === 'lake' || feat.type === 'ocean' || feat.type === 'canal') && !settings.showWater) return;
        if (feat.polygon.length < 3 || !feat.name) return;

        const isPark = feat.type === 'park' || feat.type === 'forest';
        const center = this.polygonCentroid(feat.polygon);
        const cx = toCanvasX(center.x);
        const cy = toCanvasY(center.y);

        const lines = this.splitIntoBalancedLines(feat.name);
        let featFontSize = Math.max(8, 10.5 * scale);
        if (featFontSize < 6) return;

        ctx.save();
        ctx.font = `italic ${featFontSize}px ${typo.featureFont}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Calculate polygon width in canvas space
        let minX = Infinity, maxX = -Infinity;
        feat.polygon.forEach(p => {
          const px = toCanvasX(p.x);
          minX = Math.min(minX, px);
          maxX = Math.max(maxX, px);
        });
        const polyWidth = maxX - minX;

        // Check if text exceeds polygon width and adaptively shrink if necessary
        const maxLineWidth = Math.max(...lines.map(l => ctx.measureText(l).width));
        if (polyWidth > 30 * scale && maxLineWidth > polyWidth * 0.85) {
          const fitScale = (polyWidth * 0.85) / maxLineWidth;
          featFontSize = Math.max(7, Math.round(featFontSize * fitScale * 10) / 10);
          ctx.font = `italic ${featFontSize}px ${typo.featureFont}`;
        }

        const lineHeight = featFontSize * 1.25;
        const totalHeight = (lines.length - 1) * lineHeight;
        const startY = cy - totalHeight / 2;

        // Crisp protective halo ensures legibility even when drawn over buildings or roads
        ctx.strokeStyle = colors.background;
        ctx.lineWidth = Math.max(1.5, 3 * scale);
        ctx.lineJoin = 'round';
        ctx.fillStyle = isPark ? colors.parkBorder : colors.waterBorder;

        lines.forEach((line, idx) => {
          const lineY = startY + idx * lineHeight;
          ctx.strokeText(line, cx, lineY);
          ctx.fillText(line, cx, lineY);
        });

        ctx.restore();
      });
    }

    // C. Topography Labels (Contour elevations & Cliff/Ridge names)
    if (settings.showTopography !== false && cityMap.topography && cityMap.topography.length > 0) {
      this.drawTopographyLabels(ctx, cityMap, scale, colors, typo, toCanvasX, toCanvasY);
    }

    // D. Road Name Labels
    if (settings.showRoads && settings.showRoadLabels) {
      const roadFontSize = Math.max(8, 10 * scale);
      if (roadFontSize >= 6) {
        cityMap.roads.forEach(road => {
          if (road.type === 'avenue' || road.type === 'main_street' || road.type === 'bridge') {
            this.drawRoadLabel(ctx, road, scale, colors, typo, toCanvasX, toCanvasY);
          }
        });
      }
    }

    // E. Building Labels
    if (settings.showBuildings && settings.showBuildingLabels) {
      cityMap.buildings.forEach(bld => {
        if (bld.footprint.length < 3 || !bld.name) return;
        const isLandmark = bld.isLandmark || bld.type === 'institutional';
        if (settings.onlyLandmarkBuildingLabels && !isLandmark) return;

        const bldFontSize = Math.max(8, (isLandmark ? 11 : 9) * scale);
        if (bldFontSize < 6) return;

        ctx.save();
        ctx.fillStyle = colors.buildingLabel;
        ctx.font = `${isLandmark ? 'bold' : 'normal'} ${bldFontSize}px ${typo.buildingFont}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Text halo for readability
        ctx.strokeStyle = colors.background;
        ctx.lineWidth = Math.max(1.5, 3 * scale);
        ctx.lineJoin = 'round';
        const bx = toCanvasX(bld.center.x);
        const by = toCanvasY(bld.center.y) - 12 * scale;
        ctx.strokeText(bld.name, bx, by);
        ctx.fillText(bld.name, bx, by);
        ctx.restore();
      });
    }

    // F. Transit Station Labels
    if (settings.showTransitStations && settings.showStationLabels !== false) {
      const isBw = settings.theme === 'print_bw';
      const stationFontSize = Math.max(8, 10 * scale);
      if (stationFontSize >= 6) {
        cityMap.transitStations.forEach(st => {
          const associatedLines = this.getStationLines(st, cityMap);
          const isHub = !!st.isTransferHub || associatedLines.length > 1;
          const radius = Math.max(3, (isHub ? 7 : 5) * scale);
          const stationColor = isBw
            ? '#000000'
            : (isHub ? '#f59e0b' : (associatedLines[0]?.color || colors.transitStation));

          const cx = toCanvasX(st.location.x);
          const cy = toCanvasY(st.location.y);

          ctx.save();
          ctx.font = `bold ${stationFontSize}px ${typo.stationFont}`;
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';

          const textX = cx + radius + Math.max(4, 5 * scale);
          const textY = cy;

          // Text halo for readability
          ctx.strokeStyle = colors.background;
          ctx.lineWidth = Math.max(1.5, 3 * scale);
          ctx.lineJoin = 'round';
          ctx.strokeText(st.name, textX, textY);

          ctx.fillStyle = isBw ? '#000000' : (isHub ? colors.titleText : stationColor);
          ctx.fillText(st.name, textX, textY);
          ctx.restore();
        });
      }
    }

    // G. Points of Interest (POIs) Labels
    if (settings.showPois && settings.showPoiLabels) {
      const poiFontSize = Math.max(8, 11 * scale);
      if (poiFontSize >= 6) {
        cityMap.pois.forEach(poi => {
          const cx = toCanvasX(poi.location.x);
          const cy = toCanvasY(poi.location.y);

          ctx.save();
          ctx.font = `600 ${poiFontSize}px ${typo.poiFont}`;
          ctx.textAlign = 'left';

          ctx.strokeStyle = colors.background;
          ctx.lineWidth = Math.max(1.5, 3 * scale);
          ctx.lineJoin = 'round';
          ctx.strokeText(poi.name, cx + 9 * scale, cy + 4 * scale);

          ctx.fillStyle = colors.poiText;
          ctx.fillText(poi.name, cx + 9 * scale, cy + 4 * scale);
          ctx.restore();
        });
      }
    }

    // H. Isochrone Minute Labels
    if (settings.showIsochrone !== false && isochrone && isochrone.rings && isochrone.rings.length > 0) {
      this.drawIsochroneLabels(ctx, isochrone, scale, typo, toCanvasX, toCanvasY);
    }

    // ==========================================
    // 3. MAP ORNAMENTS & GUIDES (Topmost UI Frame)
    // ==========================================
    if (settings.showTitleBox) {
      this.drawTitleBox(ctx, cityMap, settings, safe, colors, typo);
    }

    if (settings.showCompassRose) {
      const radius = Math.min(safe.safeHeight * 0.12, 45 * pageScale);
      const cx = safe.safeX + safe.safeWidth - radius - 16 * pageScale;
      const cy = safe.safeY + radius + 16 * pageScale;
      this.drawCompassRose(ctx, cx, cy, radius, colors, typo);
    }

    if (settings.showScaleBar) {
      this.drawScaleBar(ctx, cityMap, safe, colors, typo);
    }

    if (settings.showBorder) {
      this.drawDecorativeBorder(ctx, safe, colors);
    }

    // 10. Book Spine Gutter Safety Margin Guide
    if (settings.showGutterGuide && safe.trimConfig) {
      this.drawGutterGuide(ctx, safe, settings.spineSide, typo);
    }

    return canvas;
  }

  private drawGrid(
    ctx: CanvasRenderingContext2D,
    cityMap: CityMap,
    safe: SafeExportDimensions,
    colors: ThemeColors,
    typo: ThemeTypography
  ) {
    const { offsetX, offsetY, scale, pageScale } = safe;
    const mapCanvasW = cityMap.width * scale;
    const mapCanvasH = cityMap.height * scale;
    const gridStep = cityMap.gridStep || 200;
    const step = gridStep * scale;

    const colCount = Math.ceil(cityMap.width / gridStep);
    const rowCount = Math.ceil(cityMap.height / gridStep);

    // Generate alphabetical column labels: A, B, C... Z, AA, AB...
    const cols: string[] = [];
    for (let i = 0; i < colCount; i++) {
      let colName = '';
      let num = i;
      while (num >= 0) {
        colName = String.fromCharCode((num % 26) + 65) + colName;
        num = Math.floor(num / 26) - 1;
      }
      cols.push(colName);
    }

    ctx.save();

    // 1. Grid Lines (dashed, subtle, aligned precisely to map coordinates)
    ctx.strokeStyle = colors.gridLine;
    ctx.lineWidth = Math.max(0.75, 1 * pageScale);
    ctx.setLineDash([4 * pageScale, 4 * pageScale]);

    // Vertical grid lines
    for (let i = 0; i <= colCount; i++) {
      const x = Math.min(offsetX + i * step, offsetX + mapCanvasW);
      ctx.beginPath();
      ctx.moveTo(x, offsetY);
      ctx.lineTo(x, offsetY + mapCanvasH);
      ctx.stroke();
    }

    // Horizontal grid lines
    for (let j = 0; j <= rowCount; j++) {
      const y = Math.min(offsetY + j * step, offsetY + mapCanvasH);
      ctx.beginPath();
      ctx.moveTo(offsetX, y);
      ctx.lineTo(offsetX + mapCanvasW, y);
      ctx.stroke();
    }

    // 2. Solid Neatline around the map content
    ctx.setLineDash([]);
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = Math.max(1, 1.5 * pageScale);
    ctx.strokeRect(offsetX, offsetY, mapCanvasW, mapCanvasH);

    // 3. Coordinate Labels
    const fontSize = Math.max(8.5, Math.round(11 * pageScale));
    ctx.font = `bold ${fontSize}px ${typo.monoFont}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Column Labels along top of each column cell
    for (let i = 0; i < colCount; i++) {
      const cellW = Math.min(step, mapCanvasW - i * step);
      if (cellW <= 12) continue;
      const cellCenterX = offsetX + i * step + cellW / 2;
      const labelY = offsetY + Math.max(10, 14 * pageScale);

      // Label background halo for readability
      ctx.strokeStyle = colors.background;
      ctx.lineWidth = Math.max(2.5, 3.5 * pageScale);
      ctx.strokeText(cols[i], cellCenterX, labelY);

      ctx.fillStyle = colors.gridText;
      ctx.fillText(cols[i], cellCenterX, labelY);
    }

    // Row Labels along left of each row cell
    for (let j = 0; j < rowCount; j++) {
      const cellH = Math.min(step, mapCanvasH - j * step);
      if (cellH <= 12) continue;
      const cellCenterY = offsetY + j * step + cellH / 2;
      const labelX = offsetX + Math.max(10, 14 * pageScale);

      // Label background halo for readability
      ctx.strokeStyle = colors.background;
      ctx.lineWidth = Math.max(2.5, 3.5 * pageScale);
      ctx.strokeText((j + 1).toString(), labelX, cellCenterY);

      ctx.fillStyle = colors.gridText;
      ctx.fillText((j + 1).toString(), labelX, cellCenterY);
    }

    ctx.restore();
  }

  private drawTitleBox(
    ctx: CanvasRenderingContext2D,
    cityMap: CityMap,
    settings: ExportSettings,
    safe: SafeExportDimensions,
    colors: ThemeColors,
    typo: ThemeTypography
  ) {
    const pageScale = safe.pageScale;
    const titleText = (settings.title || cityMap.name).toUpperCase();
    const subtitleText = settings.subtitle || cityMap.description || `Mapped by ${cityMap.author || 'Author'}`;
    const creditText = `Scale: 1:${Math.round(cityMap.unitsPerKm * 2)}`;

    // Available width for the title box within the safe page area
    // Max width: 62% of safeWidth, but at least 240px at 1x
    const maxBoxWidth = Math.min(safe.safeWidth * 0.62, Math.max(240 * pageScale, safe.safeWidth - 32 * pageScale));
    const hPadding = 18 * pageScale;
    const vPadding = 12 * pageScale;
    const lineSpacing = 6 * pageScale;

    // Start with proportional font sizes
    let titleSize = Math.max(11, Math.round(22 * pageScale));
    let subtitleSize = Math.max(9, Math.round(13 * pageScale));
    let creditSize = Math.max(7.5, Math.round(10 * pageScale));

    // Measure text widths
    ctx.font = `bold ${titleSize}px ${typo.titleFont}`;
    let titleW = ctx.measureText(titleText).width;

    ctx.font = `italic ${subtitleSize}px ${typo.subtitleFont}`;
    let subtitleW = ctx.measureText(subtitleText).width;

    ctx.font = `${creditSize}px ${typo.bodyFont}`;
    let creditW = ctx.measureText(creditText).width;

    const maxContentW = Math.max(titleW, subtitleW, creditW);
    const maxInnerW = maxBoxWidth - hPadding * 2;

    // If any text overflows the max inner width, scale font sizes down proportionally so it fits!
    if (maxContentW > maxInnerW && maxContentW > 0) {
      const shrinkRatio = maxInnerW / maxContentW;
      titleSize = Math.max(9, Math.floor(titleSize * shrinkRatio));
      subtitleSize = Math.max(7.5, Math.floor(subtitleSize * shrinkRatio));
      creditSize = Math.max(6.5, Math.floor(creditSize * shrinkRatio));

      // Re-measure after shrink
      ctx.font = `bold ${titleSize}px ${typo.titleFont}`;
      titleW = ctx.measureText(titleText).width;

      ctx.font = `italic ${subtitleSize}px ${typo.subtitleFont}`;
      subtitleW = ctx.measureText(subtitleText).width;

      ctx.font = `${creditSize}px ${typo.bodyFont}`;
      creditW = ctx.measureText(creditText).width;
    }

    const actualMaxTextW = Math.max(titleW, subtitleW, creditW);
    const boxWidth = Math.min(maxBoxWidth, Math.max(actualMaxTextW + hPadding * 2, 180 * pageScale));
    const boxHeight = vPadding * 2 + titleSize + subtitleSize + creditSize + lineSpacing * 2;

    const boxX = safe.safeX + 16 * pageScale;
    const boxY = safe.safeY + 16 * pageScale;

    // Background
    ctx.fillStyle = colors.titleBoxBg;
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = Math.max(1, 2 * pageScale);
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

    // Inner decorative frame
    ctx.lineWidth = Math.max(0.5, 1 * pageScale);
    ctx.strokeRect(boxX + 4 * pageScale, boxY + 4 * pageScale, Math.max(10, boxWidth - 8 * pageScale), Math.max(10, boxHeight - 8 * pageScale));

    ctx.textAlign = 'center';

    // 1. Title text
    const y1 = boxY + vPadding + titleSize * 0.88;
    ctx.fillStyle = colors.titleText;
    ctx.font = `bold ${titleSize}px ${typo.titleFont}`;
    ctx.fillText(titleText, boxX + boxWidth / 2, y1);

    // 2. Subtitle / Era
    const y2 = y1 + lineSpacing + subtitleSize * 0.88;
    ctx.fillStyle = colors.subtitleText;
    ctx.font = `italic ${subtitleSize}px ${typo.subtitleFont}`;
    ctx.fillText(subtitleText, boxX + boxWidth / 2, y2);

    // 3. Author credit & scale
    const y3 = y2 + lineSpacing + creditSize * 0.88;
    ctx.font = `${creditSize}px ${typo.bodyFont}`;
    ctx.fillText(creditText, boxX + boxWidth / 2, y3);
  }

  private drawCompassRose(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    radius: number,
    colors: ThemeColors,
    typo: ThemeTypography
  ) {
    ctx.save();
    ctx.translate(cx, cy);

    // Outer circle
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();

    // 4 cardinal points (North, South, East, West)
    const drawPoint = (angle: number, length: number, isNorth: boolean) => {
      ctx.save();
      ctx.rotate(angle);

      // Light half
      ctx.fillStyle = isNorth ? colors.poiFill : colors.border;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -length);
      ctx.lineTo(-length * 0.22, 0);
      ctx.closePath();
      ctx.fill();

      // Dark half
      ctx.fillStyle = isNorth ? colors.poiStroke : colors.titleBoxBg;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -length);
      ctx.lineTo(length * 0.22, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    drawPoint(0, radius, true); // North
    drawPoint(Math.PI, radius * 0.8, false); // South
    drawPoint(Math.PI / 2, radius * 0.8, false); // East
    drawPoint(-Math.PI / 2, radius * 0.8, false); // West

    // 'N' label
    ctx.fillStyle = colors.titleText;
    ctx.font = `bold ${Math.max(10, radius * 0.35)}px ${typo.titleFont}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('N', 0, -radius - 4);

    ctx.restore();
  }

  private drawScaleBar(
    ctx: CanvasRenderingContext2D,
    cityMap: CityMap,
    safe: SafeExportDimensions,
    colors: ThemeColors,
    typo: ThemeTypography
  ) {
    const pageScale = safe.pageScale;
    const barWidthUnits = cityMap.unitsPerKm; // 1 km in map units
    const barWidthPx = Math.min(safe.safeWidth * 0.35, barWidthUnits * safe.scale);
    const x = safe.safeX + 16 * pageScale;
    const y = safe.safeY + safe.safeHeight - 16 * pageScale;
    const height = Math.max(4, 7 * pageScale);

    const padX = 8 * pageScale;
    const padY = 20 * pageScale;
    const bgW = barWidthPx + 36 * pageScale;
    const bgH = 30 * pageScale;

    ctx.fillStyle = colors.titleBoxBg;
    ctx.fillRect(x - padX, y - padY, bgW, bgH);
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = Math.max(1, 1.5 * pageScale);
    ctx.strokeRect(x - padX, y - padY, bgW, bgH);

    // Segmented bar
    const segments = 4;
    const segWidth = barWidthPx / segments;
    for (let i = 0; i < segments; i++) {
      ctx.fillStyle = (i % 2 === 0) ? colors.border : colors.titleBoxBg;
      ctx.fillRect(x + i * segWidth, y - height / 2, segWidth, height);
      ctx.strokeRect(x + i * segWidth, y - height / 2, segWidth, height);
    }

    const scaleFontSize = Math.max(7, 10 * pageScale);
    ctx.fillStyle = colors.titleText;
    ctx.font = `${scaleFontSize}px ${typo.bodyFont}`;
    ctx.textAlign = 'center';
    ctx.fillText('0', x, y - padY / 2);
    ctx.fillText('500m', x + barWidthPx / 2, y - padY / 2);
    ctx.fillText('1 km', x + barWidthPx, y - padY / 2);
  }

  private drawDecorativeBorder(
    ctx: CanvasRenderingContext2D,
    safe: SafeExportDimensions,
    colors: ThemeColors
  ) {
    const isCustom = !safe.trimConfig || safe.trimConfig.id === 'custom';
    const pageScale = safe.pageScale;

    const x = isCustom ? 14 * pageScale : safe.safeX;
    const y = isCustom ? 14 * pageScale : safe.safeY;
    const w = isCustom ? safe.width - 28 * pageScale : safe.safeWidth;
    const h = isCustom ? safe.height - 28 * pageScale : safe.safeHeight;

    const inset = Math.max(4, Math.round(8 * pageScale));

    ctx.strokeStyle = colors.border;
    ctx.lineWidth = Math.max(1.5, 3 * pageScale);
    ctx.strokeRect(x, y, w, h);

    ctx.lineWidth = Math.max(0.75, 1.2 * pageScale);
    ctx.strokeRect(x + inset, y + inset, Math.max(10, w - inset * 2), Math.max(10, h - inset * 2));

    // Corner rosettes / accents
    const cornerRadius = Math.max(3, 4 * pageScale);
    const corners = [
      { x: x + inset, y: y + inset },
      { x: x + w - inset, y: y + inset },
      { x: x + inset, y: y + h - inset },
      { x: x + w - inset, y: y + h - inset }
    ];

    corners.forEach(c => {
      ctx.fillStyle = colors.border;
      ctx.beginPath();
      ctx.arc(c.x, c.y, cornerRadius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  private drawRoadLabel(
    ctx: CanvasRenderingContext2D,
    road: { name: string; path: Point2D[] },
    scale: number,
    colors: ThemeColors,
    typo: ThemeTypography,
    toCanvasX: (x: number) => number,
    toCanvasY: (y: number) => number
  ) {
    if (road.path.length < 2 || !road.name) return;

    // Use the middle segment of the road for best label placement
    const midIdx = Math.floor((road.path.length - 1) / 2);
    const p1 = road.path[midIdx];
    const p2 = road.path[midIdx + 1] || road.path[road.path.length - 1];

    const c1x = toCanvasX(p1.x);
    const c1y = toCanvasY(p1.y);
    const c2x = toCanvasX(p2.x);
    const c2y = toCanvasY(p2.y);

    const midX = (c1x + c2x) / 2;
    const midY = (c1y + c2y) / 2;
    let angle = Math.atan2(c2y - c1y, c2x - c1x);

    // Flip text if upside-down
    if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
      angle += Math.PI;
    }

    ctx.save();
    ctx.translate(midX, midY);
    ctx.rotate(angle);

    const fontSize = Math.max(8, 10 * scale);
    ctx.font = `600 ${fontSize}px ${typo.roadFont}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    // Halo for crisp readability over road lines
    ctx.strokeStyle = colors.background;
    ctx.lineWidth = Math.max(2, 3 * scale);
    ctx.strokeText(road.name, 0, -2 * scale);

    ctx.fillStyle = colors.roadLabel;
    ctx.fillText(road.name, 0, -2 * scale);
    ctx.restore();
  }

  private getRoadWidthMultiplier(type: string): number {
    switch (type) {
      case 'highway': return 7;
      case 'avenue': return 6;
      case 'main_street': return 4;
      case 'bridge': return 5;
      case 'local_street': return 2.5;
      case 'pedestrian': return 2;
      case 'alley': return 1.5;
      default: return 3;
    }
  }

  private getRoadColor(type: string, colors: ThemeColors): string {
    switch (type) {
      case 'highway':
      case 'avenue': return colors.roadAvenue;
      case 'main_street': return colors.roadMain;
      case 'bridge': return colors.roadBridge;
      default: return colors.roadLocal;
    }
  }

  private polygonCentroid(pts: Point2D[]): Point2D {
    let x = 0, y = 0;
    pts.forEach(p => { x += p.x; y += p.y; });
    return { x: x / pts.length, y: y / pts.length };
  }

  private splitIntoBalancedLines(text: string, maxSingleLineChars = 18): string[] {
    if (!text) return [];
    if (text.includes('\n')) {
      return text.split('\n').map(l => l.trim()).filter(Boolean);
    }
    if (text.length <= maxSingleLineChars || !text.includes(' ')) {
      return [text];
    }
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length <= 1) return [text];
    if (words.length === 2) {
      return words;
    }

    let bestSplit = 1;
    let minDiff = Infinity;
    for (let i = 1; i < words.length; i++) {
      const line1 = words.slice(0, i).join(' ');
      const line2 = words.slice(i).join(' ');
      const diff = Math.abs(line1.length - line2.length);
      if (diff < minDiff) {
        minDiff = diff;
        bestSplit = i;
      }
    }

    return [
      words.slice(0, bestSplit).join(' '),
      words.slice(bestSplit).join(' ')
    ];
  }

  downloadImage(canvas: HTMLCanvasElement, filename: string, format: 'png' | 'jpeg', quality = 0.95) {
    const mime = format === 'jpeg' ? 'image/jpeg' : 'image/png';
    const dataUrl = canvas.toDataURL(mime, quality);
    const link = document.createElement('a');
    link.download = `${filename}.${format}`;
    link.href = dataUrl;
    link.click();
  }

  exportSVG(cityMap: CityMap, settings: ExportSettings, isochrone?: IsochroneResult | null): string {
    const width = cityMap.width;
    const height = cityMap.height;
    const colors = this.getThemeColors(settings.theme);
    const typo = this.getThemeTypography(settings.theme, cityMap.era);
    const isBw = settings.theme === 'print_bw';

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">\n`;
    svg += `<rect width="${width}" height="${height}" fill="${colors.background}"/>\n`;

    // ==========================================
    // 1. BASE GEOMETRY PASS (Bottom to Top)
    // ==========================================

    // Water & Parks (polygons only)
    if (settings.showWater || settings.showParks) {
      cityMap.naturalFeatures.forEach(feat => {
        if ((feat.type === 'park' || feat.type === 'forest') && !settings.showParks) return;
        if ((feat.type === 'river' || feat.type === 'lake' || feat.type === 'ocean' || feat.type === 'canal') && !settings.showWater) return;
        if (feat.polygon.length < 3) return;

        const isPark = feat.type === 'park' || feat.type === 'forest';
        const fill = isPark ? colors.park : colors.water;
        const pts = feat.polygon.map(p => `${p.x},${height - p.y}`).join(' ');
        svg += `<polygon points="${pts}" fill="${fill}" stroke="${isPark ? colors.parkBorder : colors.waterBorder}" stroke-width="1.5"/>\n`;
      });
    }

    // Districts (polygons & boundaries only)
    if (settings.showDistricts) {
      cityMap.districts.forEach(d => {
        if (d.polygon.length < 3) return;
        const pts = d.polygon.map(p => `${p.x},${height - p.y}`).join(' ');
        const fill = isBw ? '#888888' : d.color;
        const stroke = isBw ? '#666666' : d.color;
        svg += `<polygon points="${pts}" fill="${fill}" fill-opacity="${d.fillOpacity || 0.12}" stroke="${stroke}" stroke-dasharray="4,4"/>\n`;
      });
    }

    // Topography (Cliffs, Ridges, Contours - geometry only)
    if (settings.showTopography !== false && cityMap.topography && cityMap.topography.length > 0) {
      svg += this.exportTopographySVG(cityMap, height, colors);
    }

    // Roads (geometry only)
    if (settings.showRoads) {
      cityMap.roads.forEach(r => {
        if (!settings.showMinorRoads && (r.type === 'local_street' || r.type === 'alley' || r.type === 'pedestrian')) {
          return;
        }
        if (r.path.length < 2) return;
        const d = r.path.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${height - p.y}`).join(' ');
        const w = this.getRoadWidthMultiplier(r.type);
        svg += `<path d="${d}" fill="none" stroke="${this.getRoadColor(r.type, colors)}" stroke-width="${w}" stroke-linecap="round"/>\n`;
      });
    }

    // Buildings (geometry only)
    if (settings.showBuildings) {
      cityMap.buildings.forEach(b => {
        if (b.footprint.length < 3) return;
        const pts = b.footprint.map(p => `${p.x},${height - p.y}`).join(' ');
        const fill = b.isLandmark ? colors.landmarkFill : colors.buildingFill;
        svg += `<polygon points="${pts}" fill="${fill}" stroke="${colors.buildingStroke}" stroke-width="1"/>\n`;
      });
    }

    // Transit lines
    if (settings.showTransitLines) {
      cityMap.transitLines.forEach((t, i) => {
        if (t.path.length < 2) return;
        const d = t.path.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${height - p.y}`).join(' ');
        const stroke = isBw ? this.getBwTransitLineColor(i) : (t.color || '#e74c3c');
        const dashArray = isBw ? this.getBwTransitDashArraySvg(i) : '6,3';
        svg += `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="3" stroke-dasharray="${dashArray}"/>\n`;
      });
    }

    // Transit stations & stops (symbols only)
    if (settings.showTransitStations) {
      cityMap.transitStations.forEach(st => {
        const associatedLines = this.getStationLines(st, cityMap);
        const isHub = !!st.isTransferHub || associatedLines.length > 1;
        const radius = isHub ? 7 : 5;
        const stationColor = isBw
          ? '#000000'
          : (isHub ? '#f59e0b' : (associatedLines[0]?.color || colors.transitStation));

        const cx = st.location.x;
        const cy = height - st.location.y;

        // Outer ring
        svg += `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="#ffffff" stroke="${stationColor}" stroke-width="${isHub ? 2.5 : 1.5}"/>\n`;
        if (isBw && isHub) {
          svg += `<circle cx="${cx}" cy="${cy}" r="${radius * 0.72}" fill="none" stroke="#000000" stroke-width="1.5"/>\n`;
        }
        // Inner core
        svg += `<circle cx="${cx}" cy="${cy}" r="${radius * 0.45}" fill="${stationColor}"/>\n`;
      });
    }

    // POIs (markers only)
    if (settings.showPois) {
      cityMap.pois.forEach(poi => {
        const cx = poi.location.x;
        const cy = height - poi.location.y;
        svg += `<circle cx="${cx}" cy="${cy}" r="6" fill="${colors.poiFill}" stroke="${colors.poiStroke}" stroke-width="1.5"/>\n`;
        svg += `<circle cx="${cx}" cy="${cy}" r="2.5" fill="#ffffff"/>\n`;
      });
    }

    // Isochrone Travel Reach Rings (geometry only)
    if (settings.showIsochrone !== false && isochrone && isochrone.rings && isochrone.rings.length > 0) {
      svg += this.exportIsochroneSVG(isochrone, height);
    }

    // ==========================================
    // 2. HIGHEST LAYER: LABELS & TEXT PASS
    // Rendered on top of all buildings, roads, and parkland so text is never obscured!
    // ==========================================
    svg += '<!-- Topmost Map Labels & Typography -->\n<g id="map-labels">\n';

    // A. District Names
    if (settings.showDistricts && settings.showDistrictLabels) {
      cityMap.districts.forEach(d => {
        if (d.polygon.length < 3 || !d.name) return;
        const center = this.polygonCentroid(d.polygon);
        const cx = center.x;
        const cy = height - center.y;
        const lines = this.splitIntoBalancedLines(d.name.toUpperCase());
        const baseFontSize = 19;

        // Calculate polygon width
        let minX = Infinity, maxX = -Infinity;
        d.polygon.forEach(p => {
          minX = Math.min(minX, p.x);
          maxX = Math.max(maxX, p.x);
        });
        const polyWidth = maxX - minX;

        // Estimate width (approx 0.62 em per char for bold uppercase)
        const maxLineChars = Math.max(...lines.map(l => l.length));
        const estTextWidth = maxLineChars * (baseFontSize * 0.62);
        let fontSize = baseFontSize;
        if (polyWidth > 40 && estTextWidth > polyWidth * 0.85) {
          fontSize = Math.max(9, Math.round((baseFontSize * ((polyWidth * 0.85) / estTextWidth)) * 10) / 10);
        }

        const lineHeight = fontSize * 1.25;
        const totalHeight = (lines.length - 1) * lineHeight;
        const startY = cy - totalHeight / 2;

        lines.forEach((line, idx) => {
          const lineY = startY + idx * lineHeight;
          svg += `  <text x="${cx}" y="${lineY.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-family="${this.toSvgFontFamily(typo.districtFont)}" font-size="${fontSize}" font-weight="bold" fill="${colors.districtLabel}" fill-opacity="0.72" stroke="${colors.background}" stroke-width="4" stroke-opacity="0.6" paint-order="stroke fill">${this.escapeXml(line)}</text>\n`;
        });
      });
    }

    // B. Natural Feature Names (Parks, Rivers, Lakes, Canals)
    if (settings.showNaturalFeatureLabels !== false && (settings.showWater || settings.showParks)) {
      cityMap.naturalFeatures.forEach(feat => {
        if ((feat.type === 'park' || feat.type === 'forest') && !settings.showParks) return;
        if ((feat.type === 'river' || feat.type === 'lake' || feat.type === 'ocean' || feat.type === 'canal') && !settings.showWater) return;
        if (feat.polygon.length < 3 || !feat.name) return;

        const isPark = feat.type === 'park' || feat.type === 'forest';
        const center = this.polygonCentroid(feat.polygon);
        const cx = center.x;
        const cy = height - center.y;
        const fontColor = isPark ? colors.parkBorder : colors.waterBorder;
        const lines = this.splitIntoBalancedLines(feat.name);
        const baseFontSize = 10.5;

        // Calculate polygon width
        let minX = Infinity, maxX = -Infinity;
        feat.polygon.forEach(p => {
          minX = Math.min(minX, p.x);
          maxX = Math.max(maxX, p.x);
        });
        const polyWidth = maxX - minX;

        // Estimate width (approx 0.58 em per char for italic)
        const maxLineChars = Math.max(...lines.map(l => l.length));
        const estTextWidth = maxLineChars * (baseFontSize * 0.58);
        let fontSize = baseFontSize;
        if (polyWidth > 30 && estTextWidth > polyWidth * 0.85) {
          fontSize = Math.max(7.5, Math.round((baseFontSize * ((polyWidth * 0.85) / estTextWidth)) * 10) / 10);
        }

        const lineHeight = fontSize * 1.25;
        const totalHeight = (lines.length - 1) * lineHeight;
        const startY = cy - totalHeight / 2;

        lines.forEach((line, idx) => {
          const lineY = startY + idx * lineHeight;
          svg += `  <text x="${cx}" y="${lineY.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-family="${this.toSvgFontFamily(typo.featureFont)}" font-size="${fontSize}" font-style="italic" fill="${fontColor}" stroke="${colors.background}" stroke-width="3" paint-order="stroke fill">${this.escapeXml(line)}</text>\n`;
        });
      });
    }

    // C. Topography Labels (Contour elevations & Cliff/Ridge names)
    if (settings.showTopography !== false && cityMap.topography && cityMap.topography.length > 0) {
      svg += this.exportTopographyLabelsSVG(cityMap, height, colors, typo);
    }

    // D. Road Labels
    if (settings.showRoads && settings.showRoadLabels) {
      cityMap.roads.forEach(r => {
        if (r.path.length < 2 || !r.name) return;
        if (r.type !== 'avenue' && r.type !== 'main_street' && r.type !== 'bridge') return;
        const midIdx = Math.floor((r.path.length - 1) / 2);
        const p1 = r.path[midIdx];
        const p2 = r.path[midIdx + 1] || r.path[r.path.length - 1];
        const c1x = p1.x;
        const c1y = height - p1.y;
        const c2x = p2.x;
        const c2y = height - p2.y;
        const midX = (c1x + c2x) / 2;
        const midY = (c1y + c2y) / 2;
        let angle = Math.atan2(c2y - c1y, c2x - c1x) * (180 / Math.PI);
        if (angle > 90 || angle < -90) {
          angle += 180;
        }
        svg += `  <text x="${midX}" y="${midY - 3}" transform="rotate(${angle.toFixed(1)}, ${midX}, ${midY})" text-anchor="middle" font-family="${this.toSvgFontFamily(typo.roadFont)}" font-size="10" font-weight="600" fill="${colors.roadLabel}" stroke="${colors.background}" stroke-width="3" paint-order="stroke fill">${this.escapeXml(r.name)}</text>\n`;
      });
    }

    // E. Building Labels
    if (settings.showBuildings && settings.showBuildingLabels) {
      cityMap.buildings.forEach(bld => {
        if (bld.footprint.length < 3 || !bld.name) return;
        const isLandmark = bld.isLandmark || bld.type === 'institutional';
        if (settings.onlyLandmarkBuildingLabels && !isLandmark) return;
        const bx = bld.center.x;
        const by = height - bld.center.y - 12;
        svg += `  <text x="${bx}" y="${by}" text-anchor="middle" dominant-baseline="central" font-family="${this.toSvgFontFamily(typo.buildingFont)}" font-size="${isLandmark ? 11 : 9}" font-weight="${isLandmark ? 'bold' : 'normal'}" fill="${colors.buildingLabel}" stroke="${colors.background}" stroke-width="3" paint-order="stroke fill">${this.escapeXml(bld.name)}</text>\n`;
      });
    }

    // F. Transit Station Labels
    if (settings.showTransitStations && settings.showStationLabels !== false) {
      cityMap.transitStations.forEach(st => {
        const associatedLines = this.getStationLines(st, cityMap);
        const isHub = !!st.isTransferHub || associatedLines.length > 1;
        const radius = isHub ? 7 : 5;
        const stationColor = isBw
          ? '#000000'
          : (isHub ? '#f59e0b' : (associatedLines[0]?.color || colors.transitStation));
        const labelColor = isBw ? '#000000' : colors.titleText;
        const cx = st.location.x;
        const cy = height - st.location.y;
        svg += `  <text x="${cx + radius + 5}" y="${cy + 3.5}" font-family="${this.toSvgFontFamily(typo.stationFont)}" font-size="10" font-weight="bold" fill="${labelColor}" stroke="${colors.background}" stroke-width="3" paint-order="stroke fill">${this.escapeXml(st.name)}</text>\n`;
      });
    }

    // G. POI Labels
    if (settings.showPois && settings.showPoiLabels) {
      cityMap.pois.forEach(poi => {
        const cx = poi.location.x;
        const cy = height - poi.location.y;
        svg += `  <text x="${cx + 9}" y="${cy + 4}" font-family="${this.toSvgFontFamily(typo.poiFont)}" font-size="11" font-weight="600" fill="${colors.poiText}" stroke="${colors.background}" stroke-width="3" paint-order="stroke fill">${this.escapeXml(poi.name)}</text>\n`;
      });
    }

    // H. Isochrone Minute Labels
    if (settings.showIsochrone !== false && isochrone && isochrone.rings && isochrone.rings.length > 0) {
      svg += this.exportIsochroneLabelsSVG(isochrone, height, typo);
    }

    svg += '</g>\n';

    // Atlas Grid Overlay
    if (settings.showGrid) {
      svg += this.exportGridSVG(cityMap, width, height, colors, typo);
    }

    svg += `</svg>`;
    return svg;
  }

  private exportGridSVG(cityMap: CityMap, width: number, height: number, colors: ThemeColors, typo: ThemeTypography): string {
    const gridStep = cityMap.gridStep || 200;
    const colCount = Math.ceil(width / gridStep);
    const rowCount = Math.ceil(height / gridStep);

    let svg = '<!-- Atlas Grid Overlay -->\n<g id="atlas-grid">\n';

    // Vertical grid lines
    for (let i = 0; i <= colCount; i++) {
      const x = Math.min(i * gridStep, width);
      svg += `  <line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${colors.gridLine}" stroke-width="1" stroke-dasharray="4,4"/>\n`;
    }

    // Horizontal grid lines
    for (let j = 0; j <= rowCount; j++) {
      const y = Math.min(j * gridStep, height);
      svg += `  <line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${colors.gridLine}" stroke-width="1" stroke-dasharray="4,4"/>\n`;
    }

    // Solid neatline
    svg += `  <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="${colors.border}" stroke-width="1.5"/>\n`;

    // Column labels
    for (let i = 0; i < colCount; i++) {
      let colName = '';
      let num = i;
      while (num >= 0) {
        colName = String.fromCharCode((num % 26) + 65) + colName;
        num = Math.floor(num / 26) - 1;
      }
      const cellCenterX = i * gridStep + Math.min(gridStep, width - i * gridStep) / 2;
      svg += `  <text x="${cellCenterX}" y="16" text-anchor="middle" font-family="${this.toSvgFontFamily(typo.monoFont)}" font-size="11" font-weight="bold" fill="${colors.gridText}">${colName}</text>\n`;
    }

    // Row labels
    for (let j = 0; j < rowCount; j++) {
      const cellCenterY = j * gridStep + Math.min(gridStep, height - j * gridStep) / 2;
      svg += `  <text x="14" y="${cellCenterY + 4}" text-anchor="middle" font-family="${this.toSvgFontFamily(typo.monoFont)}" font-size="11" font-weight="bold" fill="${colors.gridText}">${j + 1}</text>\n`;
    }

    svg += '</g>\n';
    return svg;
  }

  private toSvgFontFamily(fontString: string): string {
    return fontString.replace(/"/g, "'");
  }

  private drawTopography(
    ctx: CanvasRenderingContext2D,
    cityMap: CityMap,
    scale: number,
    colors: ThemeColors,
    toCanvasX: (x: number) => number,
    toCanvasY: (y: number) => number
  ) {
    if (!cityMap.topography) return;

    cityMap.topography.forEach(feat => {
      if (!feat.path || feat.path.length < 2) return;

      ctx.save();
      if (feat.type === 'cliff') {
        // Cliff baseline
        ctx.strokeStyle = colors.topoCliff;
        ctx.lineWidth = Math.max(1.5, 3 * scale);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        feat.path.forEach((pt, i) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (i === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.stroke();

        // Draw cliff hachures / ticks along the path
        const tickInterval = 20 * scale;
        const tickLength = 14 * scale;
        const facing = feat.cliffSide || feat.hachureFacing || 'right';
        const sideMult = (facing === 'left') ? -1 : 1;

        ctx.lineWidth = Math.max(0.75, 1.5 * scale);
        ctx.beginPath();
        for (let i = 0; i < feat.path.length - 1; i++) {
          const p1 = feat.path[i];
          const p2 = feat.path[i + 1];
          const x1 = toCanvasX(p1.x);
          const y1 = toCanvasY(p1.y);
          const x2 = toCanvasX(p2.x);
          const y2 = toCanvasY(p2.y);
          const segLen = Math.hypot(x2 - x1, y2 - y1);
          if (segLen === 0) continue;

          const dx = (x2 - x1) / segLen;
          const dy = (y2 - y1) / segLen;
          // In screen coords (where Y points down), the right normal is (-dy, dx)
          const nx = -dy * sideMult;
          const ny = dx * sideMult;

          const numTicks = Math.max(1, Math.floor(segLen / tickInterval));
          for (let t = 1; t <= numTicks; t++) {
            const factor = t / (numTicks + 1);
            const tx = x1 + factor * (x2 - x1);
            const ty = y1 + factor * (y2 - y1);
            const curLen = (t % 2 === 0 ? tickLength * 0.6 : tickLength);
            ctx.moveTo(tx, ty);
            ctx.lineTo(tx + nx * curLen, ty + ny * curLen);
          }
        }
        ctx.stroke();
      } else if (feat.type === 'ridge') {
        // Mountain / hill ridge line
        ctx.strokeStyle = colors.topoRidge;
        ctx.lineWidth = Math.max(1.2, 2.5 * scale);
        ctx.setLineDash([8 * scale, 3 * scale]);
        ctx.beginPath();
        feat.path.forEach((pt, i) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (i === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (feat.type === 'contour') {
        // Elevation contour line
        const isIndex = feat.elevation !== undefined && (feat.elevation % 50 === 0);
        ctx.strokeStyle = colors.topoContour;
        ctx.lineWidth = Math.max(0.75, (isIndex ? 2 : 1) * scale);
        if (!isIndex) {
          ctx.setLineDash([6 * scale, 3 * scale]);
        }
        ctx.beginPath();
        feat.path.forEach((pt, i) => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (i === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.restore();
    });
  }

  private drawTopographyLabels(
    ctx: CanvasRenderingContext2D,
    cityMap: CityMap,
    scale: number,
    colors: ThemeColors,
    typo: ThemeTypography,
    toCanvasX: (x: number) => number,
    toCanvasY: (y: number) => number
  ) {
    if (!cityMap.topography) return;

    cityMap.topography.forEach(feat => {
      if (!feat.path || feat.path.length < 2) return;

      ctx.save();
      // Contour elevation label
      if (feat.type === 'contour' && feat.elevation !== undefined) {
        const midIdx = Math.floor(feat.path.length / 2);
        const pt = feat.path[midIdx];
        const cx = toCanvasX(pt.x);
        const cy = toCanvasY(pt.y);
        const fontSize = Math.max(8, 9 * scale);
        ctx.font = `${fontSize}px ${typo.monoFont}`;
        ctx.fillStyle = colors.topoContour;
        ctx.strokeStyle = colors.background;
        ctx.lineWidth = 2.5 * scale;
        ctx.strokeText(`${feat.elevation}m`, cx + 3 * scale, cy - 3 * scale);
        ctx.fillText(`${feat.elevation}m`, cx + 3 * scale, cy - 3 * scale);
      }

      // Label for cliff or ridge
      if (feat.name && (feat.type === 'cliff' || feat.type === 'ridge')) {
        const midIdx = Math.floor(feat.path.length / 2);
        const pt = feat.path[midIdx];
        const cx = toCanvasX(pt.x);
        const cy = toCanvasY(pt.y);
        const fontSize = Math.max(8, 11 * scale);
        ctx.font = `italic 600 ${fontSize}px ${typo.topoFont}`;
        ctx.fillStyle = feat.type === 'cliff' ? colors.topoCliff : colors.topoRidge;
        ctx.strokeStyle = colors.background;
        ctx.lineWidth = 3 * scale;
        ctx.strokeText(feat.name, cx + 5 * scale, cy - 5 * scale);
        ctx.fillText(feat.name, cx + 5 * scale, cy - 5 * scale);
      }
      ctx.restore();
    });
  }

  private drawIsochroneGeometry(
    ctx: CanvasRenderingContext2D,
    isochrone: IsochroneResult,
    scale: number,
    toCanvasX: (x: number) => number,
    toCanvasY: (y: number) => number
  ) {
    if (!isochrone.rings || isochrone.rings.length === 0) return;

    ctx.save();
    // Sort rings descending by minutes (20, 15, 10, 5)
    const sortedRings = [...isochrone.rings].sort((a, b) => b.minutes - a.minutes);

    sortedRings.forEach(ring => {
      if (!ring.polygon || ring.polygon.length < 3) return;

      ctx.fillStyle = ring.color;
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = Math.max(1.5, 2.5 * scale);

      // Fill with soft opacity
      ctx.globalAlpha = 0.22;
      ctx.beginPath();
      ring.polygon.forEach((pt, idx) => {
        const cx = toCanvasX(pt.x);
        const cy = toCanvasY(pt.y);
        if (idx === 0) ctx.moveTo(cx, cy);
        else ctx.lineTo(cx, cy);
      });
      ctx.closePath();
      ctx.fill();

      // Outline
      ctx.globalAlpha = 0.85;
      ctx.setLineDash([6 * scale, 3 * scale]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1.0;
    });

    // Draw Center Origin Marker
    const originX = toCanvasX(isochrone.center.x);
    const originY = toCanvasY(isochrone.center.y);
    const originRadius = Math.max(4, 7 * scale);

    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = Math.max(1.5, 2 * scale);
    ctx.beginPath();
    ctx.arc(originX, originY, originRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(originX, originY, originRadius * 0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  private drawIsochroneLabels(
    ctx: CanvasRenderingContext2D,
    isochrone: IsochroneResult,
    scale: number,
    typo: ThemeTypography,
    toCanvasX: (x: number) => number,
    toCanvasY: (y: number) => number
  ) {
    if (!isochrone.rings || isochrone.rings.length === 0) return;

    ctx.save();
    const sortedRings = [...isochrone.rings].sort((a, b) => b.minutes - a.minutes);

    sortedRings.forEach(ring => {
      if (!ring.polygon || ring.polygon.length < 3) return;

      // Label ring at uppermost point
      const topPoint = ring.polygon.reduce((minP, p) => p.y > minP.y ? p : minP, ring.polygon[0]);
      const lx = toCanvasX(topPoint.x);
      const ly = toCanvasY(topPoint.y);
      const labelFontSize = Math.max(9, 11 * scale);
      ctx.font = `bold ${labelFontSize}px ${typo.bodyFont}`;
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = 3 * scale;
      ctx.strokeText(`${ring.minutes} min`, lx, ly - 4 * scale);
      ctx.fillText(`${ring.minutes} min`, lx, ly - 4 * scale);
    });

    ctx.restore();
  }

  private drawGutterGuide(
    ctx: CanvasRenderingContext2D,
    safe: SafeExportDimensions,
    spineSide: 'left' | 'right' = 'left',
    typo?: ThemeTypography
  ) {
    if (!safe.trimConfig || safe.trimConfig.id === 'custom') return;
    const { width, height, gutterMarginPx, outerMarginPx, trimConfig, pageScale } = safe;

    ctx.save();

    const guideFont = typo ? typo.bodyFont : '"Inter", sans-serif';

    if (trimConfig.isTwoPageSpread) {
      const spineX = width / 2;
      const gutterWidth = gutterMarginPx;

      // Shaded spine gutter area
      ctx.fillStyle = 'rgba(239, 68, 68, 0.08)';
      ctx.fillRect(spineX - gutterWidth / 2, 0, gutterWidth, height);

      // Left & right spine margin dashed lines
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.8)';
      ctx.lineWidth = Math.max(1, 1.5 * pageScale);
      ctx.setLineDash([8 * pageScale, 6 * pageScale]);
      ctx.beginPath();
      ctx.moveTo(spineX - gutterWidth / 2, 0);
      ctx.lineTo(spineX - gutterWidth / 2, height);
      ctx.moveTo(spineX + gutterWidth / 2, 0);
      ctx.lineTo(spineX + gutterWidth / 2, height);
      ctx.stroke();

      // Center fold line
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.85)';
      ctx.setLineDash([4 * pageScale, 4 * pageScale]);
      ctx.beginPath();
      ctx.moveTo(spineX, 0);
      ctx.lineTo(spineX, height);
      ctx.stroke();

      ctx.fillStyle = 'rgba(239, 68, 68, 0.95)';
      ctx.font = `600 ${Math.max(9, 12 * pageScale)}px ${guideFont}`;
      ctx.textAlign = 'center';
      ctx.fillText(`CENTER SPINE FOLD & GUTTER SAFETY ZONE (${trimConfig.gutterMarginInches}")`, spineX, 24 * pageScale);
    } else {
      const isSpineLeft = spineSide === 'left';
      const gutterX = isSpineLeft ? gutterMarginPx : width - gutterMarginPx;

      // Shaded spine gutter area
      ctx.fillStyle = 'rgba(239, 68, 68, 0.08)';
      if (isSpineLeft) {
        ctx.fillRect(0, 0, gutterMarginPx, height);
      } else {
        ctx.fillRect(width - gutterMarginPx, 0, gutterMarginPx, height);
      }

      // Dashed red line at gutter boundary
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
      ctx.lineWidth = Math.max(1, 1.5 * pageScale);
      ctx.setLineDash([8 * pageScale, 6 * pageScale]);
      ctx.beginPath();
      ctx.moveTo(gutterX, 0);
      ctx.lineTo(gutterX, height);
      ctx.stroke();

      // Label along the spine line
      ctx.save();
      const textX = isSpineLeft ? gutterMarginPx - 8 * pageScale : width - gutterMarginPx + 16 * pageScale;
      ctx.translate(textX, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = 'rgba(239, 68, 68, 0.95)';
      ctx.font = `600 ${Math.max(9, 11 * pageScale)}px ${guideFont}`;
      ctx.textAlign = 'center';
      ctx.fillText(`SPINE GUTTER SAFE MARGIN (${trimConfig.gutterMarginInches}" BINDING EDGE)`, 0, 0);
      ctx.restore();
    }

    // Outer trim safe margin
    ctx.strokeStyle = 'rgba(156, 163, 175, 0.6)';
    ctx.setLineDash([4 * pageScale, 4 * pageScale]);
    ctx.strokeRect(outerMarginPx, outerMarginPx, width - 2 * outerMarginPx, height - 2 * outerMarginPx);

    ctx.restore();
  }

  private exportTopographySVG(cityMap: CityMap, height: number, colors: ThemeColors): string {
    if (!cityMap.topography) return '';
    let svg = '<!-- Topography (Cliffs, Ridges, Contours) -->\n<g id="topography">\n';

    cityMap.topography.forEach(feat => {
      if (!feat.path || feat.path.length < 2) return;
      const pts = feat.path.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${height - p.y}`).join(' ');

      if (feat.type === 'cliff') {
        svg += `  <path d="${pts}" fill="none" stroke="${colors.topoCliff}" stroke-width="3" stroke-linecap="round"/>\n`;
        const tickInterval = 20;
        const tickLength = 14;
        const facing = feat.cliffSide || feat.hachureFacing || 'right';
        const sideMult = (facing === 'left') ? -1 : 1;
        for (let i = 0; i < feat.path.length - 1; i++) {
          const p1 = feat.path[i];
          const p2 = feat.path[i + 1];
          const x1 = p1.x;
          const y1 = height - p1.y;
          const x2 = p2.x;
          const y2 = height - p2.y;
          const len = Math.hypot(x2 - x1, y2 - y1);
          if (len === 0) continue;
          const dx = (x2 - x1) / len;
          const dy = (y2 - y1) / len;
          // In screen coords (where Y points down), the right normal is (-dy, dx)
          const nx = -dy * sideMult;
          const ny = dx * sideMult;
          const numTicks = Math.max(1, Math.floor(len / tickInterval));
          for (let t = 1; t <= numTicks; t++) {
            const factor = t / (numTicks + 1);
            const tx = x1 + factor * (x2 - x1);
            const ty = y1 + factor * (y2 - y1);
            const curLen = (t % 2 === 0 ? tickLength * 0.6 : tickLength);
            svg += `  <line x1="${tx.toFixed(1)}" y1="${ty.toFixed(1)}" x2="${(tx + nx * curLen).toFixed(1)}" y2="${(ty + ny * curLen).toFixed(1)}" stroke="${colors.topoCliff}" stroke-width="1.5"/>\n`;
          }
        }
      } else if (feat.type === 'ridge') {
        svg += `  <path d="${pts}" fill="none" stroke="${colors.topoRidge}" stroke-width="2.5" stroke-dasharray="8,3"/>\n`;
      } else if (feat.type === 'contour') {
        const isIndex = feat.elevation !== undefined && (feat.elevation % 50 === 0);
        const dash = isIndex ? '' : 'stroke-dasharray="6,3"';
        svg += `  <path d="${pts}" fill="none" stroke="${colors.topoContour}" stroke-width="${isIndex ? 2 : 1}" ${dash}/>\n`;
      }
    });

    svg += '</g>\n';
    return svg;
  }

  private exportTopographyLabelsSVG(cityMap: CityMap, height: number, colors: ThemeColors, typo: ThemeTypography): string {
    if (!cityMap.topography) return '';
    let svg = '';
    cityMap.topography.forEach(feat => {
      if (!feat.path || feat.path.length < 2) return;
      // Contour elevation label
      if (feat.type === 'contour' && feat.elevation !== undefined) {
        const midIdx = Math.floor(feat.path.length / 2);
        const pt = feat.path[midIdx];
        const cx = pt.x + 3;
        const cy = height - pt.y - 3;
        svg += `  <text x="${cx}" y="${cy}" font-family="${this.toSvgFontFamily(typo.monoFont)}" font-size="9" fill="${colors.topoContour}" stroke="${colors.background}" stroke-width="2.5" paint-order="stroke fill">${feat.elevation}m</text>\n`;
      }
      // Cliff or Ridge name
      if (feat.name && (feat.type === 'cliff' || feat.type === 'ridge')) {
        const midIdx = Math.floor(feat.path.length / 2);
        const pt = feat.path[midIdx];
        const cx = pt.x + 5;
        const cy = height - pt.y - 5;
        const fontColor = feat.type === 'cliff' ? colors.topoCliff : colors.topoRidge;
        svg += `  <text x="${cx}" y="${cy}" font-family="${this.toSvgFontFamily(typo.topoFont)}" font-size="11" font-weight="600" font-style="italic" fill="${fontColor}" stroke="${colors.background}" stroke-width="3" paint-order="stroke fill">${this.escapeXml(feat.name)}</text>\n`;
      }
    });
    return svg;
  }

  private exportIsochroneSVG(isochrone: IsochroneResult, height: number): string {
    if (!isochrone.rings || isochrone.rings.length === 0) return '';
    let svg = '<!-- Isochrone Travel Reach Rings -->\n<g id="isochrone">\n';

    const sortedRings = [...isochrone.rings].sort((a, b) => b.minutes - a.minutes);
    sortedRings.forEach(ring => {
      if (!ring.polygon || ring.polygon.length < 3) return;
      const pts = ring.polygon.map(p => `${p.x},${height - p.y}`).join(' ');
      svg += `  <polygon points="${pts}" fill="${ring.color}" fill-opacity="0.22" stroke="${ring.color}" stroke-width="2" stroke-dasharray="6,3"/>\n`;
    });

    const cx = isochrone.center.x;
    const cy = height - isochrone.center.y;
    svg += `  <circle cx="${cx}" cy="${cy}" r="6" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>\n`;
    svg += `  <circle cx="${cx}" cy="${cy}" r="3" fill="#ef4444"/>\n`;
    svg += '</g>\n';
    return svg;
  }

  private exportIsochroneLabelsSVG(isochrone: IsochroneResult, height: number, typo: ThemeTypography): string {
    if (!isochrone.rings || isochrone.rings.length === 0) return '';
    let svg = '';
    const sortedRings = [...isochrone.rings].sort((a, b) => b.minutes - a.minutes);
    sortedRings.forEach(ring => {
      if (!ring.polygon || ring.polygon.length < 3) return;
      const topPoint = ring.polygon.reduce((minP, p) => p.y > minP.y ? p : minP, ring.polygon[0]);
      const lx = topPoint.x;
      const ly = height - topPoint.y - 4;
      svg += `  <text x="${lx}" y="${ly}" font-family="${this.toSvgFontFamily(typo.bodyFont)}" font-size="11" font-weight="bold" fill="#ffffff" stroke="${ring.color}" stroke-width="3" paint-order="stroke fill">${ring.minutes} min</text>\n`;
    });
    return svg;
  }

  getBwTransitLineColor(index: number): string {
    const bwColors = ['#000000', '#333333', '#555555', '#1a1a1a', '#444444'];
    return bwColors[index % bwColors.length];
  }

  getBwTransitDashPattern(index: number, scale: number): number[] {
    const patterns = [
      [8 * scale, 3 * scale],                           // standard dash
      [3 * scale, 3 * scale],                           // dotted
      [12 * scale, 3 * scale, 3 * scale, 3 * scale],    // dash-dot
      [16 * scale, 4 * scale],                          // long dash
      [6 * scale, 2 * scale, 2 * scale, 2 * scale, 2 * scale, 2 * scale] // dash-double-dot
    ];
    return patterns[index % patterns.length];
  }

  getBwTransitDashArraySvg(index: number): string {
    const patterns = [
      '8,3',
      '3,3',
      '12,3,3,3',
      '16,4',
      '6,2,2,2,2,2'
    ];
    return patterns[index % patterns.length];
  }

  private getStationLines(st: TransitStation, cityMap: CityMap): TransitLine[] {
    const linesMap = new Map<string, TransitLine>();
    if (st.lineIds && st.lineIds.length > 0) {
      for (const lineId of st.lineIds) {
        const found = cityMap.transitLines.find(l => l.id === lineId);
        if (found) linesMap.set(found.id, found);
      }
    }
    for (const line of cityMap.transitLines) {
      if (line.stationIds && line.stationIds.includes(st.id)) {
        linesMap.set(line.id, line);
      }
    }
    if (linesMap.size === 0) {
      for (const line of cityMap.transitLines) {
        if (this.isPointNearPolyline(st.location, line.path, 60)) {
          linesMap.set(line.id, line);
        }
      }
    }
    return Array.from(linesMap.values());
  }

  private isPointNearPolyline(pt: Point2D, path: Point2D[], maxDist: number): boolean {
    if (!path || path.length < 2) return false;
    for (let i = 0; i < path.length - 1; i++) {
      if (this.pointToSegmentDistance(pt, path[i], path[i + 1]) <= maxDist) {
        return true;
      }
    }
    return false;
  }

  private pointToSegmentDistance(p: Point2D, v: Point2D, w: Point2D): number {
    const l2 = (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
    if (l2 === 0) return Math.hypot(p.x - v.x, p.y - v.y);
    let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    const projX = v.x + t * (w.x - v.x);
    const projY = v.y + t * (w.y - v.y);
    return Math.hypot(p.x - projX, p.y - projY);
  }

  private escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        default: return c;
      }
    });
  }
}
