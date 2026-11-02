import { describe, it, expect } from 'vitest';
import { ExportService } from './export.service';
import { AETHELBURG_PRESET, NOVARIA_METROPOLIS_PRESET } from './preset-maps';

describe('ExportService Performance & Dimensions', () => {
  const service = new ExportService();

  it('computes safe dimensions without exceeding hardware canvas boundaries', () => {
    // Test on 8000x8000 Novaria preset with 4x resolution
    const dims = service.getSafeDimensions(NOVARIA_METROPOLIS_PRESET, 4, 'custom');
    expect(dims.width).toBeLessThanOrEqual(16384);
    expect(dims.height).toBeLessThanOrEqual(16384);
    expect(dims.width * dims.height).toBeLessThanOrEqual(16384 * 8192);
  });

  it('clamps ultra-large 30,000 unit maps safely', () => {
    const hugeMap = {
      ...AETHELBURG_PRESET,
      width: 30000,
      height: 30000
    };
    const dims = service.getSafeDimensions(hugeMap, 2, 'custom');
    expect(dims.clamped).toBe(true);
    expect(dims.width).toBeLessThanOrEqual(16384);
    expect(dims.height).toBeLessThanOrEqual(16384);
  });

  it('generates SVG export for Novaria metropolis without crashing', () => {
    const svg = service.exportSVG(NOVARIA_METROPOLIS_PRESET, {
      title: 'Novaria',
      subtitle: 'Metropolis',
      theme: 'modern_atlas',
      trimSize: 'custom',
      showGutterGuide: false,
      resolutionScale: 1,
      format: 'svg',
      jpegQuality: 0.9,
      showBorder: true,
      showCompassRose: true,
      showScaleBar: true,
      showGrid: false,
      showTitleBox: true,
      showLegend: true,
      showDistricts: true,
      showDistrictLabels: true,
      showWater: true,
      showParks: true,
      showNaturalFeatureLabels: true,
      showRoads: true,
      showRoadLabels: true,
      showMinorRoads: true,
      showBuildings: true,
      showBuildingLabels: true,
      onlyLandmarkBuildingLabels: true,
      showTransitLines: true,
      showTransitStations: true,
      showStationLabels: true,
      showPois: true,
      showPoiLabels: true,
      showTopography: false
    });

    expect(svg).toBeDefined();
    expect(svg).toContain('<svg');
    expect(svg).toContain('Novaria');
  });
});
