import { CityMap } from '../models/map.models';

export const AETHELBURG_PRESET: CityMap = {
  version: '1.0.0',
  id: 'aethelburg-prime',
  name: 'City of Aethelburg',
  author: 'Arthur Vance',
  era: 'victorian_steampunk',
  description: 'A grand riverfront metropolis powered by steam, academia, and maritime commerce.',
  width: 2000,
  height: 2000,
  unitsPerKm: 500, // 500 units = 1km (4km x 4km world)
  naturalFeatures: [
    {
      id: 'river-aethel',
      name: 'River Aethel',
      type: 'river',
      polygon: [
        { x: 0, y: 700 },
        { x: 400, y: 750 },
        { x: 800, y: 880 },
        { x: 1200, y: 920 },
        { x: 1600, y: 1100 },
        { x: 2000, y: 1150 },
        { x: 2000, y: 1300 },
        { x: 1600, y: 1250 },
        { x: 1200, y: 1070 },
        { x: 800, y: 1030 },
        { x: 400, y: 900 },
        { x: 0, y: 850 },
      ],
      color: '#4a7c9d'
    },
    {
      id: 'blackthorn-park',
      name: 'Blackthorn Botanical Gardens',
      type: 'park',
      polygon: [
        { x: 500, y: 350 },
        { x: 850, y: 350 },
        { x: 850, y: 650 },
        { x: 500, y: 650 }
      ],
      color: '#4e8752'
    },
    {
      id: 'kings-green',
      name: "King's Green",
      type: 'park',
      polygon: [
        { x: 1150, y: 300 },
        { x: 1450, y: 300 },
        { x: 1450, y: 550 },
        { x: 1150, y: 550 }
      ],
      color: '#4e8752'
    }
  ],
  districts: [
    {
      id: 'dist-university',
      name: 'University Quarter',
      description: 'Ancient halls of arcane sciences, libraries, and lively student taverns.',
      type: 'academic',
      polygon: [
        { x: 200, y: 200 },
        { x: 950, y: 200 },
        { x: 950, y: 720 },
        { x: 200, y: 720 }
      ],
      color: '#7b5294',
      fillOpacity: 0.15,
      targetDensity: 9000
    },
    {
      id: 'dist-oldtown',
      name: 'Old Aethelburg (Crown District)',
      description: 'Cobblestone avenues, the Royal Parliament, Cathedral of Saint Jude, and noble estates.',
      type: 'historic',
      polygon: [
        { x: 950, y: 200 },
        { x: 1750, y: 200 },
        { x: 1750, y: 850 },
        { x: 950, y: 850 }
      ],
      color: '#c48834',
      fillOpacity: 0.15,
      targetDensity: 12000
    },
    {
      id: 'dist-docks',
      name: 'Iron Docks & Wharves',
      description: 'Shipyards, steam warehouses, customs offices, and the sailors guild.',
      type: 'industrial',
      polygon: [
        { x: 200, y: 920 },
        { x: 1000, y: 1050 },
        { x: 1000, y: 1700 },
        { x: 200, y: 1700 }
      ],
      color: '#8b5a3c',
      fillOpacity: 0.15,
      targetDensity: 4500
    },
    {
      id: 'dist-foundry',
      name: 'The Foundry District',
      description: 'Smokestacks, rail yards, brass foundries, and worker tenements.',
      type: 'industrial',
      polygon: [
        { x: 1000, y: 1100 },
        { x: 1800, y: 1280 },
        { x: 1800, y: 1800 },
        { x: 1000, y: 1800 }
      ],
      color: '#63707e',
      fillOpacity: 0.15,
      targetDensity: 14000
    }
  ],
  roads: [
    // Major Avenues
    {
      id: 'rd-high-street',
      name: 'Grand High Street',
      type: 'avenue',
      path: [
        { x: 150, y: 500 },
        { x: 600, y: 500 },
        { x: 1050, y: 500 },
        { x: 1400, y: 500 },
        { x: 1850, y: 500 }
      ],
      lanes: 4,
      speedLimitKmH: 50
    },
    {
      id: 'rd-kings-way',
      name: "King's Way",
      type: 'avenue',
      path: [
        { x: 1350, y: 150 },
        { x: 1350, y: 500 },
        { x: 1350, y: 1000 },
        { x: 1350, y: 1850 }
      ],
      lanes: 4,
      speedLimitKmH: 50
    },
    {
      id: 'rd-bridge-swords',
      name: 'Bridge of Swords',
      type: 'bridge',
      path: [
        { x: 1050, y: 800 },
        { x: 1050, y: 1150 }
      ],
      lanes: 4,
      speedLimitKmH: 40
    },
    {
      id: 'rd-iron-bridge',
      name: 'Steam Foundry Bridge',
      type: 'bridge',
      path: [
        { x: 550, y: 720 },
        { x: 550, y: 970 }
      ],
      lanes: 2,
      speedLimitKmH: 35
    },
    {
      id: 'rd-university-way',
      name: 'University Way',
      type: 'main_street',
      path: [
        { x: 400, y: 180 },
        { x: 400, y: 500 },
        { x: 400, y: 720 }
      ],
      lanes: 2,
      speedLimitKmH: 30
    },
    {
      id: 'rd-philosophers-walk',
      name: "Philosopher's Walk",
      type: 'pedestrian',
      path: [
        { x: 300, y: 350 },
        { x: 500, y: 350 },
        { x: 500, y: 500 }
      ],
      lanes: 1,
      speedLimitKmH: 15
    },
    {
      id: 'rd-river-quay-north',
      name: 'North River Quay',
      type: 'main_street',
      path: [
        { x: 150, y: 700 },
        { x: 550, y: 720 },
        { x: 1050, y: 800 },
        { x: 1550, y: 1020 },
        { x: 1850, y: 1070 }
      ],
      lanes: 2,
      speedLimitKmH: 40
    },
    {
      id: 'rd-dock-boulevard',
      name: 'Dockside Boulevard',
      type: 'avenue',
      path: [
        { x: 150, y: 950 },
        { x: 550, y: 970 },
        { x: 1050, y: 1150 },
        { x: 1550, y: 1300 },
        { x: 1850, y: 1350 }
      ],
      lanes: 4,
      speedLimitKmH: 45
    },
    {
      id: 'rd-foundry-row',
      name: 'Foundry Row',
      type: 'main_street',
      path: [
        { x: 1050, y: 1150 },
        { x: 1050, y: 1650 },
        { x: 1650, y: 1650 }
      ],
      lanes: 2,
      speedLimitKmH: 35
    },
    {
      id: 'rd-cathedral-close',
      name: 'Cathedral Close',
      type: 'local_street',
      path: [
        { x: 1050, y: 350 },
        { x: 1350, y: 350 },
        { x: 1650, y: 350 }
      ],
      lanes: 2,
      speedLimitKmH: 30
    },
    {
      id: 'rd-parliament-crescent',
      name: 'Parliament Crescent',
      type: 'main_street',
      path: [
        { x: 1350, y: 350 },
        { x: 1550, y: 420 },
        { x: 1550, y: 650 },
        { x: 1350, y: 650 }
      ],
      lanes: 2,
      speedLimitKmH: 30
    }
  ],
  transitStations: [
    {
      id: 'st-central',
      name: 'Aethelburg Grand Central',
      type: 'metro',
      location: { x: 1050, y: 500 },
      lineIds: ['line-steam-underground', 'line-tram-crown'],
      isTransferHub: true
    },
    {
      id: 'st-university',
      name: 'University Gates Station',
      type: 'metro',
      location: { x: 400, y: 500 },
      lineIds: ['line-steam-underground'],
      isTransferHub: false
    },
    {
      id: 'st-parliament',
      name: 'Crown Parliament Station',
      type: 'metro',
      location: { x: 1550, y: 500 },
      lineIds: ['line-steam-underground'],
      isTransferHub: false
    },
    {
      id: 'st-docks-south',
      name: 'Harbor Gate Station',
      type: 'tram',
      location: { x: 550, y: 970 },
      lineIds: ['line-tram-crown'],
      isTransferHub: false
    },
    {
      id: 'st-foundry-central',
      name: 'Iron Foundry Terminus',
      type: 'tram',
      location: { x: 1050, y: 1400 },
      lineIds: ['line-tram-crown'],
      isTransferHub: false
    }
  ],
  transitLines: [
    {
      id: 'line-steam-underground',
      name: 'Imperial Underground (Line 1)',
      type: 'metro',
      color: '#c0392b',
      frequencyMins: 5,
      stationIds: ['st-university', 'st-central', 'st-parliament'],
      path: [
        { x: 400, y: 500 },
        { x: 1050, y: 500 },
        { x: 1550, y: 500 }
      ]
    },
    {
      id: 'line-tram-crown',
      name: 'Steam Tram (North-South Loop)',
      type: 'tram',
      color: '#27ae60',
      frequencyMins: 8,
      stationIds: ['st-central', 'st-docks-south', 'st-foundry-central'],
      path: [
        { x: 1050, y: 500 },
        { x: 1050, y: 800 },
        { x: 550, y: 970 },
        { x: 1050, y: 1150 },
        { x: 1050, y: 1400 }
      ]
    }
  ],
  buildings: [
    // University & Academic
    {
      id: 'bld-university-main',
      name: 'Aethelburg Royal University (Main Quad)',
      type: 'institutional',
      footprint: [
        { x: 260, y: 250 },
        { x: 460, y: 250 },
        { x: 460, y: 420 },
        { x: 260, y: 420 }
      ],
      center: { x: 360, y: 335 },
      floors: 4,
      unitCount: 80,
      notes: 'Founded in 1642. The Great Clock of the Quad chimed during the prologue duel.',
      chapterReferences: ['Prologue', 'Chapter 4: The Alchemical Thesis'],
      isLandmark: true
    },
    {
      id: 'bld-grand-library',
      name: 'The Great Archives & Grand Library',
      type: 'institutional',
      footprint: [
        { x: 520, y: 250 },
        { x: 720, y: 250 },
        { x: 720, y: 380 },
        { x: 520, y: 380 }
      ],
      center: { x: 620, y: 315 },
      floors: 5,
      unitCount: 40,
      notes: 'Contains underground restricted vault where the forbidden astrological charts are locked.',
      chapterReferences: ['Chapter 7: Shadows in the Stacks'],
      isLandmark: true
    },
    {
      id: 'bld-student-dorm-1',
      name: 'Oswald Hall (Student Residences)',
      type: 'residential_apartment',
      footprint: [
        { x: 260, y: 480 },
        { x: 380, y: 480 },
        { x: 380, y: 620 },
        { x: 260, y: 620 }
      ],
      center: { x: 320, y: 550 },
      floors: 4,
      unitCount: 64,
      notes: 'Where Marcus and Evelyn rent their second-floor flat.'
    },
    {
      id: 'bld-student-dorm-2',
      name: 'Blackthorn Student Flats',
      type: 'residential_apartment',
      footprint: [
        { x: 420, y: 550 },
        { x: 540, y: 550 },
        { x: 540, y: 680 },
        { x: 420, y: 680 }
      ],
      center: { x: 480, y: 615 },
      floors: 5,
      unitCount: 80
    },
    // Civic & Historic
    {
      id: 'bld-cathedral',
      name: "Cathedral of Saint Jude of the Waters",
      type: 'institutional',
      footprint: [
        { x: 1120, y: 250 },
        { x: 1280, y: 250 },
        { x: 1280, y: 450 },
        { x: 1120, y: 450 }
      ],
      center: { x: 1200, y: 350 },
      floors: 3,
      unitCount: 20,
      notes: 'Gothic spires rise 110 meters. The bell tower serves as a navigational landmark.',
      chapterReferences: ['Chapter 12: Sanctuary'],
      isLandmark: true
    },
    {
      id: 'bld-parliament',
      name: 'Crown Parliament & Ministry of Works',
      type: 'institutional',
      footprint: [
        { x: 1400, y: 250 },
        { x: 1680, y: 250 },
        { x: 1680, y: 420 },
        { x: 1400, y: 420 }
      ],
      center: { x: 1540, y: 335 },
      floors: 4,
      unitCount: 120,
      notes: 'Seat of the Prime Minister and the Guild Council.',
      chapterReferences: ['Chapter 2: The Ministry Order'],
      isLandmark: true
    },
    {
      id: 'bld-city-hall',
      name: 'Aethelburg Town Hall & Magistracy',
      type: 'institutional',
      footprint: [
        { x: 920, y: 380 },
        { x: 1040, y: 380 },
        { x: 1040, y: 480 },
        { x: 920, y: 480 }
      ],
      center: { x: 980, y: 430 },
      floors: 3,
      unitCount: 50,
      isLandmark: true
    },
    // Commercial / Retail
    {
      id: 'bld-grand-bazaar',
      name: 'The Royal Arcade & Clocktower Market',
      type: 'commercial_retail',
      footprint: [
        { x: 1080, y: 540 },
        { x: 1300, y: 540 },
        { x: 1300, y: 680 },
        { x: 1080, y: 680 }
      ],
      center: { x: 1190, y: 610 },
      floors: 3,
      unitCount: 45,
      notes: 'Bustling glass-roofed arcade of jewelers, bookbinders, and clockmakers.',
      chapterReferences: ['Chapter 5: The Silver Pocketwatch'],
      isLandmark: true
    },
    {
      id: 'bld-crown-hotel',
      name: 'The Imperial Grand Hotel',
      type: 'commercial_office',
      footprint: [
        { x: 1400, y: 540 },
        { x: 1580, y: 540 },
        { x: 1580, y: 680 },
        { x: 1400, y: 680 }
      ],
      center: { x: 1490, y: 610 },
      floors: 6,
      unitCount: 110,
      notes: 'Luxury hotel where foreign diplomats and airship captains lodge.'
    },
    // Old Town Residential
    {
      id: 'bld-noble-terraces-1',
      name: "Belgrave Terraces (High Residences)",
      type: 'residential_apartment',
      footprint: [
        { x: 1620, y: 420 },
        { x: 1740, y: 420 },
        { x: 1740, y: 680 },
        { x: 1620, y: 680 }
      ],
      center: { x: 1680, y: 550 },
      floors: 4,
      unitCount: 48
    },
    {
      id: 'bld-merchant-flats',
      name: "Saint Jude's Mansions",
      type: 'residential_apartment',
      footprint: [
        { x: 1120, y: 720 },
        { x: 1320, y: 720 },
        { x: 1320, y: 820 },
        { x: 1120, y: 820 }
      ],
      center: { x: 1220, y: 770 },
      floors: 5,
      unitCount: 60
    },
    // Docks & Industrial
    {
      id: 'bld-customs-house',
      name: 'Port Customs & Admiralty House',
      type: 'institutional',
      footprint: [
        { x: 300, y: 980 },
        { x: 480, y: 980 },
        { x: 480, y: 1100 },
        { x: 300, y: 1100 }
      ],
      center: { x: 390, y: 1040 },
      floors: 3,
      unitCount: 35,
      isLandmark: true
    },
    {
      id: 'bld-wharf-warehouse-1',
      name: 'North Wharf Grain & Spice Depot',
      type: 'industrial',
      footprint: [
        { x: 600, y: 1020 },
        { x: 860, y: 1020 },
        { x: 860, y: 1180 },
        { x: 600, y: 1180 }
      ],
      center: { x: 730, y: 1100 },
      floors: 2,
      unitCount: 20
    },
    {
      id: 'bld-wharf-warehouse-2',
      name: 'Steam Packet Freight Terminal',
      type: 'industrial',
      footprint: [
        { x: 300, y: 1160 },
        { x: 550, y: 1160 },
        { x: 550, y: 1350 },
        { x: 300, y: 1350 }
      ],
      center: { x: 425, y: 1255 },
      floors: 2,
      unitCount: 25
    },
    {
      id: 'bld-dock-workers-tenements',
      name: 'Pelican Row Worker Tenements',
      type: 'residential_highrise',
      footprint: [
        { x: 620, y: 1240 },
        { x: 880, y: 1240 },
        { x: 880, y: 1480 },
        { x: 620, y: 1480 }
      ],
      center: { x: 750, y: 1360 },
      floors: 6,
      unitCount: 140,
      notes: 'Crowded tenements where the Dockers Union organized the General Strike.'
    },
    // Foundry District
    {
      id: 'bld-ironworks',
      name: 'Aethel Steam & Ironworks Foundry',
      type: 'industrial',
      footprint: [
        { x: 1120, y: 1220 },
        { x: 1480, y: 1220 },
        { x: 1480, y: 1480 },
        { x: 1120, y: 1480 }
      ],
      center: { x: 1300, y: 1350 },
      floors: 3,
      unitCount: 90,
      notes: 'Massive blast furnaces smelting locomotive boilers and armor plate.',
      chapterReferences: ['Chapter 9: The Red Glow of the Furnace'],
      isLandmark: true
    },
    {
      id: 'bld-foundry-tenements',
      name: 'Cinderblock Tenements',
      type: 'residential_highrise',
      footprint: [
        { x: 1120, y: 1540 },
        { x: 1380, y: 1540 },
        { x: 1380, y: 1720 },
        { x: 1120, y: 1720 }
      ],
      center: { x: 1250, y: 1630 },
      floors: 7,
      unitCount: 180
    },
    {
      id: 'bld-locomotive-works',
      name: 'Great Western Locomotive Works',
      type: 'industrial',
      footprint: [
        { x: 1440, y: 1540 },
        { x: 1740, y: 1540 },
        { x: 1740, y: 1740 },
        { x: 1440, y: 1740 }
      ],
      center: { x: 1590, y: 1640 },
      floors: 2,
      unitCount: 60
    }
  ],
  pois: [
    {
      id: 'poi-tavern',
      name: 'The Brass Kettle Tavern',
      category: 'tavern_food',
      location: { x: 450, y: 470 },
      icon: 'beer',
      description: 'Favorite drinking den of university lecturers and rogue engineers.',
      chapterReference: 'Chapter 1: A Poured Pint'
    },
    {
      id: 'poi-safehouse',
      name: "The Miller's Cellar (Safehouse)",
      category: 'danger_secret',
      location: { x: 780, y: 1320 },
      icon: 'key',
      description: 'Secret underground cellar used by the courier resistance.',
      chapterReference: 'Chapter 8: The Sealed Letter'
    },
    {
      id: 'poi-clocktower',
      name: 'Old Archon Clocktower',
      category: 'landmark',
      location: { x: 1350, y: 480 },
      icon: 'clock',
      description: 'The tallest mechanical timepiece in the eastern provinces.',
      chapterReference: 'Chapter 11: The Midnight Chime'
    },
    {
      id: 'poi-admiralty-dock',
      name: 'Slipway No. 4 (Airship Mooring)',
      category: 'landmark',
      location: { x: 250, y: 1050 },
      icon: 'anchor',
      description: 'High tower where steam zeppelins tie up during trade winds.',
      chapterReference: 'Chapter 6: Arrival of the Borealis'
    }
  ],
  topography: [
    {
      id: 'topo-north-bluff',
      name: 'North Aethel Bluffs',
      type: 'cliff',
      elevation: 85,
      hachureFacing: 'right',
      path: [
        { x: 100, y: 1450 },
        { x: 450, y: 1520 },
        { x: 800, y: 1580 },
        { x: 1250, y: 1620 },
        { x: 1700, y: 1650 },
        { x: 1950, y: 1690 }
      ]
    },
    {
      id: 'topo-crest-ridge',
      name: "Archon's Ridge",
      type: 'ridge',
      elevation: 140,
      path: [
        { x: 300, y: 1750 },
        { x: 750, y: 1820 },
        { x: 1200, y: 1850 },
        { x: 1650, y: 1830 }
      ]
    },
    {
      id: 'topo-contour-50',
      name: '50m Elevation Contour',
      type: 'contour',
      elevation: 50,
      path: [
        { x: 50, y: 1350 },
        { x: 450, y: 1400 },
        { x: 900, y: 1430 },
        { x: 1350, y: 1480 },
        { x: 1800, y: 1510 },
        { x: 1950, y: 1530 }
      ]
    }
  ]
};

export const OAKHAVEN_PRESET: CityMap = {
  version: '1.0.0',
  id: 'oakhaven-town',
  name: 'Oakhaven Collegiate Town',
  author: 'S. K. Thorne',
  era: 'contemporary_modern',
  description: 'A cozy picturesque town centered around a historic liberal arts college, river canals, and indie bookshops.',
  width: 1500,
  height: 1500,
  unitsPerKm: 600,
  naturalFeatures: [
    {
      id: 'oak-canal',
      name: 'Oakhaven Canal',
      type: 'canal',
      polygon: [
        { x: 0, y: 650 },
        { x: 600, y: 680 },
        { x: 1100, y: 800 },
        { x: 1500, y: 850 },
        { x: 1500, y: 920 },
        { x: 1100, y: 870 },
        { x: 600, y: 750 },
        { x: 0, y: 720 }
      ],
      color: '#5599b8'
    },
    {
      id: 'memorial-park',
      name: 'Memorial Town Commons',
      type: 'park',
      polygon: [
        { x: 450, y: 250 },
        { x: 750, y: 250 },
        { x: 750, y: 550 },
        { x: 450, y: 550 }
      ],
      color: '#52965a'
    }
  ],
  districts: [
    {
      id: 'dist-campus',
      name: 'Oakhaven College Campus',
      description: 'Ivy-covered brick halls, dormitories, athletic grounds.',
      type: 'academic',
      polygon: [
        { x: 150, y: 150 },
        { x: 800, y: 150 },
        { x: 800, y: 620 },
        { x: 150, y: 620 }
      ],
      color: '#34495e',
      fillOpacity: 0.15,
      targetDensity: 6000
    },
    {
      id: 'dist-downtown',
      name: 'Downtown & Market Square',
      description: 'Pedestrian plaza, artisan coffee, bookstores, and boutique shops.',
      type: 'commercial',
      polygon: [
        { x: 800, y: 150 },
        { x: 1350, y: 150 },
        { x: 1350, y: 750 },
        { x: 800, y: 750 }
      ],
      color: '#e67e22',
      fillOpacity: 0.15,
      targetDensity: 8000
    },
    {
      id: 'dist-willows',
      name: 'The Willows Residential',
      description: 'Tree-lined avenues of Craftsman homes and family residences.',
      type: 'residential',
      polygon: [
        { x: 150, y: 800 },
        { x: 1350, y: 800 },
        { x: 1350, y: 1350 },
        { x: 150, y: 1350 }
      ],
      color: '#27ae60',
      fillOpacity: 0.15,
      targetDensity: 3500
    }
  ],
  roads: [
    {
      id: 'rd-college-ave',
      name: 'College Avenue',
      type: 'main_street',
      path: [
        { x: 100, y: 400 },
        { x: 500, y: 400 },
        { x: 900, y: 400 },
        { x: 1400, y: 400 }
      ],
      lanes: 2,
      speedLimitKmH: 40
    },
    {
      id: 'rd-main-st',
      name: 'Main Street',
      type: 'avenue',
      path: [
        { x: 900, y: 100 },
        { x: 900, y: 400 },
        { x: 900, y: 800 },
        { x: 900, y: 1400 }
      ],
      lanes: 2,
      speedLimitKmH: 45
    },
    {
      id: 'rd-canal-bridge',
      name: 'Canal Stone Bridge',
      type: 'bridge',
      path: [
        { x: 900, y: 740 },
        { x: 900, y: 880 }
      ],
      lanes: 2,
      speedLimitKmH: 30
    }
  ],
  transitStations: [
    {
      id: 'st-campus-stop',
      name: 'Campus Commons Bus Stop',
      type: 'bus',
      location: { x: 500, y: 400 },
      lineIds: ['line-town-shuttle']
    },
    {
      id: 'st-downtown-square',
      name: 'Town Square Transit Hub',
      type: 'bus',
      location: { x: 900, y: 400 },
      lineIds: ['line-town-shuttle'],
      isTransferHub: true
    },
    {
      id: 'st-willows-park',
      name: 'Willows South Station',
      type: 'bus',
      location: { x: 900, y: 1100 },
      lineIds: ['line-town-shuttle']
    }
  ],
  transitLines: [
    {
      id: 'line-town-shuttle',
      name: 'Oakhaven Green Bus Shuttle',
      type: 'bus',
      color: '#16a085',
      frequencyMins: 12,
      stationIds: ['st-campus-stop', 'st-downtown-square', 'st-willows-park'],
      path: [
        { x: 500, y: 400 },
        { x: 900, y: 400 },
        { x: 900, y: 1100 }
      ]
    }
  ],
  buildings: [
    {
      id: 'bld-oakhaven-library',
      name: 'Oakhaven Memorial Library',
      type: 'institutional',
      footprint: [
        { x: 250, y: 220 },
        { x: 420, y: 220 },
        { x: 420, y: 350 },
        { x: 250, y: 350 }
      ],
      center: { x: 335, y: 285 },
      floors: 3,
      unitCount: 30,
      isLandmark: true,
      notes: 'Old wood-paneled reading rooms with stained glass windows.'
    },
    {
      id: 'bld-oakhaven-hall',
      name: 'Founders Academic Hall',
      type: 'institutional',
      footprint: [
        { x: 250, y: 450 },
        { x: 440, y: 450 },
        { x: 440, y: 580 },
        { x: 250, y: 580 }
      ],
      center: { x: 345, y: 515 },
      floors: 4,
      unitCount: 45,
      isLandmark: true
    },
    {
      id: 'bld-town-hall-oak',
      name: 'Oakhaven Municipal Building',
      type: 'institutional',
      footprint: [
        { x: 950, y: 220 },
        { x: 1100, y: 220 },
        { x: 1100, y: 340 },
        { x: 950, y: 340 }
      ],
      center: { x: 1025, y: 280 },
      floors: 2,
      unitCount: 25,
      isLandmark: true
    },
    {
      id: 'bld-indie-books',
      name: 'The Whispering Page Bookshop & Café',
      type: 'commercial_retail',
      footprint: [
        { x: 950, y: 440 },
        { x: 1080, y: 440 },
        { x: 1080, y: 540 },
        { x: 950, y: 540 }
      ],
      center: { x: 1015, y: 490 },
      floors: 2,
      unitCount: 8,
      notes: 'Where protagonist works the weekend shift.'
    },
    {
      id: 'bld-willow-homes-1',
      name: 'Maple Crest Cottages',
      type: 'residential_house',
      footprint: [
        { x: 300, y: 900 },
        { x: 420, y: 900 },
        { x: 420, y: 1000 },
        { x: 300, y: 1000 }
      ],
      center: { x: 360, y: 950 },
      floors: 2,
      unitCount: 1
    },
    {
      id: 'bld-willow-homes-2',
      name: 'Elm Grove Residences',
      type: 'residential_house',
      footprint: [
        { x: 500, y: 900 },
        { x: 620, y: 900 },
        { x: 620, y: 1000 },
        { x: 500, y: 1000 }
      ],
      center: { x: 560, y: 950 },
      floors: 2,
      unitCount: 1
    }
  ],
  pois: [
    {
      id: 'poi-gazebo',
      name: 'Commons Victorian Gazebo',
      category: 'landmark',
      location: { x: 600, y: 400 },
      icon: 'umbrella',
      description: 'Centuries-old bandstand where weekly farmers market convenes.'
    }
  ],
  topography: [
    {
      id: 'topo-pine-ridge',
      name: 'Pine Crest Ridge',
      type: 'ridge',
      elevation: 120,
      path: [
        { x: 100, y: 1200 },
        { x: 500, y: 1280 },
        { x: 900, y: 1320 },
        { x: 1400, y: 1300 }
      ]
    },
    {
      id: 'topo-college-contour',
      name: '80m Elevation Contour',
      type: 'contour',
      elevation: 80,
      path: [
        { x: 200, y: 1050 },
        { x: 600, y: 1100 },
        { x: 1000, y: 1120 },
        { x: 1350, y: 1080 }
      ]
    }
  ]
};

export const BLANK_MAP_PRESET: CityMap = {
  version: '1.0.0',
  id: 'blank-slate',
  name: 'New Fictional City',
  author: 'Author',
  era: 'contemporary_modern',
  description: 'A blank canvas waiting for your world-building imagination.',
  width: 2000,
  height: 2000,
  unitsPerKm: 500,
  naturalFeatures: [],
  districts: [],
  roads: [],
  transitLines: [],
  transitStations: [],
  buildings: [],
  pois: [],
  topography: []
};
