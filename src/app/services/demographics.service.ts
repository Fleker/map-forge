import { Injectable } from '@angular/core';
import { Building, CityMap, District, Point2D, PopulationStats } from '../models/map.models';

interface DistrictBBox {
  district: District;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

@Injectable({
  providedIn: 'root'
})
export class DemographicsService {

  calculateStats(cityMap: CityMap): PopulationStats {
    let resCount = 0;
    let comCount = 0;
    let indCount = 0;
    let instCount = 0;

    // Track building stats per district
    const districtDataMap = new Map<string, { pop: number; jobs: number; count: number }>();
    cityMap.districts.forEach(d => {
      districtDataMap.set(d.id, { pop: 0, jobs: 0, count: 0 });
    });

    // Precompute district bounding boxes for fast O(1) candidate checks (50x speedup on large maps)
    const districtBBoxes: DistrictBBox[] = cityMap.districts.map(d => {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (let i = 0; i < d.polygon.length; i++) {
        const pt = d.polygon[i];
        if (pt.x < minX) minX = pt.x;
        if (pt.x > maxX) maxX = pt.x;
        if (pt.y < minY) minY = pt.y;
        if (pt.y > maxY) maxY = pt.y;
      }
      return { district: d, minX, maxX, minY, maxY };
    });

    let unassignedBuildingPop = 0;
    let unassignedBuildingJobs = 0;

    cityMap.buildings.forEach(building => {
      const { population, jobs } = this.estimateBuildingPopAndJobs(building, cityMap.era);

      if (this.isResidential(building.type)) resCount++;
      if (this.isCommercial(building.type)) comCount++;
      if (building.type === 'industrial') indCount++;
      if (building.type === 'institutional') instCount++;

      // Find which district contains this building center using fast bbox pre-filter
      const district = this.findDistrictForPointFast(building.center, districtBBoxes);
      if (district && districtDataMap.has(district.id)) {
        const dData = districtDataMap.get(district.id)!;
        dData.pop += population;
        dData.jobs += jobs;
        dData.count++;
      } else {
        unassignedBuildingPop += population;
        unassignedBuildingJobs += jobs;
      }
    });

    const kmWidth = cityMap.width / cityMap.unitsPerKm;
    const kmHeight = cityMap.height / cityMap.unitsPerKm;
    const totalAreaKm2 = kmWidth * kmHeight;

    let totalPop = unassignedBuildingPop;
    let totalJobs = unassignedBuildingJobs;

    // District statistics with hybrid macro/micro demographic modeling:
    // Supports both explicit building aggregations and zoned urban density (targetDensity in people/km²)
    const districtStats = cityMap.districts.map(d => {
      const bData = districtDataMap.get(d.id) || { pop: 0, jobs: 0, count: 0 };
      const areaUnits = this.calculatePolygonArea(d.polygon);
      const areaKm2 = areaUnits / (cityMap.unitsPerKm * cityMap.unitsPerKm);

      // Zoned population based on targetDensity (e.g. 10,000 to 22,000 people/km² for dense urban boroughs)
      const targetDensity = d.targetDensity;
      const zonedPop = targetDensity && targetDensity > 0 ? Math.round(areaKm2 * targetDensity) : 0;

      // When targetDensity is set, it models the macro urban fabric; placed buildings represent detailed landmarks/blocks.
      // If explicit buildings exceed targetDensity, use explicit count.
      const population = Math.max(bData.pop, zonedPop);

      // Zoned employment capacity based on district zoning archetype
      let zonedJobs = 0;
      if (targetDensity && targetDensity > 0) {
        switch (d.type) {
          case 'commercial':
            zonedJobs = Math.round(areaKm2 * Math.max(targetDensity * 1.3, 12000));
            break;
          case 'industrial':
            zonedJobs = Math.round(areaKm2 * Math.max(targetDensity * 1.5, 4500));
            break;
          case 'academic':
            zonedJobs = Math.round(areaKm2 * Math.max(targetDensity * 0.7, 6000));
            break;
          case 'civic':
            zonedJobs = Math.round(areaKm2 * Math.max(targetDensity * 0.8, 7000));
            break;
          case 'historic':
          case 'waterfront':
            zonedJobs = Math.round(population * 0.35);
            break;
          case 'residential':
          default:
            zonedJobs = Math.round(population * 0.12); // Local neighborhood services & retail
            break;
        }
      }

      const jobs = Math.max(bData.jobs, zonedJobs);
      const density = areaKm2 > 0 ? Math.round(population / areaKm2) : 0;

      totalPop += population;
      totalJobs += jobs;

      return {
        districtId: d.id,
        districtName: d.name,
        population,
        jobs,
        buildingCount: bData.count,
        densityPerKm2: density,
        targetDensity: d.targetDensity,
        areaKm2: parseFloat(areaKm2.toFixed(2))
      };
    });

    const averageDensityPerKm2 = totalAreaKm2 > 0 ? Math.round(totalPop / totalAreaKm2) : 0;
    const jobsToHousingRatio = totalPop > 0 ? parseFloat((totalJobs / (totalPop * 0.55 || 1)).toFixed(2)) : 0;

    // Realism feedback diagnostics (including metropolitan / 1M population scale checks)
    const realismAnalysis = this.generateRealismFeedback(cityMap, totalPop, totalJobs, jobsToHousingRatio, districtStats, totalAreaKm2, averageDensityPerKm2);

    return {
      totalPopulation: totalPop,
      totalJobs: totalJobs,
      residentialBuildingsCount: resCount,
      commercialBuildingsCount: comCount,
      industrialBuildingsCount: indCount,
      institutionalBuildingsCount: instCount,
      jobsToHousingRatio,
      totalAreaKm2: parseFloat(totalAreaKm2.toFixed(2)),
      averageDensityPerKm2,
      districtStats,
      realismAnalysis
    };
  }

  estimateBuildingPopAndJobs(building: Building, era: CityMap['era']): { population: number; jobs: number } {
    const floors = Math.max(1, building.floors || 1);
    const units = building.unitCount || floors * 4;

    // Era modifiers (e.g. Victorian/Medieval had higher density per household, Sci-Fi may have automation)
    let popPerUnit = 2.4;
    if (era === 'victorian_steampunk') popPerUnit = 3.5;
    if (era === 'medieval') popPerUnit = 4.5;
    if (era === 'cyberpunk_scifi') popPerUnit = 1.8;

    let population = 0;
    let jobs = 0;

    switch (building.type) {
      case 'residential_house':
        population = Math.round(units * (era === 'victorian_steampunk' ? 4 : 2.8));
        jobs = 0;
        break;

      case 'residential_apartment':
        population = Math.round(units * popPerUnit);
        jobs = Math.round(floors * 0.5); // Building superintendent / maintenance
        break;

      case 'residential_highrise':
        population = Math.round(units * (popPerUnit * 0.9));
        jobs = Math.round(floors * 1.5);
        break;

      case 'commercial_retail':
        population = 0;
        jobs = Math.round(units * 3.5); // Retail clerks, managers
        break;

      case 'commercial_office':
        population = 0;
        jobs = Math.round(units * 8); // Office workers per suite
        break;

      case 'industrial':
        population = 0;
        jobs = Math.round(units * 12); // Factory workers, dockers
        break;

      case 'institutional':
        // Differentiate by name keywords
        const lowerName = building.name.toLowerCase();
        if (lowerName.includes('university') || lowerName.includes('college')) {
          population = Math.round(units * 8); // Students in residency
          jobs = Math.round(units * 6); // Professors, staff
        } else if (lowerName.includes('hospital') || lowerName.includes('asylum')) {
          population = Math.round(units * 4); // In-patients
          jobs = Math.round(units * 10); // Doctors, nurses
        } else if (lowerName.includes('library') || lowerName.includes('archives')) {
          population = 0;
          jobs = Math.round(units * 2);
        } else if (lowerName.includes('parliament') || lowerName.includes('city hall') || lowerName.includes('court')) {
          population = 0;
          jobs = Math.round(units * 5);
        } else {
          population = 0;
          jobs = Math.round(units * 4);
        }
        break;

      case 'mixed_use':
        // 1st floor retail, upper floors residential
        const retailJobs = 12;
        const upperUnits = Math.max(1, floors - 1) * 4;
        population = Math.round(upperUnits * popPerUnit);
        jobs = retailJobs;
        break;
    }

    return { population, jobs };
  }

  private isResidential(type: Building['type']): boolean {
    return type === 'residential_house' || type === 'residential_apartment' || type === 'residential_highrise' || type === 'mixed_use';
  }

  private isCommercial(type: Building['type']): boolean {
    return type === 'commercial_retail' || type === 'commercial_office';
  }

  private generateRealismFeedback(
    cityMap: CityMap,
    totalPop: number,
    totalJobs: number,
    jobsToLaborRatio: number,
    districtStats: PopulationStats['districtStats'],
    totalAreaKm2: number,
    averageDensityPerKm2: number
  ): PopulationStats['realismAnalysis'] {
    const feedback: PopulationStats['realismAnalysis'] = [];

    if (totalPop === 0 && totalJobs === 0) {
      feedback.push({
        title: 'Empty City',
        score: 'info',
        message: 'No buildings or zoned districts placed yet. Add districts with target density or place residential and commercial buildings to see demographic estimates.'
      });
      return feedback;
    }

    // 1. Economic Equilibrium: Jobs-to-Labor Ratio
    if (jobsToLaborRatio > 1.4) {
      feedback.push({
        title: 'Job-Rich Commuter Hub',
        score: 'warning',
        message: `Jobs (${totalJobs.toLocaleString()}) significantly exceed local workforce (~${Math.round(totalPop * 0.55).toLocaleString()}). Expect heavy morning commuter traffic arriving from outside the city or across bridges.`
      });
    } else if (jobsToLaborRatio < 0.6 && totalPop > 200) {
      feedback.push({
        title: 'Bedroom Community / Residential Overweight',
        score: 'warning',
        message: `Local jobs (${totalJobs.toLocaleString()}) are low compared to population (${totalPop.toLocaleString()}). Residents likely commute to neighboring cities or downtown cores for work.`
      });
    } else {
      feedback.push({
        title: 'Balanced Employment & Housing',
        score: 'good',
        message: `Strong economic equilibrium (Ratio: ${jobsToLaborRatio}). The city can support its workforce (~${Math.round(totalPop * 0.55).toLocaleString()}) with ${totalJobs.toLocaleString()} jobs.`
      });
    }

    // 2. Metropolitan / 1-Million Population Scale Diagnostics
    if (totalPop >= 500000) {
      // Scale & Density Plausibility Check
      if (averageDensityPerKm2 > 35000 && cityMap.era !== 'cyberpunk_scifi') {
        feedback.push({
          title: 'Extreme Megacity Density',
          score: 'warning',
          message: `At ${averageDensityPerKm2.toLocaleString()} people/km² across ${totalAreaKm2} km², urban density exceeds almost all real-world metropolises (e.g. Manhattan: ~28,000/km², Paris: ~20,000/km²). For realistic urban scaling, expand map bounds to at least 50–150 km² or add outer boroughs.`
        });
      } else if (averageDensityPerKm2 < 1200) {
        feedback.push({
          title: 'Low-Density Metropolitan Sprawl',
          score: 'info',
          message: `Average density (${averageDensityPerKm2.toLocaleString()} people/km²) reflects expansive, car-dependent suburban sprawl across ${totalAreaKm2} km². Realistic for modern Sun Belt cities, but requires extensive highways.`
        });
      } else {
        feedback.push({
          title: 'Realistic Metropolitan Scale',
          score: 'good',
          message: `Urban density (${averageDensityPerKm2.toLocaleString()} people/km² across ${totalAreaKm2} km²) realistically mirrors major global capitals (e.g. Tokyo, London, Barcelona) for a 1-million resident metropolis.`
        });
      }

      // Transit Backbone Check for 1M Scale
      const transitLineCount = cityMap.transitLines.length;
      const stationCount = cityMap.transitStations.length;
      const transferHubs = cityMap.transitStations.filter(s => s.isTransferHub || (s.lineIds && s.lineIds.length >= 2)).length;

      if (transitLineCount === 0) {
        feedback.push({
          title: 'Severe Transit Deficit (1M+ Scale)',
          score: 'warning',
          message: `A metropolis of ${totalPop.toLocaleString()} residents cannot function on surface streets alone. Without rapid transit (subways, commuter rail, light rail), surface traffic would face permanent gridlock.`
        });
      } else if (transitLineCount < 3 || stationCount < 8) {
        feedback.push({
          title: 'Underdeveloped Transit Grid',
          score: 'warning',
          message: `With only ${transitLineCount} transit line(s) and ${stationCount} stations, rapid transit coverage is limited for a 1-million population. Add complementary cross-town lines and multi-line transfer hubs.`
        });
      } else {
        feedback.push({
          title: 'High-Capacity Mass Transit Backbone',
          score: 'good',
          message: `Robust transit grid (${transitLineCount} lines, ${stationCount} stations, ${transferHubs} transfer hubs) provides the commuter throughput required to link residential boroughs to commercial job centers.`
        });
      }

      // Metropolitan Civic & Healthcare Anchors
      const namedInstitutions = cityMap.buildings.filter(b => b.isLandmark || b.type === 'institutional');
      if (namedInstitutions.length < 4) {
        feedback.push({
          title: 'Metropolitan Civic Infrastructure',
          score: 'info',
          message: `A city of ${totalPop.toLocaleString()} residents typically requires multiple major hospitals, university campuses, federal/city halls, and cultural landmarks. Currently only ${namedInstitutions.length} mapped.`
        });
      } else {
        feedback.push({
          title: 'Comprehensive Metropolitan Anchors',
          score: 'good',
          message: `${namedInstitutions.length} major civic institutions and landmarks provide essential governance, healthcare, and higher education for a 1-million populace.`
        });
      }
    } else {
      // Smaller City Landmark & Transit Desert Checks
      const highDensityDistricts = districtStats.filter(d => d.densityPerKm2 > 8000);
      const stationLocations = cityMap.transitStations.map(s => s.location);

      highDensityDistricts.forEach(hd => {
        const districtObj = cityMap.districts.find(d => d.id === hd.districtId);
        if (districtObj) {
          const hasStation = stationLocations.some(loc => this.isPointInPolygon(loc, districtObj.polygon));
          if (!hasStation) {
            feedback.push({
              title: `Transit Desert: ${hd.districtName}`,
              score: 'warning',
              message: `High density (${hd.densityPerKm2.toLocaleString()} people/km²) with no public transit station inside the district. Consider adding a metro or tram stop.`
            });
          }
        }
      });

      const namedInstitutions = cityMap.buildings.filter(b => b.isLandmark || b.type === 'institutional');
      if (namedInstitutions.length >= 3) {
        feedback.push({
          title: 'Rich Civic Anchors',
          score: 'good',
          message: `Great world-building texture! ${namedInstitutions.length} civic institutions and landmarks give readers distinct waypoints and narrative anchors.`
        });
      } else {
        feedback.push({
          title: 'Needs Key Landmarks',
          score: 'info',
          message: 'Consider naming specific iconic buildings (e.g. University, Grand Library, Old Cathedral, Town Hall) to give readers memorable orientation points.'
        });
      }
    }

    return feedback;
  }

  findDistrictForPoint(point: Point2D, districts: District[]): District | undefined {
    for (let i = 0; i < districts.length; i++) {
      const d = districts[i];
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (let j = 0; j < d.polygon.length; j++) {
        const pt = d.polygon[j];
        if (pt.x < minX) minX = pt.x;
        if (pt.x > maxX) maxX = pt.x;
        if (pt.y < minY) minY = pt.y;
        if (pt.y > maxY) maxY = pt.y;
      }
      if (point.x < minX || point.x > maxX || point.y < minY || point.y > maxY) {
        continue;
      }
      if (this.isPointInPolygon(point, d.polygon)) {
        return d;
      }
    }
    return undefined;
  }

  private findDistrictForPointFast(point: Point2D, districtBBoxes: DistrictBBox[]): District | undefined {
    for (let i = 0; i < districtBBoxes.length; i++) {
      const b = districtBBoxes[i];
      if (point.x < b.minX || point.x > b.maxX || point.y < b.minY || point.y > b.maxY) {
        continue;
      }
      if (this.isPointInPolygon(point, b.district.polygon)) {
        return b.district;
      }
    }
    return undefined;
  }

  isPointInPolygon(p: Point2D, polygon: Point2D[]): boolean {
    if (!polygon || polygon.length < 3) return false;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x, yi = polygon[i].y;
      const xj = polygon[j].x, yj = polygon[j].y;

      const intersect = ((yi > p.y) !== (yj > p.y)) &&
        (p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }

  calculatePolygonArea(polygon: Point2D[]): number {
    if (!polygon || polygon.length < 3) return 0;
    let area = 0;
    for (let i = 0; i < polygon.length; i++) {
      const j = (i + 1) % polygon.length;
      area += polygon[i].x * polygon[j].y;
      area -= polygon[j].x * polygon[i].y;
    }
    return Math.abs(area / 2);
  }
}
