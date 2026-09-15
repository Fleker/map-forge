import { Injectable } from '@angular/core';
import { Building, CityMap, District, Point2D, PopulationStats } from '../models/map.models';

@Injectable({
  providedIn: 'root'
})
export class DemographicsService {

  calculateStats(cityMap: CityMap): PopulationStats {
    let totalPop = 0;
    let totalJobs = 0;
    let resCount = 0;
    let comCount = 0;
    let indCount = 0;
    let instCount = 0;

    // Track district populations and jobs
    const districtDataMap = new Map<string, { pop: number; jobs: number; count: number }>();
    cityMap.districts.forEach(d => {
      districtDataMap.set(d.id, { pop: 0, jobs: 0, count: 0 });
    });

    cityMap.buildings.forEach(building => {
      const { population, jobs } = this.estimateBuildingPopAndJobs(building, cityMap.era);
      totalPop += population;
      totalJobs += jobs;

      if (this.isResidential(building.type)) resCount++;
      if (this.isCommercial(building.type)) comCount++;
      if (building.type === 'industrial') indCount++;
      if (building.type === 'institutional') instCount++;

      // Find which district contains this building center
      const district = this.findDistrictForPoint(building.center, cityMap.districts);
      if (district && districtDataMap.has(district.id)) {
        const dData = districtDataMap.get(district.id)!;
        dData.pop += population;
        dData.jobs += jobs;
        dData.count++;
      }
    });

    const kmWidth = cityMap.width / cityMap.unitsPerKm;
    const kmHeight = cityMap.height / cityMap.unitsPerKm;
    const totalAreaKm2 = kmWidth * kmHeight;
    const averageDensityPerKm2 = totalAreaKm2 > 0 ? Math.round(totalPop / totalAreaKm2) : 0;
    const jobsToHousingRatio = totalPop > 0 ? parseFloat((totalJobs / (totalPop * 0.55 || 1)).toFixed(2)) : 0;

    // District statistics
    const districtStats = cityMap.districts.map(d => {
      const data = districtDataMap.get(d.id) || { pop: 0, jobs: 0, count: 0 };
      const areaUnits = this.calculatePolygonArea(d.polygon);
      const areaKm2 = areaUnits / (cityMap.unitsPerKm * cityMap.unitsPerKm);
      const density = areaKm2 > 0 ? Math.round(data.pop / areaKm2) : 0;
      return {
        districtId: d.id,
        districtName: d.name,
        population: data.pop,
        jobs: data.jobs,
        buildingCount: data.count,
        densityPerKm2: density
      };
    });

    // Realism feedback diagnostics
    const realismAnalysis = this.generateRealismFeedback(cityMap, totalPop, totalJobs, jobsToHousingRatio, districtStats);

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
    districtStats: PopulationStats['districtStats']
  ): PopulationStats['realismAnalysis'] {
    const feedback: PopulationStats['realismAnalysis'] = [];

    if (totalPop === 0 && totalJobs === 0) {
      feedback.push({
        title: 'Empty City',
        score: 'info',
        message: 'No buildings placed yet. Add residential and commercial buildings to see realistic population and economic estimates.'
      });
      return feedback;
    }

    // Check Jobs-to-Labor Ratio
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
        message: `Strong economic equilibrium (Ratio: ${jobsToLaborRatio}). The city can support its workforce with healthy internal mobility.`
      });
    }

    // Check Transit Station Coverage vs High-Density
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

    // Check Named Landmark Presence
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

    return feedback;
  }

  findDistrictForPoint(point: Point2D, districts: District[]): District | undefined {
    return districts.find(d => this.isPointInPolygon(point, d.polygon));
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
