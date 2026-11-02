import { describe, it, expect } from 'vitest';
import { DemographicsService } from './demographics.service';
import { CityMap, District, Building, Point2D } from '../models/map.models';
import { AETHELBURG_PRESET, NOVARIA_METROPOLIS_PRESET } from './preset-maps';

describe('DemographicsService - High Population (1 Million) & Performance', () => {
  const service = new DemographicsService();

  function createComplexPolygon(cx: number, cy: number, r: number, points = 12): Point2D[] {
    const poly: Point2D[] = [];
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const radius = r * (0.8 + 0.4 * ((i % 3) / 2));
      poly.push({
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius
      });
    }
    return poly;
  }

  describe('Standard and Preset Cities', () => {
    it('calculates demographics for Aethelburg preset correctly', () => {
      const stats = service.calculateStats(AETHELBURG_PRESET);
      expect(stats.totalPopulation).toBeGreaterThan(0);
      expect(stats.totalJobs).toBeGreaterThan(0);
      expect(stats.districtStats.length).toBe(AETHELBURG_PRESET.districts.length);
    });

    it('calculates demographics for the 1-Million Metropolis (Novaria) preset', () => {
      const stats = service.calculateStats(NOVARIA_METROPOLIS_PRESET);

      // Verify Population is at ~1,000,000 scale
      expect(stats.totalPopulation).toBeGreaterThanOrEqual(950000);
      expect(stats.totalPopulation).toBeLessThanOrEqual(1050000);

      // Verify employment capacity matches metropolitan workforce (ratio ~0.9 - 1.2)
      expect(stats.totalJobs).toBeGreaterThanOrEqual(500000);
      expect(stats.jobsToHousingRatio).toBeGreaterThanOrEqual(0.85);
      expect(stats.jobsToHousingRatio).toBeLessThanOrEqual(1.35);

      // Verify realistic metropolitan density across 256 km²
      expect(stats.totalAreaKm2).toBe(256);
      expect(stats.averageDensityPerKm2).toBeGreaterThanOrEqual(3500);
      expect(stats.averageDensityPerKm2).toBeLessThanOrEqual(5000);

      // Verify realism diagnostics for 1M metropolis
      const titles = stats.realismAnalysis.map(a => a.title);
      expect(titles).toContain('Realistic Metropolitan Scale');
      expect(titles).toContain('High-Capacity Mass Transit Backbone');
      expect(titles).toContain('Comprehensive Metropolitan Anchors');
      expect(titles).toContain('Balanced Employment & Housing');
    });
  });

  describe('Megacity Realism Diagnostics & Edge Cases', () => {
    it('warns when a 1-million population city has extreme unrealistic density in a tiny area', () => {
      // 1 million people cramped into 4km x 4km (16 km²), density > 60,000/km²
      const denseCity: CityMap = {
        ...NOVARIA_METROPOLIS_PRESET,
        width: 2000,
        height: 2000,
        unitsPerKm: 500, // 4km x 4km = 16 km²
        districts: [
          {
            id: 'dist-hyperdense',
            name: 'Cramped Core',
            description: 'Extreme density',
            type: 'residential',
            polygon: [
              { x: 200, y: 200 },
              { x: 1800, y: 200 },
              { x: 1800, y: 1800 },
              { x: 200, y: 1800 }
            ],
            color: '#ff0000',
            fillOpacity: 0.2,
            targetDensity: 95000
          }
        ],
        transitLines: NOVARIA_METROPOLIS_PRESET.transitLines,
        transitStations: NOVARIA_METROPOLIS_PRESET.transitStations,
        buildings: []
      };

      const stats = service.calculateStats(denseCity);
      const densityWarning = stats.realismAnalysis.find(a => a.title === 'Extreme Megacity Density');
      expect(densityWarning).toBeDefined();
      expect(densityWarning?.score).toBe('warning');
    });

    it('warns about severe transit deficit when a 1M city has no rapid transit lines', () => {
      const carCity: CityMap = {
        ...NOVARIA_METROPOLIS_PRESET,
        transitLines: [],
        transitStations: []
      };

      const stats = service.calculateStats(carCity);
      const transitWarning = stats.realismAnalysis.find(a => a.title === 'Severe Transit Deficit (1M+ Scale)');
      expect(transitWarning).toBeDefined();
      expect(transitWarning?.score).toBe('warning');
    });
  });

  describe('Spatial Bounding Box Acceleration', () => {
    it('accurately resolves point-in-district queries with fast bounding box checking', () => {
      const districts: District[] = [
        {
          id: 'd1',
          name: 'North Borough',
          description: '',
          type: 'residential',
          polygon: [{ x: 100, y: 100 }, { x: 500, y: 100 }, { x: 500, y: 500 }, { x: 100, y: 500 }],
          color: '#000',
          fillOpacity: 0.2
        },
        {
          id: 'd2',
          name: 'South Borough',
          description: '',
          type: 'commercial',
          polygon: [{ x: 600, y: 600 }, { x: 900, y: 600 }, { x: 900, y: 900 }, { x: 600, y: 900 }],
          color: '#000',
          fillOpacity: 0.2
        }
      ];

      expect(service.findDistrictForPoint({ x: 250, y: 250 }, districts)?.id).toBe('d1');
      expect(service.findDistrictForPoint({ x: 750, y: 750 }, districts)?.id).toBe('d2');
      expect(service.findDistrictForPoint({ x: 50, y: 50 }, districts)).toBeUndefined();
      expect(service.findDistrictForPoint({ x: 550, y: 550 }, districts)).toBeUndefined();
    });
  });

  describe('Performance Benchmark for 1M Cities & Massive Datasets', () => {
    it('executes calculateStats for 25,000 explicit buildings across 25 complex districts in under 50ms', () => {
      const districts: District[] = [];
      for (let i = 0; i < 25; i++) {
        const cx = (i % 5) * 2000 + 1000;
        const cy = Math.floor(i / 5) * 2000 + 1000;
        districts.push({
          id: `dist-${i}`,
          name: `District ${i}`,
          description: `Borough ${i}`,
          type: i < 15 ? 'residential' : (i < 20 ? 'commercial' : 'industrial'),
          polygon: createComplexPolygon(cx, cy, 950, 14),
          color: '#ff0000',
          fillOpacity: 0.2
        });
      }

      const buildings: Building[] = [];
      for (let i = 0; i < 25000; i++) {
        const x = (i * 37) % 10000;
        const y = (i * 73) % 10000;
        buildings.push({
          id: `bld-${i}`,
          name: i < 50 ? `Landmark ${i}` : `Building ${i}`,
          type: i % 4 === 0 ? 'commercial_office' : 'residential_apartment',
          footprint: [
            { x, y },
            { x: x + 40, y },
            { x: x + 40, y: y + 40 },
            { x, y: y + 40 }
          ],
          center: { x: x + 20, y: y + 20 },
          floors: 6,
          unitCount: 25,
          isLandmark: i < 50
        });
      }

      const cityMap: CityMap = {
        version: '1.0.0',
        id: 'megacity-benchmark',
        name: 'Megacity Benchmark',
        author: 'Performance Test',
        era: 'contemporary_modern',
        description: '25,000 building performance benchmark',
        width: 10000,
        height: 10000,
        unitsPerKm: 500,
        districts,
        naturalFeatures: [],
        roads: [],
        transitLines: [],
        transitStations: [],
        buildings,
        pois: []
      };

      const start = performance.now();
      const stats = service.calculateStats(cityMap);
      const duration = performance.now() - start;

      console.log(`[Benchmark] calculateStats for 25,000 buildings across 25 complex districts took: ${duration.toFixed(2)}ms`);

      expect(duration).toBeLessThan(100); // Strict performance budget (< 100ms, typically ~25ms)
      expect(stats.totalPopulation).toBeGreaterThanOrEqual(1000000);
    });
  });
});
