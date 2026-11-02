import { CityMap } from '../models/map.models';

export const NOVARIA_METROPOLIS_PRESET: CityMap = {
  "version": "1.0.0",
  "id": "novaria-metropolis-1m",
  "name": "Metropolis of Novaria",
  "author": "Arthur Vance",
  "era": "contemporary_modern",
  "description": "A thriving coastal metropolis of over one million residents, featuring a high-capacity rapid transit grid, diverse boroughs, and balanced urban zoning.",
  "width": 8000,
  "height": 8000,
  "unitsPerKm": 500,
  "naturalFeatures": [
    {
      "id": "novaria-bay",
      "name": "Novaria Estuary & Outer Bay",
      "type": "ocean",
      "polygon": [
        {
          "x": 6200,
          "y": 0
        },
        {
          "x": 8000,
          "y": 0
        },
        {
          "x": 8000,
          "y": 4400
        },
        {
          "x": 7400,
          "y": 3800
        },
        {
          "x": 6200,
          "y": 2600
        }
      ],
      "color": "#2a4b6c"
    },
    {
      "id": "river-novaria",
      "name": "River Novaria",
      "type": "river",
      "polygon": [
        {
          "x": 0,
          "y": 2500
        },
        {
          "x": 1600,
          "y": 2600
        },
        {
          "x": 3000,
          "y": 2700
        },
        {
          "x": 4400,
          "y": 2650
        },
        {
          "x": 5600,
          "y": 2500
        },
        {
          "x": 6500,
          "y": 2400
        },
        {
          "x": 7600,
          "y": 2200
        },
        {
          "x": 7600,
          "y": 2550
        },
        {
          "x": 6500,
          "y": 2700
        },
        {
          "x": 5600,
          "y": 2850
        },
        {
          "x": 4400,
          "y": 2950
        },
        {
          "x": 3000,
          "y": 3000
        },
        {
          "x": 1600,
          "y": 2900
        },
        {
          "x": 0,
          "y": 2800
        }
      ],
      "color": "#326084"
    },
    {
      "id": "central-botanical-park",
      "name": "Aurelia Central Botanical Park",
      "type": "park",
      "polygon": [
        {
          "x": 3800,
          "y": 4500
        },
        {
          "x": 4400,
          "y": 4500
        },
        {
          "x": 4400,
          "y": 5500
        },
        {
          "x": 3800,
          "y": 5500
        }
      ],
      "color": "#2d6a4f"
    },
    {
      "id": "citadel-river-island",
      "name": "Fortress Island (Isla Novaria)",
      "type": "island",
      "polygon": [
        {
          "x": 3300,
          "y": 2720
        },
        {
          "x": 3700,
          "y": 2720
        },
        {
          "x": 3750,
          "y": 2920
        },
        {
          "x": 3350,
          "y": 2920
        }
      ],
      "color": "#475569"
    },
    {
      "id": "fairview-lake",
      "name": "Lake Fairview & Sanctuary",
      "type": "lake",
      "polygon": [
        {
          "x": 1600,
          "y": 1200
        },
        {
          "x": 2300,
          "y": 1150
        },
        {
          "x": 2500,
          "y": 1550
        },
        {
          "x": 2100,
          "y": 1850
        },
        {
          "x": 1500,
          "y": 1650
        }
      ],
      "color": "#38bdf8"
    },
    {
      "id": "westmount-forest",
      "name": "Westmount Pine Reserve",
      "type": "forest",
      "polygon": [
        {
          "x": 1250,
          "y": 5000
        },
        {
          "x": 1700,
          "y": 4800
        },
        {
          "x": 1850,
          "y": 6400
        },
        {
          "x": 1250,
          "y": 6600
        }
      ],
      "color": "#15803d"
    },
    {
      "id": "harbor-breakwater",
      "name": "St. Jude Deepwater Breakwater",
      "type": "ocean",
      "polygon": [
        {
          "x": 7300,
          "y": 2400
        },
        {
          "x": 7700,
          "y": 2600
        },
        {
          "x": 7650,
          "y": 3200
        },
        {
          "x": 7250,
          "y": 2900
        }
      ],
      "color": "#1e3a8a"
    },
    {
      "id": "south-reservoir",
      "name": "Mount Aethel Water Reservoir",
      "type": "lake",
      "polygon": [
        {
          "x": 5800,
          "y": 1000
        },
        {
          "x": 6400,
          "y": 950
        },
        {
          "x": 6500,
          "y": 1300
        },
        {
          "x": 5900,
          "y": 1400
        }
      ],
      "color": "#0284c7"
    }
  ],
  "districts": [
    {
      "id": "dist-citadel",
      "name": "Citadel & Old Town Quarter",
      "description": "The historic heart of Novaria with cobblestone boulevards, cathedral plaza, and high-density heritage flats.",
      "type": "historic",
      "polygon": [
        {
          "x": 2800,
          "y": 3000
        },
        {
          "x": 4400,
          "y": 3000
        },
        {
          "x": 4400,
          "y": 4400
        },
        {
          "x": 2800,
          "y": 4400
        }
      ],
      "color": "#c48834",
      "fillOpacity": 0.18,
      "targetDensity": 14000
    },
    {
      "id": "dist-financial",
      "name": "Aurelia Financial & Highrise Core",
      "description": "Skyscraper commercial center housing corporate headquarters, banking institutions, and world trade offices.",
      "type": "commercial",
      "polygon": [
        {
          "x": 4400,
          "y": 3000
        },
        {
          "x": 6000,
          "y": 3000
        },
        {
          "x": 6000,
          "y": 4400
        },
        {
          "x": 4400,
          "y": 4400
        }
      ],
      "color": "#2563eb",
      "fillOpacity": 0.18,
      "targetDensity": 18000
    },
    {
      "id": "dist-university",
      "name": "Imperial University & Medical Quarter",
      "description": "Sprawling campus, research laboratories, teaching hospital, and student residential quads.",
      "type": "academic",
      "polygon": [
        {
          "x": 1200,
          "y": 3000
        },
        {
          "x": 2800,
          "y": 3000
        },
        {
          "x": 2800,
          "y": 4400
        },
        {
          "x": 1200,
          "y": 4400
        }
      ],
      "color": "#7c3aed",
      "fillOpacity": 0.18,
      "targetDensity": 10000
    },
    {
      "id": "dist-harbor",
      "name": "St. Jude Harbor & Waterfront Docks",
      "description": "Maritime shipping terminals, fish markets, customs warehouses, and naval docks.",
      "type": "waterfront",
      "polygon": [
        {
          "x": 6000,
          "y": 2800
        },
        {
          "x": 7400,
          "y": 2800
        },
        {
          "x": 7400,
          "y": 4400
        },
        {
          "x": 6000,
          "y": 4400
        }
      ],
      "color": "#0891b2",
      "fillOpacity": 0.18,
      "targetDensity": 6500
    },
    {
      "id": "dist-westend",
      "name": "West End Residential Terraces",
      "description": "Expansive residential neighborhood with mid-rise apartment blocks, schools, and leafy avenues.",
      "type": "residential",
      "polygon": [
        {
          "x": 1200,
          "y": 4400
        },
        {
          "x": 3800,
          "y": 4400
        },
        {
          "x": 3800,
          "y": 6800
        },
        {
          "x": 1200,
          "y": 6800
        }
      ],
      "color": "#16a34a",
      "fillOpacity": 0.15,
      "targetDensity": 9000
    },
    {
      "id": "dist-eastgate",
      "name": "Eastgate Highrise Towers",
      "description": "Modern high-density residential towers offering high-capacity transit-oriented urban living.",
      "type": "residential",
      "polygon": [
        {
          "x": 4400,
          "y": 4400
        },
        {
          "x": 6800,
          "y": 4400
        },
        {
          "x": 6800,
          "y": 6800
        },
        {
          "x": 4400,
          "y": 6800
        }
      ],
      "color": "#0d9488",
      "fillOpacity": 0.18,
      "targetDensity": 9500
    },
    {
      "id": "dist-industrial",
      "name": "South Logistics & Foundry Belt",
      "description": "Heavy manufacturing plants, freight rail yards, automated distribution warehouses, and clean-tech plants.",
      "type": "industrial",
      "polygon": [
        {
          "x": 3600,
          "y": 800
        },
        {
          "x": 6800,
          "y": 800
        },
        {
          "x": 6800,
          "y": 2300
        },
        {
          "x": 3600,
          "y": 2300
        }
      ],
      "color": "#ea580c",
      "fillOpacity": 0.18,
      "targetDensity": 2000
    },
    {
      "id": "dist-fairview",
      "name": "Fairview Suburban Borough",
      "description": "Spacious suburban residential developments, community parks, and local commercial shopping centers.",
      "type": "residential",
      "polygon": [
        {
          "x": 1200,
          "y": 800
        },
        {
          "x": 3600,
          "y": 800
        },
        {
          "x": 3600,
          "y": 2400
        },
        {
          "x": 1200,
          "y": 2400
        }
      ],
      "color": "#84cc16",
      "fillOpacity": 0.15,
      "targetDensity": 5000
    },
    {
      "id": "dist-civic",
      "name": "Federal Capitol & Judiciary Plaza",
      "description": "Government buildings, supreme court chambers, foreign embassies, and monumental parade grounds.",
      "type": "civic",
      "polygon": [
        {
          "x": 3600,
          "y": 5500
        },
        {
          "x": 4400,
          "y": 5500
        },
        {
          "x": 4400,
          "y": 6800
        },
        {
          "x": 3600,
          "y": 6800
        }
      ],
      "color": "#6366f1",
      "fillOpacity": 0.18,
      "targetDensity": 4000
    }
  ],
  "roads": [
    {
      "id": "road-outer-beltway-north",
      "name": "M-1 Northern Metropolitan Ring Highway",
      "type": "highway",
      "path": [
        {
          "x": 900,
          "y": 850
        },
        {
          "x": 3600,
          "y": 850
        },
        {
          "x": 6800,
          "y": 850
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 90
    },
    {
      "id": "road-outer-beltway-south",
      "name": "M-2 Southern Perimeter Parkway",
      "type": "highway",
      "path": [
        {
          "x": 1100,
          "y": 6750
        },
        {
          "x": 3800,
          "y": 6750
        },
        {
          "x": 6800,
          "y": 6750
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 90
    },
    {
      "id": "road-outer-beltway-west",
      "name": "M-3 Westmount Foothills Arterial",
      "type": "highway",
      "path": [
        {
          "x": 1100,
          "y": 850
        },
        {
          "x": 1100,
          "y": 3000
        },
        {
          "x": 1100,
          "y": 5000
        },
        {
          "x": 1100,
          "y": 6750
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 80
    },
    {
      "id": "road-imperial-hwy",
      "name": "Imperial Central Expressway (North-South)",
      "type": "highway",
      "path": [
        {
          "x": 4400,
          "y": 800
        },
        {
          "x": 4400,
          "y": 2400
        },
        {
          "x": 4400,
          "y": 3000
        },
        {
          "x": 4400,
          "y": 3700
        },
        {
          "x": 4400,
          "y": 5500
        },
        {
          "x": 4400,
          "y": 6800
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 80
    },
    {
      "id": "road-east-expressway",
      "name": "Eastgate & Harbor Coastal Expressway",
      "type": "highway",
      "path": [
        {
          "x": 6800,
          "y": 850
        },
        {
          "x": 6800,
          "y": 2500
        },
        {
          "x": 6800,
          "y": 3700
        },
        {
          "x": 6800,
          "y": 6750
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 80
    },
    {
      "id": "road-aurelia-blvd",
      "name": "Aurelia Grand Boulevard",
      "type": "avenue",
      "path": [
        {
          "x": 1200,
          "y": 3700
        },
        {
          "x": 2800,
          "y": 3700
        },
        {
          "x": 4400,
          "y": 3700
        },
        {
          "x": 6000,
          "y": 3700
        },
        {
          "x": 7400,
          "y": 3700
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 60
    },
    {
      "id": "road-metropolitan-blvd",
      "name": "Northern Metropolitan Industrial Boulevard",
      "type": "avenue",
      "path": [
        {
          "x": 1200,
          "y": 1600
        },
        {
          "x": 3600,
          "y": 1600
        },
        {
          "x": 5200,
          "y": 1600
        },
        {
          "x": 6700,
          "y": 1600
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 55
    },
    {
      "id": "road-southern-grand-blvd",
      "name": "Southern Metropolitan Grand Parkway",
      "type": "avenue",
      "path": [
        {
          "x": 1200,
          "y": 5600
        },
        {
          "x": 2800,
          "y": 5600
        },
        {
          "x": 4400,
          "y": 5600
        },
        {
          "x": 5600,
          "y": 5600
        },
        {
          "x": 6700,
          "y": 5600
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 60
    },
    {
      "id": "road-river-quay-north",
      "name": "North River Embankment & Marina Promenade",
      "type": "main_street",
      "path": [
        {
          "x": 1200,
          "y": 2450
        },
        {
          "x": 3000,
          "y": 2550
        },
        {
          "x": 4400,
          "y": 2500
        },
        {
          "x": 5800,
          "y": 2350
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-river-quay-south",
      "name": "South Citadel River Quayside",
      "type": "main_street",
      "path": [
        {
          "x": 1200,
          "y": 3100
        },
        {
          "x": 2800,
          "y": 3100
        },
        {
          "x": 4400,
          "y": 3100
        },
        {
          "x": 6000,
          "y": 2900
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-university-concourse",
      "name": "University & Academic Concourse",
      "type": "avenue",
      "path": [
        {
          "x": 2000,
          "y": 2400
        },
        {
          "x": 2000,
          "y": 3700
        },
        {
          "x": 2000,
          "y": 5600
        },
        {
          "x": 2000,
          "y": 6600
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-citadel-axis",
      "name": "Citadel Royal Processional Way",
      "type": "avenue",
      "path": [
        {
          "x": 3600,
          "y": 2400
        },
        {
          "x": 3600,
          "y": 3700
        },
        {
          "x": 3600,
          "y": 4400
        },
        {
          "x": 3600,
          "y": 5500
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-financial-concourse",
      "name": "Financial District Global Commerce Concourse",
      "type": "avenue",
      "path": [
        {
          "x": 5200,
          "y": 2350
        },
        {
          "x": 5200,
          "y": 3700
        },
        {
          "x": 5200,
          "y": 5600
        },
        {
          "x": 5200,
          "y": 6600
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 55
    },
    {
      "id": "road-eastgate-way",
      "name": "Eastgate Central Tower Avenue",
      "type": "avenue",
      "path": [
        {
          "x": 6000,
          "y": 3700
        },
        {
          "x": 6000,
          "y": 5000
        },
        {
          "x": 6000,
          "y": 6600
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-westend-parkway",
      "name": "West End Residential Boulevard",
      "type": "avenue",
      "path": [
        {
          "x": 2800,
          "y": 3700
        },
        {
          "x": 2800,
          "y": 5000
        },
        {
          "x": 2800,
          "y": 6600
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-capitol-mall",
      "name": "Federal Mall & Judiciary Esplanade",
      "type": "avenue",
      "path": [
        {
          "x": 4000,
          "y": 5500
        },
        {
          "x": 4000,
          "y": 6700
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 40
    },
    {
      "id": "road-citadel-bridge",
      "name": "Grand Suspension Bridge (Citadel Crossing)",
      "type": "bridge",
      "path": [
        {
          "x": 3600,
          "y": 2400
        },
        {
          "x": 3600,
          "y": 3000
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 60
    },
    {
      "id": "road-financial-bridge",
      "name": "Financial Center Commerce Bridge",
      "type": "bridge",
      "path": [
        {
          "x": 5200,
          "y": 2350
        },
        {
          "x": 5200,
          "y": 3000
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 60
    },
    {
      "id": "road-university-bridge",
      "name": "Western University River Viaduct",
      "type": "bridge",
      "path": [
        {
          "x": 2000,
          "y": 2400
        },
        {
          "x": 2000,
          "y": 3000
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-harbor-bridge",
      "name": "St. Jude Bay Viaduct",
      "type": "bridge",
      "path": [
        {
          "x": 6200,
          "y": 2300
        },
        {
          "x": 6200,
          "y": 2800
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 70
    },
    {
      "id": "road-imperial-bridge",
      "name": "Imperial Highway River Overpass",
      "type": "bridge",
      "path": [
        {
          "x": 4400,
          "y": 2400
        },
        {
          "x": 4400,
          "y": 3000
        }
      ],
      "lanes": 6,
      "speedLimitKmH": 80
    },
    {
      "id": "road-cit-grid-1",
      "name": "Guildhall Cobblestone Way",
      "type": "local_street",
      "path": [
        {
          "x": 2900,
          "y": 3350
        },
        {
          "x": 4300,
          "y": 3350
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 35
    },
    {
      "id": "road-cit-grid-2",
      "name": "Old Mint Lane",
      "type": "local_street",
      "path": [
        {
          "x": 2900,
          "y": 4050
        },
        {
          "x": 4300,
          "y": 4050
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 35
    },
    {
      "id": "road-cit-grid-3",
      "name": "Cathedral North Arcade",
      "type": "local_street",
      "path": [
        {
          "x": 3200,
          "y": 3050
        },
        {
          "x": 3200,
          "y": 4350
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 35
    },
    {
      "id": "road-cit-grid-4",
      "name": "Magistrates Row",
      "type": "local_street",
      "path": [
        {
          "x": 4000,
          "y": 3050
        },
        {
          "x": 4000,
          "y": 4350
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 35
    },
    {
      "id": "road-fin-grid-1",
      "name": "Wall & Commerce Street",
      "type": "main_street",
      "path": [
        {
          "x": 4500,
          "y": 3350
        },
        {
          "x": 5900,
          "y": 3350
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-fin-grid-2",
      "name": "Stock Exchange Alley",
      "type": "main_street",
      "path": [
        {
          "x": 4500,
          "y": 4050
        },
        {
          "x": 5900,
          "y": 4050
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-fin-grid-3",
      "name": "Bankers Plaza Way",
      "type": "main_street",
      "path": [
        {
          "x": 4800,
          "y": 3050
        },
        {
          "x": 4800,
          "y": 4350
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-fin-grid-4",
      "name": "Apex Tower Esplanade",
      "type": "main_street",
      "path": [
        {
          "x": 5600,
          "y": 3050
        },
        {
          "x": 5600,
          "y": 4350
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-we-grid-1",
      "name": "Chestnut Crescent",
      "type": "local_street",
      "path": [
        {
          "x": 1300,
          "y": 4900
        },
        {
          "x": 3700,
          "y": 4900
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-we-grid-2",
      "name": "Linden Tree Boulevard",
      "type": "local_street",
      "path": [
        {
          "x": 1300,
          "y": 6200
        },
        {
          "x": 3700,
          "y": 6200
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-we-grid-3",
      "name": "Highland Avenue",
      "type": "local_street",
      "path": [
        {
          "x": 1600,
          "y": 4500
        },
        {
          "x": 1600,
          "y": 6700
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-we-grid-4",
      "name": "Maple Terrace",
      "type": "local_street",
      "path": [
        {
          "x": 2400,
          "y": 4500
        },
        {
          "x": 2400,
          "y": 6700
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-we-grid-5",
      "name": "Westgate Parkway",
      "type": "local_street",
      "path": [
        {
          "x": 3200,
          "y": 4500
        },
        {
          "x": 3200,
          "y": 6700
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-eg-grid-1",
      "name": "Horizon Sky Boulevard",
      "type": "main_street",
      "path": [
        {
          "x": 4500,
          "y": 4900
        },
        {
          "x": 6700,
          "y": 4900
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-eg-grid-2",
      "name": "Zenith Avenue",
      "type": "main_street",
      "path": [
        {
          "x": 4500,
          "y": 6200
        },
        {
          "x": 6700,
          "y": 6200
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-eg-grid-3",
      "name": "Marina Gateway Way",
      "type": "main_street",
      "path": [
        {
          "x": 5200,
          "y": 4500
        },
        {
          "x": 5200,
          "y": 6700
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-eg-grid-4",
      "name": "Eastshore Concourse",
      "type": "main_street",
      "path": [
        {
          "x": 6400,
          "y": 4500
        },
        {
          "x": 6400,
          "y": 6700
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-harbor-grid-1",
      "name": "Admiralty Wharf Road",
      "type": "main_street",
      "path": [
        {
          "x": 6100,
          "y": 3200
        },
        {
          "x": 7300,
          "y": 3200
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 45
    },
    {
      "id": "road-harbor-grid-2",
      "name": "Fishermans Pier Access Way",
      "type": "local_street",
      "path": [
        {
          "x": 6100,
          "y": 4100
        },
        {
          "x": 7300,
          "y": 4100
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 35
    },
    {
      "id": "road-harbor-grid-3",
      "name": "Drydock Cargo Spur",
      "type": "local_street",
      "path": [
        {
          "x": 6500,
          "y": 2900
        },
        {
          "x": 6500,
          "y": 4300
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 35
    },
    {
      "id": "road-ind-grid-1",
      "name": "Foundry Heavy Haul Road",
      "type": "main_street",
      "path": [
        {
          "x": 3700,
          "y": 1200
        },
        {
          "x": 6700,
          "y": 1200
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-ind-grid-2",
      "name": "Logistics Freight Parkway",
      "type": "main_street",
      "path": [
        {
          "x": 3700,
          "y": 2000
        },
        {
          "x": 6700,
          "y": 2000
        }
      ],
      "lanes": 4,
      "speedLimitKmH": 50
    },
    {
      "id": "road-ind-grid-3",
      "name": "Assembly Plant Row",
      "type": "local_street",
      "path": [
        {
          "x": 4800,
          "y": 850
        },
        {
          "x": 4800,
          "y": 2250
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-ind-grid-4",
      "name": "Freight Rail Spur Road",
      "type": "local_street",
      "path": [
        {
          "x": 6000,
          "y": 850
        },
        {
          "x": 6000,
          "y": 2250
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-fv-grid-1",
      "name": "Fairview Park Drive",
      "type": "local_street",
      "path": [
        {
          "x": 1300,
          "y": 1200
        },
        {
          "x": 3500,
          "y": 1200
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-fv-grid-2",
      "name": "Meadowland Way",
      "type": "local_street",
      "path": [
        {
          "x": 1300,
          "y": 2000
        },
        {
          "x": 3500,
          "y": 2000
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    },
    {
      "id": "road-fv-grid-3",
      "name": "Orchard Hill Road",
      "type": "local_street",
      "path": [
        {
          "x": 2600,
          "y": 850
        },
        {
          "x": 2600,
          "y": 2350
        }
      ],
      "lanes": 2,
      "speedLimitKmH": 40
    }
  ],
  "transitStations": [
    {
      "id": "st-grand-central",
      "name": "Grand Central Terminal",
      "type": "metro",
      "location": {
        "x": 4400,
        "y": 3700
      },
      "lineIds": [
        "line-metro-red",
        "line-metro-blue",
        "line-regional-gold",
        "line-metro-purple"
      ],
      "isTransferHub": true
    },
    {
      "id": "st-financial-tower",
      "name": "Aurelia World Trade Center",
      "type": "metro",
      "location": {
        "x": 5200,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue",
        "line-metro-red",
        "line-metro-purple"
      ],
      "isTransferHub": true
    },
    {
      "id": "st-citadel-plaza",
      "name": "Citadel Plaza Station",
      "type": "metro",
      "location": {
        "x": 3600,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue",
        "line-tram-green"
      ],
      "isTransferHub": true
    },
    {
      "id": "st-university-hub",
      "name": "University Quad Station",
      "type": "metro",
      "location": {
        "x": 2000,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue",
        "line-tram-green",
        "line-metro-purple"
      ],
      "isTransferHub": true
    },
    {
      "id": "st-harbor-gateway",
      "name": "Harbor Gateway Terminal",
      "type": "metro",
      "location": {
        "x": 6600,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue",
        "line-tram-green",
        "line-ferry-silver"
      ],
      "isTransferHub": true
    },
    {
      "id": "st-north-industrial-depot",
      "name": "North Logistics Center",
      "type": "metro",
      "location": {
        "x": 4400,
        "y": 1200
      },
      "lineIds": [
        "line-metro-red"
      ]
    },
    {
      "id": "st-north-river-pier",
      "name": "River Quay Station",
      "type": "metro",
      "location": {
        "x": 4400,
        "y": 2400
      },
      "lineIds": [
        "line-metro-red",
        "line-tram-green"
      ]
    },
    {
      "id": "st-botanical-metro",
      "name": "Botanical Gardens Metro",
      "type": "metro",
      "location": {
        "x": 4400,
        "y": 4800
      },
      "lineIds": [
        "line-metro-red"
      ]
    },
    {
      "id": "st-capitol-monument",
      "name": "Federal Capitol & Senate",
      "type": "metro",
      "location": {
        "x": 4400,
        "y": 6200
      },
      "lineIds": [
        "line-metro-red",
        "line-metro-purple"
      ],
      "isTransferHub": true
    },
    {
      "id": "st-westend-terminus",
      "name": "Westmount Outer Terminus",
      "type": "metro",
      "location": {
        "x": 1300,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue"
      ]
    },
    {
      "id": "st-citadel-west",
      "name": "Citadel West Gate",
      "type": "metro",
      "location": {
        "x": 2800,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue"
      ]
    },
    {
      "id": "st-stock-exchange",
      "name": "Stock Exchange Central",
      "type": "metro",
      "location": {
        "x": 5800,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue"
      ]
    },
    {
      "id": "st-harbor-docks",
      "name": "Deepwater Docklands",
      "type": "metro",
      "location": {
        "x": 7200,
        "y": 3700
      },
      "lineIds": [
        "line-metro-blue",
        "line-ferry-silver"
      ]
    },
    {
      "id": "st-medical-campus",
      "name": "St. Jude Medical Center",
      "type": "tram",
      "location": {
        "x": 2000,
        "y": 4200
      },
      "lineIds": [
        "line-tram-green"
      ]
    },
    {
      "id": "st-botanical-promenade",
      "name": "Botanical Gardens West Promenade",
      "type": "tram",
      "location": {
        "x": 3800,
        "y": 4800
      },
      "lineIds": [
        "line-tram-green"
      ]
    },
    {
      "id": "st-citadel-south",
      "name": "South Bastion Historic Gate",
      "type": "tram",
      "location": {
        "x": 3600,
        "y": 4300
      },
      "lineIds": [
        "line-tram-green"
      ]
    },
    {
      "id": "st-marina-pier",
      "name": "Waterfront Marina Walk",
      "type": "tram",
      "location": {
        "x": 6000,
        "y": 3100
      },
      "lineIds": [
        "line-tram-green",
        "line-ferry-silver"
      ]
    },
    {
      "id": "st-opera-house",
      "name": "Novaria Grand Opera",
      "type": "tram",
      "location": {
        "x": 5200,
        "y": 3300
      },
      "lineIds": [
        "line-tram-green"
      ]
    },
    {
      "id": "st-fairview-depot",
      "name": "Fairview Suburban Rail Junction",
      "type": "rail",
      "location": {
        "x": 2400,
        "y": 1600
      },
      "lineIds": [
        "line-regional-gold"
      ]
    },
    {
      "id": "st-fairview-north",
      "name": "Lake Fairview Station",
      "type": "rail",
      "location": {
        "x": 1600,
        "y": 1000
      },
      "lineIds": [
        "line-regional-gold"
      ]
    },
    {
      "id": "st-industrial-yard",
      "name": "South Foundry & Freight Hub",
      "type": "rail",
      "location": {
        "x": 5200,
        "y": 1600
      },
      "lineIds": [
        "line-regional-gold"
      ]
    },
    {
      "id": "st-south-terminus",
      "name": "South East Outer Terminus",
      "type": "rail",
      "location": {
        "x": 6400,
        "y": 1200
      },
      "lineIds": [
        "line-regional-gold"
      ]
    },
    {
      "id": "st-orb-westend-mid",
      "name": "West End Highland Station",
      "type": "metro",
      "location": {
        "x": 2000,
        "y": 5600
      },
      "lineIds": [
        "line-metro-purple"
      ]
    },
    {
      "id": "st-orb-civic-south",
      "name": "Supreme Court Plaza",
      "type": "metro",
      "location": {
        "x": 3600,
        "y": 6200
      },
      "lineIds": [
        "line-metro-purple"
      ]
    },
    {
      "id": "st-orb-eastgate-central",
      "name": "Eastgate Sky-Tower Concourse",
      "type": "metro",
      "location": {
        "x": 5600,
        "y": 5600
      },
      "lineIds": [
        "line-metro-purple",
        "line-metro-red"
      ]
    },
    {
      "id": "st-orb-eastgate-south",
      "name": "South Eastgate Terminal",
      "type": "metro",
      "location": {
        "x": 6400,
        "y": 6200
      },
      "lineIds": [
        "line-metro-purple"
      ]
    },
    {
      "id": "st-ferry-citadel-island",
      "name": "Citadel Fortress Island Pier",
      "type": "ferry",
      "location": {
        "x": 3500,
        "y": 2800
      },
      "lineIds": [
        "line-ferry-silver"
      ]
    },
    {
      "id": "st-ferry-customs-pier",
      "name": "Customs Pier Landing",
      "type": "ferry",
      "location": {
        "x": 6600,
        "y": 3200
      },
      "lineIds": [
        "line-ferry-silver"
      ]
    },
    {
      "id": "st-ferry-outer-lighthouse",
      "name": "Bay Lighthouse Landing",
      "type": "ferry",
      "location": {
        "x": 7500,
        "y": 2800
      },
      "lineIds": [
        "line-ferry-silver"
      ]
    }
  ],
  "transitLines": [
    {
      "id": "line-metro-red",
      "name": "Red Line (Central North-South Subway)",
      "type": "metro",
      "color": "#e11d48",
      "frequencyMins": 3,
      "path": [
        {
          "x": 4400,
          "y": 1200
        },
        {
          "x": 4400,
          "y": 2400
        },
        {
          "x": 4400,
          "y": 3700
        },
        {
          "x": 4400,
          "y": 4800
        },
        {
          "x": 5600,
          "y": 5600
        },
        {
          "x": 4400,
          "y": 6200
        }
      ],
      "stationIds": [
        "st-north-industrial-depot",
        "st-north-river-pier",
        "st-grand-central",
        "st-botanical-metro",
        "st-orb-eastgate-central",
        "st-capitol-monument"
      ]
    },
    {
      "id": "line-metro-blue",
      "name": "Blue Line (Trans-City East-West Express)",
      "type": "metro",
      "color": "#0284c7",
      "frequencyMins": 4,
      "path": [
        {
          "x": 1300,
          "y": 3700
        },
        {
          "x": 2000,
          "y": 3700
        },
        {
          "x": 2800,
          "y": 3700
        },
        {
          "x": 3600,
          "y": 3700
        },
        {
          "x": 4400,
          "y": 3700
        },
        {
          "x": 5200,
          "y": 3700
        },
        {
          "x": 5800,
          "y": 3700
        },
        {
          "x": 6600,
          "y": 3700
        },
        {
          "x": 7200,
          "y": 3700
        }
      ],
      "stationIds": [
        "st-westend-terminus",
        "st-university-hub",
        "st-citadel-west",
        "st-citadel-plaza",
        "st-grand-central",
        "st-financial-tower",
        "st-stock-exchange",
        "st-harbor-gateway",
        "st-harbor-docks"
      ]
    },
    {
      "id": "line-tram-green",
      "name": "Green Line (River & Cultural Loop Tram)",
      "type": "tram",
      "color": "#059669",
      "frequencyMins": 6,
      "path": [
        {
          "x": 2000,
          "y": 4200
        },
        {
          "x": 2000,
          "y": 3700
        },
        {
          "x": 3600,
          "y": 3700
        },
        {
          "x": 3600,
          "y": 4300
        },
        {
          "x": 3800,
          "y": 4800
        },
        {
          "x": 4400,
          "y": 2400
        },
        {
          "x": 5200,
          "y": 3300
        },
        {
          "x": 6000,
          "y": 3100
        },
        {
          "x": 6600,
          "y": 3700
        }
      ],
      "stationIds": [
        "st-medical-campus",
        "st-university-hub",
        "st-citadel-plaza",
        "st-citadel-south",
        "st-botanical-promenade",
        "st-north-river-pier",
        "st-opera-house",
        "st-marina-pier",
        "st-harbor-gateway"
      ]
    },
    {
      "id": "line-regional-gold",
      "name": "Gold Line (Regional Commuter Rail)",
      "type": "rail",
      "color": "#d97706",
      "frequencyMins": 10,
      "path": [
        {
          "x": 1600,
          "y": 1000
        },
        {
          "x": 2400,
          "y": 1600
        },
        {
          "x": 4400,
          "y": 3700
        },
        {
          "x": 5200,
          "y": 1600
        },
        {
          "x": 6400,
          "y": 1200
        }
      ],
      "stationIds": [
        "st-fairview-north",
        "st-fairview-depot",
        "st-grand-central",
        "st-industrial-yard",
        "st-south-terminus"
      ]
    },
    {
      "id": "line-metro-purple",
      "name": "Purple Line (Metropolitan Orbital Subway)",
      "type": "metro",
      "color": "#9333ea",
      "frequencyMins": 5,
      "path": [
        {
          "x": 2000,
          "y": 3700
        },
        {
          "x": 2000,
          "y": 5600
        },
        {
          "x": 3600,
          "y": 6200
        },
        {
          "x": 4400,
          "y": 6200
        },
        {
          "x": 5600,
          "y": 5600
        },
        {
          "x": 6400,
          "y": 6200
        },
        {
          "x": 5200,
          "y": 3700
        }
      ],
      "stationIds": [
        "st-university-hub",
        "st-orb-westend-mid",
        "st-orb-civic-south",
        "st-capitol-monument",
        "st-orb-eastgate-central",
        "st-orb-eastgate-south",
        "st-financial-tower"
      ]
    },
    {
      "id": "line-ferry-silver",
      "name": "Silver Line (Coastal Catamaran Water Shuttle)",
      "type": "ferry",
      "color": "#0ea5e9",
      "frequencyMins": 12,
      "path": [
        {
          "x": 3500,
          "y": 2800
        },
        {
          "x": 6000,
          "y": 3100
        },
        {
          "x": 6600,
          "y": 3200
        },
        {
          "x": 6600,
          "y": 3700
        },
        {
          "x": 7200,
          "y": 3700
        },
        {
          "x": 7500,
          "y": 2800
        }
      ],
      "stationIds": [
        "st-ferry-citadel-island",
        "st-marina-pier",
        "st-ferry-customs-pier",
        "st-harbor-gateway",
        "st-harbor-docks",
        "st-ferry-outer-lighthouse"
      ]
    }
  ],
  "buildings": [
    {
      "id": "bld-grand-central-term",
      "name": "Novaria Grand Central Terminal",
      "type": "institutional",
      "center": {
        "x": 4400,
        "y": 3700
      },
      "footprint": [
        {
          "x": 4320,
          "y": 3640
        },
        {
          "x": 4480,
          "y": 3640
        },
        {
          "x": 4480,
          "y": 3760
        },
        {
          "x": 4320,
          "y": 3760
        }
      ],
      "floors": 5,
      "unitCount": 80,
      "isLandmark": true,
      "notes": "Colossal Beaux-Arts transit cathedral with soaring marble concourse serving over 300,000 commuters daily."
    },
    {
      "id": "bld-world-trade-tower",
      "name": "Aurelia World Financial Tower",
      "type": "commercial_office",
      "center": {
        "x": 5200,
        "y": 3700
      },
      "footprint": [
        {
          "x": 5130,
          "y": 3630
        },
        {
          "x": 5270,
          "y": 3630
        },
        {
          "x": 5270,
          "y": 3770
        },
        {
          "x": 5130,
          "y": 3770
        }
      ],
      "floors": 68,
      "unitCount": 280,
      "isLandmark": true,
      "notes": "68-story glass and steel skyscraper, symbol of the citys global financial might."
    },
    {
      "id": "bld-imperial-university",
      "name": "Novaria Royal University & Grand Library",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3700
      },
      "footprint": [
        {
          "x": 1910,
          "y": 3610
        },
        {
          "x": 2090,
          "y": 3610
        },
        {
          "x": 2090,
          "y": 3790
        },
        {
          "x": 1910,
          "y": 3790
        }
      ],
      "floors": 6,
      "unitCount": 120,
      "isLandmark": true,
      "notes": "Ancient halls of learning, medical sciences, and the largest repository of literature in the continent."
    },
    {
      "id": "bld-st-jude-hospital",
      "name": "St. Jude Metropolitan Medical Center",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 4200
      },
      "footprint": [
        {
          "x": 1920,
          "y": 4120
        },
        {
          "x": 2080,
          "y": 4120
        },
        {
          "x": 2080,
          "y": 4280
        },
        {
          "x": 1920,
          "y": 4280
        }
      ],
      "floors": 12,
      "unitCount": 150,
      "isLandmark": true,
      "notes": "Level 1 trauma center and premier university research hospital."
    },
    {
      "id": "bld-apex-residential-towers",
      "name": "Apex Horizon Sky-Towers",
      "type": "residential_highrise",
      "center": {
        "x": 5600,
        "y": 5600
      },
      "footprint": [
        {
          "x": 5520,
          "y": 5520
        },
        {
          "x": 5680,
          "y": 5520
        },
        {
          "x": 5680,
          "y": 5680
        },
        {
          "x": 5520,
          "y": 5680
        }
      ],
      "floors": 50,
      "unitCount": 400,
      "isLandmark": true,
      "notes": "Twin residential towers housing over 1,500 residents with panoramic views of the entire estuary."
    },
    {
      "id": "bld-capitol-senate",
      "name": "Novaria Federal Capitol & Parliament",
      "type": "institutional",
      "center": {
        "x": 4400,
        "y": 6200
      },
      "footprint": [
        {
          "x": 4300,
          "y": 6100
        },
        {
          "x": 4500,
          "y": 6100
        },
        {
          "x": 4500,
          "y": 6300
        },
        {
          "x": 4300,
          "y": 6300
        }
      ],
      "floors": 4,
      "unitCount": 90,
      "isLandmark": true,
      "notes": "Neoclassical domed capitol building housing the senate and supreme court."
    },
    {
      "id": "bld-harbor-customs",
      "name": "St. Jude Admiralty & Customs House",
      "type": "institutional",
      "center": {
        "x": 6600,
        "y": 3700
      },
      "footprint": [
        {
          "x": 6520,
          "y": 3620
        },
        {
          "x": 6680,
          "y": 3620
        },
        {
          "x": 6680,
          "y": 3780
        },
        {
          "x": 6520,
          "y": 3780
        }
      ],
      "floors": 4,
      "unitCount": 60,
      "isLandmark": true,
      "notes": "Historic port authority regulating maritime shipping and naval dockyards."
    },
    {
      "id": "bld-stock-exchange",
      "name": "Novaria Stock Exchange Hall",
      "type": "commercial_office",
      "center": {
        "x": 5800,
        "y": 3700
      },
      "footprint": [
        {
          "x": 5730,
          "y": 3630
        },
        {
          "x": 5870,
          "y": 3630
        },
        {
          "x": 5870,
          "y": 3770
        },
        {
          "x": 5730,
          "y": 3770
        }
      ],
      "floors": 45,
      "unitCount": 180,
      "isLandmark": true,
      "notes": "Grand marble pillared facade fronting a massive modern glass trading atrium."
    },
    {
      "id": "bld-cathedral-saint-jude",
      "name": "Metropolitan Basilica of Saint Jude",
      "type": "institutional",
      "center": {
        "x": 3600,
        "y": 3700
      },
      "footprint": [
        {
          "x": 3520,
          "y": 3620
        },
        {
          "x": 3680,
          "y": 3620
        },
        {
          "x": 3680,
          "y": 3780
        },
        {
          "x": 3520,
          "y": 3780
        }
      ],
      "floors": 3,
      "unitCount": 25,
      "isLandmark": true,
      "notes": "14th-century Gothic masterpiece with twin 95-meter stone spires."
    },
    {
      "id": "bld-palace-justice",
      "name": "High Court & Palace of Justice",
      "type": "institutional",
      "center": {
        "x": 4100,
        "y": 6400
      },
      "footprint": [
        {
          "x": 4020,
          "y": 6320
        },
        {
          "x": 4180,
          "y": 6320
        },
        {
          "x": 4180,
          "y": 6480
        },
        {
          "x": 4020,
          "y": 6480
        }
      ],
      "floors": 5,
      "unitCount": 70,
      "isLandmark": true,
      "notes": "Monumental courthouse with soaring Corinthian porticos."
    },
    {
      "id": "bld-national-opera",
      "name": "Royal Opera & Ballet Theater",
      "type": "institutional",
      "center": {
        "x": 5200,
        "y": 3300
      },
      "footprint": [
        {
          "x": 5120,
          "y": 3220
        },
        {
          "x": 5280,
          "y": 3220
        },
        {
          "x": 5280,
          "y": 3380
        },
        {
          "x": 5120,
          "y": 3380
        }
      ],
      "floors": 5,
      "unitCount": 45,
      "isLandmark": true,
      "notes": "Beaux-Arts opera palace with gold leaf gilding and crystal chandeliers."
    },
    {
      "id": "bld-museum-art",
      "name": "Metropolitan Museum of Art",
      "type": "institutional",
      "center": {
        "x": 3800,
        "y": 4200
      },
      "footprint": [
        {
          "x": 3720,
          "y": 4120
        },
        {
          "x": 3880,
          "y": 4120
        },
        {
          "x": 3880,
          "y": 4280
        },
        {
          "x": 3720,
          "y": 4280
        }
      ],
      "floors": 4,
      "unitCount": 50,
      "isLandmark": true,
      "notes": "Home to the national art treasures spanning six centuries."
    },
    {
      "id": "bld-coliseum-stadium",
      "name": "Metropolitan Coliseum Arena",
      "type": "institutional",
      "center": {
        "x": 5600,
        "y": 5000
      },
      "footprint": [
        {
          "x": 5500,
          "y": 4900
        },
        {
          "x": 5700,
          "y": 4900
        },
        {
          "x": 5700,
          "y": 5100
        },
        {
          "x": 5500,
          "y": 5100
        }
      ],
      "floors": 6,
      "unitCount": 60,
      "isLandmark": true,
      "notes": "State-of-the-art retractable roof stadium."
    },
    {
      "id": "bld-old-town-hall",
      "name": "Ancient Guildhall & Town Hall",
      "type": "institutional",
      "center": {
        "x": 3200,
        "y": 3500
      },
      "footprint": [
        {
          "x": 3130,
          "y": 3430
        },
        {
          "x": 3270,
          "y": 3430
        },
        {
          "x": 3270,
          "y": 3570
        },
        {
          "x": 3130,
          "y": 3570
        }
      ],
      "floors": 4,
      "unitCount": 40,
      "isLandmark": true,
      "notes": "Seat of the medieval Merchant Guild, now housing the municipal historical archives."
    },
    {
      "id": "bld-telecom-tower",
      "name": "Eastgate Horizon Spire",
      "type": "commercial_office",
      "center": {
        "x": 6200,
        "y": 5600
      },
      "footprint": [
        {
          "x": 6130,
          "y": 5530
        },
        {
          "x": 6270,
          "y": 5530
        },
        {
          "x": 6270,
          "y": 5670
        },
        {
          "x": 6130,
          "y": 5670
        }
      ],
      "floors": 62,
      "unitCount": 240,
      "isLandmark": true,
      "notes": "62-story telecommunications skyscraper broadcasting across the continent."
    },
    {
      "id": "bld-harbor-gantry-term",
      "name": "St. Jude Container Gantry Terminal",
      "type": "industrial",
      "center": {
        "x": 7000,
        "y": 3200
      },
      "footprint": [
        {
          "x": 6900,
          "y": 3100
        },
        {
          "x": 7100,
          "y": 3100
        },
        {
          "x": 7100,
          "y": 3300
        },
        {
          "x": 6900,
          "y": 3300
        }
      ],
      "floors": 2,
      "unitCount": 30,
      "isLandmark": true,
      "notes": "Automated container gantry handling 2.5 million TEU annually."
    },
    {
      "id": "bld-foundry-steelworks",
      "name": "Imperial Vulcan Steel & Foundry Plant",
      "type": "industrial",
      "center": {
        "x": 5200,
        "y": 1600
      },
      "footprint": [
        {
          "x": 5080,
          "y": 1480
        },
        {
          "x": 5320,
          "y": 1480
        },
        {
          "x": 5320,
          "y": 1720
        },
        {
          "x": 5080,
          "y": 1720
        }
      ],
      "floors": 3,
      "unitCount": 80,
      "isLandmark": true,
      "notes": "Historic steel mill modernised for advanced structural alloys."
    },
    {
      "id": "bld-fairview-civic-hall",
      "name": "Fairview Borough Hall & Community Library",
      "type": "institutional",
      "center": {
        "x": 2400,
        "y": 1600
      },
      "footprint": [
        {
          "x": 2330,
          "y": 1530
        },
        {
          "x": 2470,
          "y": 1530
        },
        {
          "x": 2470,
          "y": 1670
        },
        {
          "x": 2330,
          "y": 1670
        }
      ],
      "floors": 3,
      "unitCount": 30,
      "isLandmark": true,
      "notes": "Suburban administrative center, community theater, and public park."
    },
    {
      "id": "bld-island-bastion",
      "name": "Isla Novaria Fortress Citadel",
      "type": "institutional",
      "center": {
        "x": 3500,
        "y": 2820
      },
      "footprint": [
        {
          "x": 3420,
          "y": 2770
        },
        {
          "x": 3580,
          "y": 2770
        },
        {
          "x": 3580,
          "y": 2870
        },
        {
          "x": 3420,
          "y": 2870
        }
      ],
      "floors": 3,
      "unitCount": 20,
      "isLandmark": true,
      "notes": "Vauban-style star fortress preserved as a military museum."
    },
    {
      "id": "bld-bay-lighthouse",
      "name": "Estuary Lighthouse & Signal Station",
      "type": "institutional",
      "center": {
        "x": 7500,
        "y": 2800
      },
      "footprint": [
        {
          "x": 7470,
          "y": 2770
        },
        {
          "x": 7530,
          "y": 2770
        },
        {
          "x": 7530,
          "y": 2830
        },
        {
          "x": 7470,
          "y": 2830
        }
      ],
      "floors": 6,
      "unitCount": 10,
      "isLandmark": true,
      "notes": "Historic granite lighthouse guiding shipping into the deepwater harbor."
    },
    {
      "id": "bld-fin-1",
      "name": "Aurelia Financial Tower #1",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3209
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3160
        },
        {
          "x": 4656,
          "y": 3160
        },
        {
          "x": 4656,
          "y": 3258
        },
        {
          "x": 4560,
          "y": 3258
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-fin-2",
      "name": "Aurelia Financial Tower #2",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3209
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3160
        },
        {
          "x": 4763,
          "y": 3160
        },
        {
          "x": 4763,
          "y": 3258
        },
        {
          "x": 4667,
          "y": 3258
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-fin-3",
      "name": "Aurelia Financial Tower #3",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3209
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3160
        },
        {
          "x": 4871,
          "y": 3160
        },
        {
          "x": 4871,
          "y": 3258
        },
        {
          "x": 4775,
          "y": 3258
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-fin-4",
      "name": "Aurelia Financial Tower #4",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3209
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3160
        },
        {
          "x": 4979,
          "y": 3160
        },
        {
          "x": 4979,
          "y": 3258
        },
        {
          "x": 4883,
          "y": 3258
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-fin-5",
      "name": "Aurelia Financial Tower #5",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3209
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3160
        },
        {
          "x": 5086,
          "y": 3160
        },
        {
          "x": 5086,
          "y": 3258
        },
        {
          "x": 4990,
          "y": 3258
        }
      ],
      "floors": 53,
      "unitCount": 212
    },
    {
      "id": "bld-fin-6",
      "name": "Aurelia Financial Tower #6",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3209
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3160
        },
        {
          "x": 5194,
          "y": 3160
        },
        {
          "x": 5194,
          "y": 3258
        },
        {
          "x": 5098,
          "y": 3258
        }
      ],
      "floors": 60,
      "unitCount": 240
    },
    {
      "id": "bld-fin-7",
      "name": "Aurelia Financial Tower #7",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3209
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3160
        },
        {
          "x": 5302,
          "y": 3160
        },
        {
          "x": 5302,
          "y": 3258
        },
        {
          "x": 5206,
          "y": 3258
        }
      ],
      "floors": 67,
      "unitCount": 268
    },
    {
      "id": "bld-fin-8",
      "name": "Aurelia Financial Tower #8",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3209
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3160
        },
        {
          "x": 5410,
          "y": 3160
        },
        {
          "x": 5410,
          "y": 3258
        },
        {
          "x": 5314,
          "y": 3258
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-fin-9",
      "name": "Aurelia Financial Tower #9",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3209
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3160
        },
        {
          "x": 5517,
          "y": 3160
        },
        {
          "x": 5517,
          "y": 3258
        },
        {
          "x": 5421,
          "y": 3258
        }
      ],
      "floors": 37,
      "unitCount": 148
    },
    {
      "id": "bld-fin-10",
      "name": "Aurelia Financial Tower #10",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3209
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3160
        },
        {
          "x": 5625,
          "y": 3160
        },
        {
          "x": 5625,
          "y": 3258
        },
        {
          "x": 5529,
          "y": 3258
        }
      ],
      "floors": 44,
      "unitCount": 176
    },
    {
      "id": "bld-fin-11",
      "name": "Aurelia Financial Tower #11",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3209
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3160
        },
        {
          "x": 5733,
          "y": 3160
        },
        {
          "x": 5733,
          "y": 3258
        },
        {
          "x": 5637,
          "y": 3258
        }
      ],
      "floors": 51,
      "unitCount": 204
    },
    {
      "id": "bld-fin-12",
      "name": "Aurelia Financial Tower #12",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3209
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3160
        },
        {
          "x": 5840,
          "y": 3160
        },
        {
          "x": 5840,
          "y": 3258
        },
        {
          "x": 5744,
          "y": 3258
        }
      ],
      "floors": 58,
      "unitCount": 232
    },
    {
      "id": "bld-fin-13",
      "name": "Aurelia Financial Tower #13",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3318
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3269
        },
        {
          "x": 4656,
          "y": 3269
        },
        {
          "x": 4656,
          "y": 3367
        },
        {
          "x": 4560,
          "y": 3367
        }
      ],
      "floors": 65,
      "unitCount": 260
    },
    {
      "id": "bld-fin-14",
      "name": "Aurelia Financial Tower #14",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3318
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3269
        },
        {
          "x": 4763,
          "y": 3269
        },
        {
          "x": 4763,
          "y": 3367
        },
        {
          "x": 4667,
          "y": 3367
        }
      ],
      "floors": 28,
      "unitCount": 112
    },
    {
      "id": "bld-fin-15",
      "name": "Aurelia Financial Tower #15",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3318
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3269
        },
        {
          "x": 4871,
          "y": 3269
        },
        {
          "x": 4871,
          "y": 3367
        },
        {
          "x": 4775,
          "y": 3367
        }
      ],
      "floors": 35,
      "unitCount": 140
    },
    {
      "id": "bld-fin-16",
      "name": "Aurelia Financial Tower #16",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3318
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3269
        },
        {
          "x": 4979,
          "y": 3269
        },
        {
          "x": 4979,
          "y": 3367
        },
        {
          "x": 4883,
          "y": 3367
        }
      ],
      "floors": 42,
      "unitCount": 168
    },
    {
      "id": "bld-fin-17",
      "name": "Aurelia Financial Tower #17",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3318
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3269
        },
        {
          "x": 5086,
          "y": 3269
        },
        {
          "x": 5086,
          "y": 3367
        },
        {
          "x": 4990,
          "y": 3367
        }
      ],
      "floors": 49,
      "unitCount": 196
    },
    {
      "id": "bld-fin-18",
      "name": "Aurelia Financial Tower #18",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3318
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3269
        },
        {
          "x": 5194,
          "y": 3269
        },
        {
          "x": 5194,
          "y": 3367
        },
        {
          "x": 5098,
          "y": 3367
        }
      ],
      "floors": 56,
      "unitCount": 224
    },
    {
      "id": "bld-fin-19",
      "name": "Aurelia Financial Tower #19",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3318
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3269
        },
        {
          "x": 5302,
          "y": 3269
        },
        {
          "x": 5302,
          "y": 3367
        },
        {
          "x": 5206,
          "y": 3367
        }
      ],
      "floors": 63,
      "unitCount": 252
    },
    {
      "id": "bld-fin-20",
      "name": "Aurelia Financial Tower #20",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3318
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3269
        },
        {
          "x": 5410,
          "y": 3269
        },
        {
          "x": 5410,
          "y": 3367
        },
        {
          "x": 5314,
          "y": 3367
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-fin-21",
      "name": "Aurelia Financial Tower #21",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3318
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3269
        },
        {
          "x": 5517,
          "y": 3269
        },
        {
          "x": 5517,
          "y": 3367
        },
        {
          "x": 5421,
          "y": 3367
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-fin-22",
      "name": "Aurelia Financial Tower #22",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3318
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3269
        },
        {
          "x": 5625,
          "y": 3269
        },
        {
          "x": 5625,
          "y": 3367
        },
        {
          "x": 5529,
          "y": 3367
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-fin-23",
      "name": "Aurelia Financial Tower #23",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3318
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3269
        },
        {
          "x": 5733,
          "y": 3269
        },
        {
          "x": 5733,
          "y": 3367
        },
        {
          "x": 5637,
          "y": 3367
        }
      ],
      "floors": 47,
      "unitCount": 188
    },
    {
      "id": "bld-fin-24",
      "name": "Aurelia Financial Tower #24",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3318
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3269
        },
        {
          "x": 5840,
          "y": 3269
        },
        {
          "x": 5840,
          "y": 3367
        },
        {
          "x": 5744,
          "y": 3367
        }
      ],
      "floors": 54,
      "unitCount": 216
    },
    {
      "id": "bld-fin-25",
      "name": "Aurelia Financial Tower #25",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3427
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3378
        },
        {
          "x": 4656,
          "y": 3378
        },
        {
          "x": 4656,
          "y": 3476
        },
        {
          "x": 4560,
          "y": 3476
        }
      ],
      "floors": 61,
      "unitCount": 244
    },
    {
      "id": "bld-fin-26",
      "name": "Aurelia Financial Tower #26",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3427
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3378
        },
        {
          "x": 4763,
          "y": 3378
        },
        {
          "x": 4763,
          "y": 3476
        },
        {
          "x": 4667,
          "y": 3476
        }
      ],
      "floors": 68,
      "unitCount": 272
    },
    {
      "id": "bld-fin-27",
      "name": "Aurelia Financial Tower #27",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3427
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3378
        },
        {
          "x": 4871,
          "y": 3378
        },
        {
          "x": 4871,
          "y": 3476
        },
        {
          "x": 4775,
          "y": 3476
        }
      ],
      "floors": 31,
      "unitCount": 124
    },
    {
      "id": "bld-fin-28",
      "name": "Aurelia Financial Tower #28",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3427
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3378
        },
        {
          "x": 4979,
          "y": 3378
        },
        {
          "x": 4979,
          "y": 3476
        },
        {
          "x": 4883,
          "y": 3476
        }
      ],
      "floors": 38,
      "unitCount": 152
    },
    {
      "id": "bld-fin-29",
      "name": "Aurelia Financial Tower #29",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3427
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3378
        },
        {
          "x": 5086,
          "y": 3378
        },
        {
          "x": 5086,
          "y": 3476
        },
        {
          "x": 4990,
          "y": 3476
        }
      ],
      "floors": 45,
      "unitCount": 180
    },
    {
      "id": "bld-fin-30",
      "name": "Aurelia Financial Tower #30",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3427
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3378
        },
        {
          "x": 5194,
          "y": 3378
        },
        {
          "x": 5194,
          "y": 3476
        },
        {
          "x": 5098,
          "y": 3476
        }
      ],
      "floors": 52,
      "unitCount": 208
    },
    {
      "id": "bld-fin-31",
      "name": "Aurelia Financial Tower #31",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3427
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3378
        },
        {
          "x": 5302,
          "y": 3378
        },
        {
          "x": 5302,
          "y": 3476
        },
        {
          "x": 5206,
          "y": 3476
        }
      ],
      "floors": 59,
      "unitCount": 236
    },
    {
      "id": "bld-fin-32",
      "name": "Aurelia Financial Tower #32",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3427
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3378
        },
        {
          "x": 5410,
          "y": 3378
        },
        {
          "x": 5410,
          "y": 3476
        },
        {
          "x": 5314,
          "y": 3476
        }
      ],
      "floors": 66,
      "unitCount": 264
    },
    {
      "id": "bld-fin-33",
      "name": "Aurelia Financial Tower #33",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3427
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3378
        },
        {
          "x": 5517,
          "y": 3378
        },
        {
          "x": 5517,
          "y": 3476
        },
        {
          "x": 5421,
          "y": 3476
        }
      ],
      "floors": 29,
      "unitCount": 116
    },
    {
      "id": "bld-fin-34",
      "name": "Aurelia Financial Tower #34",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3427
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3378
        },
        {
          "x": 5625,
          "y": 3378
        },
        {
          "x": 5625,
          "y": 3476
        },
        {
          "x": 5529,
          "y": 3476
        }
      ],
      "floors": 36,
      "unitCount": 144
    },
    {
      "id": "bld-fin-35",
      "name": "Aurelia Financial Tower #35",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3427
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3378
        },
        {
          "x": 5733,
          "y": 3378
        },
        {
          "x": 5733,
          "y": 3476
        },
        {
          "x": 5637,
          "y": 3476
        }
      ],
      "floors": 43,
      "unitCount": 172
    },
    {
      "id": "bld-fin-36",
      "name": "Aurelia Financial Tower #36",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3427
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3378
        },
        {
          "x": 5840,
          "y": 3378
        },
        {
          "x": 5840,
          "y": 3476
        },
        {
          "x": 5744,
          "y": 3476
        }
      ],
      "floors": 50,
      "unitCount": 200
    },
    {
      "id": "bld-fin-37",
      "name": "Aurelia Financial Tower #37",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3536
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3487
        },
        {
          "x": 4656,
          "y": 3487
        },
        {
          "x": 4656,
          "y": 3585
        },
        {
          "x": 4560,
          "y": 3585
        }
      ],
      "floors": 57,
      "unitCount": 228
    },
    {
      "id": "bld-fin-38",
      "name": "Aurelia Financial Tower #38",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3536
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3487
        },
        {
          "x": 4763,
          "y": 3487
        },
        {
          "x": 4763,
          "y": 3585
        },
        {
          "x": 4667,
          "y": 3585
        }
      ],
      "floors": 64,
      "unitCount": 256
    },
    {
      "id": "bld-fin-39",
      "name": "Aurelia Financial Tower #39",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3536
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3487
        },
        {
          "x": 4871,
          "y": 3487
        },
        {
          "x": 4871,
          "y": 3585
        },
        {
          "x": 4775,
          "y": 3585
        }
      ],
      "floors": 27,
      "unitCount": 108
    },
    {
      "id": "bld-fin-40",
      "name": "Aurelia Financial Tower #40",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3536
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3487
        },
        {
          "x": 4979,
          "y": 3487
        },
        {
          "x": 4979,
          "y": 3585
        },
        {
          "x": 4883,
          "y": 3585
        }
      ],
      "floors": 34,
      "unitCount": 136
    },
    {
      "id": "bld-fin-41",
      "name": "Aurelia Financial Tower #41",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3536
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3487
        },
        {
          "x": 5086,
          "y": 3487
        },
        {
          "x": 5086,
          "y": 3585
        },
        {
          "x": 4990,
          "y": 3585
        }
      ],
      "floors": 41,
      "unitCount": 164
    },
    {
      "id": "bld-fin-42",
      "name": "Aurelia Financial Tower #42",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3536
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3487
        },
        {
          "x": 5194,
          "y": 3487
        },
        {
          "x": 5194,
          "y": 3585
        },
        {
          "x": 5098,
          "y": 3585
        }
      ],
      "floors": 48,
      "unitCount": 192
    },
    {
      "id": "bld-fin-43",
      "name": "Aurelia Financial Tower #43",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3536
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3487
        },
        {
          "x": 5302,
          "y": 3487
        },
        {
          "x": 5302,
          "y": 3585
        },
        {
          "x": 5206,
          "y": 3585
        }
      ],
      "floors": 55,
      "unitCount": 220
    },
    {
      "id": "bld-fin-44",
      "name": "Aurelia Financial Tower #44",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3536
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3487
        },
        {
          "x": 5410,
          "y": 3487
        },
        {
          "x": 5410,
          "y": 3585
        },
        {
          "x": 5314,
          "y": 3585
        }
      ],
      "floors": 62,
      "unitCount": 248
    },
    {
      "id": "bld-fin-45",
      "name": "Aurelia Financial Tower #45",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3536
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3487
        },
        {
          "x": 5517,
          "y": 3487
        },
        {
          "x": 5517,
          "y": 3585
        },
        {
          "x": 5421,
          "y": 3585
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-fin-46",
      "name": "Aurelia Financial Tower #46",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3536
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3487
        },
        {
          "x": 5625,
          "y": 3487
        },
        {
          "x": 5625,
          "y": 3585
        },
        {
          "x": 5529,
          "y": 3585
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-fin-47",
      "name": "Aurelia Financial Tower #47",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3536
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3487
        },
        {
          "x": 5733,
          "y": 3487
        },
        {
          "x": 5733,
          "y": 3585
        },
        {
          "x": 5637,
          "y": 3585
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-fin-48",
      "name": "Aurelia Financial Tower #48",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3536
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3487
        },
        {
          "x": 5840,
          "y": 3487
        },
        {
          "x": 5840,
          "y": 3585
        },
        {
          "x": 5744,
          "y": 3585
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-fin-49",
      "name": "Aurelia Financial Tower #49",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3645
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3596
        },
        {
          "x": 4656,
          "y": 3596
        },
        {
          "x": 4656,
          "y": 3694
        },
        {
          "x": 4560,
          "y": 3694
        }
      ],
      "floors": 53,
      "unitCount": 212
    },
    {
      "id": "bld-fin-50",
      "name": "Aurelia Financial Tower #50",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3645
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3596
        },
        {
          "x": 4763,
          "y": 3596
        },
        {
          "x": 4763,
          "y": 3694
        },
        {
          "x": 4667,
          "y": 3694
        }
      ],
      "floors": 60,
      "unitCount": 240
    },
    {
      "id": "bld-fin-51",
      "name": "Aurelia Financial Tower #51",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3645
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3596
        },
        {
          "x": 4871,
          "y": 3596
        },
        {
          "x": 4871,
          "y": 3694
        },
        {
          "x": 4775,
          "y": 3694
        }
      ],
      "floors": 67,
      "unitCount": 268
    },
    {
      "id": "bld-fin-52",
      "name": "Aurelia Financial Tower #52",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3645
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3596
        },
        {
          "x": 4979,
          "y": 3596
        },
        {
          "x": 4979,
          "y": 3694
        },
        {
          "x": 4883,
          "y": 3694
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-fin-53",
      "name": "Aurelia Financial Tower #53",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3645
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3596
        },
        {
          "x": 5086,
          "y": 3596
        },
        {
          "x": 5086,
          "y": 3694
        },
        {
          "x": 4990,
          "y": 3694
        }
      ],
      "floors": 37,
      "unitCount": 148
    },
    {
      "id": "bld-fin-54",
      "name": "Aurelia Financial Tower #54",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3645
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3596
        },
        {
          "x": 5194,
          "y": 3596
        },
        {
          "x": 5194,
          "y": 3694
        },
        {
          "x": 5098,
          "y": 3694
        }
      ],
      "floors": 44,
      "unitCount": 176
    },
    {
      "id": "bld-fin-55",
      "name": "Aurelia Financial Tower #55",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3645
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3596
        },
        {
          "x": 5302,
          "y": 3596
        },
        {
          "x": 5302,
          "y": 3694
        },
        {
          "x": 5206,
          "y": 3694
        }
      ],
      "floors": 51,
      "unitCount": 204
    },
    {
      "id": "bld-fin-56",
      "name": "Aurelia Financial Tower #56",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3645
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3596
        },
        {
          "x": 5410,
          "y": 3596
        },
        {
          "x": 5410,
          "y": 3694
        },
        {
          "x": 5314,
          "y": 3694
        }
      ],
      "floors": 58,
      "unitCount": 232
    },
    {
      "id": "bld-fin-57",
      "name": "Aurelia Financial Tower #57",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3645
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3596
        },
        {
          "x": 5517,
          "y": 3596
        },
        {
          "x": 5517,
          "y": 3694
        },
        {
          "x": 5421,
          "y": 3694
        }
      ],
      "floors": 65,
      "unitCount": 260
    },
    {
      "id": "bld-fin-58",
      "name": "Aurelia Financial Tower #58",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3645
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3596
        },
        {
          "x": 5625,
          "y": 3596
        },
        {
          "x": 5625,
          "y": 3694
        },
        {
          "x": 5529,
          "y": 3694
        }
      ],
      "floors": 28,
      "unitCount": 112
    },
    {
      "id": "bld-fin-59",
      "name": "Aurelia Financial Tower #59",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3645
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3596
        },
        {
          "x": 5733,
          "y": 3596
        },
        {
          "x": 5733,
          "y": 3694
        },
        {
          "x": 5637,
          "y": 3694
        }
      ],
      "floors": 35,
      "unitCount": 140
    },
    {
      "id": "bld-fin-60",
      "name": "Aurelia Financial Tower #60",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3645
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3596
        },
        {
          "x": 5840,
          "y": 3596
        },
        {
          "x": 5840,
          "y": 3694
        },
        {
          "x": 5744,
          "y": 3694
        }
      ],
      "floors": 42,
      "unitCount": 168
    },
    {
      "id": "bld-fin-61",
      "name": "Aurelia Financial Tower #61",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3755
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3706
        },
        {
          "x": 4656,
          "y": 3706
        },
        {
          "x": 4656,
          "y": 3804
        },
        {
          "x": 4560,
          "y": 3804
        }
      ],
      "floors": 49,
      "unitCount": 196
    },
    {
      "id": "bld-fin-62",
      "name": "Aurelia Financial Tower #62",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3755
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3706
        },
        {
          "x": 4763,
          "y": 3706
        },
        {
          "x": 4763,
          "y": 3804
        },
        {
          "x": 4667,
          "y": 3804
        }
      ],
      "floors": 56,
      "unitCount": 224
    },
    {
      "id": "bld-fin-63",
      "name": "Aurelia Financial Tower #63",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3755
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3706
        },
        {
          "x": 4871,
          "y": 3706
        },
        {
          "x": 4871,
          "y": 3804
        },
        {
          "x": 4775,
          "y": 3804
        }
      ],
      "floors": 63,
      "unitCount": 252
    },
    {
      "id": "bld-fin-64",
      "name": "Aurelia Financial Tower #64",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3755
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3706
        },
        {
          "x": 4979,
          "y": 3706
        },
        {
          "x": 4979,
          "y": 3804
        },
        {
          "x": 4883,
          "y": 3804
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-fin-65",
      "name": "Aurelia Financial Tower #65",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3755
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3706
        },
        {
          "x": 5086,
          "y": 3706
        },
        {
          "x": 5086,
          "y": 3804
        },
        {
          "x": 4990,
          "y": 3804
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-fin-66",
      "name": "Aurelia Financial Tower #66",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3755
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3706
        },
        {
          "x": 5194,
          "y": 3706
        },
        {
          "x": 5194,
          "y": 3804
        },
        {
          "x": 5098,
          "y": 3804
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-fin-67",
      "name": "Aurelia Financial Tower #67",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3755
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3706
        },
        {
          "x": 5302,
          "y": 3706
        },
        {
          "x": 5302,
          "y": 3804
        },
        {
          "x": 5206,
          "y": 3804
        }
      ],
      "floors": 47,
      "unitCount": 188
    },
    {
      "id": "bld-fin-68",
      "name": "Aurelia Financial Tower #68",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3755
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3706
        },
        {
          "x": 5410,
          "y": 3706
        },
        {
          "x": 5410,
          "y": 3804
        },
        {
          "x": 5314,
          "y": 3804
        }
      ],
      "floors": 54,
      "unitCount": 216
    },
    {
      "id": "bld-fin-69",
      "name": "Aurelia Financial Tower #69",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3755
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3706
        },
        {
          "x": 5517,
          "y": 3706
        },
        {
          "x": 5517,
          "y": 3804
        },
        {
          "x": 5421,
          "y": 3804
        }
      ],
      "floors": 61,
      "unitCount": 244
    },
    {
      "id": "bld-fin-70",
      "name": "Aurelia Financial Tower #70",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3755
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3706
        },
        {
          "x": 5625,
          "y": 3706
        },
        {
          "x": 5625,
          "y": 3804
        },
        {
          "x": 5529,
          "y": 3804
        }
      ],
      "floors": 68,
      "unitCount": 272
    },
    {
      "id": "bld-fin-71",
      "name": "Aurelia Financial Tower #71",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3755
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3706
        },
        {
          "x": 5733,
          "y": 3706
        },
        {
          "x": 5733,
          "y": 3804
        },
        {
          "x": 5637,
          "y": 3804
        }
      ],
      "floors": 31,
      "unitCount": 124
    },
    {
      "id": "bld-fin-72",
      "name": "Aurelia Financial Tower #72",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3755
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3706
        },
        {
          "x": 5840,
          "y": 3706
        },
        {
          "x": 5840,
          "y": 3804
        },
        {
          "x": 5744,
          "y": 3804
        }
      ],
      "floors": 38,
      "unitCount": 152
    },
    {
      "id": "bld-fin-73",
      "name": "Aurelia Financial Tower #73",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3864
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3815
        },
        {
          "x": 4656,
          "y": 3815
        },
        {
          "x": 4656,
          "y": 3913
        },
        {
          "x": 4560,
          "y": 3913
        }
      ],
      "floors": 45,
      "unitCount": 180
    },
    {
      "id": "bld-fin-74",
      "name": "Aurelia Financial Tower #74",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3864
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3815
        },
        {
          "x": 4763,
          "y": 3815
        },
        {
          "x": 4763,
          "y": 3913
        },
        {
          "x": 4667,
          "y": 3913
        }
      ],
      "floors": 52,
      "unitCount": 208
    },
    {
      "id": "bld-fin-75",
      "name": "Aurelia Financial Tower #75",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3864
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3815
        },
        {
          "x": 4871,
          "y": 3815
        },
        {
          "x": 4871,
          "y": 3913
        },
        {
          "x": 4775,
          "y": 3913
        }
      ],
      "floors": 59,
      "unitCount": 236
    },
    {
      "id": "bld-fin-76",
      "name": "Aurelia Financial Tower #76",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3864
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3815
        },
        {
          "x": 4979,
          "y": 3815
        },
        {
          "x": 4979,
          "y": 3913
        },
        {
          "x": 4883,
          "y": 3913
        }
      ],
      "floors": 66,
      "unitCount": 264
    },
    {
      "id": "bld-fin-77",
      "name": "Aurelia Financial Tower #77",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3864
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3815
        },
        {
          "x": 5086,
          "y": 3815
        },
        {
          "x": 5086,
          "y": 3913
        },
        {
          "x": 4990,
          "y": 3913
        }
      ],
      "floors": 29,
      "unitCount": 116
    },
    {
      "id": "bld-fin-78",
      "name": "Aurelia Financial Tower #78",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3864
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3815
        },
        {
          "x": 5194,
          "y": 3815
        },
        {
          "x": 5194,
          "y": 3913
        },
        {
          "x": 5098,
          "y": 3913
        }
      ],
      "floors": 36,
      "unitCount": 144
    },
    {
      "id": "bld-fin-79",
      "name": "Aurelia Financial Tower #79",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3864
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3815
        },
        {
          "x": 5302,
          "y": 3815
        },
        {
          "x": 5302,
          "y": 3913
        },
        {
          "x": 5206,
          "y": 3913
        }
      ],
      "floors": 43,
      "unitCount": 172
    },
    {
      "id": "bld-fin-80",
      "name": "Aurelia Financial Tower #80",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3864
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3815
        },
        {
          "x": 5410,
          "y": 3815
        },
        {
          "x": 5410,
          "y": 3913
        },
        {
          "x": 5314,
          "y": 3913
        }
      ],
      "floors": 50,
      "unitCount": 200
    },
    {
      "id": "bld-fin-81",
      "name": "Aurelia Financial Tower #81",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3864
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3815
        },
        {
          "x": 5517,
          "y": 3815
        },
        {
          "x": 5517,
          "y": 3913
        },
        {
          "x": 5421,
          "y": 3913
        }
      ],
      "floors": 57,
      "unitCount": 228
    },
    {
      "id": "bld-fin-82",
      "name": "Aurelia Financial Tower #82",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3864
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3815
        },
        {
          "x": 5625,
          "y": 3815
        },
        {
          "x": 5625,
          "y": 3913
        },
        {
          "x": 5529,
          "y": 3913
        }
      ],
      "floors": 64,
      "unitCount": 256
    },
    {
      "id": "bld-fin-83",
      "name": "Aurelia Financial Tower #83",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3864
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3815
        },
        {
          "x": 5733,
          "y": 3815
        },
        {
          "x": 5733,
          "y": 3913
        },
        {
          "x": 5637,
          "y": 3913
        }
      ],
      "floors": 27,
      "unitCount": 108
    },
    {
      "id": "bld-fin-84",
      "name": "Aurelia Financial Tower #84",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3864
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3815
        },
        {
          "x": 5840,
          "y": 3815
        },
        {
          "x": 5840,
          "y": 3913
        },
        {
          "x": 5744,
          "y": 3913
        }
      ],
      "floors": 34,
      "unitCount": 136
    },
    {
      "id": "bld-fin-85",
      "name": "Aurelia Financial Tower #85",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 3973
      },
      "footprint": [
        {
          "x": 4560,
          "y": 3924
        },
        {
          "x": 4656,
          "y": 3924
        },
        {
          "x": 4656,
          "y": 4022
        },
        {
          "x": 4560,
          "y": 4022
        }
      ],
      "floors": 41,
      "unitCount": 164
    },
    {
      "id": "bld-fin-86",
      "name": "Aurelia Financial Tower #86",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 3973
      },
      "footprint": [
        {
          "x": 4667,
          "y": 3924
        },
        {
          "x": 4763,
          "y": 3924
        },
        {
          "x": 4763,
          "y": 4022
        },
        {
          "x": 4667,
          "y": 4022
        }
      ],
      "floors": 48,
      "unitCount": 192
    },
    {
      "id": "bld-fin-87",
      "name": "Aurelia Financial Tower #87",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 3973
      },
      "footprint": [
        {
          "x": 4775,
          "y": 3924
        },
        {
          "x": 4871,
          "y": 3924
        },
        {
          "x": 4871,
          "y": 4022
        },
        {
          "x": 4775,
          "y": 4022
        }
      ],
      "floors": 55,
      "unitCount": 220
    },
    {
      "id": "bld-fin-88",
      "name": "Aurelia Financial Tower #88",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 3973
      },
      "footprint": [
        {
          "x": 4883,
          "y": 3924
        },
        {
          "x": 4979,
          "y": 3924
        },
        {
          "x": 4979,
          "y": 4022
        },
        {
          "x": 4883,
          "y": 4022
        }
      ],
      "floors": 62,
      "unitCount": 248
    },
    {
      "id": "bld-fin-89",
      "name": "Aurelia Financial Tower #89",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 3973
      },
      "footprint": [
        {
          "x": 4990,
          "y": 3924
        },
        {
          "x": 5086,
          "y": 3924
        },
        {
          "x": 5086,
          "y": 4022
        },
        {
          "x": 4990,
          "y": 4022
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-fin-90",
      "name": "Aurelia Financial Tower #90",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 3973
      },
      "footprint": [
        {
          "x": 5098,
          "y": 3924
        },
        {
          "x": 5194,
          "y": 3924
        },
        {
          "x": 5194,
          "y": 4022
        },
        {
          "x": 5098,
          "y": 4022
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-fin-91",
      "name": "Aurelia Financial Tower #91",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 3973
      },
      "footprint": [
        {
          "x": 5206,
          "y": 3924
        },
        {
          "x": 5302,
          "y": 3924
        },
        {
          "x": 5302,
          "y": 4022
        },
        {
          "x": 5206,
          "y": 4022
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-fin-92",
      "name": "Aurelia Financial Tower #92",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 3973
      },
      "footprint": [
        {
          "x": 5314,
          "y": 3924
        },
        {
          "x": 5410,
          "y": 3924
        },
        {
          "x": 5410,
          "y": 4022
        },
        {
          "x": 5314,
          "y": 4022
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-fin-93",
      "name": "Aurelia Financial Tower #93",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 3973
      },
      "footprint": [
        {
          "x": 5421,
          "y": 3924
        },
        {
          "x": 5517,
          "y": 3924
        },
        {
          "x": 5517,
          "y": 4022
        },
        {
          "x": 5421,
          "y": 4022
        }
      ],
      "floors": 53,
      "unitCount": 212
    },
    {
      "id": "bld-fin-94",
      "name": "Aurelia Financial Tower #94",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 3973
      },
      "footprint": [
        {
          "x": 5529,
          "y": 3924
        },
        {
          "x": 5625,
          "y": 3924
        },
        {
          "x": 5625,
          "y": 4022
        },
        {
          "x": 5529,
          "y": 4022
        }
      ],
      "floors": 60,
      "unitCount": 240
    },
    {
      "id": "bld-fin-95",
      "name": "Aurelia Financial Tower #95",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 3973
      },
      "footprint": [
        {
          "x": 5637,
          "y": 3924
        },
        {
          "x": 5733,
          "y": 3924
        },
        {
          "x": 5733,
          "y": 4022
        },
        {
          "x": 5637,
          "y": 4022
        }
      ],
      "floors": 67,
      "unitCount": 268
    },
    {
      "id": "bld-fin-96",
      "name": "Aurelia Financial Tower #96",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 3973
      },
      "footprint": [
        {
          "x": 5744,
          "y": 3924
        },
        {
          "x": 5840,
          "y": 3924
        },
        {
          "x": 5840,
          "y": 4022
        },
        {
          "x": 5744,
          "y": 4022
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-fin-97",
      "name": "Aurelia Financial Tower #97",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 4082
      },
      "footprint": [
        {
          "x": 4560,
          "y": 4033
        },
        {
          "x": 4656,
          "y": 4033
        },
        {
          "x": 4656,
          "y": 4131
        },
        {
          "x": 4560,
          "y": 4131
        }
      ],
      "floors": 37,
      "unitCount": 148
    },
    {
      "id": "bld-fin-98",
      "name": "Aurelia Financial Tower #98",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 4082
      },
      "footprint": [
        {
          "x": 4667,
          "y": 4033
        },
        {
          "x": 4763,
          "y": 4033
        },
        {
          "x": 4763,
          "y": 4131
        },
        {
          "x": 4667,
          "y": 4131
        }
      ],
      "floors": 44,
      "unitCount": 176
    },
    {
      "id": "bld-fin-99",
      "name": "Aurelia Financial Tower #99",
      "type": "commercial_office",
      "center": {
        "x": 4823,
        "y": 4082
      },
      "footprint": [
        {
          "x": 4775,
          "y": 4033
        },
        {
          "x": 4871,
          "y": 4033
        },
        {
          "x": 4871,
          "y": 4131
        },
        {
          "x": 4775,
          "y": 4131
        }
      ],
      "floors": 51,
      "unitCount": 204
    },
    {
      "id": "bld-fin-100",
      "name": "Aurelia Financial Tower #100",
      "type": "commercial_office",
      "center": {
        "x": 4931,
        "y": 4082
      },
      "footprint": [
        {
          "x": 4883,
          "y": 4033
        },
        {
          "x": 4979,
          "y": 4033
        },
        {
          "x": 4979,
          "y": 4131
        },
        {
          "x": 4883,
          "y": 4131
        }
      ],
      "floors": 58,
      "unitCount": 232
    },
    {
      "id": "bld-fin-101",
      "name": "Aurelia Financial Tower #101",
      "type": "commercial_office",
      "center": {
        "x": 5038,
        "y": 4082
      },
      "footprint": [
        {
          "x": 4990,
          "y": 4033
        },
        {
          "x": 5086,
          "y": 4033
        },
        {
          "x": 5086,
          "y": 4131
        },
        {
          "x": 4990,
          "y": 4131
        }
      ],
      "floors": 65,
      "unitCount": 260
    },
    {
      "id": "bld-fin-102",
      "name": "Aurelia Financial Tower #102",
      "type": "commercial_office",
      "center": {
        "x": 5146,
        "y": 4082
      },
      "footprint": [
        {
          "x": 5098,
          "y": 4033
        },
        {
          "x": 5194,
          "y": 4033
        },
        {
          "x": 5194,
          "y": 4131
        },
        {
          "x": 5098,
          "y": 4131
        }
      ],
      "floors": 28,
      "unitCount": 112
    },
    {
      "id": "bld-fin-103",
      "name": "Aurelia Financial Tower #103",
      "type": "commercial_office",
      "center": {
        "x": 5254,
        "y": 4082
      },
      "footprint": [
        {
          "x": 5206,
          "y": 4033
        },
        {
          "x": 5302,
          "y": 4033
        },
        {
          "x": 5302,
          "y": 4131
        },
        {
          "x": 5206,
          "y": 4131
        }
      ],
      "floors": 35,
      "unitCount": 140
    },
    {
      "id": "bld-fin-104",
      "name": "Aurelia Financial Tower #104",
      "type": "commercial_office",
      "center": {
        "x": 5362,
        "y": 4082
      },
      "footprint": [
        {
          "x": 5314,
          "y": 4033
        },
        {
          "x": 5410,
          "y": 4033
        },
        {
          "x": 5410,
          "y": 4131
        },
        {
          "x": 5314,
          "y": 4131
        }
      ],
      "floors": 42,
      "unitCount": 168
    },
    {
      "id": "bld-fin-105",
      "name": "Aurelia Financial Tower #105",
      "type": "commercial_office",
      "center": {
        "x": 5469,
        "y": 4082
      },
      "footprint": [
        {
          "x": 5421,
          "y": 4033
        },
        {
          "x": 5517,
          "y": 4033
        },
        {
          "x": 5517,
          "y": 4131
        },
        {
          "x": 5421,
          "y": 4131
        }
      ],
      "floors": 49,
      "unitCount": 196
    },
    {
      "id": "bld-fin-106",
      "name": "Aurelia Financial Tower #106",
      "type": "commercial_office",
      "center": {
        "x": 5577,
        "y": 4082
      },
      "footprint": [
        {
          "x": 5529,
          "y": 4033
        },
        {
          "x": 5625,
          "y": 4033
        },
        {
          "x": 5625,
          "y": 4131
        },
        {
          "x": 5529,
          "y": 4131
        }
      ],
      "floors": 56,
      "unitCount": 224
    },
    {
      "id": "bld-fin-107",
      "name": "Aurelia Financial Tower #107",
      "type": "commercial_office",
      "center": {
        "x": 5685,
        "y": 4082
      },
      "footprint": [
        {
          "x": 5637,
          "y": 4033
        },
        {
          "x": 5733,
          "y": 4033
        },
        {
          "x": 5733,
          "y": 4131
        },
        {
          "x": 5637,
          "y": 4131
        }
      ],
      "floors": 63,
      "unitCount": 252
    },
    {
      "id": "bld-fin-108",
      "name": "Aurelia Financial Tower #108",
      "type": "commercial_office",
      "center": {
        "x": 5792,
        "y": 4082
      },
      "footprint": [
        {
          "x": 5744,
          "y": 4033
        },
        {
          "x": 5840,
          "y": 4033
        },
        {
          "x": 5840,
          "y": 4131
        },
        {
          "x": 5744,
          "y": 4131
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-fin-109",
      "name": "Aurelia Financial Tower #109",
      "type": "commercial_office",
      "center": {
        "x": 4608,
        "y": 4191
      },
      "footprint": [
        {
          "x": 4560,
          "y": 4142
        },
        {
          "x": 4656,
          "y": 4142
        },
        {
          "x": 4656,
          "y": 4240
        },
        {
          "x": 4560,
          "y": 4240
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-fin-110",
      "name": "Aurelia Financial Tower #110",
      "type": "commercial_office",
      "center": {
        "x": 4715,
        "y": 4191
      },
      "footprint": [
        {
          "x": 4667,
          "y": 4142
        },
        {
          "x": 4763,
          "y": 4142
        },
        {
          "x": 4763,
          "y": 4240
        },
        {
          "x": 4667,
          "y": 4240
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-cit-1",
      "name": "Citadel Heritage Mansions #1",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3209
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3160
        },
        {
          "x": 3056,
          "y": 3160
        },
        {
          "x": 3056,
          "y": 3258
        },
        {
          "x": 2960,
          "y": 3258
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-2",
      "name": "Citadel Heritage Mansions #2",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3160
        },
        {
          "x": 3163,
          "y": 3160
        },
        {
          "x": 3163,
          "y": 3258
        },
        {
          "x": 3067,
          "y": 3258
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-3",
      "name": "Citadel Heritage Mansions #3",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3160
        },
        {
          "x": 3271,
          "y": 3160
        },
        {
          "x": 3271,
          "y": 3258
        },
        {
          "x": 3175,
          "y": 3258
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-4",
      "name": "Citadel Heritage Mansions #4",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3160
        },
        {
          "x": 3379,
          "y": 3160
        },
        {
          "x": 3379,
          "y": 3258
        },
        {
          "x": 3283,
          "y": 3258
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-5",
      "name": "Citadel Heritage Mansions #5",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3160
        },
        {
          "x": 3486,
          "y": 3160
        },
        {
          "x": 3486,
          "y": 3258
        },
        {
          "x": 3390,
          "y": 3258
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-6",
      "name": "Citadel Heritage Mansions #6",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3160
        },
        {
          "x": 3594,
          "y": 3160
        },
        {
          "x": 3594,
          "y": 3258
        },
        {
          "x": 3498,
          "y": 3258
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-7",
      "name": "Citadel Heritage Mansions #7",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3160
        },
        {
          "x": 3702,
          "y": 3160
        },
        {
          "x": 3702,
          "y": 3258
        },
        {
          "x": 3606,
          "y": 3258
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-8",
      "name": "Citadel Heritage Mansions #8",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3160
        },
        {
          "x": 3810,
          "y": 3160
        },
        {
          "x": 3810,
          "y": 3258
        },
        {
          "x": 3714,
          "y": 3258
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-9",
      "name": "Citadel Heritage Mansions #9",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3160
        },
        {
          "x": 3917,
          "y": 3160
        },
        {
          "x": 3917,
          "y": 3258
        },
        {
          "x": 3821,
          "y": 3258
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-10",
      "name": "Citadel Heritage Mansions #10",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3209
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3160
        },
        {
          "x": 4025,
          "y": 3160
        },
        {
          "x": 4025,
          "y": 3258
        },
        {
          "x": 3929,
          "y": 3258
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-11",
      "name": "Citadel Heritage Mansions #11",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3209
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3160
        },
        {
          "x": 4133,
          "y": 3160
        },
        {
          "x": 4133,
          "y": 3258
        },
        {
          "x": 4037,
          "y": 3258
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-12",
      "name": "Citadel Heritage Mansions #12",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3209
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3160
        },
        {
          "x": 4240,
          "y": 3160
        },
        {
          "x": 4240,
          "y": 3258
        },
        {
          "x": 4144,
          "y": 3258
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-13",
      "name": "Citadel Heritage Mansions #13",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3318
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3269
        },
        {
          "x": 3056,
          "y": 3269
        },
        {
          "x": 3056,
          "y": 3367
        },
        {
          "x": 2960,
          "y": 3367
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-14",
      "name": "Citadel Heritage Mansions #14",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3269
        },
        {
          "x": 3163,
          "y": 3269
        },
        {
          "x": 3163,
          "y": 3367
        },
        {
          "x": 3067,
          "y": 3367
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-15",
      "name": "Citadel Heritage Mansions #15",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3269
        },
        {
          "x": 3271,
          "y": 3269
        },
        {
          "x": 3271,
          "y": 3367
        },
        {
          "x": 3175,
          "y": 3367
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-16",
      "name": "Citadel Heritage Mansions #16",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3269
        },
        {
          "x": 3379,
          "y": 3269
        },
        {
          "x": 3379,
          "y": 3367
        },
        {
          "x": 3283,
          "y": 3367
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-17",
      "name": "Citadel Heritage Mansions #17",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3269
        },
        {
          "x": 3486,
          "y": 3269
        },
        {
          "x": 3486,
          "y": 3367
        },
        {
          "x": 3390,
          "y": 3367
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-18",
      "name": "Citadel Heritage Mansions #18",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3269
        },
        {
          "x": 3594,
          "y": 3269
        },
        {
          "x": 3594,
          "y": 3367
        },
        {
          "x": 3498,
          "y": 3367
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-19",
      "name": "Citadel Heritage Mansions #19",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3269
        },
        {
          "x": 3702,
          "y": 3269
        },
        {
          "x": 3702,
          "y": 3367
        },
        {
          "x": 3606,
          "y": 3367
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-20",
      "name": "Citadel Heritage Mansions #20",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3269
        },
        {
          "x": 3810,
          "y": 3269
        },
        {
          "x": 3810,
          "y": 3367
        },
        {
          "x": 3714,
          "y": 3367
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-21",
      "name": "Citadel Heritage Mansions #21",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3269
        },
        {
          "x": 3917,
          "y": 3269
        },
        {
          "x": 3917,
          "y": 3367
        },
        {
          "x": 3821,
          "y": 3367
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-22",
      "name": "Citadel Heritage Mansions #22",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3318
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3269
        },
        {
          "x": 4025,
          "y": 3269
        },
        {
          "x": 4025,
          "y": 3367
        },
        {
          "x": 3929,
          "y": 3367
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-23",
      "name": "Citadel Heritage Mansions #23",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3318
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3269
        },
        {
          "x": 4133,
          "y": 3269
        },
        {
          "x": 4133,
          "y": 3367
        },
        {
          "x": 4037,
          "y": 3367
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-24",
      "name": "Citadel Heritage Mansions #24",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3318
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3269
        },
        {
          "x": 4240,
          "y": 3269
        },
        {
          "x": 4240,
          "y": 3367
        },
        {
          "x": 4144,
          "y": 3367
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-25",
      "name": "Citadel Heritage Mansions #25",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3427
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3378
        },
        {
          "x": 3056,
          "y": 3378
        },
        {
          "x": 3056,
          "y": 3476
        },
        {
          "x": 2960,
          "y": 3476
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-26",
      "name": "Citadel Heritage Mansions #26",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3378
        },
        {
          "x": 3163,
          "y": 3378
        },
        {
          "x": 3163,
          "y": 3476
        },
        {
          "x": 3067,
          "y": 3476
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-27",
      "name": "Citadel Heritage Mansions #27",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3378
        },
        {
          "x": 3271,
          "y": 3378
        },
        {
          "x": 3271,
          "y": 3476
        },
        {
          "x": 3175,
          "y": 3476
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-28",
      "name": "Citadel Heritage Mansions #28",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3378
        },
        {
          "x": 3379,
          "y": 3378
        },
        {
          "x": 3379,
          "y": 3476
        },
        {
          "x": 3283,
          "y": 3476
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-29",
      "name": "Citadel Heritage Mansions #29",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3378
        },
        {
          "x": 3486,
          "y": 3378
        },
        {
          "x": 3486,
          "y": 3476
        },
        {
          "x": 3390,
          "y": 3476
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-30",
      "name": "Citadel Heritage Mansions #30",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3378
        },
        {
          "x": 3594,
          "y": 3378
        },
        {
          "x": 3594,
          "y": 3476
        },
        {
          "x": 3498,
          "y": 3476
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-31",
      "name": "Citadel Heritage Mansions #31",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3378
        },
        {
          "x": 3702,
          "y": 3378
        },
        {
          "x": 3702,
          "y": 3476
        },
        {
          "x": 3606,
          "y": 3476
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-32",
      "name": "Citadel Heritage Mansions #32",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3378
        },
        {
          "x": 3810,
          "y": 3378
        },
        {
          "x": 3810,
          "y": 3476
        },
        {
          "x": 3714,
          "y": 3476
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-33",
      "name": "Citadel Heritage Mansions #33",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3378
        },
        {
          "x": 3917,
          "y": 3378
        },
        {
          "x": 3917,
          "y": 3476
        },
        {
          "x": 3821,
          "y": 3476
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-34",
      "name": "Citadel Heritage Mansions #34",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3427
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3378
        },
        {
          "x": 4025,
          "y": 3378
        },
        {
          "x": 4025,
          "y": 3476
        },
        {
          "x": 3929,
          "y": 3476
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-35",
      "name": "Citadel Heritage Mansions #35",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3427
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3378
        },
        {
          "x": 4133,
          "y": 3378
        },
        {
          "x": 4133,
          "y": 3476
        },
        {
          "x": 4037,
          "y": 3476
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-36",
      "name": "Citadel Heritage Mansions #36",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3427
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3378
        },
        {
          "x": 4240,
          "y": 3378
        },
        {
          "x": 4240,
          "y": 3476
        },
        {
          "x": 4144,
          "y": 3476
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-37",
      "name": "Citadel Heritage Mansions #37",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3536
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3487
        },
        {
          "x": 3056,
          "y": 3487
        },
        {
          "x": 3056,
          "y": 3585
        },
        {
          "x": 2960,
          "y": 3585
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-38",
      "name": "Citadel Heritage Mansions #38",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3487
        },
        {
          "x": 3163,
          "y": 3487
        },
        {
          "x": 3163,
          "y": 3585
        },
        {
          "x": 3067,
          "y": 3585
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-39",
      "name": "Citadel Heritage Mansions #39",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3487
        },
        {
          "x": 3271,
          "y": 3487
        },
        {
          "x": 3271,
          "y": 3585
        },
        {
          "x": 3175,
          "y": 3585
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-40",
      "name": "Citadel Heritage Mansions #40",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3487
        },
        {
          "x": 3379,
          "y": 3487
        },
        {
          "x": 3379,
          "y": 3585
        },
        {
          "x": 3283,
          "y": 3585
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-41",
      "name": "Citadel Heritage Mansions #41",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3487
        },
        {
          "x": 3486,
          "y": 3487
        },
        {
          "x": 3486,
          "y": 3585
        },
        {
          "x": 3390,
          "y": 3585
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-42",
      "name": "Citadel Heritage Mansions #42",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3487
        },
        {
          "x": 3594,
          "y": 3487
        },
        {
          "x": 3594,
          "y": 3585
        },
        {
          "x": 3498,
          "y": 3585
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-43",
      "name": "Citadel Heritage Mansions #43",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3487
        },
        {
          "x": 3702,
          "y": 3487
        },
        {
          "x": 3702,
          "y": 3585
        },
        {
          "x": 3606,
          "y": 3585
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-44",
      "name": "Citadel Heritage Mansions #44",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3487
        },
        {
          "x": 3810,
          "y": 3487
        },
        {
          "x": 3810,
          "y": 3585
        },
        {
          "x": 3714,
          "y": 3585
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-45",
      "name": "Citadel Heritage Mansions #45",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3487
        },
        {
          "x": 3917,
          "y": 3487
        },
        {
          "x": 3917,
          "y": 3585
        },
        {
          "x": 3821,
          "y": 3585
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-46",
      "name": "Citadel Heritage Mansions #46",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3536
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3487
        },
        {
          "x": 4025,
          "y": 3487
        },
        {
          "x": 4025,
          "y": 3585
        },
        {
          "x": 3929,
          "y": 3585
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-47",
      "name": "Citadel Heritage Mansions #47",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3536
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3487
        },
        {
          "x": 4133,
          "y": 3487
        },
        {
          "x": 4133,
          "y": 3585
        },
        {
          "x": 4037,
          "y": 3585
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-48",
      "name": "Citadel Heritage Mansions #48",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3536
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3487
        },
        {
          "x": 4240,
          "y": 3487
        },
        {
          "x": 4240,
          "y": 3585
        },
        {
          "x": 4144,
          "y": 3585
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-49",
      "name": "Citadel Heritage Mansions #49",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3645
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3596
        },
        {
          "x": 3056,
          "y": 3596
        },
        {
          "x": 3056,
          "y": 3694
        },
        {
          "x": 2960,
          "y": 3694
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-50",
      "name": "Citadel Heritage Mansions #50",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3596
        },
        {
          "x": 3163,
          "y": 3596
        },
        {
          "x": 3163,
          "y": 3694
        },
        {
          "x": 3067,
          "y": 3694
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-51",
      "name": "Citadel Heritage Mansions #51",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3596
        },
        {
          "x": 3271,
          "y": 3596
        },
        {
          "x": 3271,
          "y": 3694
        },
        {
          "x": 3175,
          "y": 3694
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-52",
      "name": "Citadel Heritage Mansions #52",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3596
        },
        {
          "x": 3379,
          "y": 3596
        },
        {
          "x": 3379,
          "y": 3694
        },
        {
          "x": 3283,
          "y": 3694
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-53",
      "name": "Citadel Heritage Mansions #53",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3596
        },
        {
          "x": 3486,
          "y": 3596
        },
        {
          "x": 3486,
          "y": 3694
        },
        {
          "x": 3390,
          "y": 3694
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-54",
      "name": "Citadel Heritage Mansions #54",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3596
        },
        {
          "x": 3594,
          "y": 3596
        },
        {
          "x": 3594,
          "y": 3694
        },
        {
          "x": 3498,
          "y": 3694
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-55",
      "name": "Citadel Heritage Mansions #55",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3596
        },
        {
          "x": 3702,
          "y": 3596
        },
        {
          "x": 3702,
          "y": 3694
        },
        {
          "x": 3606,
          "y": 3694
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-56",
      "name": "Citadel Heritage Mansions #56",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3596
        },
        {
          "x": 3810,
          "y": 3596
        },
        {
          "x": 3810,
          "y": 3694
        },
        {
          "x": 3714,
          "y": 3694
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-57",
      "name": "Citadel Heritage Mansions #57",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3596
        },
        {
          "x": 3917,
          "y": 3596
        },
        {
          "x": 3917,
          "y": 3694
        },
        {
          "x": 3821,
          "y": 3694
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-58",
      "name": "Citadel Heritage Mansions #58",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3645
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3596
        },
        {
          "x": 4025,
          "y": 3596
        },
        {
          "x": 4025,
          "y": 3694
        },
        {
          "x": 3929,
          "y": 3694
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-59",
      "name": "Citadel Heritage Mansions #59",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3645
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3596
        },
        {
          "x": 4133,
          "y": 3596
        },
        {
          "x": 4133,
          "y": 3694
        },
        {
          "x": 4037,
          "y": 3694
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-60",
      "name": "Citadel Heritage Mansions #60",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3645
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3596
        },
        {
          "x": 4240,
          "y": 3596
        },
        {
          "x": 4240,
          "y": 3694
        },
        {
          "x": 4144,
          "y": 3694
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-61",
      "name": "Citadel Heritage Mansions #61",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3755
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3706
        },
        {
          "x": 3056,
          "y": 3706
        },
        {
          "x": 3056,
          "y": 3804
        },
        {
          "x": 2960,
          "y": 3804
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-62",
      "name": "Citadel Heritage Mansions #62",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3706
        },
        {
          "x": 3163,
          "y": 3706
        },
        {
          "x": 3163,
          "y": 3804
        },
        {
          "x": 3067,
          "y": 3804
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-63",
      "name": "Citadel Heritage Mansions #63",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3706
        },
        {
          "x": 3271,
          "y": 3706
        },
        {
          "x": 3271,
          "y": 3804
        },
        {
          "x": 3175,
          "y": 3804
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-64",
      "name": "Citadel Heritage Mansions #64",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3706
        },
        {
          "x": 3379,
          "y": 3706
        },
        {
          "x": 3379,
          "y": 3804
        },
        {
          "x": 3283,
          "y": 3804
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-65",
      "name": "Citadel Heritage Mansions #65",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3706
        },
        {
          "x": 3486,
          "y": 3706
        },
        {
          "x": 3486,
          "y": 3804
        },
        {
          "x": 3390,
          "y": 3804
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-66",
      "name": "Citadel Heritage Mansions #66",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3706
        },
        {
          "x": 3594,
          "y": 3706
        },
        {
          "x": 3594,
          "y": 3804
        },
        {
          "x": 3498,
          "y": 3804
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-67",
      "name": "Citadel Heritage Mansions #67",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3706
        },
        {
          "x": 3702,
          "y": 3706
        },
        {
          "x": 3702,
          "y": 3804
        },
        {
          "x": 3606,
          "y": 3804
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-68",
      "name": "Citadel Heritage Mansions #68",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3706
        },
        {
          "x": 3810,
          "y": 3706
        },
        {
          "x": 3810,
          "y": 3804
        },
        {
          "x": 3714,
          "y": 3804
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-69",
      "name": "Citadel Heritage Mansions #69",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3706
        },
        {
          "x": 3917,
          "y": 3706
        },
        {
          "x": 3917,
          "y": 3804
        },
        {
          "x": 3821,
          "y": 3804
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-70",
      "name": "Citadel Heritage Mansions #70",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3755
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3706
        },
        {
          "x": 4025,
          "y": 3706
        },
        {
          "x": 4025,
          "y": 3804
        },
        {
          "x": 3929,
          "y": 3804
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-71",
      "name": "Citadel Heritage Mansions #71",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3755
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3706
        },
        {
          "x": 4133,
          "y": 3706
        },
        {
          "x": 4133,
          "y": 3804
        },
        {
          "x": 4037,
          "y": 3804
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-72",
      "name": "Citadel Heritage Mansions #72",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3755
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3706
        },
        {
          "x": 4240,
          "y": 3706
        },
        {
          "x": 4240,
          "y": 3804
        },
        {
          "x": 4144,
          "y": 3804
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-73",
      "name": "Citadel Heritage Mansions #73",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3864
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3815
        },
        {
          "x": 3056,
          "y": 3815
        },
        {
          "x": 3056,
          "y": 3913
        },
        {
          "x": 2960,
          "y": 3913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-74",
      "name": "Citadel Heritage Mansions #74",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3815
        },
        {
          "x": 3163,
          "y": 3815
        },
        {
          "x": 3163,
          "y": 3913
        },
        {
          "x": 3067,
          "y": 3913
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-75",
      "name": "Citadel Heritage Mansions #75",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3815
        },
        {
          "x": 3271,
          "y": 3815
        },
        {
          "x": 3271,
          "y": 3913
        },
        {
          "x": 3175,
          "y": 3913
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-76",
      "name": "Citadel Heritage Mansions #76",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3815
        },
        {
          "x": 3379,
          "y": 3815
        },
        {
          "x": 3379,
          "y": 3913
        },
        {
          "x": 3283,
          "y": 3913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-77",
      "name": "Citadel Heritage Mansions #77",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3815
        },
        {
          "x": 3486,
          "y": 3815
        },
        {
          "x": 3486,
          "y": 3913
        },
        {
          "x": 3390,
          "y": 3913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-78",
      "name": "Citadel Heritage Mansions #78",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3815
        },
        {
          "x": 3594,
          "y": 3815
        },
        {
          "x": 3594,
          "y": 3913
        },
        {
          "x": 3498,
          "y": 3913
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-79",
      "name": "Citadel Heritage Mansions #79",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3815
        },
        {
          "x": 3702,
          "y": 3815
        },
        {
          "x": 3702,
          "y": 3913
        },
        {
          "x": 3606,
          "y": 3913
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-80",
      "name": "Citadel Heritage Mansions #80",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3815
        },
        {
          "x": 3810,
          "y": 3815
        },
        {
          "x": 3810,
          "y": 3913
        },
        {
          "x": 3714,
          "y": 3913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-81",
      "name": "Citadel Heritage Mansions #81",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3815
        },
        {
          "x": 3917,
          "y": 3815
        },
        {
          "x": 3917,
          "y": 3913
        },
        {
          "x": 3821,
          "y": 3913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-82",
      "name": "Citadel Heritage Mansions #82",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3864
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3815
        },
        {
          "x": 4025,
          "y": 3815
        },
        {
          "x": 4025,
          "y": 3913
        },
        {
          "x": 3929,
          "y": 3913
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-83",
      "name": "Citadel Heritage Mansions #83",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3864
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3815
        },
        {
          "x": 4133,
          "y": 3815
        },
        {
          "x": 4133,
          "y": 3913
        },
        {
          "x": 4037,
          "y": 3913
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-84",
      "name": "Citadel Heritage Mansions #84",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3864
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3815
        },
        {
          "x": 4240,
          "y": 3815
        },
        {
          "x": 4240,
          "y": 3913
        },
        {
          "x": 4144,
          "y": 3913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-85",
      "name": "Citadel Heritage Mansions #85",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 3973
      },
      "footprint": [
        {
          "x": 2960,
          "y": 3924
        },
        {
          "x": 3056,
          "y": 3924
        },
        {
          "x": 3056,
          "y": 4022
        },
        {
          "x": 2960,
          "y": 4022
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-86",
      "name": "Citadel Heritage Mansions #86",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3067,
          "y": 3924
        },
        {
          "x": 3163,
          "y": 3924
        },
        {
          "x": 3163,
          "y": 4022
        },
        {
          "x": 3067,
          "y": 4022
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-87",
      "name": "Citadel Heritage Mansions #87",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3175,
          "y": 3924
        },
        {
          "x": 3271,
          "y": 3924
        },
        {
          "x": 3271,
          "y": 4022
        },
        {
          "x": 3175,
          "y": 4022
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-88",
      "name": "Citadel Heritage Mansions #88",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3283,
          "y": 3924
        },
        {
          "x": 3379,
          "y": 3924
        },
        {
          "x": 3379,
          "y": 4022
        },
        {
          "x": 3283,
          "y": 4022
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-89",
      "name": "Citadel Heritage Mansions #89",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3390,
          "y": 3924
        },
        {
          "x": 3486,
          "y": 3924
        },
        {
          "x": 3486,
          "y": 4022
        },
        {
          "x": 3390,
          "y": 4022
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-90",
      "name": "Citadel Heritage Mansions #90",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3498,
          "y": 3924
        },
        {
          "x": 3594,
          "y": 3924
        },
        {
          "x": 3594,
          "y": 4022
        },
        {
          "x": 3498,
          "y": 4022
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-91",
      "name": "Citadel Heritage Mansions #91",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3606,
          "y": 3924
        },
        {
          "x": 3702,
          "y": 3924
        },
        {
          "x": 3702,
          "y": 4022
        },
        {
          "x": 3606,
          "y": 4022
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-92",
      "name": "Citadel Heritage Mansions #92",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3714,
          "y": 3924
        },
        {
          "x": 3810,
          "y": 3924
        },
        {
          "x": 3810,
          "y": 4022
        },
        {
          "x": 3714,
          "y": 4022
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-93",
      "name": "Citadel Heritage Mansions #93",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3821,
          "y": 3924
        },
        {
          "x": 3917,
          "y": 3924
        },
        {
          "x": 3917,
          "y": 4022
        },
        {
          "x": 3821,
          "y": 4022
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-94",
      "name": "Citadel Heritage Mansions #94",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 3973
      },
      "footprint": [
        {
          "x": 3929,
          "y": 3924
        },
        {
          "x": 4025,
          "y": 3924
        },
        {
          "x": 4025,
          "y": 4022
        },
        {
          "x": 3929,
          "y": 4022
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-95",
      "name": "Citadel Heritage Mansions #95",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 3973
      },
      "footprint": [
        {
          "x": 4037,
          "y": 3924
        },
        {
          "x": 4133,
          "y": 3924
        },
        {
          "x": 4133,
          "y": 4022
        },
        {
          "x": 4037,
          "y": 4022
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-96",
      "name": "Citadel Heritage Mansions #96",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 3973
      },
      "footprint": [
        {
          "x": 4144,
          "y": 3924
        },
        {
          "x": 4240,
          "y": 3924
        },
        {
          "x": 4240,
          "y": 4022
        },
        {
          "x": 4144,
          "y": 4022
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-97",
      "name": "Citadel Heritage Mansions #97",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 4082
      },
      "footprint": [
        {
          "x": 2960,
          "y": 4033
        },
        {
          "x": 3056,
          "y": 4033
        },
        {
          "x": 3056,
          "y": 4131
        },
        {
          "x": 2960,
          "y": 4131
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-98",
      "name": "Citadel Heritage Mansions #98",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3067,
          "y": 4033
        },
        {
          "x": 3163,
          "y": 4033
        },
        {
          "x": 3163,
          "y": 4131
        },
        {
          "x": 3067,
          "y": 4131
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-99",
      "name": "Citadel Heritage Mansions #99",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3175,
          "y": 4033
        },
        {
          "x": 3271,
          "y": 4033
        },
        {
          "x": 3271,
          "y": 4131
        },
        {
          "x": 3175,
          "y": 4131
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-100",
      "name": "Citadel Heritage Mansions #100",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3283,
          "y": 4033
        },
        {
          "x": 3379,
          "y": 4033
        },
        {
          "x": 3379,
          "y": 4131
        },
        {
          "x": 3283,
          "y": 4131
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-101",
      "name": "Citadel Heritage Mansions #101",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3390,
          "y": 4033
        },
        {
          "x": 3486,
          "y": 4033
        },
        {
          "x": 3486,
          "y": 4131
        },
        {
          "x": 3390,
          "y": 4131
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-102",
      "name": "Citadel Heritage Mansions #102",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3498,
          "y": 4033
        },
        {
          "x": 3594,
          "y": 4033
        },
        {
          "x": 3594,
          "y": 4131
        },
        {
          "x": 3498,
          "y": 4131
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-103",
      "name": "Citadel Heritage Mansions #103",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3606,
          "y": 4033
        },
        {
          "x": 3702,
          "y": 4033
        },
        {
          "x": 3702,
          "y": 4131
        },
        {
          "x": 3606,
          "y": 4131
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-104",
      "name": "Citadel Heritage Mansions #104",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3714,
          "y": 4033
        },
        {
          "x": 3810,
          "y": 4033
        },
        {
          "x": 3810,
          "y": 4131
        },
        {
          "x": 3714,
          "y": 4131
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-105",
      "name": "Citadel Heritage Mansions #105",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3821,
          "y": 4033
        },
        {
          "x": 3917,
          "y": 4033
        },
        {
          "x": 3917,
          "y": 4131
        },
        {
          "x": 3821,
          "y": 4131
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-106",
      "name": "Citadel Heritage Mansions #106",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 4082
      },
      "footprint": [
        {
          "x": 3929,
          "y": 4033
        },
        {
          "x": 4025,
          "y": 4033
        },
        {
          "x": 4025,
          "y": 4131
        },
        {
          "x": 3929,
          "y": 4131
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-107",
      "name": "Citadel Heritage Mansions #107",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 4082
      },
      "footprint": [
        {
          "x": 4037,
          "y": 4033
        },
        {
          "x": 4133,
          "y": 4033
        },
        {
          "x": 4133,
          "y": 4131
        },
        {
          "x": 4037,
          "y": 4131
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-108",
      "name": "Citadel Heritage Mansions #108",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 4082
      },
      "footprint": [
        {
          "x": 4144,
          "y": 4033
        },
        {
          "x": 4240,
          "y": 4033
        },
        {
          "x": 4240,
          "y": 4131
        },
        {
          "x": 4144,
          "y": 4131
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-109",
      "name": "Citadel Heritage Mansions #109",
      "type": "residential_apartment",
      "center": {
        "x": 3008,
        "y": 4191
      },
      "footprint": [
        {
          "x": 2960,
          "y": 4142
        },
        {
          "x": 3056,
          "y": 4142
        },
        {
          "x": 3056,
          "y": 4240
        },
        {
          "x": 2960,
          "y": 4240
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-110",
      "name": "Citadel Heritage Mansions #110",
      "type": "residential_apartment",
      "center": {
        "x": 3115,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3067,
          "y": 4142
        },
        {
          "x": 3163,
          "y": 4142
        },
        {
          "x": 3163,
          "y": 4240
        },
        {
          "x": 3067,
          "y": 4240
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-111",
      "name": "Citadel Heritage Mansions #111",
      "type": "residential_apartment",
      "center": {
        "x": 3223,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3175,
          "y": 4142
        },
        {
          "x": 3271,
          "y": 4142
        },
        {
          "x": 3271,
          "y": 4240
        },
        {
          "x": 3175,
          "y": 4240
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-112",
      "name": "Citadel Heritage Mansions #112",
      "type": "residential_apartment",
      "center": {
        "x": 3331,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3283,
          "y": 4142
        },
        {
          "x": 3379,
          "y": 4142
        },
        {
          "x": 3379,
          "y": 4240
        },
        {
          "x": 3283,
          "y": 4240
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-113",
      "name": "Citadel Heritage Mansions #113",
      "type": "residential_apartment",
      "center": {
        "x": 3438,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3390,
          "y": 4142
        },
        {
          "x": 3486,
          "y": 4142
        },
        {
          "x": 3486,
          "y": 4240
        },
        {
          "x": 3390,
          "y": 4240
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-114",
      "name": "Citadel Heritage Mansions #114",
      "type": "residential_apartment",
      "center": {
        "x": 3546,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3498,
          "y": 4142
        },
        {
          "x": 3594,
          "y": 4142
        },
        {
          "x": 3594,
          "y": 4240
        },
        {
          "x": 3498,
          "y": 4240
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-115",
      "name": "Citadel Heritage Mansions #115",
      "type": "residential_apartment",
      "center": {
        "x": 3654,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3606,
          "y": 4142
        },
        {
          "x": 3702,
          "y": 4142
        },
        {
          "x": 3702,
          "y": 4240
        },
        {
          "x": 3606,
          "y": 4240
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-116",
      "name": "Citadel Heritage Mansions #116",
      "type": "residential_apartment",
      "center": {
        "x": 3762,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3714,
          "y": 4142
        },
        {
          "x": 3810,
          "y": 4142
        },
        {
          "x": 3810,
          "y": 4240
        },
        {
          "x": 3714,
          "y": 4240
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-cit-117",
      "name": "Citadel Heritage Mansions #117",
      "type": "residential_apartment",
      "center": {
        "x": 3869,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3821,
          "y": 4142
        },
        {
          "x": 3917,
          "y": 4142
        },
        {
          "x": 3917,
          "y": 4240
        },
        {
          "x": 3821,
          "y": 4240
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-cit-118",
      "name": "Citadel Heritage Mansions #118",
      "type": "residential_apartment",
      "center": {
        "x": 3977,
        "y": 4191
      },
      "footprint": [
        {
          "x": 3929,
          "y": 4142
        },
        {
          "x": 4025,
          "y": 4142
        },
        {
          "x": 4025,
          "y": 4240
        },
        {
          "x": 3929,
          "y": 4240
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-cit-119",
      "name": "Citadel Heritage Mansions #119",
      "type": "residential_apartment",
      "center": {
        "x": 4085,
        "y": 4191
      },
      "footprint": [
        {
          "x": 4037,
          "y": 4142
        },
        {
          "x": 4133,
          "y": 4142
        },
        {
          "x": 4133,
          "y": 4240
        },
        {
          "x": 4037,
          "y": 4240
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-cit-120",
      "name": "Citadel Heritage Mansions #120",
      "type": "residential_apartment",
      "center": {
        "x": 4192,
        "y": 4191
      },
      "footprint": [
        {
          "x": 4144,
          "y": 4142
        },
        {
          "x": 4240,
          "y": 4142
        },
        {
          "x": 4240,
          "y": 4240
        },
        {
          "x": 4144,
          "y": 4240
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-1",
      "name": "University Research Pavilion #1",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3209
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3160
        },
        {
          "x": 1469,
          "y": 3160
        },
        {
          "x": 1469,
          "y": 3258
        },
        {
          "x": 1365,
          "y": 3258
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-2",
      "name": "University Research Pavilion #2",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3209
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3160
        },
        {
          "x": 1585,
          "y": 3160
        },
        {
          "x": 1585,
          "y": 3258
        },
        {
          "x": 1481,
          "y": 3258
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-3",
      "name": "University Research Pavilion #3",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3209
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3160
        },
        {
          "x": 1702,
          "y": 3160
        },
        {
          "x": 1702,
          "y": 3258
        },
        {
          "x": 1598,
          "y": 3258
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-4",
      "name": "University Research Pavilion #4",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3209
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3160
        },
        {
          "x": 1819,
          "y": 3160
        },
        {
          "x": 1819,
          "y": 3258
        },
        {
          "x": 1715,
          "y": 3258
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-5",
      "name": "University Research Pavilion #5",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3209
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3160
        },
        {
          "x": 1935,
          "y": 3160
        },
        {
          "x": 1935,
          "y": 3258
        },
        {
          "x": 1831,
          "y": 3258
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-6",
      "name": "University Research Pavilion #6",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3209
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3160
        },
        {
          "x": 2052,
          "y": 3160
        },
        {
          "x": 2052,
          "y": 3258
        },
        {
          "x": 1948,
          "y": 3258
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-7",
      "name": "University Research Pavilion #7",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3209
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3160
        },
        {
          "x": 2169,
          "y": 3160
        },
        {
          "x": 2169,
          "y": 3258
        },
        {
          "x": 2065,
          "y": 3258
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-8",
      "name": "University Research Pavilion #8",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3209
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3160
        },
        {
          "x": 2285,
          "y": 3160
        },
        {
          "x": 2285,
          "y": 3258
        },
        {
          "x": 2181,
          "y": 3258
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-9",
      "name": "University Research Pavilion #9",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3209
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3160
        },
        {
          "x": 2402,
          "y": 3160
        },
        {
          "x": 2402,
          "y": 3258
        },
        {
          "x": 2298,
          "y": 3258
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-10",
      "name": "University Research Pavilion #10",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3209
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3160
        },
        {
          "x": 2519,
          "y": 3160
        },
        {
          "x": 2519,
          "y": 3258
        },
        {
          "x": 2415,
          "y": 3258
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-11",
      "name": "University Research Pavilion #11",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3209
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3160
        },
        {
          "x": 2635,
          "y": 3160
        },
        {
          "x": 2635,
          "y": 3258
        },
        {
          "x": 2531,
          "y": 3258
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-12",
      "name": "University Research Pavilion #12",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3318
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3269
        },
        {
          "x": 1469,
          "y": 3269
        },
        {
          "x": 1469,
          "y": 3367
        },
        {
          "x": 1365,
          "y": 3367
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-13",
      "name": "University Research Pavilion #13",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3318
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3269
        },
        {
          "x": 1585,
          "y": 3269
        },
        {
          "x": 1585,
          "y": 3367
        },
        {
          "x": 1481,
          "y": 3367
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-14",
      "name": "University Research Pavilion #14",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3318
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3269
        },
        {
          "x": 1702,
          "y": 3269
        },
        {
          "x": 1702,
          "y": 3367
        },
        {
          "x": 1598,
          "y": 3367
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-15",
      "name": "University Research Pavilion #15",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3318
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3269
        },
        {
          "x": 1819,
          "y": 3269
        },
        {
          "x": 1819,
          "y": 3367
        },
        {
          "x": 1715,
          "y": 3367
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-16",
      "name": "University Research Pavilion #16",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3318
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3269
        },
        {
          "x": 1935,
          "y": 3269
        },
        {
          "x": 1935,
          "y": 3367
        },
        {
          "x": 1831,
          "y": 3367
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-17",
      "name": "University Research Pavilion #17",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3318
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3269
        },
        {
          "x": 2052,
          "y": 3269
        },
        {
          "x": 2052,
          "y": 3367
        },
        {
          "x": 1948,
          "y": 3367
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-18",
      "name": "University Research Pavilion #18",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3318
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3269
        },
        {
          "x": 2169,
          "y": 3269
        },
        {
          "x": 2169,
          "y": 3367
        },
        {
          "x": 2065,
          "y": 3367
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-19",
      "name": "University Research Pavilion #19",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3318
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3269
        },
        {
          "x": 2285,
          "y": 3269
        },
        {
          "x": 2285,
          "y": 3367
        },
        {
          "x": 2181,
          "y": 3367
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-20",
      "name": "University Research Pavilion #20",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3318
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3269
        },
        {
          "x": 2402,
          "y": 3269
        },
        {
          "x": 2402,
          "y": 3367
        },
        {
          "x": 2298,
          "y": 3367
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-21",
      "name": "University Research Pavilion #21",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3318
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3269
        },
        {
          "x": 2519,
          "y": 3269
        },
        {
          "x": 2519,
          "y": 3367
        },
        {
          "x": 2415,
          "y": 3367
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-22",
      "name": "University Research Pavilion #22",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3318
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3269
        },
        {
          "x": 2635,
          "y": 3269
        },
        {
          "x": 2635,
          "y": 3367
        },
        {
          "x": 2531,
          "y": 3367
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-23",
      "name": "University Research Pavilion #23",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3427
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3378
        },
        {
          "x": 1469,
          "y": 3378
        },
        {
          "x": 1469,
          "y": 3476
        },
        {
          "x": 1365,
          "y": 3476
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-24",
      "name": "University Research Pavilion #24",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3427
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3378
        },
        {
          "x": 1585,
          "y": 3378
        },
        {
          "x": 1585,
          "y": 3476
        },
        {
          "x": 1481,
          "y": 3476
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-25",
      "name": "University Research Pavilion #25",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3427
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3378
        },
        {
          "x": 1702,
          "y": 3378
        },
        {
          "x": 1702,
          "y": 3476
        },
        {
          "x": 1598,
          "y": 3476
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-26",
      "name": "University Research Pavilion #26",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3427
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3378
        },
        {
          "x": 1819,
          "y": 3378
        },
        {
          "x": 1819,
          "y": 3476
        },
        {
          "x": 1715,
          "y": 3476
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-27",
      "name": "University Research Pavilion #27",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3427
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3378
        },
        {
          "x": 1935,
          "y": 3378
        },
        {
          "x": 1935,
          "y": 3476
        },
        {
          "x": 1831,
          "y": 3476
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-28",
      "name": "University Research Pavilion #28",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3427
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3378
        },
        {
          "x": 2052,
          "y": 3378
        },
        {
          "x": 2052,
          "y": 3476
        },
        {
          "x": 1948,
          "y": 3476
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-29",
      "name": "University Research Pavilion #29",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3427
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3378
        },
        {
          "x": 2169,
          "y": 3378
        },
        {
          "x": 2169,
          "y": 3476
        },
        {
          "x": 2065,
          "y": 3476
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-30",
      "name": "University Research Pavilion #30",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3427
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3378
        },
        {
          "x": 2285,
          "y": 3378
        },
        {
          "x": 2285,
          "y": 3476
        },
        {
          "x": 2181,
          "y": 3476
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-31",
      "name": "University Research Pavilion #31",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3427
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3378
        },
        {
          "x": 2402,
          "y": 3378
        },
        {
          "x": 2402,
          "y": 3476
        },
        {
          "x": 2298,
          "y": 3476
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-32",
      "name": "University Research Pavilion #32",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3427
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3378
        },
        {
          "x": 2519,
          "y": 3378
        },
        {
          "x": 2519,
          "y": 3476
        },
        {
          "x": 2415,
          "y": 3476
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-33",
      "name": "University Research Pavilion #33",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3427
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3378
        },
        {
          "x": 2635,
          "y": 3378
        },
        {
          "x": 2635,
          "y": 3476
        },
        {
          "x": 2531,
          "y": 3476
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-34",
      "name": "University Research Pavilion #34",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3536
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3487
        },
        {
          "x": 1469,
          "y": 3487
        },
        {
          "x": 1469,
          "y": 3585
        },
        {
          "x": 1365,
          "y": 3585
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-35",
      "name": "University Research Pavilion #35",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3536
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3487
        },
        {
          "x": 1585,
          "y": 3487
        },
        {
          "x": 1585,
          "y": 3585
        },
        {
          "x": 1481,
          "y": 3585
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-36",
      "name": "University Research Pavilion #36",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3536
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3487
        },
        {
          "x": 1702,
          "y": 3487
        },
        {
          "x": 1702,
          "y": 3585
        },
        {
          "x": 1598,
          "y": 3585
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-37",
      "name": "University Research Pavilion #37",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3536
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3487
        },
        {
          "x": 1819,
          "y": 3487
        },
        {
          "x": 1819,
          "y": 3585
        },
        {
          "x": 1715,
          "y": 3585
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-38",
      "name": "University Research Pavilion #38",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3536
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3487
        },
        {
          "x": 1935,
          "y": 3487
        },
        {
          "x": 1935,
          "y": 3585
        },
        {
          "x": 1831,
          "y": 3585
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-39",
      "name": "University Research Pavilion #39",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3536
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3487
        },
        {
          "x": 2052,
          "y": 3487
        },
        {
          "x": 2052,
          "y": 3585
        },
        {
          "x": 1948,
          "y": 3585
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-40",
      "name": "University Research Pavilion #40",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3536
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3487
        },
        {
          "x": 2169,
          "y": 3487
        },
        {
          "x": 2169,
          "y": 3585
        },
        {
          "x": 2065,
          "y": 3585
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-41",
      "name": "University Research Pavilion #41",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3536
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3487
        },
        {
          "x": 2285,
          "y": 3487
        },
        {
          "x": 2285,
          "y": 3585
        },
        {
          "x": 2181,
          "y": 3585
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-42",
      "name": "University Research Pavilion #42",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3536
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3487
        },
        {
          "x": 2402,
          "y": 3487
        },
        {
          "x": 2402,
          "y": 3585
        },
        {
          "x": 2298,
          "y": 3585
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-43",
      "name": "University Research Pavilion #43",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3536
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3487
        },
        {
          "x": 2519,
          "y": 3487
        },
        {
          "x": 2519,
          "y": 3585
        },
        {
          "x": 2415,
          "y": 3585
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-44",
      "name": "University Research Pavilion #44",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3536
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3487
        },
        {
          "x": 2635,
          "y": 3487
        },
        {
          "x": 2635,
          "y": 3585
        },
        {
          "x": 2531,
          "y": 3585
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-45",
      "name": "University Research Pavilion #45",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3645
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3596
        },
        {
          "x": 1469,
          "y": 3596
        },
        {
          "x": 1469,
          "y": 3694
        },
        {
          "x": 1365,
          "y": 3694
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-46",
      "name": "University Research Pavilion #46",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3645
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3596
        },
        {
          "x": 1585,
          "y": 3596
        },
        {
          "x": 1585,
          "y": 3694
        },
        {
          "x": 1481,
          "y": 3694
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-47",
      "name": "University Research Pavilion #47",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3645
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3596
        },
        {
          "x": 1702,
          "y": 3596
        },
        {
          "x": 1702,
          "y": 3694
        },
        {
          "x": 1598,
          "y": 3694
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-48",
      "name": "University Research Pavilion #48",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3645
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3596
        },
        {
          "x": 1819,
          "y": 3596
        },
        {
          "x": 1819,
          "y": 3694
        },
        {
          "x": 1715,
          "y": 3694
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-49",
      "name": "University Research Pavilion #49",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3645
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3596
        },
        {
          "x": 1935,
          "y": 3596
        },
        {
          "x": 1935,
          "y": 3694
        },
        {
          "x": 1831,
          "y": 3694
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-50",
      "name": "University Research Pavilion #50",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3645
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3596
        },
        {
          "x": 2052,
          "y": 3596
        },
        {
          "x": 2052,
          "y": 3694
        },
        {
          "x": 1948,
          "y": 3694
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-51",
      "name": "University Research Pavilion #51",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3645
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3596
        },
        {
          "x": 2169,
          "y": 3596
        },
        {
          "x": 2169,
          "y": 3694
        },
        {
          "x": 2065,
          "y": 3694
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-52",
      "name": "University Research Pavilion #52",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3645
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3596
        },
        {
          "x": 2285,
          "y": 3596
        },
        {
          "x": 2285,
          "y": 3694
        },
        {
          "x": 2181,
          "y": 3694
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-53",
      "name": "University Research Pavilion #53",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3645
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3596
        },
        {
          "x": 2402,
          "y": 3596
        },
        {
          "x": 2402,
          "y": 3694
        },
        {
          "x": 2298,
          "y": 3694
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-54",
      "name": "University Research Pavilion #54",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3645
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3596
        },
        {
          "x": 2519,
          "y": 3596
        },
        {
          "x": 2519,
          "y": 3694
        },
        {
          "x": 2415,
          "y": 3694
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-55",
      "name": "University Research Pavilion #55",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3645
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3596
        },
        {
          "x": 2635,
          "y": 3596
        },
        {
          "x": 2635,
          "y": 3694
        },
        {
          "x": 2531,
          "y": 3694
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-56",
      "name": "University Research Pavilion #56",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3755
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3706
        },
        {
          "x": 1469,
          "y": 3706
        },
        {
          "x": 1469,
          "y": 3804
        },
        {
          "x": 1365,
          "y": 3804
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-57",
      "name": "University Research Pavilion #57",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3755
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3706
        },
        {
          "x": 1585,
          "y": 3706
        },
        {
          "x": 1585,
          "y": 3804
        },
        {
          "x": 1481,
          "y": 3804
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-58",
      "name": "University Research Pavilion #58",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3755
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3706
        },
        {
          "x": 1702,
          "y": 3706
        },
        {
          "x": 1702,
          "y": 3804
        },
        {
          "x": 1598,
          "y": 3804
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-59",
      "name": "University Research Pavilion #59",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3755
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3706
        },
        {
          "x": 1819,
          "y": 3706
        },
        {
          "x": 1819,
          "y": 3804
        },
        {
          "x": 1715,
          "y": 3804
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-60",
      "name": "University Research Pavilion #60",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3755
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3706
        },
        {
          "x": 1935,
          "y": 3706
        },
        {
          "x": 1935,
          "y": 3804
        },
        {
          "x": 1831,
          "y": 3804
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-61",
      "name": "University Research Pavilion #61",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3755
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3706
        },
        {
          "x": 2052,
          "y": 3706
        },
        {
          "x": 2052,
          "y": 3804
        },
        {
          "x": 1948,
          "y": 3804
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-62",
      "name": "University Research Pavilion #62",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3755
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3706
        },
        {
          "x": 2169,
          "y": 3706
        },
        {
          "x": 2169,
          "y": 3804
        },
        {
          "x": 2065,
          "y": 3804
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-63",
      "name": "University Research Pavilion #63",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3755
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3706
        },
        {
          "x": 2285,
          "y": 3706
        },
        {
          "x": 2285,
          "y": 3804
        },
        {
          "x": 2181,
          "y": 3804
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-64",
      "name": "University Research Pavilion #64",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3755
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3706
        },
        {
          "x": 2402,
          "y": 3706
        },
        {
          "x": 2402,
          "y": 3804
        },
        {
          "x": 2298,
          "y": 3804
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-65",
      "name": "University Research Pavilion #65",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3755
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3706
        },
        {
          "x": 2519,
          "y": 3706
        },
        {
          "x": 2519,
          "y": 3804
        },
        {
          "x": 2415,
          "y": 3804
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-66",
      "name": "University Research Pavilion #66",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3755
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3706
        },
        {
          "x": 2635,
          "y": 3706
        },
        {
          "x": 2635,
          "y": 3804
        },
        {
          "x": 2531,
          "y": 3804
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-67",
      "name": "University Research Pavilion #67",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3864
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3815
        },
        {
          "x": 1469,
          "y": 3815
        },
        {
          "x": 1469,
          "y": 3913
        },
        {
          "x": 1365,
          "y": 3913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-68",
      "name": "University Research Pavilion #68",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3864
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3815
        },
        {
          "x": 1585,
          "y": 3815
        },
        {
          "x": 1585,
          "y": 3913
        },
        {
          "x": 1481,
          "y": 3913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-69",
      "name": "University Research Pavilion #69",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3864
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3815
        },
        {
          "x": 1702,
          "y": 3815
        },
        {
          "x": 1702,
          "y": 3913
        },
        {
          "x": 1598,
          "y": 3913
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-70",
      "name": "University Research Pavilion #70",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3864
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3815
        },
        {
          "x": 1819,
          "y": 3815
        },
        {
          "x": 1819,
          "y": 3913
        },
        {
          "x": 1715,
          "y": 3913
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-71",
      "name": "University Research Pavilion #71",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3864
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3815
        },
        {
          "x": 1935,
          "y": 3815
        },
        {
          "x": 1935,
          "y": 3913
        },
        {
          "x": 1831,
          "y": 3913
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-72",
      "name": "University Research Pavilion #72",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3864
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3815
        },
        {
          "x": 2052,
          "y": 3815
        },
        {
          "x": 2052,
          "y": 3913
        },
        {
          "x": 1948,
          "y": 3913
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-73",
      "name": "University Research Pavilion #73",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3864
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3815
        },
        {
          "x": 2169,
          "y": 3815
        },
        {
          "x": 2169,
          "y": 3913
        },
        {
          "x": 2065,
          "y": 3913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-74",
      "name": "University Research Pavilion #74",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3864
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3815
        },
        {
          "x": 2285,
          "y": 3815
        },
        {
          "x": 2285,
          "y": 3913
        },
        {
          "x": 2181,
          "y": 3913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-75",
      "name": "University Research Pavilion #75",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3864
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3815
        },
        {
          "x": 2402,
          "y": 3815
        },
        {
          "x": 2402,
          "y": 3913
        },
        {
          "x": 2298,
          "y": 3913
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-76",
      "name": "University Research Pavilion #76",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3864
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3815
        },
        {
          "x": 2519,
          "y": 3815
        },
        {
          "x": 2519,
          "y": 3913
        },
        {
          "x": 2415,
          "y": 3913
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-77",
      "name": "University Research Pavilion #77",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3864
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3815
        },
        {
          "x": 2635,
          "y": 3815
        },
        {
          "x": 2635,
          "y": 3913
        },
        {
          "x": 2531,
          "y": 3913
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-78",
      "name": "University Research Pavilion #78",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 3973
      },
      "footprint": [
        {
          "x": 1365,
          "y": 3924
        },
        {
          "x": 1469,
          "y": 3924
        },
        {
          "x": 1469,
          "y": 4022
        },
        {
          "x": 1365,
          "y": 4022
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-79",
      "name": "University Research Pavilion #79",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 3973
      },
      "footprint": [
        {
          "x": 1481,
          "y": 3924
        },
        {
          "x": 1585,
          "y": 3924
        },
        {
          "x": 1585,
          "y": 4022
        },
        {
          "x": 1481,
          "y": 4022
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-80",
      "name": "University Research Pavilion #80",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 3973
      },
      "footprint": [
        {
          "x": 1598,
          "y": 3924
        },
        {
          "x": 1702,
          "y": 3924
        },
        {
          "x": 1702,
          "y": 4022
        },
        {
          "x": 1598,
          "y": 4022
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-81",
      "name": "University Research Pavilion #81",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 3973
      },
      "footprint": [
        {
          "x": 1715,
          "y": 3924
        },
        {
          "x": 1819,
          "y": 3924
        },
        {
          "x": 1819,
          "y": 4022
        },
        {
          "x": 1715,
          "y": 4022
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-82",
      "name": "University Research Pavilion #82",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 3973
      },
      "footprint": [
        {
          "x": 1831,
          "y": 3924
        },
        {
          "x": 1935,
          "y": 3924
        },
        {
          "x": 1935,
          "y": 4022
        },
        {
          "x": 1831,
          "y": 4022
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-83",
      "name": "University Research Pavilion #83",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 3973
      },
      "footprint": [
        {
          "x": 1948,
          "y": 3924
        },
        {
          "x": 2052,
          "y": 3924
        },
        {
          "x": 2052,
          "y": 4022
        },
        {
          "x": 1948,
          "y": 4022
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-84",
      "name": "University Research Pavilion #84",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 3973
      },
      "footprint": [
        {
          "x": 2065,
          "y": 3924
        },
        {
          "x": 2169,
          "y": 3924
        },
        {
          "x": 2169,
          "y": 4022
        },
        {
          "x": 2065,
          "y": 4022
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-85",
      "name": "University Research Pavilion #85",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 3973
      },
      "footprint": [
        {
          "x": 2181,
          "y": 3924
        },
        {
          "x": 2285,
          "y": 3924
        },
        {
          "x": 2285,
          "y": 4022
        },
        {
          "x": 2181,
          "y": 4022
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-86",
      "name": "University Research Pavilion #86",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 3973
      },
      "footprint": [
        {
          "x": 2298,
          "y": 3924
        },
        {
          "x": 2402,
          "y": 3924
        },
        {
          "x": 2402,
          "y": 4022
        },
        {
          "x": 2298,
          "y": 4022
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-87",
      "name": "University Research Pavilion #87",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 3973
      },
      "footprint": [
        {
          "x": 2415,
          "y": 3924
        },
        {
          "x": 2519,
          "y": 3924
        },
        {
          "x": 2519,
          "y": 4022
        },
        {
          "x": 2415,
          "y": 4022
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-88",
      "name": "University Research Pavilion #88",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 3973
      },
      "footprint": [
        {
          "x": 2531,
          "y": 3924
        },
        {
          "x": 2635,
          "y": 3924
        },
        {
          "x": 2635,
          "y": 4022
        },
        {
          "x": 2531,
          "y": 4022
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-89",
      "name": "University Research Pavilion #89",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 4082
      },
      "footprint": [
        {
          "x": 1365,
          "y": 4033
        },
        {
          "x": 1469,
          "y": 4033
        },
        {
          "x": 1469,
          "y": 4131
        },
        {
          "x": 1365,
          "y": 4131
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-90",
      "name": "University Research Pavilion #90",
      "type": "institutional",
      "center": {
        "x": 1533,
        "y": 4082
      },
      "footprint": [
        {
          "x": 1481,
          "y": 4033
        },
        {
          "x": 1585,
          "y": 4033
        },
        {
          "x": 1585,
          "y": 4131
        },
        {
          "x": 1481,
          "y": 4131
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-91",
      "name": "University Research Pavilion #91",
      "type": "institutional",
      "center": {
        "x": 1650,
        "y": 4082
      },
      "footprint": [
        {
          "x": 1598,
          "y": 4033
        },
        {
          "x": 1702,
          "y": 4033
        },
        {
          "x": 1702,
          "y": 4131
        },
        {
          "x": 1598,
          "y": 4131
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-92",
      "name": "University Research Pavilion #92",
      "type": "institutional",
      "center": {
        "x": 1767,
        "y": 4082
      },
      "footprint": [
        {
          "x": 1715,
          "y": 4033
        },
        {
          "x": 1819,
          "y": 4033
        },
        {
          "x": 1819,
          "y": 4131
        },
        {
          "x": 1715,
          "y": 4131
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-93",
      "name": "University Research Pavilion #93",
      "type": "institutional",
      "center": {
        "x": 1883,
        "y": 4082
      },
      "footprint": [
        {
          "x": 1831,
          "y": 4033
        },
        {
          "x": 1935,
          "y": 4033
        },
        {
          "x": 1935,
          "y": 4131
        },
        {
          "x": 1831,
          "y": 4131
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-94",
      "name": "University Research Pavilion #94",
      "type": "institutional",
      "center": {
        "x": 2000,
        "y": 4082
      },
      "footprint": [
        {
          "x": 1948,
          "y": 4033
        },
        {
          "x": 2052,
          "y": 4033
        },
        {
          "x": 2052,
          "y": 4131
        },
        {
          "x": 1948,
          "y": 4131
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-uni-95",
      "name": "University Research Pavilion #95",
      "type": "institutional",
      "center": {
        "x": 2117,
        "y": 4082
      },
      "footprint": [
        {
          "x": 2065,
          "y": 4033
        },
        {
          "x": 2169,
          "y": 4033
        },
        {
          "x": 2169,
          "y": 4131
        },
        {
          "x": 2065,
          "y": 4131
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-uni-96",
      "name": "University Research Pavilion #96",
      "type": "institutional",
      "center": {
        "x": 2233,
        "y": 4082
      },
      "footprint": [
        {
          "x": 2181,
          "y": 4033
        },
        {
          "x": 2285,
          "y": 4033
        },
        {
          "x": 2285,
          "y": 4131
        },
        {
          "x": 2181,
          "y": 4131
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-uni-97",
      "name": "University Research Pavilion #97",
      "type": "institutional",
      "center": {
        "x": 2350,
        "y": 4082
      },
      "footprint": [
        {
          "x": 2298,
          "y": 4033
        },
        {
          "x": 2402,
          "y": 4033
        },
        {
          "x": 2402,
          "y": 4131
        },
        {
          "x": 2298,
          "y": 4131
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-uni-98",
      "name": "University Research Pavilion #98",
      "type": "institutional",
      "center": {
        "x": 2467,
        "y": 4082
      },
      "footprint": [
        {
          "x": 2415,
          "y": 4033
        },
        {
          "x": 2519,
          "y": 4033
        },
        {
          "x": 2519,
          "y": 4131
        },
        {
          "x": 2415,
          "y": 4131
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-uni-99",
      "name": "University Research Pavilion #99",
      "type": "institutional",
      "center": {
        "x": 2583,
        "y": 4082
      },
      "footprint": [
        {
          "x": 2531,
          "y": 4033
        },
        {
          "x": 2635,
          "y": 4033
        },
        {
          "x": 2635,
          "y": 4131
        },
        {
          "x": 2531,
          "y": 4131
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-uni-100",
      "name": "University Research Pavilion #100",
      "type": "institutional",
      "center": {
        "x": 1417,
        "y": 4191
      },
      "footprint": [
        {
          "x": 1365,
          "y": 4142
        },
        {
          "x": 1469,
          "y": 4142
        },
        {
          "x": 1469,
          "y": 4240
        },
        {
          "x": 1365,
          "y": 4240
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-eg-1",
      "name": "Eastgate Horizon Highrise #1",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 4669
      },
      "footprint": [
        {
          "x": 4593,
          "y": 4593
        },
        {
          "x": 4745,
          "y": 4593
        },
        {
          "x": 4745,
          "y": 4745
        },
        {
          "x": 4593,
          "y": 4745
        }
      ],
      "floors": 18,
      "unitCount": 72
    },
    {
      "id": "bld-eg-2",
      "name": "Eastgate Horizon Highrise #2",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 4669
      },
      "footprint": [
        {
          "x": 4762,
          "y": 4593
        },
        {
          "x": 4914,
          "y": 4593
        },
        {
          "x": 4914,
          "y": 4745
        },
        {
          "x": 4762,
          "y": 4745
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-eg-3",
      "name": "Eastgate Horizon Highrise #3",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 4669
      },
      "footprint": [
        {
          "x": 4932,
          "y": 4593
        },
        {
          "x": 5084,
          "y": 4593
        },
        {
          "x": 5084,
          "y": 4745
        },
        {
          "x": 4932,
          "y": 4745
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-eg-4",
      "name": "Eastgate Horizon Highrise #4",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 4669
      },
      "footprint": [
        {
          "x": 5101,
          "y": 4593
        },
        {
          "x": 5253,
          "y": 4593
        },
        {
          "x": 5253,
          "y": 4745
        },
        {
          "x": 5101,
          "y": 4745
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-eg-5",
      "name": "Eastgate Horizon Highrise #5",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 4669
      },
      "footprint": [
        {
          "x": 5270,
          "y": 4593
        },
        {
          "x": 5422,
          "y": 4593
        },
        {
          "x": 5422,
          "y": 4745
        },
        {
          "x": 5270,
          "y": 4745
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-eg-6",
      "name": "Eastgate Horizon Highrise #6",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 4669
      },
      "footprint": [
        {
          "x": 5439,
          "y": 4593
        },
        {
          "x": 5591,
          "y": 4593
        },
        {
          "x": 5591,
          "y": 4745
        },
        {
          "x": 5439,
          "y": 4745
        }
      ],
      "floors": 22,
      "unitCount": 88
    },
    {
      "id": "bld-eg-7",
      "name": "Eastgate Horizon Highrise #7",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 4669
      },
      "footprint": [
        {
          "x": 5609,
          "y": 4593
        },
        {
          "x": 5761,
          "y": 4593
        },
        {
          "x": 5761,
          "y": 4745
        },
        {
          "x": 5609,
          "y": 4745
        }
      ],
      "floors": 29,
      "unitCount": 116
    },
    {
      "id": "bld-eg-8",
      "name": "Eastgate Horizon Highrise #8",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 4669
      },
      "footprint": [
        {
          "x": 5778,
          "y": 4593
        },
        {
          "x": 5930,
          "y": 4593
        },
        {
          "x": 5930,
          "y": 4745
        },
        {
          "x": 5778,
          "y": 4745
        }
      ],
      "floors": 36,
      "unitCount": 144
    },
    {
      "id": "bld-eg-9",
      "name": "Eastgate Horizon Highrise #9",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 4669
      },
      "footprint": [
        {
          "x": 5947,
          "y": 4593
        },
        {
          "x": 6099,
          "y": 4593
        },
        {
          "x": 6099,
          "y": 4745
        },
        {
          "x": 5947,
          "y": 4745
        }
      ],
      "floors": 43,
      "unitCount": 172
    },
    {
      "id": "bld-eg-10",
      "name": "Eastgate Horizon Highrise #10",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 4669
      },
      "footprint": [
        {
          "x": 6116,
          "y": 4593
        },
        {
          "x": 6268,
          "y": 4593
        },
        {
          "x": 6268,
          "y": 4745
        },
        {
          "x": 6116,
          "y": 4745
        }
      ],
      "floors": 19,
      "unitCount": 76
    },
    {
      "id": "bld-eg-11",
      "name": "Eastgate Horizon Highrise #11",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 4669
      },
      "footprint": [
        {
          "x": 6286,
          "y": 4593
        },
        {
          "x": 6438,
          "y": 4593
        },
        {
          "x": 6438,
          "y": 4745
        },
        {
          "x": 6286,
          "y": 4745
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-eg-12",
      "name": "Eastgate Horizon Highrise #12",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 4669
      },
      "footprint": [
        {
          "x": 6455,
          "y": 4593
        },
        {
          "x": 6607,
          "y": 4593
        },
        {
          "x": 6607,
          "y": 4745
        },
        {
          "x": 6455,
          "y": 4745
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-eg-13",
      "name": "Eastgate Horizon Highrise #13",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 4838
      },
      "footprint": [
        {
          "x": 4593,
          "y": 4762
        },
        {
          "x": 4745,
          "y": 4762
        },
        {
          "x": 4745,
          "y": 4914
        },
        {
          "x": 4593,
          "y": 4914
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-eg-14",
      "name": "Eastgate Horizon Highrise #14",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 4838
      },
      "footprint": [
        {
          "x": 4762,
          "y": 4762
        },
        {
          "x": 4914,
          "y": 4762
        },
        {
          "x": 4914,
          "y": 4914
        },
        {
          "x": 4762,
          "y": 4914
        }
      ],
      "floors": 47,
      "unitCount": 188
    },
    {
      "id": "bld-eg-15",
      "name": "Eastgate Horizon Highrise #15",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 4838
      },
      "footprint": [
        {
          "x": 4932,
          "y": 4762
        },
        {
          "x": 5084,
          "y": 4762
        },
        {
          "x": 5084,
          "y": 4914
        },
        {
          "x": 4932,
          "y": 4914
        }
      ],
      "floors": 23,
      "unitCount": 92
    },
    {
      "id": "bld-eg-16",
      "name": "Eastgate Horizon Highrise #16",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 4838
      },
      "footprint": [
        {
          "x": 5101,
          "y": 4762
        },
        {
          "x": 5253,
          "y": 4762
        },
        {
          "x": 5253,
          "y": 4914
        },
        {
          "x": 5101,
          "y": 4914
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-eg-17",
      "name": "Eastgate Horizon Highrise #17",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 4838
      },
      "footprint": [
        {
          "x": 5270,
          "y": 4762
        },
        {
          "x": 5422,
          "y": 4762
        },
        {
          "x": 5422,
          "y": 4914
        },
        {
          "x": 5270,
          "y": 4914
        }
      ],
      "floors": 37,
      "unitCount": 148
    },
    {
      "id": "bld-eg-18",
      "name": "Eastgate Horizon Highrise #18",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 4838
      },
      "footprint": [
        {
          "x": 5439,
          "y": 4762
        },
        {
          "x": 5591,
          "y": 4762
        },
        {
          "x": 5591,
          "y": 4914
        },
        {
          "x": 5439,
          "y": 4914
        }
      ],
      "floors": 44,
      "unitCount": 176
    },
    {
      "id": "bld-eg-19",
      "name": "Eastgate Horizon Highrise #19",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 4838
      },
      "footprint": [
        {
          "x": 5609,
          "y": 4762
        },
        {
          "x": 5761,
          "y": 4762
        },
        {
          "x": 5761,
          "y": 4914
        },
        {
          "x": 5609,
          "y": 4914
        }
      ],
      "floors": 20,
      "unitCount": 80
    },
    {
      "id": "bld-eg-20",
      "name": "Eastgate Horizon Highrise #20",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 4838
      },
      "footprint": [
        {
          "x": 5778,
          "y": 4762
        },
        {
          "x": 5930,
          "y": 4762
        },
        {
          "x": 5930,
          "y": 4914
        },
        {
          "x": 5778,
          "y": 4914
        }
      ],
      "floors": 27,
      "unitCount": 108
    },
    {
      "id": "bld-eg-21",
      "name": "Eastgate Horizon Highrise #21",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 4838
      },
      "footprint": [
        {
          "x": 5947,
          "y": 4762
        },
        {
          "x": 6099,
          "y": 4762
        },
        {
          "x": 6099,
          "y": 4914
        },
        {
          "x": 5947,
          "y": 4914
        }
      ],
      "floors": 34,
      "unitCount": 136
    },
    {
      "id": "bld-eg-22",
      "name": "Eastgate Horizon Highrise #22",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 4838
      },
      "footprint": [
        {
          "x": 6116,
          "y": 4762
        },
        {
          "x": 6268,
          "y": 4762
        },
        {
          "x": 6268,
          "y": 4914
        },
        {
          "x": 6116,
          "y": 4914
        }
      ],
      "floors": 41,
      "unitCount": 164
    },
    {
      "id": "bld-eg-23",
      "name": "Eastgate Horizon Highrise #23",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 4838
      },
      "footprint": [
        {
          "x": 6286,
          "y": 4762
        },
        {
          "x": 6438,
          "y": 4762
        },
        {
          "x": 6438,
          "y": 4914
        },
        {
          "x": 6286,
          "y": 4914
        }
      ],
      "floors": 48,
      "unitCount": 192
    },
    {
      "id": "bld-eg-24",
      "name": "Eastgate Horizon Highrise #24",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 4838
      },
      "footprint": [
        {
          "x": 6455,
          "y": 4762
        },
        {
          "x": 6607,
          "y": 4762
        },
        {
          "x": 6607,
          "y": 4914
        },
        {
          "x": 6455,
          "y": 4914
        }
      ],
      "floors": 24,
      "unitCount": 96
    },
    {
      "id": "bld-eg-25",
      "name": "Eastgate Horizon Highrise #25",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 5008
      },
      "footprint": [
        {
          "x": 4593,
          "y": 4932
        },
        {
          "x": 4745,
          "y": 4932
        },
        {
          "x": 4745,
          "y": 5084
        },
        {
          "x": 4593,
          "y": 5084
        }
      ],
      "floors": 31,
      "unitCount": 124
    },
    {
      "id": "bld-eg-26",
      "name": "Eastgate Horizon Highrise #26",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 5008
      },
      "footprint": [
        {
          "x": 4762,
          "y": 4932
        },
        {
          "x": 4914,
          "y": 4932
        },
        {
          "x": 4914,
          "y": 5084
        },
        {
          "x": 4762,
          "y": 5084
        }
      ],
      "floors": 38,
      "unitCount": 152
    },
    {
      "id": "bld-eg-27",
      "name": "Eastgate Horizon Highrise #27",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 5008
      },
      "footprint": [
        {
          "x": 4932,
          "y": 4932
        },
        {
          "x": 5084,
          "y": 4932
        },
        {
          "x": 5084,
          "y": 5084
        },
        {
          "x": 4932,
          "y": 5084
        }
      ],
      "floors": 45,
      "unitCount": 180
    },
    {
      "id": "bld-eg-28",
      "name": "Eastgate Horizon Highrise #28",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 5008
      },
      "footprint": [
        {
          "x": 5101,
          "y": 4932
        },
        {
          "x": 5253,
          "y": 4932
        },
        {
          "x": 5253,
          "y": 5084
        },
        {
          "x": 5101,
          "y": 5084
        }
      ],
      "floors": 21,
      "unitCount": 84
    },
    {
      "id": "bld-eg-29",
      "name": "Eastgate Horizon Highrise #29",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 5008
      },
      "footprint": [
        {
          "x": 5270,
          "y": 4932
        },
        {
          "x": 5422,
          "y": 4932
        },
        {
          "x": 5422,
          "y": 5084
        },
        {
          "x": 5270,
          "y": 5084
        }
      ],
      "floors": 28,
      "unitCount": 112
    },
    {
      "id": "bld-eg-30",
      "name": "Eastgate Horizon Highrise #30",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 5008
      },
      "footprint": [
        {
          "x": 5439,
          "y": 4932
        },
        {
          "x": 5591,
          "y": 4932
        },
        {
          "x": 5591,
          "y": 5084
        },
        {
          "x": 5439,
          "y": 5084
        }
      ],
      "floors": 35,
      "unitCount": 140
    },
    {
      "id": "bld-eg-31",
      "name": "Eastgate Horizon Highrise #31",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 5008
      },
      "footprint": [
        {
          "x": 5609,
          "y": 4932
        },
        {
          "x": 5761,
          "y": 4932
        },
        {
          "x": 5761,
          "y": 5084
        },
        {
          "x": 5609,
          "y": 5084
        }
      ],
      "floors": 42,
      "unitCount": 168
    },
    {
      "id": "bld-eg-32",
      "name": "Eastgate Horizon Highrise #32",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 5008
      },
      "footprint": [
        {
          "x": 5778,
          "y": 4932
        },
        {
          "x": 5930,
          "y": 4932
        },
        {
          "x": 5930,
          "y": 5084
        },
        {
          "x": 5778,
          "y": 5084
        }
      ],
      "floors": 18,
      "unitCount": 72
    },
    {
      "id": "bld-eg-33",
      "name": "Eastgate Horizon Highrise #33",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 5008
      },
      "footprint": [
        {
          "x": 5947,
          "y": 4932
        },
        {
          "x": 6099,
          "y": 4932
        },
        {
          "x": 6099,
          "y": 5084
        },
        {
          "x": 5947,
          "y": 5084
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-eg-34",
      "name": "Eastgate Horizon Highrise #34",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 5008
      },
      "footprint": [
        {
          "x": 6116,
          "y": 4932
        },
        {
          "x": 6268,
          "y": 4932
        },
        {
          "x": 6268,
          "y": 5084
        },
        {
          "x": 6116,
          "y": 5084
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-eg-35",
      "name": "Eastgate Horizon Highrise #35",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 5008
      },
      "footprint": [
        {
          "x": 6286,
          "y": 4932
        },
        {
          "x": 6438,
          "y": 4932
        },
        {
          "x": 6438,
          "y": 5084
        },
        {
          "x": 6286,
          "y": 5084
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-eg-36",
      "name": "Eastgate Horizon Highrise #36",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 5008
      },
      "footprint": [
        {
          "x": 6455,
          "y": 4932
        },
        {
          "x": 6607,
          "y": 4932
        },
        {
          "x": 6607,
          "y": 5084
        },
        {
          "x": 6455,
          "y": 5084
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-eg-37",
      "name": "Eastgate Horizon Highrise #37",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 5177
      },
      "footprint": [
        {
          "x": 4593,
          "y": 5101
        },
        {
          "x": 4745,
          "y": 5101
        },
        {
          "x": 4745,
          "y": 5253
        },
        {
          "x": 4593,
          "y": 5253
        }
      ],
      "floors": 22,
      "unitCount": 88
    },
    {
      "id": "bld-eg-38",
      "name": "Eastgate Horizon Highrise #38",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 5177
      },
      "footprint": [
        {
          "x": 4762,
          "y": 5101
        },
        {
          "x": 4914,
          "y": 5101
        },
        {
          "x": 4914,
          "y": 5253
        },
        {
          "x": 4762,
          "y": 5253
        }
      ],
      "floors": 29,
      "unitCount": 116
    },
    {
      "id": "bld-eg-39",
      "name": "Eastgate Horizon Highrise #39",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 5177
      },
      "footprint": [
        {
          "x": 4932,
          "y": 5101
        },
        {
          "x": 5084,
          "y": 5101
        },
        {
          "x": 5084,
          "y": 5253
        },
        {
          "x": 4932,
          "y": 5253
        }
      ],
      "floors": 36,
      "unitCount": 144
    },
    {
      "id": "bld-eg-40",
      "name": "Eastgate Horizon Highrise #40",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 5177
      },
      "footprint": [
        {
          "x": 5101,
          "y": 5101
        },
        {
          "x": 5253,
          "y": 5101
        },
        {
          "x": 5253,
          "y": 5253
        },
        {
          "x": 5101,
          "y": 5253
        }
      ],
      "floors": 43,
      "unitCount": 172
    },
    {
      "id": "bld-eg-41",
      "name": "Eastgate Horizon Highrise #41",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 5177
      },
      "footprint": [
        {
          "x": 5270,
          "y": 5101
        },
        {
          "x": 5422,
          "y": 5101
        },
        {
          "x": 5422,
          "y": 5253
        },
        {
          "x": 5270,
          "y": 5253
        }
      ],
      "floors": 19,
      "unitCount": 76
    },
    {
      "id": "bld-eg-42",
      "name": "Eastgate Horizon Highrise #42",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 5177
      },
      "footprint": [
        {
          "x": 5439,
          "y": 5101
        },
        {
          "x": 5591,
          "y": 5101
        },
        {
          "x": 5591,
          "y": 5253
        },
        {
          "x": 5439,
          "y": 5253
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-eg-43",
      "name": "Eastgate Horizon Highrise #43",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 5177
      },
      "footprint": [
        {
          "x": 5609,
          "y": 5101
        },
        {
          "x": 5761,
          "y": 5101
        },
        {
          "x": 5761,
          "y": 5253
        },
        {
          "x": 5609,
          "y": 5253
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-eg-44",
      "name": "Eastgate Horizon Highrise #44",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 5177
      },
      "footprint": [
        {
          "x": 5778,
          "y": 5101
        },
        {
          "x": 5930,
          "y": 5101
        },
        {
          "x": 5930,
          "y": 5253
        },
        {
          "x": 5778,
          "y": 5253
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-eg-45",
      "name": "Eastgate Horizon Highrise #45",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 5177
      },
      "footprint": [
        {
          "x": 5947,
          "y": 5101
        },
        {
          "x": 6099,
          "y": 5101
        },
        {
          "x": 6099,
          "y": 5253
        },
        {
          "x": 5947,
          "y": 5253
        }
      ],
      "floors": 47,
      "unitCount": 188
    },
    {
      "id": "bld-eg-46",
      "name": "Eastgate Horizon Highrise #46",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 5177
      },
      "footprint": [
        {
          "x": 6116,
          "y": 5101
        },
        {
          "x": 6268,
          "y": 5101
        },
        {
          "x": 6268,
          "y": 5253
        },
        {
          "x": 6116,
          "y": 5253
        }
      ],
      "floors": 23,
      "unitCount": 92
    },
    {
      "id": "bld-eg-47",
      "name": "Eastgate Horizon Highrise #47",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 5177
      },
      "footprint": [
        {
          "x": 6286,
          "y": 5101
        },
        {
          "x": 6438,
          "y": 5101
        },
        {
          "x": 6438,
          "y": 5253
        },
        {
          "x": 6286,
          "y": 5253
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-eg-48",
      "name": "Eastgate Horizon Highrise #48",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 5177
      },
      "footprint": [
        {
          "x": 6455,
          "y": 5101
        },
        {
          "x": 6607,
          "y": 5101
        },
        {
          "x": 6607,
          "y": 5253
        },
        {
          "x": 6455,
          "y": 5253
        }
      ],
      "floors": 37,
      "unitCount": 148
    },
    {
      "id": "bld-eg-49",
      "name": "Eastgate Horizon Highrise #49",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 5346
      },
      "footprint": [
        {
          "x": 4593,
          "y": 5270
        },
        {
          "x": 4745,
          "y": 5270
        },
        {
          "x": 4745,
          "y": 5422
        },
        {
          "x": 4593,
          "y": 5422
        }
      ],
      "floors": 44,
      "unitCount": 176
    },
    {
      "id": "bld-eg-50",
      "name": "Eastgate Horizon Highrise #50",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 5346
      },
      "footprint": [
        {
          "x": 4762,
          "y": 5270
        },
        {
          "x": 4914,
          "y": 5270
        },
        {
          "x": 4914,
          "y": 5422
        },
        {
          "x": 4762,
          "y": 5422
        }
      ],
      "floors": 20,
      "unitCount": 80
    },
    {
      "id": "bld-eg-51",
      "name": "Eastgate Horizon Highrise #51",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 5346
      },
      "footprint": [
        {
          "x": 4932,
          "y": 5270
        },
        {
          "x": 5084,
          "y": 5270
        },
        {
          "x": 5084,
          "y": 5422
        },
        {
          "x": 4932,
          "y": 5422
        }
      ],
      "floors": 27,
      "unitCount": 108
    },
    {
      "id": "bld-eg-52",
      "name": "Eastgate Horizon Highrise #52",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 5346
      },
      "footprint": [
        {
          "x": 5101,
          "y": 5270
        },
        {
          "x": 5253,
          "y": 5270
        },
        {
          "x": 5253,
          "y": 5422
        },
        {
          "x": 5101,
          "y": 5422
        }
      ],
      "floors": 34,
      "unitCount": 136
    },
    {
      "id": "bld-eg-53",
      "name": "Eastgate Horizon Highrise #53",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 5346
      },
      "footprint": [
        {
          "x": 5270,
          "y": 5270
        },
        {
          "x": 5422,
          "y": 5270
        },
        {
          "x": 5422,
          "y": 5422
        },
        {
          "x": 5270,
          "y": 5422
        }
      ],
      "floors": 41,
      "unitCount": 164
    },
    {
      "id": "bld-eg-54",
      "name": "Eastgate Horizon Highrise #54",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 5346
      },
      "footprint": [
        {
          "x": 5439,
          "y": 5270
        },
        {
          "x": 5591,
          "y": 5270
        },
        {
          "x": 5591,
          "y": 5422
        },
        {
          "x": 5439,
          "y": 5422
        }
      ],
      "floors": 48,
      "unitCount": 192
    },
    {
      "id": "bld-eg-55",
      "name": "Eastgate Horizon Highrise #55",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 5346
      },
      "footprint": [
        {
          "x": 5609,
          "y": 5270
        },
        {
          "x": 5761,
          "y": 5270
        },
        {
          "x": 5761,
          "y": 5422
        },
        {
          "x": 5609,
          "y": 5422
        }
      ],
      "floors": 24,
      "unitCount": 96
    },
    {
      "id": "bld-eg-56",
      "name": "Eastgate Horizon Highrise #56",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 5346
      },
      "footprint": [
        {
          "x": 5778,
          "y": 5270
        },
        {
          "x": 5930,
          "y": 5270
        },
        {
          "x": 5930,
          "y": 5422
        },
        {
          "x": 5778,
          "y": 5422
        }
      ],
      "floors": 31,
      "unitCount": 124
    },
    {
      "id": "bld-eg-57",
      "name": "Eastgate Horizon Highrise #57",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 5346
      },
      "footprint": [
        {
          "x": 5947,
          "y": 5270
        },
        {
          "x": 6099,
          "y": 5270
        },
        {
          "x": 6099,
          "y": 5422
        },
        {
          "x": 5947,
          "y": 5422
        }
      ],
      "floors": 38,
      "unitCount": 152
    },
    {
      "id": "bld-eg-58",
      "name": "Eastgate Horizon Highrise #58",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 5346
      },
      "footprint": [
        {
          "x": 6116,
          "y": 5270
        },
        {
          "x": 6268,
          "y": 5270
        },
        {
          "x": 6268,
          "y": 5422
        },
        {
          "x": 6116,
          "y": 5422
        }
      ],
      "floors": 45,
      "unitCount": 180
    },
    {
      "id": "bld-eg-59",
      "name": "Eastgate Horizon Highrise #59",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 5346
      },
      "footprint": [
        {
          "x": 6286,
          "y": 5270
        },
        {
          "x": 6438,
          "y": 5270
        },
        {
          "x": 6438,
          "y": 5422
        },
        {
          "x": 6286,
          "y": 5422
        }
      ],
      "floors": 21,
      "unitCount": 84
    },
    {
      "id": "bld-eg-60",
      "name": "Eastgate Horizon Highrise #60",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 5346
      },
      "footprint": [
        {
          "x": 6455,
          "y": 5270
        },
        {
          "x": 6607,
          "y": 5270
        },
        {
          "x": 6607,
          "y": 5422
        },
        {
          "x": 6455,
          "y": 5422
        }
      ],
      "floors": 28,
      "unitCount": 112
    },
    {
      "id": "bld-eg-61",
      "name": "Eastgate Horizon Highrise #61",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 5515
      },
      "footprint": [
        {
          "x": 4593,
          "y": 5439
        },
        {
          "x": 4745,
          "y": 5439
        },
        {
          "x": 4745,
          "y": 5591
        },
        {
          "x": 4593,
          "y": 5591
        }
      ],
      "floors": 35,
      "unitCount": 140
    },
    {
      "id": "bld-eg-62",
      "name": "Eastgate Horizon Highrise #62",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 5515
      },
      "footprint": [
        {
          "x": 4762,
          "y": 5439
        },
        {
          "x": 4914,
          "y": 5439
        },
        {
          "x": 4914,
          "y": 5591
        },
        {
          "x": 4762,
          "y": 5591
        }
      ],
      "floors": 42,
      "unitCount": 168
    },
    {
      "id": "bld-eg-63",
      "name": "Eastgate Horizon Highrise #63",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 5515
      },
      "footprint": [
        {
          "x": 4932,
          "y": 5439
        },
        {
          "x": 5084,
          "y": 5439
        },
        {
          "x": 5084,
          "y": 5591
        },
        {
          "x": 4932,
          "y": 5591
        }
      ],
      "floors": 18,
      "unitCount": 72
    },
    {
      "id": "bld-eg-64",
      "name": "Eastgate Horizon Highrise #64",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 5515
      },
      "footprint": [
        {
          "x": 5101,
          "y": 5439
        },
        {
          "x": 5253,
          "y": 5439
        },
        {
          "x": 5253,
          "y": 5591
        },
        {
          "x": 5101,
          "y": 5591
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-eg-65",
      "name": "Eastgate Horizon Highrise #65",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 5515
      },
      "footprint": [
        {
          "x": 5270,
          "y": 5439
        },
        {
          "x": 5422,
          "y": 5439
        },
        {
          "x": 5422,
          "y": 5591
        },
        {
          "x": 5270,
          "y": 5591
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-eg-66",
      "name": "Eastgate Horizon Highrise #66",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 5515
      },
      "footprint": [
        {
          "x": 5439,
          "y": 5439
        },
        {
          "x": 5591,
          "y": 5439
        },
        {
          "x": 5591,
          "y": 5591
        },
        {
          "x": 5439,
          "y": 5591
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-eg-67",
      "name": "Eastgate Horizon Highrise #67",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 5515
      },
      "footprint": [
        {
          "x": 5609,
          "y": 5439
        },
        {
          "x": 5761,
          "y": 5439
        },
        {
          "x": 5761,
          "y": 5591
        },
        {
          "x": 5609,
          "y": 5591
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-eg-68",
      "name": "Eastgate Horizon Highrise #68",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 5515
      },
      "footprint": [
        {
          "x": 5778,
          "y": 5439
        },
        {
          "x": 5930,
          "y": 5439
        },
        {
          "x": 5930,
          "y": 5591
        },
        {
          "x": 5778,
          "y": 5591
        }
      ],
      "floors": 22,
      "unitCount": 88
    },
    {
      "id": "bld-eg-69",
      "name": "Eastgate Horizon Highrise #69",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 5515
      },
      "footprint": [
        {
          "x": 5947,
          "y": 5439
        },
        {
          "x": 6099,
          "y": 5439
        },
        {
          "x": 6099,
          "y": 5591
        },
        {
          "x": 5947,
          "y": 5591
        }
      ],
      "floors": 29,
      "unitCount": 116
    },
    {
      "id": "bld-eg-70",
      "name": "Eastgate Horizon Highrise #70",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 5515
      },
      "footprint": [
        {
          "x": 6116,
          "y": 5439
        },
        {
          "x": 6268,
          "y": 5439
        },
        {
          "x": 6268,
          "y": 5591
        },
        {
          "x": 6116,
          "y": 5591
        }
      ],
      "floors": 36,
      "unitCount": 144
    },
    {
      "id": "bld-eg-71",
      "name": "Eastgate Horizon Highrise #71",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 5515
      },
      "footprint": [
        {
          "x": 6286,
          "y": 5439
        },
        {
          "x": 6438,
          "y": 5439
        },
        {
          "x": 6438,
          "y": 5591
        },
        {
          "x": 6286,
          "y": 5591
        }
      ],
      "floors": 43,
      "unitCount": 172
    },
    {
      "id": "bld-eg-72",
      "name": "Eastgate Horizon Highrise #72",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 5515
      },
      "footprint": [
        {
          "x": 6455,
          "y": 5439
        },
        {
          "x": 6607,
          "y": 5439
        },
        {
          "x": 6607,
          "y": 5591
        },
        {
          "x": 6455,
          "y": 5591
        }
      ],
      "floors": 19,
      "unitCount": 76
    },
    {
      "id": "bld-eg-73",
      "name": "Eastgate Horizon Highrise #73",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 5685
      },
      "footprint": [
        {
          "x": 4593,
          "y": 5609
        },
        {
          "x": 4745,
          "y": 5609
        },
        {
          "x": 4745,
          "y": 5761
        },
        {
          "x": 4593,
          "y": 5761
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-eg-74",
      "name": "Eastgate Horizon Highrise #74",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 5685
      },
      "footprint": [
        {
          "x": 4762,
          "y": 5609
        },
        {
          "x": 4914,
          "y": 5609
        },
        {
          "x": 4914,
          "y": 5761
        },
        {
          "x": 4762,
          "y": 5761
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-eg-75",
      "name": "Eastgate Horizon Highrise #75",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 5685
      },
      "footprint": [
        {
          "x": 4932,
          "y": 5609
        },
        {
          "x": 5084,
          "y": 5609
        },
        {
          "x": 5084,
          "y": 5761
        },
        {
          "x": 4932,
          "y": 5761
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-eg-76",
      "name": "Eastgate Horizon Highrise #76",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 5685
      },
      "footprint": [
        {
          "x": 5101,
          "y": 5609
        },
        {
          "x": 5253,
          "y": 5609
        },
        {
          "x": 5253,
          "y": 5761
        },
        {
          "x": 5101,
          "y": 5761
        }
      ],
      "floors": 47,
      "unitCount": 188
    },
    {
      "id": "bld-eg-77",
      "name": "Eastgate Horizon Highrise #77",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 5685
      },
      "footprint": [
        {
          "x": 5270,
          "y": 5609
        },
        {
          "x": 5422,
          "y": 5609
        },
        {
          "x": 5422,
          "y": 5761
        },
        {
          "x": 5270,
          "y": 5761
        }
      ],
      "floors": 23,
      "unitCount": 92
    },
    {
      "id": "bld-eg-78",
      "name": "Eastgate Horizon Highrise #78",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 5685
      },
      "footprint": [
        {
          "x": 5439,
          "y": 5609
        },
        {
          "x": 5591,
          "y": 5609
        },
        {
          "x": 5591,
          "y": 5761
        },
        {
          "x": 5439,
          "y": 5761
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-eg-79",
      "name": "Eastgate Horizon Highrise #79",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 5685
      },
      "footprint": [
        {
          "x": 5609,
          "y": 5609
        },
        {
          "x": 5761,
          "y": 5609
        },
        {
          "x": 5761,
          "y": 5761
        },
        {
          "x": 5609,
          "y": 5761
        }
      ],
      "floors": 37,
      "unitCount": 148
    },
    {
      "id": "bld-eg-80",
      "name": "Eastgate Horizon Highrise #80",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 5685
      },
      "footprint": [
        {
          "x": 5778,
          "y": 5609
        },
        {
          "x": 5930,
          "y": 5609
        },
        {
          "x": 5930,
          "y": 5761
        },
        {
          "x": 5778,
          "y": 5761
        }
      ],
      "floors": 44,
      "unitCount": 176
    },
    {
      "id": "bld-eg-81",
      "name": "Eastgate Horizon Highrise #81",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 5685
      },
      "footprint": [
        {
          "x": 5947,
          "y": 5609
        },
        {
          "x": 6099,
          "y": 5609
        },
        {
          "x": 6099,
          "y": 5761
        },
        {
          "x": 5947,
          "y": 5761
        }
      ],
      "floors": 20,
      "unitCount": 80
    },
    {
      "id": "bld-eg-82",
      "name": "Eastgate Horizon Highrise #82",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 5685
      },
      "footprint": [
        {
          "x": 6116,
          "y": 5609
        },
        {
          "x": 6268,
          "y": 5609
        },
        {
          "x": 6268,
          "y": 5761
        },
        {
          "x": 6116,
          "y": 5761
        }
      ],
      "floors": 27,
      "unitCount": 108
    },
    {
      "id": "bld-eg-83",
      "name": "Eastgate Horizon Highrise #83",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 5685
      },
      "footprint": [
        {
          "x": 6286,
          "y": 5609
        },
        {
          "x": 6438,
          "y": 5609
        },
        {
          "x": 6438,
          "y": 5761
        },
        {
          "x": 6286,
          "y": 5761
        }
      ],
      "floors": 34,
      "unitCount": 136
    },
    {
      "id": "bld-eg-84",
      "name": "Eastgate Horizon Highrise #84",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 5685
      },
      "footprint": [
        {
          "x": 6455,
          "y": 5609
        },
        {
          "x": 6607,
          "y": 5609
        },
        {
          "x": 6607,
          "y": 5761
        },
        {
          "x": 6455,
          "y": 5761
        }
      ],
      "floors": 41,
      "unitCount": 164
    },
    {
      "id": "bld-eg-85",
      "name": "Eastgate Horizon Highrise #85",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 5854
      },
      "footprint": [
        {
          "x": 4593,
          "y": 5778
        },
        {
          "x": 4745,
          "y": 5778
        },
        {
          "x": 4745,
          "y": 5930
        },
        {
          "x": 4593,
          "y": 5930
        }
      ],
      "floors": 48,
      "unitCount": 192
    },
    {
      "id": "bld-eg-86",
      "name": "Eastgate Horizon Highrise #86",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 5854
      },
      "footprint": [
        {
          "x": 4762,
          "y": 5778
        },
        {
          "x": 4914,
          "y": 5778
        },
        {
          "x": 4914,
          "y": 5930
        },
        {
          "x": 4762,
          "y": 5930
        }
      ],
      "floors": 24,
      "unitCount": 96
    },
    {
      "id": "bld-eg-87",
      "name": "Eastgate Horizon Highrise #87",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 5854
      },
      "footprint": [
        {
          "x": 4932,
          "y": 5778
        },
        {
          "x": 5084,
          "y": 5778
        },
        {
          "x": 5084,
          "y": 5930
        },
        {
          "x": 4932,
          "y": 5930
        }
      ],
      "floors": 31,
      "unitCount": 124
    },
    {
      "id": "bld-eg-88",
      "name": "Eastgate Horizon Highrise #88",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 5854
      },
      "footprint": [
        {
          "x": 5101,
          "y": 5778
        },
        {
          "x": 5253,
          "y": 5778
        },
        {
          "x": 5253,
          "y": 5930
        },
        {
          "x": 5101,
          "y": 5930
        }
      ],
      "floors": 38,
      "unitCount": 152
    },
    {
      "id": "bld-eg-89",
      "name": "Eastgate Horizon Highrise #89",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 5854
      },
      "footprint": [
        {
          "x": 5270,
          "y": 5778
        },
        {
          "x": 5422,
          "y": 5778
        },
        {
          "x": 5422,
          "y": 5930
        },
        {
          "x": 5270,
          "y": 5930
        }
      ],
      "floors": 45,
      "unitCount": 180
    },
    {
      "id": "bld-eg-90",
      "name": "Eastgate Horizon Highrise #90",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 5854
      },
      "footprint": [
        {
          "x": 5439,
          "y": 5778
        },
        {
          "x": 5591,
          "y": 5778
        },
        {
          "x": 5591,
          "y": 5930
        },
        {
          "x": 5439,
          "y": 5930
        }
      ],
      "floors": 21,
      "unitCount": 84
    },
    {
      "id": "bld-eg-91",
      "name": "Eastgate Horizon Highrise #91",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 5854
      },
      "footprint": [
        {
          "x": 5609,
          "y": 5778
        },
        {
          "x": 5761,
          "y": 5778
        },
        {
          "x": 5761,
          "y": 5930
        },
        {
          "x": 5609,
          "y": 5930
        }
      ],
      "floors": 28,
      "unitCount": 112
    },
    {
      "id": "bld-eg-92",
      "name": "Eastgate Horizon Highrise #92",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 5854
      },
      "footprint": [
        {
          "x": 5778,
          "y": 5778
        },
        {
          "x": 5930,
          "y": 5778
        },
        {
          "x": 5930,
          "y": 5930
        },
        {
          "x": 5778,
          "y": 5930
        }
      ],
      "floors": 35,
      "unitCount": 140
    },
    {
      "id": "bld-eg-93",
      "name": "Eastgate Horizon Highrise #93",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 5854
      },
      "footprint": [
        {
          "x": 5947,
          "y": 5778
        },
        {
          "x": 6099,
          "y": 5778
        },
        {
          "x": 6099,
          "y": 5930
        },
        {
          "x": 5947,
          "y": 5930
        }
      ],
      "floors": 42,
      "unitCount": 168
    },
    {
      "id": "bld-eg-94",
      "name": "Eastgate Horizon Highrise #94",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 5854
      },
      "footprint": [
        {
          "x": 6116,
          "y": 5778
        },
        {
          "x": 6268,
          "y": 5778
        },
        {
          "x": 6268,
          "y": 5930
        },
        {
          "x": 6116,
          "y": 5930
        }
      ],
      "floors": 18,
      "unitCount": 72
    },
    {
      "id": "bld-eg-95",
      "name": "Eastgate Horizon Highrise #95",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 5854
      },
      "footprint": [
        {
          "x": 6286,
          "y": 5778
        },
        {
          "x": 6438,
          "y": 5778
        },
        {
          "x": 6438,
          "y": 5930
        },
        {
          "x": 6286,
          "y": 5930
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-eg-96",
      "name": "Eastgate Horizon Highrise #96",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 5854
      },
      "footprint": [
        {
          "x": 6455,
          "y": 5778
        },
        {
          "x": 6607,
          "y": 5778
        },
        {
          "x": 6607,
          "y": 5930
        },
        {
          "x": 6455,
          "y": 5930
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-eg-97",
      "name": "Eastgate Horizon Highrise #97",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 6023
      },
      "footprint": [
        {
          "x": 4593,
          "y": 5947
        },
        {
          "x": 4745,
          "y": 5947
        },
        {
          "x": 4745,
          "y": 6099
        },
        {
          "x": 4593,
          "y": 6099
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-eg-98",
      "name": "Eastgate Horizon Highrise #98",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 6023
      },
      "footprint": [
        {
          "x": 4762,
          "y": 5947
        },
        {
          "x": 4914,
          "y": 5947
        },
        {
          "x": 4914,
          "y": 6099
        },
        {
          "x": 4762,
          "y": 6099
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-eg-99",
      "name": "Eastgate Horizon Highrise #99",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 6023
      },
      "footprint": [
        {
          "x": 4932,
          "y": 5947
        },
        {
          "x": 5084,
          "y": 5947
        },
        {
          "x": 5084,
          "y": 6099
        },
        {
          "x": 4932,
          "y": 6099
        }
      ],
      "floors": 22,
      "unitCount": 88
    },
    {
      "id": "bld-eg-100",
      "name": "Eastgate Horizon Highrise #100",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 6023
      },
      "footprint": [
        {
          "x": 5101,
          "y": 5947
        },
        {
          "x": 5253,
          "y": 5947
        },
        {
          "x": 5253,
          "y": 6099
        },
        {
          "x": 5101,
          "y": 6099
        }
      ],
      "floors": 29,
      "unitCount": 116
    },
    {
      "id": "bld-eg-101",
      "name": "Eastgate Horizon Highrise #101",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 6023
      },
      "footprint": [
        {
          "x": 5270,
          "y": 5947
        },
        {
          "x": 5422,
          "y": 5947
        },
        {
          "x": 5422,
          "y": 6099
        },
        {
          "x": 5270,
          "y": 6099
        }
      ],
      "floors": 36,
      "unitCount": 144
    },
    {
      "id": "bld-eg-102",
      "name": "Eastgate Horizon Highrise #102",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 6023
      },
      "footprint": [
        {
          "x": 5439,
          "y": 5947
        },
        {
          "x": 5591,
          "y": 5947
        },
        {
          "x": 5591,
          "y": 6099
        },
        {
          "x": 5439,
          "y": 6099
        }
      ],
      "floors": 43,
      "unitCount": 172
    },
    {
      "id": "bld-eg-103",
      "name": "Eastgate Horizon Highrise #103",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 6023
      },
      "footprint": [
        {
          "x": 5609,
          "y": 5947
        },
        {
          "x": 5761,
          "y": 5947
        },
        {
          "x": 5761,
          "y": 6099
        },
        {
          "x": 5609,
          "y": 6099
        }
      ],
      "floors": 19,
      "unitCount": 76
    },
    {
      "id": "bld-eg-104",
      "name": "Eastgate Horizon Highrise #104",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 6023
      },
      "footprint": [
        {
          "x": 5778,
          "y": 5947
        },
        {
          "x": 5930,
          "y": 5947
        },
        {
          "x": 5930,
          "y": 6099
        },
        {
          "x": 5778,
          "y": 6099
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-eg-105",
      "name": "Eastgate Horizon Highrise #105",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 6023
      },
      "footprint": [
        {
          "x": 5947,
          "y": 5947
        },
        {
          "x": 6099,
          "y": 5947
        },
        {
          "x": 6099,
          "y": 6099
        },
        {
          "x": 5947,
          "y": 6099
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-eg-106",
      "name": "Eastgate Horizon Highrise #106",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 6023
      },
      "footprint": [
        {
          "x": 6116,
          "y": 5947
        },
        {
          "x": 6268,
          "y": 5947
        },
        {
          "x": 6268,
          "y": 6099
        },
        {
          "x": 6116,
          "y": 6099
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-eg-107",
      "name": "Eastgate Horizon Highrise #107",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 6023
      },
      "footprint": [
        {
          "x": 6286,
          "y": 5947
        },
        {
          "x": 6438,
          "y": 5947
        },
        {
          "x": 6438,
          "y": 6099
        },
        {
          "x": 6286,
          "y": 6099
        }
      ],
      "floors": 47,
      "unitCount": 188
    },
    {
      "id": "bld-eg-108",
      "name": "Eastgate Horizon Highrise #108",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 6023
      },
      "footprint": [
        {
          "x": 6455,
          "y": 5947
        },
        {
          "x": 6607,
          "y": 5947
        },
        {
          "x": 6607,
          "y": 6099
        },
        {
          "x": 6455,
          "y": 6099
        }
      ],
      "floors": 23,
      "unitCount": 92
    },
    {
      "id": "bld-eg-109",
      "name": "Eastgate Horizon Highrise #109",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 6192
      },
      "footprint": [
        {
          "x": 4593,
          "y": 6116
        },
        {
          "x": 4745,
          "y": 6116
        },
        {
          "x": 4745,
          "y": 6268
        },
        {
          "x": 4593,
          "y": 6268
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-eg-110",
      "name": "Eastgate Horizon Highrise #110",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 6192
      },
      "footprint": [
        {
          "x": 4762,
          "y": 6116
        },
        {
          "x": 4914,
          "y": 6116
        },
        {
          "x": 4914,
          "y": 6268
        },
        {
          "x": 4762,
          "y": 6268
        }
      ],
      "floors": 37,
      "unitCount": 148
    },
    {
      "id": "bld-eg-111",
      "name": "Eastgate Horizon Highrise #111",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 6192
      },
      "footprint": [
        {
          "x": 4932,
          "y": 6116
        },
        {
          "x": 5084,
          "y": 6116
        },
        {
          "x": 5084,
          "y": 6268
        },
        {
          "x": 4932,
          "y": 6268
        }
      ],
      "floors": 44,
      "unitCount": 176
    },
    {
      "id": "bld-eg-112",
      "name": "Eastgate Horizon Highrise #112",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 6192
      },
      "footprint": [
        {
          "x": 5101,
          "y": 6116
        },
        {
          "x": 5253,
          "y": 6116
        },
        {
          "x": 5253,
          "y": 6268
        },
        {
          "x": 5101,
          "y": 6268
        }
      ],
      "floors": 20,
      "unitCount": 80
    },
    {
      "id": "bld-eg-113",
      "name": "Eastgate Horizon Highrise #113",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 6192
      },
      "footprint": [
        {
          "x": 5270,
          "y": 6116
        },
        {
          "x": 5422,
          "y": 6116
        },
        {
          "x": 5422,
          "y": 6268
        },
        {
          "x": 5270,
          "y": 6268
        }
      ],
      "floors": 27,
      "unitCount": 108
    },
    {
      "id": "bld-eg-114",
      "name": "Eastgate Horizon Highrise #114",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 6192
      },
      "footprint": [
        {
          "x": 5439,
          "y": 6116
        },
        {
          "x": 5591,
          "y": 6116
        },
        {
          "x": 5591,
          "y": 6268
        },
        {
          "x": 5439,
          "y": 6268
        }
      ],
      "floors": 34,
      "unitCount": 136
    },
    {
      "id": "bld-eg-115",
      "name": "Eastgate Horizon Highrise #115",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 6192
      },
      "footprint": [
        {
          "x": 5609,
          "y": 6116
        },
        {
          "x": 5761,
          "y": 6116
        },
        {
          "x": 5761,
          "y": 6268
        },
        {
          "x": 5609,
          "y": 6268
        }
      ],
      "floors": 41,
      "unitCount": 164
    },
    {
      "id": "bld-eg-116",
      "name": "Eastgate Horizon Highrise #116",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 6192
      },
      "footprint": [
        {
          "x": 5778,
          "y": 6116
        },
        {
          "x": 5930,
          "y": 6116
        },
        {
          "x": 5930,
          "y": 6268
        },
        {
          "x": 5778,
          "y": 6268
        }
      ],
      "floors": 48,
      "unitCount": 192
    },
    {
      "id": "bld-eg-117",
      "name": "Eastgate Horizon Highrise #117",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 6192
      },
      "footprint": [
        {
          "x": 5947,
          "y": 6116
        },
        {
          "x": 6099,
          "y": 6116
        },
        {
          "x": 6099,
          "y": 6268
        },
        {
          "x": 5947,
          "y": 6268
        }
      ],
      "floors": 24,
      "unitCount": 96
    },
    {
      "id": "bld-eg-118",
      "name": "Eastgate Horizon Highrise #118",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 6192
      },
      "footprint": [
        {
          "x": 6116,
          "y": 6116
        },
        {
          "x": 6268,
          "y": 6116
        },
        {
          "x": 6268,
          "y": 6268
        },
        {
          "x": 6116,
          "y": 6268
        }
      ],
      "floors": 31,
      "unitCount": 124
    },
    {
      "id": "bld-eg-119",
      "name": "Eastgate Horizon Highrise #119",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 6192
      },
      "footprint": [
        {
          "x": 6286,
          "y": 6116
        },
        {
          "x": 6438,
          "y": 6116
        },
        {
          "x": 6438,
          "y": 6268
        },
        {
          "x": 6286,
          "y": 6268
        }
      ],
      "floors": 38,
      "unitCount": 152
    },
    {
      "id": "bld-eg-120",
      "name": "Eastgate Horizon Highrise #120",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 6192
      },
      "footprint": [
        {
          "x": 6455,
          "y": 6116
        },
        {
          "x": 6607,
          "y": 6116
        },
        {
          "x": 6607,
          "y": 6268
        },
        {
          "x": 6455,
          "y": 6268
        }
      ],
      "floors": 45,
      "unitCount": 180
    },
    {
      "id": "bld-eg-121",
      "name": "Eastgate Horizon Highrise #121",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 6362
      },
      "footprint": [
        {
          "x": 4593,
          "y": 6286
        },
        {
          "x": 4745,
          "y": 6286
        },
        {
          "x": 4745,
          "y": 6438
        },
        {
          "x": 4593,
          "y": 6438
        }
      ],
      "floors": 21,
      "unitCount": 84
    },
    {
      "id": "bld-eg-122",
      "name": "Eastgate Horizon Highrise #122",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 6362
      },
      "footprint": [
        {
          "x": 4762,
          "y": 6286
        },
        {
          "x": 4914,
          "y": 6286
        },
        {
          "x": 4914,
          "y": 6438
        },
        {
          "x": 4762,
          "y": 6438
        }
      ],
      "floors": 28,
      "unitCount": 112
    },
    {
      "id": "bld-eg-123",
      "name": "Eastgate Horizon Highrise #123",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 6362
      },
      "footprint": [
        {
          "x": 4932,
          "y": 6286
        },
        {
          "x": 5084,
          "y": 6286
        },
        {
          "x": 5084,
          "y": 6438
        },
        {
          "x": 4932,
          "y": 6438
        }
      ],
      "floors": 35,
      "unitCount": 140
    },
    {
      "id": "bld-eg-124",
      "name": "Eastgate Horizon Highrise #124",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 6362
      },
      "footprint": [
        {
          "x": 5101,
          "y": 6286
        },
        {
          "x": 5253,
          "y": 6286
        },
        {
          "x": 5253,
          "y": 6438
        },
        {
          "x": 5101,
          "y": 6438
        }
      ],
      "floors": 42,
      "unitCount": 168
    },
    {
      "id": "bld-eg-125",
      "name": "Eastgate Horizon Highrise #125",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 6362
      },
      "footprint": [
        {
          "x": 5270,
          "y": 6286
        },
        {
          "x": 5422,
          "y": 6286
        },
        {
          "x": 5422,
          "y": 6438
        },
        {
          "x": 5270,
          "y": 6438
        }
      ],
      "floors": 18,
      "unitCount": 72
    },
    {
      "id": "bld-eg-126",
      "name": "Eastgate Horizon Highrise #126",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 6362
      },
      "footprint": [
        {
          "x": 5439,
          "y": 6286
        },
        {
          "x": 5591,
          "y": 6286
        },
        {
          "x": 5591,
          "y": 6438
        },
        {
          "x": 5439,
          "y": 6438
        }
      ],
      "floors": 25,
      "unitCount": 100
    },
    {
      "id": "bld-eg-127",
      "name": "Eastgate Horizon Highrise #127",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 6362
      },
      "footprint": [
        {
          "x": 5609,
          "y": 6286
        },
        {
          "x": 5761,
          "y": 6286
        },
        {
          "x": 5761,
          "y": 6438
        },
        {
          "x": 5609,
          "y": 6438
        }
      ],
      "floors": 32,
      "unitCount": 128
    },
    {
      "id": "bld-eg-128",
      "name": "Eastgate Horizon Highrise #128",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 6362
      },
      "footprint": [
        {
          "x": 5778,
          "y": 6286
        },
        {
          "x": 5930,
          "y": 6286
        },
        {
          "x": 5930,
          "y": 6438
        },
        {
          "x": 5778,
          "y": 6438
        }
      ],
      "floors": 39,
      "unitCount": 156
    },
    {
      "id": "bld-eg-129",
      "name": "Eastgate Horizon Highrise #129",
      "type": "residential_highrise",
      "center": {
        "x": 6023,
        "y": 6362
      },
      "footprint": [
        {
          "x": 5947,
          "y": 6286
        },
        {
          "x": 6099,
          "y": 6286
        },
        {
          "x": 6099,
          "y": 6438
        },
        {
          "x": 5947,
          "y": 6438
        }
      ],
      "floors": 46,
      "unitCount": 184
    },
    {
      "id": "bld-eg-130",
      "name": "Eastgate Horizon Highrise #130",
      "type": "residential_highrise",
      "center": {
        "x": 6192,
        "y": 6362
      },
      "footprint": [
        {
          "x": 6116,
          "y": 6286
        },
        {
          "x": 6268,
          "y": 6286
        },
        {
          "x": 6268,
          "y": 6438
        },
        {
          "x": 6116,
          "y": 6438
        }
      ],
      "floors": 22,
      "unitCount": 88
    },
    {
      "id": "bld-eg-131",
      "name": "Eastgate Horizon Highrise #131",
      "type": "residential_highrise",
      "center": {
        "x": 6362,
        "y": 6362
      },
      "footprint": [
        {
          "x": 6286,
          "y": 6286
        },
        {
          "x": 6438,
          "y": 6286
        },
        {
          "x": 6438,
          "y": 6438
        },
        {
          "x": 6286,
          "y": 6438
        }
      ],
      "floors": 29,
      "unitCount": 116
    },
    {
      "id": "bld-eg-132",
      "name": "Eastgate Horizon Highrise #132",
      "type": "residential_highrise",
      "center": {
        "x": 6531,
        "y": 6362
      },
      "footprint": [
        {
          "x": 6455,
          "y": 6286
        },
        {
          "x": 6607,
          "y": 6286
        },
        {
          "x": 6607,
          "y": 6438
        },
        {
          "x": 6455,
          "y": 6438
        }
      ],
      "floors": 36,
      "unitCount": 144
    },
    {
      "id": "bld-eg-133",
      "name": "Eastgate Horizon Highrise #133",
      "type": "residential_highrise",
      "center": {
        "x": 4669,
        "y": 6531
      },
      "footprint": [
        {
          "x": 4593,
          "y": 6455
        },
        {
          "x": 4745,
          "y": 6455
        },
        {
          "x": 4745,
          "y": 6607
        },
        {
          "x": 4593,
          "y": 6607
        }
      ],
      "floors": 43,
      "unitCount": 172
    },
    {
      "id": "bld-eg-134",
      "name": "Eastgate Horizon Highrise #134",
      "type": "residential_highrise",
      "center": {
        "x": 4838,
        "y": 6531
      },
      "footprint": [
        {
          "x": 4762,
          "y": 6455
        },
        {
          "x": 4914,
          "y": 6455
        },
        {
          "x": 4914,
          "y": 6607
        },
        {
          "x": 4762,
          "y": 6607
        }
      ],
      "floors": 19,
      "unitCount": 76
    },
    {
      "id": "bld-eg-135",
      "name": "Eastgate Horizon Highrise #135",
      "type": "residential_highrise",
      "center": {
        "x": 5008,
        "y": 6531
      },
      "footprint": [
        {
          "x": 4932,
          "y": 6455
        },
        {
          "x": 5084,
          "y": 6455
        },
        {
          "x": 5084,
          "y": 6607
        },
        {
          "x": 4932,
          "y": 6607
        }
      ],
      "floors": 26,
      "unitCount": 104
    },
    {
      "id": "bld-eg-136",
      "name": "Eastgate Horizon Highrise #136",
      "type": "residential_highrise",
      "center": {
        "x": 5177,
        "y": 6531
      },
      "footprint": [
        {
          "x": 5101,
          "y": 6455
        },
        {
          "x": 5253,
          "y": 6455
        },
        {
          "x": 5253,
          "y": 6607
        },
        {
          "x": 5101,
          "y": 6607
        }
      ],
      "floors": 33,
      "unitCount": 132
    },
    {
      "id": "bld-eg-137",
      "name": "Eastgate Horizon Highrise #137",
      "type": "residential_highrise",
      "center": {
        "x": 5346,
        "y": 6531
      },
      "footprint": [
        {
          "x": 5270,
          "y": 6455
        },
        {
          "x": 5422,
          "y": 6455
        },
        {
          "x": 5422,
          "y": 6607
        },
        {
          "x": 5270,
          "y": 6607
        }
      ],
      "floors": 40,
      "unitCount": 160
    },
    {
      "id": "bld-eg-138",
      "name": "Eastgate Horizon Highrise #138",
      "type": "residential_highrise",
      "center": {
        "x": 5515,
        "y": 6531
      },
      "footprint": [
        {
          "x": 5439,
          "y": 6455
        },
        {
          "x": 5591,
          "y": 6455
        },
        {
          "x": 5591,
          "y": 6607
        },
        {
          "x": 5439,
          "y": 6607
        }
      ],
      "floors": 47,
      "unitCount": 188
    },
    {
      "id": "bld-eg-139",
      "name": "Eastgate Horizon Highrise #139",
      "type": "residential_highrise",
      "center": {
        "x": 5685,
        "y": 6531
      },
      "footprint": [
        {
          "x": 5609,
          "y": 6455
        },
        {
          "x": 5761,
          "y": 6455
        },
        {
          "x": 5761,
          "y": 6607
        },
        {
          "x": 5609,
          "y": 6607
        }
      ],
      "floors": 23,
      "unitCount": 92
    },
    {
      "id": "bld-eg-140",
      "name": "Eastgate Horizon Highrise #140",
      "type": "residential_highrise",
      "center": {
        "x": 5854,
        "y": 6531
      },
      "footprint": [
        {
          "x": 5778,
          "y": 6455
        },
        {
          "x": 5930,
          "y": 6455
        },
        {
          "x": 5930,
          "y": 6607
        },
        {
          "x": 5778,
          "y": 6607
        }
      ],
      "floors": 30,
      "unitCount": 120
    },
    {
      "id": "bld-we-1",
      "name": "West End Residential Court #1",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 4683
      },
      "footprint": [
        {
          "x": 1394,
          "y": 4601
        },
        {
          "x": 1548,
          "y": 4601
        },
        {
          "x": 1548,
          "y": 4765
        },
        {
          "x": 1394,
          "y": 4765
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-2",
      "name": "West End Residential Court #2",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 4683
      },
      "footprint": [
        {
          "x": 1566,
          "y": 4601
        },
        {
          "x": 1720,
          "y": 4601
        },
        {
          "x": 1720,
          "y": 4765
        },
        {
          "x": 1566,
          "y": 4765
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-3",
      "name": "West End Residential Court #3",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 4683
      },
      "footprint": [
        {
          "x": 1737,
          "y": 4601
        },
        {
          "x": 1891,
          "y": 4601
        },
        {
          "x": 1891,
          "y": 4765
        },
        {
          "x": 1737,
          "y": 4765
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-4",
      "name": "West End Residential Court #4",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 4683
      },
      "footprint": [
        {
          "x": 1909,
          "y": 4601
        },
        {
          "x": 2063,
          "y": 4601
        },
        {
          "x": 2063,
          "y": 4765
        },
        {
          "x": 1909,
          "y": 4765
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-5",
      "name": "West End Residential Court #5",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 4683
      },
      "footprint": [
        {
          "x": 2080,
          "y": 4601
        },
        {
          "x": 2234,
          "y": 4601
        },
        {
          "x": 2234,
          "y": 4765
        },
        {
          "x": 2080,
          "y": 4765
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-6",
      "name": "West End Residential Court #6",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 4683
      },
      "footprint": [
        {
          "x": 2252,
          "y": 4601
        },
        {
          "x": 2406,
          "y": 4601
        },
        {
          "x": 2406,
          "y": 4765
        },
        {
          "x": 2252,
          "y": 4765
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-7",
      "name": "West End Residential Court #7",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 4683
      },
      "footprint": [
        {
          "x": 2423,
          "y": 4601
        },
        {
          "x": 2577,
          "y": 4601
        },
        {
          "x": 2577,
          "y": 4765
        },
        {
          "x": 2423,
          "y": 4765
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-8",
      "name": "West End Residential Court #8",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 4683
      },
      "footprint": [
        {
          "x": 2594,
          "y": 4601
        },
        {
          "x": 2748,
          "y": 4601
        },
        {
          "x": 2748,
          "y": 4765
        },
        {
          "x": 2594,
          "y": 4765
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-9",
      "name": "West End Residential Court #9",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 4683
      },
      "footprint": [
        {
          "x": 2766,
          "y": 4601
        },
        {
          "x": 2920,
          "y": 4601
        },
        {
          "x": 2920,
          "y": 4765
        },
        {
          "x": 2766,
          "y": 4765
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-10",
      "name": "West End Residential Court #10",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 4683
      },
      "footprint": [
        {
          "x": 2937,
          "y": 4601
        },
        {
          "x": 3091,
          "y": 4601
        },
        {
          "x": 3091,
          "y": 4765
        },
        {
          "x": 2937,
          "y": 4765
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-11",
      "name": "West End Residential Court #11",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 4683
      },
      "footprint": [
        {
          "x": 3109,
          "y": 4601
        },
        {
          "x": 3263,
          "y": 4601
        },
        {
          "x": 3263,
          "y": 4765
        },
        {
          "x": 3109,
          "y": 4765
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-12",
      "name": "West End Residential Court #12",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 4683
      },
      "footprint": [
        {
          "x": 3280,
          "y": 4601
        },
        {
          "x": 3434,
          "y": 4601
        },
        {
          "x": 3434,
          "y": 4765
        },
        {
          "x": 3280,
          "y": 4765
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-13",
      "name": "West End Residential Court #13",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 4683
      },
      "footprint": [
        {
          "x": 3452,
          "y": 4601
        },
        {
          "x": 3606,
          "y": 4601
        },
        {
          "x": 3606,
          "y": 4765
        },
        {
          "x": 3452,
          "y": 4765
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-14",
      "name": "West End Residential Court #14",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 4867
      },
      "footprint": [
        {
          "x": 1394,
          "y": 4785
        },
        {
          "x": 1548,
          "y": 4785
        },
        {
          "x": 1548,
          "y": 4949
        },
        {
          "x": 1394,
          "y": 4949
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-15",
      "name": "West End Residential Court #15",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 4867
      },
      "footprint": [
        {
          "x": 1566,
          "y": 4785
        },
        {
          "x": 1720,
          "y": 4785
        },
        {
          "x": 1720,
          "y": 4949
        },
        {
          "x": 1566,
          "y": 4949
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-16",
      "name": "West End Residential Court #16",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 4867
      },
      "footprint": [
        {
          "x": 1737,
          "y": 4785
        },
        {
          "x": 1891,
          "y": 4785
        },
        {
          "x": 1891,
          "y": 4949
        },
        {
          "x": 1737,
          "y": 4949
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-17",
      "name": "West End Residential Court #17",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 4867
      },
      "footprint": [
        {
          "x": 1909,
          "y": 4785
        },
        {
          "x": 2063,
          "y": 4785
        },
        {
          "x": 2063,
          "y": 4949
        },
        {
          "x": 1909,
          "y": 4949
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-18",
      "name": "West End Residential Court #18",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 4867
      },
      "footprint": [
        {
          "x": 2080,
          "y": 4785
        },
        {
          "x": 2234,
          "y": 4785
        },
        {
          "x": 2234,
          "y": 4949
        },
        {
          "x": 2080,
          "y": 4949
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-19",
      "name": "West End Residential Court #19",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 4867
      },
      "footprint": [
        {
          "x": 2252,
          "y": 4785
        },
        {
          "x": 2406,
          "y": 4785
        },
        {
          "x": 2406,
          "y": 4949
        },
        {
          "x": 2252,
          "y": 4949
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-20",
      "name": "West End Residential Court #20",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 4867
      },
      "footprint": [
        {
          "x": 2423,
          "y": 4785
        },
        {
          "x": 2577,
          "y": 4785
        },
        {
          "x": 2577,
          "y": 4949
        },
        {
          "x": 2423,
          "y": 4949
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-21",
      "name": "West End Residential Court #21",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 4867
      },
      "footprint": [
        {
          "x": 2594,
          "y": 4785
        },
        {
          "x": 2748,
          "y": 4785
        },
        {
          "x": 2748,
          "y": 4949
        },
        {
          "x": 2594,
          "y": 4949
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-22",
      "name": "West End Residential Court #22",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 4867
      },
      "footprint": [
        {
          "x": 2766,
          "y": 4785
        },
        {
          "x": 2920,
          "y": 4785
        },
        {
          "x": 2920,
          "y": 4949
        },
        {
          "x": 2766,
          "y": 4949
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-23",
      "name": "West End Residential Court #23",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 4867
      },
      "footprint": [
        {
          "x": 2937,
          "y": 4785
        },
        {
          "x": 3091,
          "y": 4785
        },
        {
          "x": 3091,
          "y": 4949
        },
        {
          "x": 2937,
          "y": 4949
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-24",
      "name": "West End Residential Court #24",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 4867
      },
      "footprint": [
        {
          "x": 3109,
          "y": 4785
        },
        {
          "x": 3263,
          "y": 4785
        },
        {
          "x": 3263,
          "y": 4949
        },
        {
          "x": 3109,
          "y": 4949
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-25",
      "name": "West End Residential Court #25",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 4867
      },
      "footprint": [
        {
          "x": 3280,
          "y": 4785
        },
        {
          "x": 3434,
          "y": 4785
        },
        {
          "x": 3434,
          "y": 4949
        },
        {
          "x": 3280,
          "y": 4949
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-26",
      "name": "West End Residential Court #26",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 4867
      },
      "footprint": [
        {
          "x": 3452,
          "y": 4785
        },
        {
          "x": 3606,
          "y": 4785
        },
        {
          "x": 3606,
          "y": 4949
        },
        {
          "x": 3452,
          "y": 4949
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-27",
      "name": "West End Residential Court #27",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 5050
      },
      "footprint": [
        {
          "x": 1394,
          "y": 4968
        },
        {
          "x": 1548,
          "y": 4968
        },
        {
          "x": 1548,
          "y": 5132
        },
        {
          "x": 1394,
          "y": 5132
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-28",
      "name": "West End Residential Court #28",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 5050
      },
      "footprint": [
        {
          "x": 1566,
          "y": 4968
        },
        {
          "x": 1720,
          "y": 4968
        },
        {
          "x": 1720,
          "y": 5132
        },
        {
          "x": 1566,
          "y": 5132
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-29",
      "name": "West End Residential Court #29",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 5050
      },
      "footprint": [
        {
          "x": 1737,
          "y": 4968
        },
        {
          "x": 1891,
          "y": 4968
        },
        {
          "x": 1891,
          "y": 5132
        },
        {
          "x": 1737,
          "y": 5132
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-30",
      "name": "West End Residential Court #30",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 5050
      },
      "footprint": [
        {
          "x": 1909,
          "y": 4968
        },
        {
          "x": 2063,
          "y": 4968
        },
        {
          "x": 2063,
          "y": 5132
        },
        {
          "x": 1909,
          "y": 5132
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-31",
      "name": "West End Residential Court #31",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 5050
      },
      "footprint": [
        {
          "x": 2080,
          "y": 4968
        },
        {
          "x": 2234,
          "y": 4968
        },
        {
          "x": 2234,
          "y": 5132
        },
        {
          "x": 2080,
          "y": 5132
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-32",
      "name": "West End Residential Court #32",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 5050
      },
      "footprint": [
        {
          "x": 2252,
          "y": 4968
        },
        {
          "x": 2406,
          "y": 4968
        },
        {
          "x": 2406,
          "y": 5132
        },
        {
          "x": 2252,
          "y": 5132
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-33",
      "name": "West End Residential Court #33",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 5050
      },
      "footprint": [
        {
          "x": 2423,
          "y": 4968
        },
        {
          "x": 2577,
          "y": 4968
        },
        {
          "x": 2577,
          "y": 5132
        },
        {
          "x": 2423,
          "y": 5132
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-34",
      "name": "West End Residential Court #34",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 5050
      },
      "footprint": [
        {
          "x": 2594,
          "y": 4968
        },
        {
          "x": 2748,
          "y": 4968
        },
        {
          "x": 2748,
          "y": 5132
        },
        {
          "x": 2594,
          "y": 5132
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-35",
      "name": "West End Residential Court #35",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 5050
      },
      "footprint": [
        {
          "x": 2766,
          "y": 4968
        },
        {
          "x": 2920,
          "y": 4968
        },
        {
          "x": 2920,
          "y": 5132
        },
        {
          "x": 2766,
          "y": 5132
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-36",
      "name": "West End Residential Court #36",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 5050
      },
      "footprint": [
        {
          "x": 2937,
          "y": 4968
        },
        {
          "x": 3091,
          "y": 4968
        },
        {
          "x": 3091,
          "y": 5132
        },
        {
          "x": 2937,
          "y": 5132
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-37",
      "name": "West End Residential Court #37",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 5050
      },
      "footprint": [
        {
          "x": 3109,
          "y": 4968
        },
        {
          "x": 3263,
          "y": 4968
        },
        {
          "x": 3263,
          "y": 5132
        },
        {
          "x": 3109,
          "y": 5132
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-38",
      "name": "West End Residential Court #38",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 5050
      },
      "footprint": [
        {
          "x": 3280,
          "y": 4968
        },
        {
          "x": 3434,
          "y": 4968
        },
        {
          "x": 3434,
          "y": 5132
        },
        {
          "x": 3280,
          "y": 5132
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-39",
      "name": "West End Residential Court #39",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 5050
      },
      "footprint": [
        {
          "x": 3452,
          "y": 4968
        },
        {
          "x": 3606,
          "y": 4968
        },
        {
          "x": 3606,
          "y": 5132
        },
        {
          "x": 3452,
          "y": 5132
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-40",
      "name": "West End Residential Court #40",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 5233
      },
      "footprint": [
        {
          "x": 1394,
          "y": 5151
        },
        {
          "x": 1548,
          "y": 5151
        },
        {
          "x": 1548,
          "y": 5315
        },
        {
          "x": 1394,
          "y": 5315
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-41",
      "name": "West End Residential Court #41",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 5233
      },
      "footprint": [
        {
          "x": 1566,
          "y": 5151
        },
        {
          "x": 1720,
          "y": 5151
        },
        {
          "x": 1720,
          "y": 5315
        },
        {
          "x": 1566,
          "y": 5315
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-42",
      "name": "West End Residential Court #42",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 5233
      },
      "footprint": [
        {
          "x": 1737,
          "y": 5151
        },
        {
          "x": 1891,
          "y": 5151
        },
        {
          "x": 1891,
          "y": 5315
        },
        {
          "x": 1737,
          "y": 5315
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-43",
      "name": "West End Residential Court #43",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 5233
      },
      "footprint": [
        {
          "x": 1909,
          "y": 5151
        },
        {
          "x": 2063,
          "y": 5151
        },
        {
          "x": 2063,
          "y": 5315
        },
        {
          "x": 1909,
          "y": 5315
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-44",
      "name": "West End Residential Court #44",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 5233
      },
      "footprint": [
        {
          "x": 2080,
          "y": 5151
        },
        {
          "x": 2234,
          "y": 5151
        },
        {
          "x": 2234,
          "y": 5315
        },
        {
          "x": 2080,
          "y": 5315
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-45",
      "name": "West End Residential Court #45",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 5233
      },
      "footprint": [
        {
          "x": 2252,
          "y": 5151
        },
        {
          "x": 2406,
          "y": 5151
        },
        {
          "x": 2406,
          "y": 5315
        },
        {
          "x": 2252,
          "y": 5315
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-46",
      "name": "West End Residential Court #46",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 5233
      },
      "footprint": [
        {
          "x": 2423,
          "y": 5151
        },
        {
          "x": 2577,
          "y": 5151
        },
        {
          "x": 2577,
          "y": 5315
        },
        {
          "x": 2423,
          "y": 5315
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-47",
      "name": "West End Residential Court #47",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 5233
      },
      "footprint": [
        {
          "x": 2594,
          "y": 5151
        },
        {
          "x": 2748,
          "y": 5151
        },
        {
          "x": 2748,
          "y": 5315
        },
        {
          "x": 2594,
          "y": 5315
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-48",
      "name": "West End Residential Court #48",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 5233
      },
      "footprint": [
        {
          "x": 2766,
          "y": 5151
        },
        {
          "x": 2920,
          "y": 5151
        },
        {
          "x": 2920,
          "y": 5315
        },
        {
          "x": 2766,
          "y": 5315
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-49",
      "name": "West End Residential Court #49",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 5233
      },
      "footprint": [
        {
          "x": 2937,
          "y": 5151
        },
        {
          "x": 3091,
          "y": 5151
        },
        {
          "x": 3091,
          "y": 5315
        },
        {
          "x": 2937,
          "y": 5315
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-50",
      "name": "West End Residential Court #50",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 5233
      },
      "footprint": [
        {
          "x": 3109,
          "y": 5151
        },
        {
          "x": 3263,
          "y": 5151
        },
        {
          "x": 3263,
          "y": 5315
        },
        {
          "x": 3109,
          "y": 5315
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-51",
      "name": "West End Residential Court #51",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 5233
      },
      "footprint": [
        {
          "x": 3280,
          "y": 5151
        },
        {
          "x": 3434,
          "y": 5151
        },
        {
          "x": 3434,
          "y": 5315
        },
        {
          "x": 3280,
          "y": 5315
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-52",
      "name": "West End Residential Court #52",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 5233
      },
      "footprint": [
        {
          "x": 3452,
          "y": 5151
        },
        {
          "x": 3606,
          "y": 5151
        },
        {
          "x": 3606,
          "y": 5315
        },
        {
          "x": 3452,
          "y": 5315
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-53",
      "name": "West End Residential Court #53",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 5417
      },
      "footprint": [
        {
          "x": 1394,
          "y": 5335
        },
        {
          "x": 1548,
          "y": 5335
        },
        {
          "x": 1548,
          "y": 5499
        },
        {
          "x": 1394,
          "y": 5499
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-54",
      "name": "West End Residential Court #54",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 5417
      },
      "footprint": [
        {
          "x": 1566,
          "y": 5335
        },
        {
          "x": 1720,
          "y": 5335
        },
        {
          "x": 1720,
          "y": 5499
        },
        {
          "x": 1566,
          "y": 5499
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-55",
      "name": "West End Residential Court #55",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 5417
      },
      "footprint": [
        {
          "x": 1737,
          "y": 5335
        },
        {
          "x": 1891,
          "y": 5335
        },
        {
          "x": 1891,
          "y": 5499
        },
        {
          "x": 1737,
          "y": 5499
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-56",
      "name": "West End Residential Court #56",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 5417
      },
      "footprint": [
        {
          "x": 1909,
          "y": 5335
        },
        {
          "x": 2063,
          "y": 5335
        },
        {
          "x": 2063,
          "y": 5499
        },
        {
          "x": 1909,
          "y": 5499
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-57",
      "name": "West End Residential Court #57",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 5417
      },
      "footprint": [
        {
          "x": 2080,
          "y": 5335
        },
        {
          "x": 2234,
          "y": 5335
        },
        {
          "x": 2234,
          "y": 5499
        },
        {
          "x": 2080,
          "y": 5499
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-58",
      "name": "West End Residential Court #58",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 5417
      },
      "footprint": [
        {
          "x": 2252,
          "y": 5335
        },
        {
          "x": 2406,
          "y": 5335
        },
        {
          "x": 2406,
          "y": 5499
        },
        {
          "x": 2252,
          "y": 5499
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-59",
      "name": "West End Residential Court #59",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 5417
      },
      "footprint": [
        {
          "x": 2423,
          "y": 5335
        },
        {
          "x": 2577,
          "y": 5335
        },
        {
          "x": 2577,
          "y": 5499
        },
        {
          "x": 2423,
          "y": 5499
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-60",
      "name": "West End Residential Court #60",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 5417
      },
      "footprint": [
        {
          "x": 2594,
          "y": 5335
        },
        {
          "x": 2748,
          "y": 5335
        },
        {
          "x": 2748,
          "y": 5499
        },
        {
          "x": 2594,
          "y": 5499
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-61",
      "name": "West End Residential Court #61",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 5417
      },
      "footprint": [
        {
          "x": 2766,
          "y": 5335
        },
        {
          "x": 2920,
          "y": 5335
        },
        {
          "x": 2920,
          "y": 5499
        },
        {
          "x": 2766,
          "y": 5499
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-62",
      "name": "West End Residential Court #62",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 5417
      },
      "footprint": [
        {
          "x": 2937,
          "y": 5335
        },
        {
          "x": 3091,
          "y": 5335
        },
        {
          "x": 3091,
          "y": 5499
        },
        {
          "x": 2937,
          "y": 5499
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-63",
      "name": "West End Residential Court #63",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 5417
      },
      "footprint": [
        {
          "x": 3109,
          "y": 5335
        },
        {
          "x": 3263,
          "y": 5335
        },
        {
          "x": 3263,
          "y": 5499
        },
        {
          "x": 3109,
          "y": 5499
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-64",
      "name": "West End Residential Court #64",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 5417
      },
      "footprint": [
        {
          "x": 3280,
          "y": 5335
        },
        {
          "x": 3434,
          "y": 5335
        },
        {
          "x": 3434,
          "y": 5499
        },
        {
          "x": 3280,
          "y": 5499
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-65",
      "name": "West End Residential Court #65",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 5417
      },
      "footprint": [
        {
          "x": 3452,
          "y": 5335
        },
        {
          "x": 3606,
          "y": 5335
        },
        {
          "x": 3606,
          "y": 5499
        },
        {
          "x": 3452,
          "y": 5499
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-66",
      "name": "West End Residential Court #66",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 5600
      },
      "footprint": [
        {
          "x": 1394,
          "y": 5518
        },
        {
          "x": 1548,
          "y": 5518
        },
        {
          "x": 1548,
          "y": 5682
        },
        {
          "x": 1394,
          "y": 5682
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-67",
      "name": "West End Residential Court #67",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 5600
      },
      "footprint": [
        {
          "x": 1566,
          "y": 5518
        },
        {
          "x": 1720,
          "y": 5518
        },
        {
          "x": 1720,
          "y": 5682
        },
        {
          "x": 1566,
          "y": 5682
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-68",
      "name": "West End Residential Court #68",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 5600
      },
      "footprint": [
        {
          "x": 1737,
          "y": 5518
        },
        {
          "x": 1891,
          "y": 5518
        },
        {
          "x": 1891,
          "y": 5682
        },
        {
          "x": 1737,
          "y": 5682
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-69",
      "name": "West End Residential Court #69",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 5600
      },
      "footprint": [
        {
          "x": 1909,
          "y": 5518
        },
        {
          "x": 2063,
          "y": 5518
        },
        {
          "x": 2063,
          "y": 5682
        },
        {
          "x": 1909,
          "y": 5682
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-70",
      "name": "West End Residential Court #70",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 5600
      },
      "footprint": [
        {
          "x": 2080,
          "y": 5518
        },
        {
          "x": 2234,
          "y": 5518
        },
        {
          "x": 2234,
          "y": 5682
        },
        {
          "x": 2080,
          "y": 5682
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-71",
      "name": "West End Residential Court #71",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 5600
      },
      "footprint": [
        {
          "x": 2252,
          "y": 5518
        },
        {
          "x": 2406,
          "y": 5518
        },
        {
          "x": 2406,
          "y": 5682
        },
        {
          "x": 2252,
          "y": 5682
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-72",
      "name": "West End Residential Court #72",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 5600
      },
      "footprint": [
        {
          "x": 2423,
          "y": 5518
        },
        {
          "x": 2577,
          "y": 5518
        },
        {
          "x": 2577,
          "y": 5682
        },
        {
          "x": 2423,
          "y": 5682
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-73",
      "name": "West End Residential Court #73",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 5600
      },
      "footprint": [
        {
          "x": 2594,
          "y": 5518
        },
        {
          "x": 2748,
          "y": 5518
        },
        {
          "x": 2748,
          "y": 5682
        },
        {
          "x": 2594,
          "y": 5682
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-74",
      "name": "West End Residential Court #74",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 5600
      },
      "footprint": [
        {
          "x": 2766,
          "y": 5518
        },
        {
          "x": 2920,
          "y": 5518
        },
        {
          "x": 2920,
          "y": 5682
        },
        {
          "x": 2766,
          "y": 5682
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-75",
      "name": "West End Residential Court #75",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 5600
      },
      "footprint": [
        {
          "x": 2937,
          "y": 5518
        },
        {
          "x": 3091,
          "y": 5518
        },
        {
          "x": 3091,
          "y": 5682
        },
        {
          "x": 2937,
          "y": 5682
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-76",
      "name": "West End Residential Court #76",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 5600
      },
      "footprint": [
        {
          "x": 3109,
          "y": 5518
        },
        {
          "x": 3263,
          "y": 5518
        },
        {
          "x": 3263,
          "y": 5682
        },
        {
          "x": 3109,
          "y": 5682
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-77",
      "name": "West End Residential Court #77",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 5600
      },
      "footprint": [
        {
          "x": 3280,
          "y": 5518
        },
        {
          "x": 3434,
          "y": 5518
        },
        {
          "x": 3434,
          "y": 5682
        },
        {
          "x": 3280,
          "y": 5682
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-78",
      "name": "West End Residential Court #78",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 5600
      },
      "footprint": [
        {
          "x": 3452,
          "y": 5518
        },
        {
          "x": 3606,
          "y": 5518
        },
        {
          "x": 3606,
          "y": 5682
        },
        {
          "x": 3452,
          "y": 5682
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-79",
      "name": "West End Residential Court #79",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 5783
      },
      "footprint": [
        {
          "x": 1394,
          "y": 5701
        },
        {
          "x": 1548,
          "y": 5701
        },
        {
          "x": 1548,
          "y": 5865
        },
        {
          "x": 1394,
          "y": 5865
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-80",
      "name": "West End Residential Court #80",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 5783
      },
      "footprint": [
        {
          "x": 1566,
          "y": 5701
        },
        {
          "x": 1720,
          "y": 5701
        },
        {
          "x": 1720,
          "y": 5865
        },
        {
          "x": 1566,
          "y": 5865
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-81",
      "name": "West End Residential Court #81",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 5783
      },
      "footprint": [
        {
          "x": 1737,
          "y": 5701
        },
        {
          "x": 1891,
          "y": 5701
        },
        {
          "x": 1891,
          "y": 5865
        },
        {
          "x": 1737,
          "y": 5865
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-82",
      "name": "West End Residential Court #82",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 5783
      },
      "footprint": [
        {
          "x": 1909,
          "y": 5701
        },
        {
          "x": 2063,
          "y": 5701
        },
        {
          "x": 2063,
          "y": 5865
        },
        {
          "x": 1909,
          "y": 5865
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-83",
      "name": "West End Residential Court #83",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 5783
      },
      "footprint": [
        {
          "x": 2080,
          "y": 5701
        },
        {
          "x": 2234,
          "y": 5701
        },
        {
          "x": 2234,
          "y": 5865
        },
        {
          "x": 2080,
          "y": 5865
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-84",
      "name": "West End Residential Court #84",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 5783
      },
      "footprint": [
        {
          "x": 2252,
          "y": 5701
        },
        {
          "x": 2406,
          "y": 5701
        },
        {
          "x": 2406,
          "y": 5865
        },
        {
          "x": 2252,
          "y": 5865
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-85",
      "name": "West End Residential Court #85",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 5783
      },
      "footprint": [
        {
          "x": 2423,
          "y": 5701
        },
        {
          "x": 2577,
          "y": 5701
        },
        {
          "x": 2577,
          "y": 5865
        },
        {
          "x": 2423,
          "y": 5865
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-86",
      "name": "West End Residential Court #86",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 5783
      },
      "footprint": [
        {
          "x": 2594,
          "y": 5701
        },
        {
          "x": 2748,
          "y": 5701
        },
        {
          "x": 2748,
          "y": 5865
        },
        {
          "x": 2594,
          "y": 5865
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-87",
      "name": "West End Residential Court #87",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 5783
      },
      "footprint": [
        {
          "x": 2766,
          "y": 5701
        },
        {
          "x": 2920,
          "y": 5701
        },
        {
          "x": 2920,
          "y": 5865
        },
        {
          "x": 2766,
          "y": 5865
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-88",
      "name": "West End Residential Court #88",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 5783
      },
      "footprint": [
        {
          "x": 2937,
          "y": 5701
        },
        {
          "x": 3091,
          "y": 5701
        },
        {
          "x": 3091,
          "y": 5865
        },
        {
          "x": 2937,
          "y": 5865
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-89",
      "name": "West End Residential Court #89",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 5783
      },
      "footprint": [
        {
          "x": 3109,
          "y": 5701
        },
        {
          "x": 3263,
          "y": 5701
        },
        {
          "x": 3263,
          "y": 5865
        },
        {
          "x": 3109,
          "y": 5865
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-90",
      "name": "West End Residential Court #90",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 5783
      },
      "footprint": [
        {
          "x": 3280,
          "y": 5701
        },
        {
          "x": 3434,
          "y": 5701
        },
        {
          "x": 3434,
          "y": 5865
        },
        {
          "x": 3280,
          "y": 5865
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-91",
      "name": "West End Residential Court #91",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 5783
      },
      "footprint": [
        {
          "x": 3452,
          "y": 5701
        },
        {
          "x": 3606,
          "y": 5701
        },
        {
          "x": 3606,
          "y": 5865
        },
        {
          "x": 3452,
          "y": 5865
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-92",
      "name": "West End Residential Court #92",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 5967
      },
      "footprint": [
        {
          "x": 1394,
          "y": 5885
        },
        {
          "x": 1548,
          "y": 5885
        },
        {
          "x": 1548,
          "y": 6049
        },
        {
          "x": 1394,
          "y": 6049
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-93",
      "name": "West End Residential Court #93",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 5967
      },
      "footprint": [
        {
          "x": 1566,
          "y": 5885
        },
        {
          "x": 1720,
          "y": 5885
        },
        {
          "x": 1720,
          "y": 6049
        },
        {
          "x": 1566,
          "y": 6049
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-94",
      "name": "West End Residential Court #94",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 5967
      },
      "footprint": [
        {
          "x": 1737,
          "y": 5885
        },
        {
          "x": 1891,
          "y": 5885
        },
        {
          "x": 1891,
          "y": 6049
        },
        {
          "x": 1737,
          "y": 6049
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-95",
      "name": "West End Residential Court #95",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 5967
      },
      "footprint": [
        {
          "x": 1909,
          "y": 5885
        },
        {
          "x": 2063,
          "y": 5885
        },
        {
          "x": 2063,
          "y": 6049
        },
        {
          "x": 1909,
          "y": 6049
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-96",
      "name": "West End Residential Court #96",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 5967
      },
      "footprint": [
        {
          "x": 2080,
          "y": 5885
        },
        {
          "x": 2234,
          "y": 5885
        },
        {
          "x": 2234,
          "y": 6049
        },
        {
          "x": 2080,
          "y": 6049
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-97",
      "name": "West End Residential Court #97",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 5967
      },
      "footprint": [
        {
          "x": 2252,
          "y": 5885
        },
        {
          "x": 2406,
          "y": 5885
        },
        {
          "x": 2406,
          "y": 6049
        },
        {
          "x": 2252,
          "y": 6049
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-98",
      "name": "West End Residential Court #98",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 5967
      },
      "footprint": [
        {
          "x": 2423,
          "y": 5885
        },
        {
          "x": 2577,
          "y": 5885
        },
        {
          "x": 2577,
          "y": 6049
        },
        {
          "x": 2423,
          "y": 6049
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-99",
      "name": "West End Residential Court #99",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 5967
      },
      "footprint": [
        {
          "x": 2594,
          "y": 5885
        },
        {
          "x": 2748,
          "y": 5885
        },
        {
          "x": 2748,
          "y": 6049
        },
        {
          "x": 2594,
          "y": 6049
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-100",
      "name": "West End Residential Court #100",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 5967
      },
      "footprint": [
        {
          "x": 2766,
          "y": 5885
        },
        {
          "x": 2920,
          "y": 5885
        },
        {
          "x": 2920,
          "y": 6049
        },
        {
          "x": 2766,
          "y": 6049
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-101",
      "name": "West End Residential Court #101",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 5967
      },
      "footprint": [
        {
          "x": 2937,
          "y": 5885
        },
        {
          "x": 3091,
          "y": 5885
        },
        {
          "x": 3091,
          "y": 6049
        },
        {
          "x": 2937,
          "y": 6049
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-102",
      "name": "West End Residential Court #102",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 5967
      },
      "footprint": [
        {
          "x": 3109,
          "y": 5885
        },
        {
          "x": 3263,
          "y": 5885
        },
        {
          "x": 3263,
          "y": 6049
        },
        {
          "x": 3109,
          "y": 6049
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-103",
      "name": "West End Residential Court #103",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 5967
      },
      "footprint": [
        {
          "x": 3280,
          "y": 5885
        },
        {
          "x": 3434,
          "y": 5885
        },
        {
          "x": 3434,
          "y": 6049
        },
        {
          "x": 3280,
          "y": 6049
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-104",
      "name": "West End Residential Court #104",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 5967
      },
      "footprint": [
        {
          "x": 3452,
          "y": 5885
        },
        {
          "x": 3606,
          "y": 5885
        },
        {
          "x": 3606,
          "y": 6049
        },
        {
          "x": 3452,
          "y": 6049
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-105",
      "name": "West End Residential Court #105",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 6150
      },
      "footprint": [
        {
          "x": 1394,
          "y": 6068
        },
        {
          "x": 1548,
          "y": 6068
        },
        {
          "x": 1548,
          "y": 6232
        },
        {
          "x": 1394,
          "y": 6232
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-106",
      "name": "West End Residential Court #106",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 6150
      },
      "footprint": [
        {
          "x": 1566,
          "y": 6068
        },
        {
          "x": 1720,
          "y": 6068
        },
        {
          "x": 1720,
          "y": 6232
        },
        {
          "x": 1566,
          "y": 6232
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-107",
      "name": "West End Residential Court #107",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 6150
      },
      "footprint": [
        {
          "x": 1737,
          "y": 6068
        },
        {
          "x": 1891,
          "y": 6068
        },
        {
          "x": 1891,
          "y": 6232
        },
        {
          "x": 1737,
          "y": 6232
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-108",
      "name": "West End Residential Court #108",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 6150
      },
      "footprint": [
        {
          "x": 1909,
          "y": 6068
        },
        {
          "x": 2063,
          "y": 6068
        },
        {
          "x": 2063,
          "y": 6232
        },
        {
          "x": 1909,
          "y": 6232
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-109",
      "name": "West End Residential Court #109",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 6150
      },
      "footprint": [
        {
          "x": 2080,
          "y": 6068
        },
        {
          "x": 2234,
          "y": 6068
        },
        {
          "x": 2234,
          "y": 6232
        },
        {
          "x": 2080,
          "y": 6232
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-110",
      "name": "West End Residential Court #110",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 6150
      },
      "footprint": [
        {
          "x": 2252,
          "y": 6068
        },
        {
          "x": 2406,
          "y": 6068
        },
        {
          "x": 2406,
          "y": 6232
        },
        {
          "x": 2252,
          "y": 6232
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-111",
      "name": "West End Residential Court #111",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 6150
      },
      "footprint": [
        {
          "x": 2423,
          "y": 6068
        },
        {
          "x": 2577,
          "y": 6068
        },
        {
          "x": 2577,
          "y": 6232
        },
        {
          "x": 2423,
          "y": 6232
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-112",
      "name": "West End Residential Court #112",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 6150
      },
      "footprint": [
        {
          "x": 2594,
          "y": 6068
        },
        {
          "x": 2748,
          "y": 6068
        },
        {
          "x": 2748,
          "y": 6232
        },
        {
          "x": 2594,
          "y": 6232
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-113",
      "name": "West End Residential Court #113",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 6150
      },
      "footprint": [
        {
          "x": 2766,
          "y": 6068
        },
        {
          "x": 2920,
          "y": 6068
        },
        {
          "x": 2920,
          "y": 6232
        },
        {
          "x": 2766,
          "y": 6232
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-114",
      "name": "West End Residential Court #114",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 6150
      },
      "footprint": [
        {
          "x": 2937,
          "y": 6068
        },
        {
          "x": 3091,
          "y": 6068
        },
        {
          "x": 3091,
          "y": 6232
        },
        {
          "x": 2937,
          "y": 6232
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-115",
      "name": "West End Residential Court #115",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 6150
      },
      "footprint": [
        {
          "x": 3109,
          "y": 6068
        },
        {
          "x": 3263,
          "y": 6068
        },
        {
          "x": 3263,
          "y": 6232
        },
        {
          "x": 3109,
          "y": 6232
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-116",
      "name": "West End Residential Court #116",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 6150
      },
      "footprint": [
        {
          "x": 3280,
          "y": 6068
        },
        {
          "x": 3434,
          "y": 6068
        },
        {
          "x": 3434,
          "y": 6232
        },
        {
          "x": 3280,
          "y": 6232
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-117",
      "name": "West End Residential Court #117",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 6150
      },
      "footprint": [
        {
          "x": 3452,
          "y": 6068
        },
        {
          "x": 3606,
          "y": 6068
        },
        {
          "x": 3606,
          "y": 6232
        },
        {
          "x": 3452,
          "y": 6232
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-118",
      "name": "West End Residential Court #118",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 6333
      },
      "footprint": [
        {
          "x": 1394,
          "y": 6251
        },
        {
          "x": 1548,
          "y": 6251
        },
        {
          "x": 1548,
          "y": 6415
        },
        {
          "x": 1394,
          "y": 6415
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-119",
      "name": "West End Residential Court #119",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 6333
      },
      "footprint": [
        {
          "x": 1566,
          "y": 6251
        },
        {
          "x": 1720,
          "y": 6251
        },
        {
          "x": 1720,
          "y": 6415
        },
        {
          "x": 1566,
          "y": 6415
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-120",
      "name": "West End Residential Court #120",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 6333
      },
      "footprint": [
        {
          "x": 1737,
          "y": 6251
        },
        {
          "x": 1891,
          "y": 6251
        },
        {
          "x": 1891,
          "y": 6415
        },
        {
          "x": 1737,
          "y": 6415
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-121",
      "name": "West End Residential Court #121",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 6333
      },
      "footprint": [
        {
          "x": 1909,
          "y": 6251
        },
        {
          "x": 2063,
          "y": 6251
        },
        {
          "x": 2063,
          "y": 6415
        },
        {
          "x": 1909,
          "y": 6415
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-122",
      "name": "West End Residential Court #122",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 6333
      },
      "footprint": [
        {
          "x": 2080,
          "y": 6251
        },
        {
          "x": 2234,
          "y": 6251
        },
        {
          "x": 2234,
          "y": 6415
        },
        {
          "x": 2080,
          "y": 6415
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-123",
      "name": "West End Residential Court #123",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 6333
      },
      "footprint": [
        {
          "x": 2252,
          "y": 6251
        },
        {
          "x": 2406,
          "y": 6251
        },
        {
          "x": 2406,
          "y": 6415
        },
        {
          "x": 2252,
          "y": 6415
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-124",
      "name": "West End Residential Court #124",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 6333
      },
      "footprint": [
        {
          "x": 2423,
          "y": 6251
        },
        {
          "x": 2577,
          "y": 6251
        },
        {
          "x": 2577,
          "y": 6415
        },
        {
          "x": 2423,
          "y": 6415
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-125",
      "name": "West End Residential Court #125",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 6333
      },
      "footprint": [
        {
          "x": 2594,
          "y": 6251
        },
        {
          "x": 2748,
          "y": 6251
        },
        {
          "x": 2748,
          "y": 6415
        },
        {
          "x": 2594,
          "y": 6415
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-126",
      "name": "West End Residential Court #126",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 6333
      },
      "footprint": [
        {
          "x": 2766,
          "y": 6251
        },
        {
          "x": 2920,
          "y": 6251
        },
        {
          "x": 2920,
          "y": 6415
        },
        {
          "x": 2766,
          "y": 6415
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-127",
      "name": "West End Residential Court #127",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 6333
      },
      "footprint": [
        {
          "x": 2937,
          "y": 6251
        },
        {
          "x": 3091,
          "y": 6251
        },
        {
          "x": 3091,
          "y": 6415
        },
        {
          "x": 2937,
          "y": 6415
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-128",
      "name": "West End Residential Court #128",
      "type": "residential_apartment",
      "center": {
        "x": 3186,
        "y": 6333
      },
      "footprint": [
        {
          "x": 3109,
          "y": 6251
        },
        {
          "x": 3263,
          "y": 6251
        },
        {
          "x": 3263,
          "y": 6415
        },
        {
          "x": 3109,
          "y": 6415
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-129",
      "name": "West End Residential Court #129",
      "type": "residential_apartment",
      "center": {
        "x": 3357,
        "y": 6333
      },
      "footprint": [
        {
          "x": 3280,
          "y": 6251
        },
        {
          "x": 3434,
          "y": 6251
        },
        {
          "x": 3434,
          "y": 6415
        },
        {
          "x": 3280,
          "y": 6415
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-130",
      "name": "West End Residential Court #130",
      "type": "residential_apartment",
      "center": {
        "x": 3529,
        "y": 6333
      },
      "footprint": [
        {
          "x": 3452,
          "y": 6251
        },
        {
          "x": 3606,
          "y": 6251
        },
        {
          "x": 3606,
          "y": 6415
        },
        {
          "x": 3452,
          "y": 6415
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-131",
      "name": "West End Residential Court #131",
      "type": "residential_apartment",
      "center": {
        "x": 1471,
        "y": 6517
      },
      "footprint": [
        {
          "x": 1394,
          "y": 6435
        },
        {
          "x": 1548,
          "y": 6435
        },
        {
          "x": 1548,
          "y": 6599
        },
        {
          "x": 1394,
          "y": 6599
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-132",
      "name": "West End Residential Court #132",
      "type": "residential_apartment",
      "center": {
        "x": 1643,
        "y": 6517
      },
      "footprint": [
        {
          "x": 1566,
          "y": 6435
        },
        {
          "x": 1720,
          "y": 6435
        },
        {
          "x": 1720,
          "y": 6599
        },
        {
          "x": 1566,
          "y": 6599
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-133",
      "name": "West End Residential Court #133",
      "type": "residential_apartment",
      "center": {
        "x": 1814,
        "y": 6517
      },
      "footprint": [
        {
          "x": 1737,
          "y": 6435
        },
        {
          "x": 1891,
          "y": 6435
        },
        {
          "x": 1891,
          "y": 6599
        },
        {
          "x": 1737,
          "y": 6599
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-134",
      "name": "West End Residential Court #134",
      "type": "residential_apartment",
      "center": {
        "x": 1986,
        "y": 6517
      },
      "footprint": [
        {
          "x": 1909,
          "y": 6435
        },
        {
          "x": 2063,
          "y": 6435
        },
        {
          "x": 2063,
          "y": 6599
        },
        {
          "x": 1909,
          "y": 6599
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-135",
      "name": "West End Residential Court #135",
      "type": "residential_apartment",
      "center": {
        "x": 2157,
        "y": 6517
      },
      "footprint": [
        {
          "x": 2080,
          "y": 6435
        },
        {
          "x": 2234,
          "y": 6435
        },
        {
          "x": 2234,
          "y": 6599
        },
        {
          "x": 2080,
          "y": 6599
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-136",
      "name": "West End Residential Court #136",
      "type": "residential_apartment",
      "center": {
        "x": 2329,
        "y": 6517
      },
      "footprint": [
        {
          "x": 2252,
          "y": 6435
        },
        {
          "x": 2406,
          "y": 6435
        },
        {
          "x": 2406,
          "y": 6599
        },
        {
          "x": 2252,
          "y": 6599
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-we-137",
      "name": "West End Residential Court #137",
      "type": "residential_apartment",
      "center": {
        "x": 2500,
        "y": 6517
      },
      "footprint": [
        {
          "x": 2423,
          "y": 6435
        },
        {
          "x": 2577,
          "y": 6435
        },
        {
          "x": 2577,
          "y": 6599
        },
        {
          "x": 2423,
          "y": 6599
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-we-138",
      "name": "West End Residential Court #138",
      "type": "residential_apartment",
      "center": {
        "x": 2671,
        "y": 6517
      },
      "footprint": [
        {
          "x": 2594,
          "y": 6435
        },
        {
          "x": 2748,
          "y": 6435
        },
        {
          "x": 2748,
          "y": 6599
        },
        {
          "x": 2594,
          "y": 6599
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-we-139",
      "name": "West End Residential Court #139",
      "type": "residential_apartment",
      "center": {
        "x": 2843,
        "y": 6517
      },
      "footprint": [
        {
          "x": 2766,
          "y": 6435
        },
        {
          "x": 2920,
          "y": 6435
        },
        {
          "x": 2920,
          "y": 6599
        },
        {
          "x": 2766,
          "y": 6599
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-we-140",
      "name": "West End Residential Court #140",
      "type": "residential_apartment",
      "center": {
        "x": 3014,
        "y": 6517
      },
      "footprint": [
        {
          "x": 2937,
          "y": 6435
        },
        {
          "x": 3091,
          "y": 6435
        },
        {
          "x": 3091,
          "y": 6599
        },
        {
          "x": 2937,
          "y": 6599
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-1",
      "name": "St. Jude Wharf Warehouse #1",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 3040
      },
      "footprint": [
        {
          "x": 6166,
          "y": 2977
        },
        {
          "x": 6274,
          "y": 2977
        },
        {
          "x": 6274,
          "y": 3103
        },
        {
          "x": 6166,
          "y": 3103
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-2",
      "name": "St. Jude Wharf Warehouse #2",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 3040
      },
      "footprint": [
        {
          "x": 6286,
          "y": 2977
        },
        {
          "x": 6394,
          "y": 2977
        },
        {
          "x": 6394,
          "y": 3103
        },
        {
          "x": 6286,
          "y": 3103
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-3",
      "name": "St. Jude Wharf Warehouse #3",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 3040
      },
      "footprint": [
        {
          "x": 6406,
          "y": 2977
        },
        {
          "x": 6514,
          "y": 2977
        },
        {
          "x": 6514,
          "y": 3103
        },
        {
          "x": 6406,
          "y": 3103
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-4",
      "name": "St. Jude Wharf Warehouse #4",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 3040
      },
      "footprint": [
        {
          "x": 6526,
          "y": 2977
        },
        {
          "x": 6634,
          "y": 2977
        },
        {
          "x": 6634,
          "y": 3103
        },
        {
          "x": 6526,
          "y": 3103
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-5",
      "name": "St. Jude Wharf Warehouse #5",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 3040
      },
      "footprint": [
        {
          "x": 6646,
          "y": 2977
        },
        {
          "x": 6754,
          "y": 2977
        },
        {
          "x": 6754,
          "y": 3103
        },
        {
          "x": 6646,
          "y": 3103
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-6",
      "name": "St. Jude Wharf Warehouse #6",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 3040
      },
      "footprint": [
        {
          "x": 6766,
          "y": 2977
        },
        {
          "x": 6874,
          "y": 2977
        },
        {
          "x": 6874,
          "y": 3103
        },
        {
          "x": 6766,
          "y": 3103
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-7",
      "name": "St. Jude Wharf Warehouse #7",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 3040
      },
      "footprint": [
        {
          "x": 6886,
          "y": 2977
        },
        {
          "x": 6994,
          "y": 2977
        },
        {
          "x": 6994,
          "y": 3103
        },
        {
          "x": 6886,
          "y": 3103
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-8",
      "name": "St. Jude Wharf Warehouse #8",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 3040
      },
      "footprint": [
        {
          "x": 7006,
          "y": 2977
        },
        {
          "x": 7114,
          "y": 2977
        },
        {
          "x": 7114,
          "y": 3103
        },
        {
          "x": 7006,
          "y": 3103
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-9",
      "name": "St. Jude Wharf Warehouse #9",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 3040
      },
      "footprint": [
        {
          "x": 7126,
          "y": 2977
        },
        {
          "x": 7234,
          "y": 2977
        },
        {
          "x": 7234,
          "y": 3103
        },
        {
          "x": 7126,
          "y": 3103
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-10",
      "name": "St. Jude Wharf Warehouse #10",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 3180
      },
      "footprint": [
        {
          "x": 6166,
          "y": 3117
        },
        {
          "x": 6274,
          "y": 3117
        },
        {
          "x": 6274,
          "y": 3243
        },
        {
          "x": 6166,
          "y": 3243
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-11",
      "name": "St. Jude Wharf Warehouse #11",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 3180
      },
      "footprint": [
        {
          "x": 6286,
          "y": 3117
        },
        {
          "x": 6394,
          "y": 3117
        },
        {
          "x": 6394,
          "y": 3243
        },
        {
          "x": 6286,
          "y": 3243
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-12",
      "name": "St. Jude Wharf Warehouse #12",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 3180
      },
      "footprint": [
        {
          "x": 6406,
          "y": 3117
        },
        {
          "x": 6514,
          "y": 3117
        },
        {
          "x": 6514,
          "y": 3243
        },
        {
          "x": 6406,
          "y": 3243
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-13",
      "name": "St. Jude Wharf Warehouse #13",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 3180
      },
      "footprint": [
        {
          "x": 6526,
          "y": 3117
        },
        {
          "x": 6634,
          "y": 3117
        },
        {
          "x": 6634,
          "y": 3243
        },
        {
          "x": 6526,
          "y": 3243
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-14",
      "name": "St. Jude Wharf Warehouse #14",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 3180
      },
      "footprint": [
        {
          "x": 6646,
          "y": 3117
        },
        {
          "x": 6754,
          "y": 3117
        },
        {
          "x": 6754,
          "y": 3243
        },
        {
          "x": 6646,
          "y": 3243
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-15",
      "name": "St. Jude Wharf Warehouse #15",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 3180
      },
      "footprint": [
        {
          "x": 6766,
          "y": 3117
        },
        {
          "x": 6874,
          "y": 3117
        },
        {
          "x": 6874,
          "y": 3243
        },
        {
          "x": 6766,
          "y": 3243
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-16",
      "name": "St. Jude Wharf Warehouse #16",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 3180
      },
      "footprint": [
        {
          "x": 6886,
          "y": 3117
        },
        {
          "x": 6994,
          "y": 3117
        },
        {
          "x": 6994,
          "y": 3243
        },
        {
          "x": 6886,
          "y": 3243
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-17",
      "name": "St. Jude Wharf Warehouse #17",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 3180
      },
      "footprint": [
        {
          "x": 7006,
          "y": 3117
        },
        {
          "x": 7114,
          "y": 3117
        },
        {
          "x": 7114,
          "y": 3243
        },
        {
          "x": 7006,
          "y": 3243
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-18",
      "name": "St. Jude Wharf Warehouse #18",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 3180
      },
      "footprint": [
        {
          "x": 7126,
          "y": 3117
        },
        {
          "x": 7234,
          "y": 3117
        },
        {
          "x": 7234,
          "y": 3243
        },
        {
          "x": 7126,
          "y": 3243
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-19",
      "name": "St. Jude Wharf Warehouse #19",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 3320
      },
      "footprint": [
        {
          "x": 6166,
          "y": 3257
        },
        {
          "x": 6274,
          "y": 3257
        },
        {
          "x": 6274,
          "y": 3383
        },
        {
          "x": 6166,
          "y": 3383
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-20",
      "name": "St. Jude Wharf Warehouse #20",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 3320
      },
      "footprint": [
        {
          "x": 6286,
          "y": 3257
        },
        {
          "x": 6394,
          "y": 3257
        },
        {
          "x": 6394,
          "y": 3383
        },
        {
          "x": 6286,
          "y": 3383
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-21",
      "name": "St. Jude Wharf Warehouse #21",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 3320
      },
      "footprint": [
        {
          "x": 6406,
          "y": 3257
        },
        {
          "x": 6514,
          "y": 3257
        },
        {
          "x": 6514,
          "y": 3383
        },
        {
          "x": 6406,
          "y": 3383
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-22",
      "name": "St. Jude Wharf Warehouse #22",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 3320
      },
      "footprint": [
        {
          "x": 6526,
          "y": 3257
        },
        {
          "x": 6634,
          "y": 3257
        },
        {
          "x": 6634,
          "y": 3383
        },
        {
          "x": 6526,
          "y": 3383
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-23",
      "name": "St. Jude Wharf Warehouse #23",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 3320
      },
      "footprint": [
        {
          "x": 6646,
          "y": 3257
        },
        {
          "x": 6754,
          "y": 3257
        },
        {
          "x": 6754,
          "y": 3383
        },
        {
          "x": 6646,
          "y": 3383
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-24",
      "name": "St. Jude Wharf Warehouse #24",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 3320
      },
      "footprint": [
        {
          "x": 6766,
          "y": 3257
        },
        {
          "x": 6874,
          "y": 3257
        },
        {
          "x": 6874,
          "y": 3383
        },
        {
          "x": 6766,
          "y": 3383
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-25",
      "name": "St. Jude Wharf Warehouse #25",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 3320
      },
      "footprint": [
        {
          "x": 6886,
          "y": 3257
        },
        {
          "x": 6994,
          "y": 3257
        },
        {
          "x": 6994,
          "y": 3383
        },
        {
          "x": 6886,
          "y": 3383
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-26",
      "name": "St. Jude Wharf Warehouse #26",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 3320
      },
      "footprint": [
        {
          "x": 7006,
          "y": 3257
        },
        {
          "x": 7114,
          "y": 3257
        },
        {
          "x": 7114,
          "y": 3383
        },
        {
          "x": 7006,
          "y": 3383
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-27",
      "name": "St. Jude Wharf Warehouse #27",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 3320
      },
      "footprint": [
        {
          "x": 7126,
          "y": 3257
        },
        {
          "x": 7234,
          "y": 3257
        },
        {
          "x": 7234,
          "y": 3383
        },
        {
          "x": 7126,
          "y": 3383
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-28",
      "name": "St. Jude Wharf Warehouse #28",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 3460
      },
      "footprint": [
        {
          "x": 6166,
          "y": 3397
        },
        {
          "x": 6274,
          "y": 3397
        },
        {
          "x": 6274,
          "y": 3523
        },
        {
          "x": 6166,
          "y": 3523
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-29",
      "name": "St. Jude Wharf Warehouse #29",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 3460
      },
      "footprint": [
        {
          "x": 6286,
          "y": 3397
        },
        {
          "x": 6394,
          "y": 3397
        },
        {
          "x": 6394,
          "y": 3523
        },
        {
          "x": 6286,
          "y": 3523
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-30",
      "name": "St. Jude Wharf Warehouse #30",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 3460
      },
      "footprint": [
        {
          "x": 6406,
          "y": 3397
        },
        {
          "x": 6514,
          "y": 3397
        },
        {
          "x": 6514,
          "y": 3523
        },
        {
          "x": 6406,
          "y": 3523
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-31",
      "name": "St. Jude Wharf Warehouse #31",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 3460
      },
      "footprint": [
        {
          "x": 6526,
          "y": 3397
        },
        {
          "x": 6634,
          "y": 3397
        },
        {
          "x": 6634,
          "y": 3523
        },
        {
          "x": 6526,
          "y": 3523
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-32",
      "name": "St. Jude Wharf Warehouse #32",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 3460
      },
      "footprint": [
        {
          "x": 6646,
          "y": 3397
        },
        {
          "x": 6754,
          "y": 3397
        },
        {
          "x": 6754,
          "y": 3523
        },
        {
          "x": 6646,
          "y": 3523
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-33",
      "name": "St. Jude Wharf Warehouse #33",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 3460
      },
      "footprint": [
        {
          "x": 6766,
          "y": 3397
        },
        {
          "x": 6874,
          "y": 3397
        },
        {
          "x": 6874,
          "y": 3523
        },
        {
          "x": 6766,
          "y": 3523
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-34",
      "name": "St. Jude Wharf Warehouse #34",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 3460
      },
      "footprint": [
        {
          "x": 6886,
          "y": 3397
        },
        {
          "x": 6994,
          "y": 3397
        },
        {
          "x": 6994,
          "y": 3523
        },
        {
          "x": 6886,
          "y": 3523
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-35",
      "name": "St. Jude Wharf Warehouse #35",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 3460
      },
      "footprint": [
        {
          "x": 7006,
          "y": 3397
        },
        {
          "x": 7114,
          "y": 3397
        },
        {
          "x": 7114,
          "y": 3523
        },
        {
          "x": 7006,
          "y": 3523
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-36",
      "name": "St. Jude Wharf Warehouse #36",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 3460
      },
      "footprint": [
        {
          "x": 7126,
          "y": 3397
        },
        {
          "x": 7234,
          "y": 3397
        },
        {
          "x": 7234,
          "y": 3523
        },
        {
          "x": 7126,
          "y": 3523
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-37",
      "name": "St. Jude Wharf Warehouse #37",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 3600
      },
      "footprint": [
        {
          "x": 6166,
          "y": 3537
        },
        {
          "x": 6274,
          "y": 3537
        },
        {
          "x": 6274,
          "y": 3663
        },
        {
          "x": 6166,
          "y": 3663
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-38",
      "name": "St. Jude Wharf Warehouse #38",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 3600
      },
      "footprint": [
        {
          "x": 6286,
          "y": 3537
        },
        {
          "x": 6394,
          "y": 3537
        },
        {
          "x": 6394,
          "y": 3663
        },
        {
          "x": 6286,
          "y": 3663
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-39",
      "name": "St. Jude Wharf Warehouse #39",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 3600
      },
      "footprint": [
        {
          "x": 6406,
          "y": 3537
        },
        {
          "x": 6514,
          "y": 3537
        },
        {
          "x": 6514,
          "y": 3663
        },
        {
          "x": 6406,
          "y": 3663
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-40",
      "name": "St. Jude Wharf Warehouse #40",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 3600
      },
      "footprint": [
        {
          "x": 6526,
          "y": 3537
        },
        {
          "x": 6634,
          "y": 3537
        },
        {
          "x": 6634,
          "y": 3663
        },
        {
          "x": 6526,
          "y": 3663
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-41",
      "name": "St. Jude Wharf Warehouse #41",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 3600
      },
      "footprint": [
        {
          "x": 6646,
          "y": 3537
        },
        {
          "x": 6754,
          "y": 3537
        },
        {
          "x": 6754,
          "y": 3663
        },
        {
          "x": 6646,
          "y": 3663
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-42",
      "name": "St. Jude Wharf Warehouse #42",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 3600
      },
      "footprint": [
        {
          "x": 6766,
          "y": 3537
        },
        {
          "x": 6874,
          "y": 3537
        },
        {
          "x": 6874,
          "y": 3663
        },
        {
          "x": 6766,
          "y": 3663
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-43",
      "name": "St. Jude Wharf Warehouse #43",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 3600
      },
      "footprint": [
        {
          "x": 6886,
          "y": 3537
        },
        {
          "x": 6994,
          "y": 3537
        },
        {
          "x": 6994,
          "y": 3663
        },
        {
          "x": 6886,
          "y": 3663
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-44",
      "name": "St. Jude Wharf Warehouse #44",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 3600
      },
      "footprint": [
        {
          "x": 7006,
          "y": 3537
        },
        {
          "x": 7114,
          "y": 3537
        },
        {
          "x": 7114,
          "y": 3663
        },
        {
          "x": 7006,
          "y": 3663
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-45",
      "name": "St. Jude Wharf Warehouse #45",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 3600
      },
      "footprint": [
        {
          "x": 7126,
          "y": 3537
        },
        {
          "x": 7234,
          "y": 3537
        },
        {
          "x": 7234,
          "y": 3663
        },
        {
          "x": 7126,
          "y": 3663
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-46",
      "name": "St. Jude Wharf Warehouse #46",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 3740
      },
      "footprint": [
        {
          "x": 6166,
          "y": 3677
        },
        {
          "x": 6274,
          "y": 3677
        },
        {
          "x": 6274,
          "y": 3803
        },
        {
          "x": 6166,
          "y": 3803
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-47",
      "name": "St. Jude Wharf Warehouse #47",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 3740
      },
      "footprint": [
        {
          "x": 6286,
          "y": 3677
        },
        {
          "x": 6394,
          "y": 3677
        },
        {
          "x": 6394,
          "y": 3803
        },
        {
          "x": 6286,
          "y": 3803
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-48",
      "name": "St. Jude Wharf Warehouse #48",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 3740
      },
      "footprint": [
        {
          "x": 6406,
          "y": 3677
        },
        {
          "x": 6514,
          "y": 3677
        },
        {
          "x": 6514,
          "y": 3803
        },
        {
          "x": 6406,
          "y": 3803
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-49",
      "name": "St. Jude Wharf Warehouse #49",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 3740
      },
      "footprint": [
        {
          "x": 6526,
          "y": 3677
        },
        {
          "x": 6634,
          "y": 3677
        },
        {
          "x": 6634,
          "y": 3803
        },
        {
          "x": 6526,
          "y": 3803
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-50",
      "name": "St. Jude Wharf Warehouse #50",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 3740
      },
      "footprint": [
        {
          "x": 6646,
          "y": 3677
        },
        {
          "x": 6754,
          "y": 3677
        },
        {
          "x": 6754,
          "y": 3803
        },
        {
          "x": 6646,
          "y": 3803
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-51",
      "name": "St. Jude Wharf Warehouse #51",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 3740
      },
      "footprint": [
        {
          "x": 6766,
          "y": 3677
        },
        {
          "x": 6874,
          "y": 3677
        },
        {
          "x": 6874,
          "y": 3803
        },
        {
          "x": 6766,
          "y": 3803
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-52",
      "name": "St. Jude Wharf Warehouse #52",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 3740
      },
      "footprint": [
        {
          "x": 6886,
          "y": 3677
        },
        {
          "x": 6994,
          "y": 3677
        },
        {
          "x": 6994,
          "y": 3803
        },
        {
          "x": 6886,
          "y": 3803
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-53",
      "name": "St. Jude Wharf Warehouse #53",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 3740
      },
      "footprint": [
        {
          "x": 7006,
          "y": 3677
        },
        {
          "x": 7114,
          "y": 3677
        },
        {
          "x": 7114,
          "y": 3803
        },
        {
          "x": 7006,
          "y": 3803
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-54",
      "name": "St. Jude Wharf Warehouse #54",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 3740
      },
      "footprint": [
        {
          "x": 7126,
          "y": 3677
        },
        {
          "x": 7234,
          "y": 3677
        },
        {
          "x": 7234,
          "y": 3803
        },
        {
          "x": 7126,
          "y": 3803
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-55",
      "name": "St. Jude Wharf Warehouse #55",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 3880
      },
      "footprint": [
        {
          "x": 6166,
          "y": 3817
        },
        {
          "x": 6274,
          "y": 3817
        },
        {
          "x": 6274,
          "y": 3943
        },
        {
          "x": 6166,
          "y": 3943
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-56",
      "name": "St. Jude Wharf Warehouse #56",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 3880
      },
      "footprint": [
        {
          "x": 6286,
          "y": 3817
        },
        {
          "x": 6394,
          "y": 3817
        },
        {
          "x": 6394,
          "y": 3943
        },
        {
          "x": 6286,
          "y": 3943
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-57",
      "name": "St. Jude Wharf Warehouse #57",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 3880
      },
      "footprint": [
        {
          "x": 6406,
          "y": 3817
        },
        {
          "x": 6514,
          "y": 3817
        },
        {
          "x": 6514,
          "y": 3943
        },
        {
          "x": 6406,
          "y": 3943
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-58",
      "name": "St. Jude Wharf Warehouse #58",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 3880
      },
      "footprint": [
        {
          "x": 6526,
          "y": 3817
        },
        {
          "x": 6634,
          "y": 3817
        },
        {
          "x": 6634,
          "y": 3943
        },
        {
          "x": 6526,
          "y": 3943
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-59",
      "name": "St. Jude Wharf Warehouse #59",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 3880
      },
      "footprint": [
        {
          "x": 6646,
          "y": 3817
        },
        {
          "x": 6754,
          "y": 3817
        },
        {
          "x": 6754,
          "y": 3943
        },
        {
          "x": 6646,
          "y": 3943
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-60",
      "name": "St. Jude Wharf Warehouse #60",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 3880
      },
      "footprint": [
        {
          "x": 6766,
          "y": 3817
        },
        {
          "x": 6874,
          "y": 3817
        },
        {
          "x": 6874,
          "y": 3943
        },
        {
          "x": 6766,
          "y": 3943
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-61",
      "name": "St. Jude Wharf Warehouse #61",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 3880
      },
      "footprint": [
        {
          "x": 6886,
          "y": 3817
        },
        {
          "x": 6994,
          "y": 3817
        },
        {
          "x": 6994,
          "y": 3943
        },
        {
          "x": 6886,
          "y": 3943
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-62",
      "name": "St. Jude Wharf Warehouse #62",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 3880
      },
      "footprint": [
        {
          "x": 7006,
          "y": 3817
        },
        {
          "x": 7114,
          "y": 3817
        },
        {
          "x": 7114,
          "y": 3943
        },
        {
          "x": 7006,
          "y": 3943
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-63",
      "name": "St. Jude Wharf Warehouse #63",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 3880
      },
      "footprint": [
        {
          "x": 7126,
          "y": 3817
        },
        {
          "x": 7234,
          "y": 3817
        },
        {
          "x": 7234,
          "y": 3943
        },
        {
          "x": 7126,
          "y": 3943
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-64",
      "name": "St. Jude Wharf Warehouse #64",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 4020
      },
      "footprint": [
        {
          "x": 6166,
          "y": 3957
        },
        {
          "x": 6274,
          "y": 3957
        },
        {
          "x": 6274,
          "y": 4083
        },
        {
          "x": 6166,
          "y": 4083
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-65",
      "name": "St. Jude Wharf Warehouse #65",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 4020
      },
      "footprint": [
        {
          "x": 6286,
          "y": 3957
        },
        {
          "x": 6394,
          "y": 3957
        },
        {
          "x": 6394,
          "y": 4083
        },
        {
          "x": 6286,
          "y": 4083
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-66",
      "name": "St. Jude Wharf Warehouse #66",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 4020
      },
      "footprint": [
        {
          "x": 6406,
          "y": 3957
        },
        {
          "x": 6514,
          "y": 3957
        },
        {
          "x": 6514,
          "y": 4083
        },
        {
          "x": 6406,
          "y": 4083
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-67",
      "name": "St. Jude Wharf Warehouse #67",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 4020
      },
      "footprint": [
        {
          "x": 6526,
          "y": 3957
        },
        {
          "x": 6634,
          "y": 3957
        },
        {
          "x": 6634,
          "y": 4083
        },
        {
          "x": 6526,
          "y": 4083
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-68",
      "name": "St. Jude Wharf Warehouse #68",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 4020
      },
      "footprint": [
        {
          "x": 6646,
          "y": 3957
        },
        {
          "x": 6754,
          "y": 3957
        },
        {
          "x": 6754,
          "y": 4083
        },
        {
          "x": 6646,
          "y": 4083
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-69",
      "name": "St. Jude Wharf Warehouse #69",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 4020
      },
      "footprint": [
        {
          "x": 6766,
          "y": 3957
        },
        {
          "x": 6874,
          "y": 3957
        },
        {
          "x": 6874,
          "y": 4083
        },
        {
          "x": 6766,
          "y": 4083
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-70",
      "name": "St. Jude Wharf Warehouse #70",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 4020
      },
      "footprint": [
        {
          "x": 6886,
          "y": 3957
        },
        {
          "x": 6994,
          "y": 3957
        },
        {
          "x": 6994,
          "y": 4083
        },
        {
          "x": 6886,
          "y": 4083
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-71",
      "name": "St. Jude Wharf Warehouse #71",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 4020
      },
      "footprint": [
        {
          "x": 7006,
          "y": 3957
        },
        {
          "x": 7114,
          "y": 3957
        },
        {
          "x": 7114,
          "y": 4083
        },
        {
          "x": 7006,
          "y": 4083
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-72",
      "name": "St. Jude Wharf Warehouse #72",
      "type": "industrial",
      "center": {
        "x": 7180,
        "y": 4020
      },
      "footprint": [
        {
          "x": 7126,
          "y": 3957
        },
        {
          "x": 7234,
          "y": 3957
        },
        {
          "x": 7234,
          "y": 4083
        },
        {
          "x": 7126,
          "y": 4083
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-73",
      "name": "St. Jude Wharf Warehouse #73",
      "type": "industrial",
      "center": {
        "x": 6220,
        "y": 4160
      },
      "footprint": [
        {
          "x": 6166,
          "y": 4097
        },
        {
          "x": 6274,
          "y": 4097
        },
        {
          "x": 6274,
          "y": 4223
        },
        {
          "x": 6166,
          "y": 4223
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-74",
      "name": "St. Jude Wharf Warehouse #74",
      "type": "industrial",
      "center": {
        "x": 6340,
        "y": 4160
      },
      "footprint": [
        {
          "x": 6286,
          "y": 4097
        },
        {
          "x": 6394,
          "y": 4097
        },
        {
          "x": 6394,
          "y": 4223
        },
        {
          "x": 6286,
          "y": 4223
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-75",
      "name": "St. Jude Wharf Warehouse #75",
      "type": "industrial",
      "center": {
        "x": 6460,
        "y": 4160
      },
      "footprint": [
        {
          "x": 6406,
          "y": 4097
        },
        {
          "x": 6514,
          "y": 4097
        },
        {
          "x": 6514,
          "y": 4223
        },
        {
          "x": 6406,
          "y": 4223
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-76",
      "name": "St. Jude Wharf Warehouse #76",
      "type": "industrial",
      "center": {
        "x": 6580,
        "y": 4160
      },
      "footprint": [
        {
          "x": 6526,
          "y": 4097
        },
        {
          "x": 6634,
          "y": 4097
        },
        {
          "x": 6634,
          "y": 4223
        },
        {
          "x": 6526,
          "y": 4223
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-harbor-77",
      "name": "St. Jude Wharf Warehouse #77",
      "type": "industrial",
      "center": {
        "x": 6700,
        "y": 4160
      },
      "footprint": [
        {
          "x": 6646,
          "y": 4097
        },
        {
          "x": 6754,
          "y": 4097
        },
        {
          "x": 6754,
          "y": 4223
        },
        {
          "x": 6646,
          "y": 4223
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-harbor-78",
      "name": "St. Jude Wharf Warehouse #78",
      "type": "industrial",
      "center": {
        "x": 6820,
        "y": 4160
      },
      "footprint": [
        {
          "x": 6766,
          "y": 4097
        },
        {
          "x": 6874,
          "y": 4097
        },
        {
          "x": 6874,
          "y": 4223
        },
        {
          "x": 6766,
          "y": 4223
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-harbor-79",
      "name": "St. Jude Wharf Warehouse #79",
      "type": "industrial",
      "center": {
        "x": 6940,
        "y": 4160
      },
      "footprint": [
        {
          "x": 6886,
          "y": 4097
        },
        {
          "x": 6994,
          "y": 4097
        },
        {
          "x": 6994,
          "y": 4223
        },
        {
          "x": 6886,
          "y": 4223
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-harbor-80",
      "name": "St. Jude Wharf Warehouse #80",
      "type": "industrial",
      "center": {
        "x": 7060,
        "y": 4160
      },
      "footprint": [
        {
          "x": 7006,
          "y": 4097
        },
        {
          "x": 7114,
          "y": 4097
        },
        {
          "x": 7114,
          "y": 4223
        },
        {
          "x": 7006,
          "y": 4223
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-1",
      "name": "Novaria Logistics & Foundry Depot #1",
      "type": "industrial",
      "center": {
        "x": 3900,
        "y": 1086
      },
      "footprint": [
        {
          "x": 3810,
          "y": 1002
        },
        {
          "x": 3990,
          "y": 1002
        },
        {
          "x": 3990,
          "y": 1170
        },
        {
          "x": 3810,
          "y": 1170
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-2",
      "name": "Novaria Logistics & Foundry Depot #2",
      "type": "industrial",
      "center": {
        "x": 4100,
        "y": 1086
      },
      "footprint": [
        {
          "x": 4010,
          "y": 1002
        },
        {
          "x": 4190,
          "y": 1002
        },
        {
          "x": 4190,
          "y": 1170
        },
        {
          "x": 4010,
          "y": 1170
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-3",
      "name": "Novaria Logistics & Foundry Depot #3",
      "type": "industrial",
      "center": {
        "x": 4300,
        "y": 1086
      },
      "footprint": [
        {
          "x": 4210,
          "y": 1002
        },
        {
          "x": 4390,
          "y": 1002
        },
        {
          "x": 4390,
          "y": 1170
        },
        {
          "x": 4210,
          "y": 1170
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-4",
      "name": "Novaria Logistics & Foundry Depot #4",
      "type": "industrial",
      "center": {
        "x": 4500,
        "y": 1086
      },
      "footprint": [
        {
          "x": 4410,
          "y": 1002
        },
        {
          "x": 4590,
          "y": 1002
        },
        {
          "x": 4590,
          "y": 1170
        },
        {
          "x": 4410,
          "y": 1170
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-5",
      "name": "Novaria Logistics & Foundry Depot #5",
      "type": "industrial",
      "center": {
        "x": 4700,
        "y": 1086
      },
      "footprint": [
        {
          "x": 4610,
          "y": 1002
        },
        {
          "x": 4790,
          "y": 1002
        },
        {
          "x": 4790,
          "y": 1170
        },
        {
          "x": 4610,
          "y": 1170
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-6",
      "name": "Novaria Logistics & Foundry Depot #6",
      "type": "industrial",
      "center": {
        "x": 4900,
        "y": 1086
      },
      "footprint": [
        {
          "x": 4810,
          "y": 1002
        },
        {
          "x": 4990,
          "y": 1002
        },
        {
          "x": 4990,
          "y": 1170
        },
        {
          "x": 4810,
          "y": 1170
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-7",
      "name": "Novaria Logistics & Foundry Depot #7",
      "type": "industrial",
      "center": {
        "x": 5100,
        "y": 1086
      },
      "footprint": [
        {
          "x": 5010,
          "y": 1002
        },
        {
          "x": 5190,
          "y": 1002
        },
        {
          "x": 5190,
          "y": 1170
        },
        {
          "x": 5010,
          "y": 1170
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-8",
      "name": "Novaria Logistics & Foundry Depot #8",
      "type": "industrial",
      "center": {
        "x": 5300,
        "y": 1086
      },
      "footprint": [
        {
          "x": 5210,
          "y": 1002
        },
        {
          "x": 5390,
          "y": 1002
        },
        {
          "x": 5390,
          "y": 1170
        },
        {
          "x": 5210,
          "y": 1170
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-9",
      "name": "Novaria Logistics & Foundry Depot #9",
      "type": "industrial",
      "center": {
        "x": 5500,
        "y": 1086
      },
      "footprint": [
        {
          "x": 5410,
          "y": 1002
        },
        {
          "x": 5590,
          "y": 1002
        },
        {
          "x": 5590,
          "y": 1170
        },
        {
          "x": 5410,
          "y": 1170
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-10",
      "name": "Novaria Logistics & Foundry Depot #10",
      "type": "industrial",
      "center": {
        "x": 5700,
        "y": 1086
      },
      "footprint": [
        {
          "x": 5610,
          "y": 1002
        },
        {
          "x": 5790,
          "y": 1002
        },
        {
          "x": 5790,
          "y": 1170
        },
        {
          "x": 5610,
          "y": 1170
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-11",
      "name": "Novaria Logistics & Foundry Depot #11",
      "type": "industrial",
      "center": {
        "x": 5900,
        "y": 1086
      },
      "footprint": [
        {
          "x": 5810,
          "y": 1002
        },
        {
          "x": 5990,
          "y": 1002
        },
        {
          "x": 5990,
          "y": 1170
        },
        {
          "x": 5810,
          "y": 1170
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-12",
      "name": "Novaria Logistics & Foundry Depot #12",
      "type": "industrial",
      "center": {
        "x": 6100,
        "y": 1086
      },
      "footprint": [
        {
          "x": 6010,
          "y": 1002
        },
        {
          "x": 6190,
          "y": 1002
        },
        {
          "x": 6190,
          "y": 1170
        },
        {
          "x": 6010,
          "y": 1170
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-13",
      "name": "Novaria Logistics & Foundry Depot #13",
      "type": "industrial",
      "center": {
        "x": 6300,
        "y": 1086
      },
      "footprint": [
        {
          "x": 6210,
          "y": 1002
        },
        {
          "x": 6390,
          "y": 1002
        },
        {
          "x": 6390,
          "y": 1170
        },
        {
          "x": 6210,
          "y": 1170
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-14",
      "name": "Novaria Logistics & Foundry Depot #14",
      "type": "industrial",
      "center": {
        "x": 6500,
        "y": 1086
      },
      "footprint": [
        {
          "x": 6410,
          "y": 1002
        },
        {
          "x": 6590,
          "y": 1002
        },
        {
          "x": 6590,
          "y": 1170
        },
        {
          "x": 6410,
          "y": 1170
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-15",
      "name": "Novaria Logistics & Foundry Depot #15",
      "type": "industrial",
      "center": {
        "x": 3900,
        "y": 1271
      },
      "footprint": [
        {
          "x": 3810,
          "y": 1187
        },
        {
          "x": 3990,
          "y": 1187
        },
        {
          "x": 3990,
          "y": 1355
        },
        {
          "x": 3810,
          "y": 1355
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-16",
      "name": "Novaria Logistics & Foundry Depot #16",
      "type": "industrial",
      "center": {
        "x": 4100,
        "y": 1271
      },
      "footprint": [
        {
          "x": 4010,
          "y": 1187
        },
        {
          "x": 4190,
          "y": 1187
        },
        {
          "x": 4190,
          "y": 1355
        },
        {
          "x": 4010,
          "y": 1355
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-17",
      "name": "Novaria Logistics & Foundry Depot #17",
      "type": "industrial",
      "center": {
        "x": 4300,
        "y": 1271
      },
      "footprint": [
        {
          "x": 4210,
          "y": 1187
        },
        {
          "x": 4390,
          "y": 1187
        },
        {
          "x": 4390,
          "y": 1355
        },
        {
          "x": 4210,
          "y": 1355
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-18",
      "name": "Novaria Logistics & Foundry Depot #18",
      "type": "industrial",
      "center": {
        "x": 4500,
        "y": 1271
      },
      "footprint": [
        {
          "x": 4410,
          "y": 1187
        },
        {
          "x": 4590,
          "y": 1187
        },
        {
          "x": 4590,
          "y": 1355
        },
        {
          "x": 4410,
          "y": 1355
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-19",
      "name": "Novaria Logistics & Foundry Depot #19",
      "type": "industrial",
      "center": {
        "x": 4700,
        "y": 1271
      },
      "footprint": [
        {
          "x": 4610,
          "y": 1187
        },
        {
          "x": 4790,
          "y": 1187
        },
        {
          "x": 4790,
          "y": 1355
        },
        {
          "x": 4610,
          "y": 1355
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-20",
      "name": "Novaria Logistics & Foundry Depot #20",
      "type": "industrial",
      "center": {
        "x": 4900,
        "y": 1271
      },
      "footprint": [
        {
          "x": 4810,
          "y": 1187
        },
        {
          "x": 4990,
          "y": 1187
        },
        {
          "x": 4990,
          "y": 1355
        },
        {
          "x": 4810,
          "y": 1355
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-21",
      "name": "Novaria Logistics & Foundry Depot #21",
      "type": "industrial",
      "center": {
        "x": 5100,
        "y": 1271
      },
      "footprint": [
        {
          "x": 5010,
          "y": 1187
        },
        {
          "x": 5190,
          "y": 1187
        },
        {
          "x": 5190,
          "y": 1355
        },
        {
          "x": 5010,
          "y": 1355
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-22",
      "name": "Novaria Logistics & Foundry Depot #22",
      "type": "industrial",
      "center": {
        "x": 5300,
        "y": 1271
      },
      "footprint": [
        {
          "x": 5210,
          "y": 1187
        },
        {
          "x": 5390,
          "y": 1187
        },
        {
          "x": 5390,
          "y": 1355
        },
        {
          "x": 5210,
          "y": 1355
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-23",
      "name": "Novaria Logistics & Foundry Depot #23",
      "type": "industrial",
      "center": {
        "x": 5500,
        "y": 1271
      },
      "footprint": [
        {
          "x": 5410,
          "y": 1187
        },
        {
          "x": 5590,
          "y": 1187
        },
        {
          "x": 5590,
          "y": 1355
        },
        {
          "x": 5410,
          "y": 1355
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-24",
      "name": "Novaria Logistics & Foundry Depot #24",
      "type": "industrial",
      "center": {
        "x": 5700,
        "y": 1271
      },
      "footprint": [
        {
          "x": 5610,
          "y": 1187
        },
        {
          "x": 5790,
          "y": 1187
        },
        {
          "x": 5790,
          "y": 1355
        },
        {
          "x": 5610,
          "y": 1355
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-25",
      "name": "Novaria Logistics & Foundry Depot #25",
      "type": "industrial",
      "center": {
        "x": 5900,
        "y": 1271
      },
      "footprint": [
        {
          "x": 5810,
          "y": 1187
        },
        {
          "x": 5990,
          "y": 1187
        },
        {
          "x": 5990,
          "y": 1355
        },
        {
          "x": 5810,
          "y": 1355
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-26",
      "name": "Novaria Logistics & Foundry Depot #26",
      "type": "industrial",
      "center": {
        "x": 6100,
        "y": 1271
      },
      "footprint": [
        {
          "x": 6010,
          "y": 1187
        },
        {
          "x": 6190,
          "y": 1187
        },
        {
          "x": 6190,
          "y": 1355
        },
        {
          "x": 6010,
          "y": 1355
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-27",
      "name": "Novaria Logistics & Foundry Depot #27",
      "type": "industrial",
      "center": {
        "x": 6300,
        "y": 1271
      },
      "footprint": [
        {
          "x": 6210,
          "y": 1187
        },
        {
          "x": 6390,
          "y": 1187
        },
        {
          "x": 6390,
          "y": 1355
        },
        {
          "x": 6210,
          "y": 1355
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-28",
      "name": "Novaria Logistics & Foundry Depot #28",
      "type": "industrial",
      "center": {
        "x": 6500,
        "y": 1271
      },
      "footprint": [
        {
          "x": 6410,
          "y": 1187
        },
        {
          "x": 6590,
          "y": 1187
        },
        {
          "x": 6590,
          "y": 1355
        },
        {
          "x": 6410,
          "y": 1355
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-29",
      "name": "Novaria Logistics & Foundry Depot #29",
      "type": "industrial",
      "center": {
        "x": 3900,
        "y": 1457
      },
      "footprint": [
        {
          "x": 3810,
          "y": 1373
        },
        {
          "x": 3990,
          "y": 1373
        },
        {
          "x": 3990,
          "y": 1541
        },
        {
          "x": 3810,
          "y": 1541
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-30",
      "name": "Novaria Logistics & Foundry Depot #30",
      "type": "industrial",
      "center": {
        "x": 4100,
        "y": 1457
      },
      "footprint": [
        {
          "x": 4010,
          "y": 1373
        },
        {
          "x": 4190,
          "y": 1373
        },
        {
          "x": 4190,
          "y": 1541
        },
        {
          "x": 4010,
          "y": 1541
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-31",
      "name": "Novaria Logistics & Foundry Depot #31",
      "type": "industrial",
      "center": {
        "x": 4300,
        "y": 1457
      },
      "footprint": [
        {
          "x": 4210,
          "y": 1373
        },
        {
          "x": 4390,
          "y": 1373
        },
        {
          "x": 4390,
          "y": 1541
        },
        {
          "x": 4210,
          "y": 1541
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-32",
      "name": "Novaria Logistics & Foundry Depot #32",
      "type": "industrial",
      "center": {
        "x": 4500,
        "y": 1457
      },
      "footprint": [
        {
          "x": 4410,
          "y": 1373
        },
        {
          "x": 4590,
          "y": 1373
        },
        {
          "x": 4590,
          "y": 1541
        },
        {
          "x": 4410,
          "y": 1541
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-33",
      "name": "Novaria Logistics & Foundry Depot #33",
      "type": "industrial",
      "center": {
        "x": 4700,
        "y": 1457
      },
      "footprint": [
        {
          "x": 4610,
          "y": 1373
        },
        {
          "x": 4790,
          "y": 1373
        },
        {
          "x": 4790,
          "y": 1541
        },
        {
          "x": 4610,
          "y": 1541
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-34",
      "name": "Novaria Logistics & Foundry Depot #34",
      "type": "industrial",
      "center": {
        "x": 4900,
        "y": 1457
      },
      "footprint": [
        {
          "x": 4810,
          "y": 1373
        },
        {
          "x": 4990,
          "y": 1373
        },
        {
          "x": 4990,
          "y": 1541
        },
        {
          "x": 4810,
          "y": 1541
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-35",
      "name": "Novaria Logistics & Foundry Depot #35",
      "type": "industrial",
      "center": {
        "x": 5100,
        "y": 1457
      },
      "footprint": [
        {
          "x": 5010,
          "y": 1373
        },
        {
          "x": 5190,
          "y": 1373
        },
        {
          "x": 5190,
          "y": 1541
        },
        {
          "x": 5010,
          "y": 1541
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-36",
      "name": "Novaria Logistics & Foundry Depot #36",
      "type": "industrial",
      "center": {
        "x": 5300,
        "y": 1457
      },
      "footprint": [
        {
          "x": 5210,
          "y": 1373
        },
        {
          "x": 5390,
          "y": 1373
        },
        {
          "x": 5390,
          "y": 1541
        },
        {
          "x": 5210,
          "y": 1541
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-37",
      "name": "Novaria Logistics & Foundry Depot #37",
      "type": "industrial",
      "center": {
        "x": 5500,
        "y": 1457
      },
      "footprint": [
        {
          "x": 5410,
          "y": 1373
        },
        {
          "x": 5590,
          "y": 1373
        },
        {
          "x": 5590,
          "y": 1541
        },
        {
          "x": 5410,
          "y": 1541
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-38",
      "name": "Novaria Logistics & Foundry Depot #38",
      "type": "industrial",
      "center": {
        "x": 5700,
        "y": 1457
      },
      "footprint": [
        {
          "x": 5610,
          "y": 1373
        },
        {
          "x": 5790,
          "y": 1373
        },
        {
          "x": 5790,
          "y": 1541
        },
        {
          "x": 5610,
          "y": 1541
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-39",
      "name": "Novaria Logistics & Foundry Depot #39",
      "type": "industrial",
      "center": {
        "x": 5900,
        "y": 1457
      },
      "footprint": [
        {
          "x": 5810,
          "y": 1373
        },
        {
          "x": 5990,
          "y": 1373
        },
        {
          "x": 5990,
          "y": 1541
        },
        {
          "x": 5810,
          "y": 1541
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-40",
      "name": "Novaria Logistics & Foundry Depot #40",
      "type": "industrial",
      "center": {
        "x": 6100,
        "y": 1457
      },
      "footprint": [
        {
          "x": 6010,
          "y": 1373
        },
        {
          "x": 6190,
          "y": 1373
        },
        {
          "x": 6190,
          "y": 1541
        },
        {
          "x": 6010,
          "y": 1541
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-41",
      "name": "Novaria Logistics & Foundry Depot #41",
      "type": "industrial",
      "center": {
        "x": 6300,
        "y": 1457
      },
      "footprint": [
        {
          "x": 6210,
          "y": 1373
        },
        {
          "x": 6390,
          "y": 1373
        },
        {
          "x": 6390,
          "y": 1541
        },
        {
          "x": 6210,
          "y": 1541
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-42",
      "name": "Novaria Logistics & Foundry Depot #42",
      "type": "industrial",
      "center": {
        "x": 6500,
        "y": 1457
      },
      "footprint": [
        {
          "x": 6410,
          "y": 1373
        },
        {
          "x": 6590,
          "y": 1373
        },
        {
          "x": 6590,
          "y": 1541
        },
        {
          "x": 6410,
          "y": 1541
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-43",
      "name": "Novaria Logistics & Foundry Depot #43",
      "type": "industrial",
      "center": {
        "x": 3900,
        "y": 1643
      },
      "footprint": [
        {
          "x": 3810,
          "y": 1559
        },
        {
          "x": 3990,
          "y": 1559
        },
        {
          "x": 3990,
          "y": 1727
        },
        {
          "x": 3810,
          "y": 1727
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-44",
      "name": "Novaria Logistics & Foundry Depot #44",
      "type": "industrial",
      "center": {
        "x": 4100,
        "y": 1643
      },
      "footprint": [
        {
          "x": 4010,
          "y": 1559
        },
        {
          "x": 4190,
          "y": 1559
        },
        {
          "x": 4190,
          "y": 1727
        },
        {
          "x": 4010,
          "y": 1727
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-45",
      "name": "Novaria Logistics & Foundry Depot #45",
      "type": "industrial",
      "center": {
        "x": 4300,
        "y": 1643
      },
      "footprint": [
        {
          "x": 4210,
          "y": 1559
        },
        {
          "x": 4390,
          "y": 1559
        },
        {
          "x": 4390,
          "y": 1727
        },
        {
          "x": 4210,
          "y": 1727
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-46",
      "name": "Novaria Logistics & Foundry Depot #46",
      "type": "industrial",
      "center": {
        "x": 4500,
        "y": 1643
      },
      "footprint": [
        {
          "x": 4410,
          "y": 1559
        },
        {
          "x": 4590,
          "y": 1559
        },
        {
          "x": 4590,
          "y": 1727
        },
        {
          "x": 4410,
          "y": 1727
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-47",
      "name": "Novaria Logistics & Foundry Depot #47",
      "type": "industrial",
      "center": {
        "x": 4700,
        "y": 1643
      },
      "footprint": [
        {
          "x": 4610,
          "y": 1559
        },
        {
          "x": 4790,
          "y": 1559
        },
        {
          "x": 4790,
          "y": 1727
        },
        {
          "x": 4610,
          "y": 1727
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-48",
      "name": "Novaria Logistics & Foundry Depot #48",
      "type": "industrial",
      "center": {
        "x": 4900,
        "y": 1643
      },
      "footprint": [
        {
          "x": 4810,
          "y": 1559
        },
        {
          "x": 4990,
          "y": 1559
        },
        {
          "x": 4990,
          "y": 1727
        },
        {
          "x": 4810,
          "y": 1727
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-49",
      "name": "Novaria Logistics & Foundry Depot #49",
      "type": "industrial",
      "center": {
        "x": 5100,
        "y": 1643
      },
      "footprint": [
        {
          "x": 5010,
          "y": 1559
        },
        {
          "x": 5190,
          "y": 1559
        },
        {
          "x": 5190,
          "y": 1727
        },
        {
          "x": 5010,
          "y": 1727
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-50",
      "name": "Novaria Logistics & Foundry Depot #50",
      "type": "industrial",
      "center": {
        "x": 5300,
        "y": 1643
      },
      "footprint": [
        {
          "x": 5210,
          "y": 1559
        },
        {
          "x": 5390,
          "y": 1559
        },
        {
          "x": 5390,
          "y": 1727
        },
        {
          "x": 5210,
          "y": 1727
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-51",
      "name": "Novaria Logistics & Foundry Depot #51",
      "type": "industrial",
      "center": {
        "x": 5500,
        "y": 1643
      },
      "footprint": [
        {
          "x": 5410,
          "y": 1559
        },
        {
          "x": 5590,
          "y": 1559
        },
        {
          "x": 5590,
          "y": 1727
        },
        {
          "x": 5410,
          "y": 1727
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-52",
      "name": "Novaria Logistics & Foundry Depot #52",
      "type": "industrial",
      "center": {
        "x": 5700,
        "y": 1643
      },
      "footprint": [
        {
          "x": 5610,
          "y": 1559
        },
        {
          "x": 5790,
          "y": 1559
        },
        {
          "x": 5790,
          "y": 1727
        },
        {
          "x": 5610,
          "y": 1727
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-53",
      "name": "Novaria Logistics & Foundry Depot #53",
      "type": "industrial",
      "center": {
        "x": 5900,
        "y": 1643
      },
      "footprint": [
        {
          "x": 5810,
          "y": 1559
        },
        {
          "x": 5990,
          "y": 1559
        },
        {
          "x": 5990,
          "y": 1727
        },
        {
          "x": 5810,
          "y": 1727
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-54",
      "name": "Novaria Logistics & Foundry Depot #54",
      "type": "industrial",
      "center": {
        "x": 6100,
        "y": 1643
      },
      "footprint": [
        {
          "x": 6010,
          "y": 1559
        },
        {
          "x": 6190,
          "y": 1559
        },
        {
          "x": 6190,
          "y": 1727
        },
        {
          "x": 6010,
          "y": 1727
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-55",
      "name": "Novaria Logistics & Foundry Depot #55",
      "type": "industrial",
      "center": {
        "x": 6300,
        "y": 1643
      },
      "footprint": [
        {
          "x": 6210,
          "y": 1559
        },
        {
          "x": 6390,
          "y": 1559
        },
        {
          "x": 6390,
          "y": 1727
        },
        {
          "x": 6210,
          "y": 1727
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-56",
      "name": "Novaria Logistics & Foundry Depot #56",
      "type": "industrial",
      "center": {
        "x": 6500,
        "y": 1643
      },
      "footprint": [
        {
          "x": 6410,
          "y": 1559
        },
        {
          "x": 6590,
          "y": 1559
        },
        {
          "x": 6590,
          "y": 1727
        },
        {
          "x": 6410,
          "y": 1727
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-57",
      "name": "Novaria Logistics & Foundry Depot #57",
      "type": "industrial",
      "center": {
        "x": 3900,
        "y": 1829
      },
      "footprint": [
        {
          "x": 3810,
          "y": 1745
        },
        {
          "x": 3990,
          "y": 1745
        },
        {
          "x": 3990,
          "y": 1913
        },
        {
          "x": 3810,
          "y": 1913
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-58",
      "name": "Novaria Logistics & Foundry Depot #58",
      "type": "industrial",
      "center": {
        "x": 4100,
        "y": 1829
      },
      "footprint": [
        {
          "x": 4010,
          "y": 1745
        },
        {
          "x": 4190,
          "y": 1745
        },
        {
          "x": 4190,
          "y": 1913
        },
        {
          "x": 4010,
          "y": 1913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-59",
      "name": "Novaria Logistics & Foundry Depot #59",
      "type": "industrial",
      "center": {
        "x": 4300,
        "y": 1829
      },
      "footprint": [
        {
          "x": 4210,
          "y": 1745
        },
        {
          "x": 4390,
          "y": 1745
        },
        {
          "x": 4390,
          "y": 1913
        },
        {
          "x": 4210,
          "y": 1913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-60",
      "name": "Novaria Logistics & Foundry Depot #60",
      "type": "industrial",
      "center": {
        "x": 4500,
        "y": 1829
      },
      "footprint": [
        {
          "x": 4410,
          "y": 1745
        },
        {
          "x": 4590,
          "y": 1745
        },
        {
          "x": 4590,
          "y": 1913
        },
        {
          "x": 4410,
          "y": 1913
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-61",
      "name": "Novaria Logistics & Foundry Depot #61",
      "type": "industrial",
      "center": {
        "x": 4700,
        "y": 1829
      },
      "footprint": [
        {
          "x": 4610,
          "y": 1745
        },
        {
          "x": 4790,
          "y": 1745
        },
        {
          "x": 4790,
          "y": 1913
        },
        {
          "x": 4610,
          "y": 1913
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-62",
      "name": "Novaria Logistics & Foundry Depot #62",
      "type": "industrial",
      "center": {
        "x": 4900,
        "y": 1829
      },
      "footprint": [
        {
          "x": 4810,
          "y": 1745
        },
        {
          "x": 4990,
          "y": 1745
        },
        {
          "x": 4990,
          "y": 1913
        },
        {
          "x": 4810,
          "y": 1913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-63",
      "name": "Novaria Logistics & Foundry Depot #63",
      "type": "industrial",
      "center": {
        "x": 5100,
        "y": 1829
      },
      "footprint": [
        {
          "x": 5010,
          "y": 1745
        },
        {
          "x": 5190,
          "y": 1745
        },
        {
          "x": 5190,
          "y": 1913
        },
        {
          "x": 5010,
          "y": 1913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-64",
      "name": "Novaria Logistics & Foundry Depot #64",
      "type": "industrial",
      "center": {
        "x": 5300,
        "y": 1829
      },
      "footprint": [
        {
          "x": 5210,
          "y": 1745
        },
        {
          "x": 5390,
          "y": 1745
        },
        {
          "x": 5390,
          "y": 1913
        },
        {
          "x": 5210,
          "y": 1913
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-65",
      "name": "Novaria Logistics & Foundry Depot #65",
      "type": "industrial",
      "center": {
        "x": 5500,
        "y": 1829
      },
      "footprint": [
        {
          "x": 5410,
          "y": 1745
        },
        {
          "x": 5590,
          "y": 1745
        },
        {
          "x": 5590,
          "y": 1913
        },
        {
          "x": 5410,
          "y": 1913
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-66",
      "name": "Novaria Logistics & Foundry Depot #66",
      "type": "industrial",
      "center": {
        "x": 5700,
        "y": 1829
      },
      "footprint": [
        {
          "x": 5610,
          "y": 1745
        },
        {
          "x": 5790,
          "y": 1745
        },
        {
          "x": 5790,
          "y": 1913
        },
        {
          "x": 5610,
          "y": 1913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-67",
      "name": "Novaria Logistics & Foundry Depot #67",
      "type": "industrial",
      "center": {
        "x": 5900,
        "y": 1829
      },
      "footprint": [
        {
          "x": 5810,
          "y": 1745
        },
        {
          "x": 5990,
          "y": 1745
        },
        {
          "x": 5990,
          "y": 1913
        },
        {
          "x": 5810,
          "y": 1913
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-68",
      "name": "Novaria Logistics & Foundry Depot #68",
      "type": "industrial",
      "center": {
        "x": 6100,
        "y": 1829
      },
      "footprint": [
        {
          "x": 6010,
          "y": 1745
        },
        {
          "x": 6190,
          "y": 1745
        },
        {
          "x": 6190,
          "y": 1913
        },
        {
          "x": 6010,
          "y": 1913
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-69",
      "name": "Novaria Logistics & Foundry Depot #69",
      "type": "industrial",
      "center": {
        "x": 6300,
        "y": 1829
      },
      "footprint": [
        {
          "x": 6210,
          "y": 1745
        },
        {
          "x": 6390,
          "y": 1745
        },
        {
          "x": 6390,
          "y": 1913
        },
        {
          "x": 6210,
          "y": 1913
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-70",
      "name": "Novaria Logistics & Foundry Depot #70",
      "type": "industrial",
      "center": {
        "x": 6500,
        "y": 1829
      },
      "footprint": [
        {
          "x": 6410,
          "y": 1745
        },
        {
          "x": 6590,
          "y": 1745
        },
        {
          "x": 6590,
          "y": 1913
        },
        {
          "x": 6410,
          "y": 1913
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-71",
      "name": "Novaria Logistics & Foundry Depot #71",
      "type": "industrial",
      "center": {
        "x": 3900,
        "y": 2014
      },
      "footprint": [
        {
          "x": 3810,
          "y": 1930
        },
        {
          "x": 3990,
          "y": 1930
        },
        {
          "x": 3990,
          "y": 2098
        },
        {
          "x": 3810,
          "y": 2098
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-ind-72",
      "name": "Novaria Logistics & Foundry Depot #72",
      "type": "industrial",
      "center": {
        "x": 4100,
        "y": 2014
      },
      "footprint": [
        {
          "x": 4010,
          "y": 1930
        },
        {
          "x": 4190,
          "y": 1930
        },
        {
          "x": 4190,
          "y": 2098
        },
        {
          "x": 4010,
          "y": 2098
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-ind-73",
      "name": "Novaria Logistics & Foundry Depot #73",
      "type": "industrial",
      "center": {
        "x": 4300,
        "y": 2014
      },
      "footprint": [
        {
          "x": 4210,
          "y": 1930
        },
        {
          "x": 4390,
          "y": 1930
        },
        {
          "x": 4390,
          "y": 2098
        },
        {
          "x": 4210,
          "y": 2098
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-ind-74",
      "name": "Novaria Logistics & Foundry Depot #74",
      "type": "industrial",
      "center": {
        "x": 4500,
        "y": 2014
      },
      "footprint": [
        {
          "x": 4410,
          "y": 1930
        },
        {
          "x": 4590,
          "y": 1930
        },
        {
          "x": 4590,
          "y": 2098
        },
        {
          "x": 4410,
          "y": 2098
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-ind-75",
      "name": "Novaria Logistics & Foundry Depot #75",
      "type": "industrial",
      "center": {
        "x": 4700,
        "y": 2014
      },
      "footprint": [
        {
          "x": 4610,
          "y": 1930
        },
        {
          "x": 4790,
          "y": 1930
        },
        {
          "x": 4790,
          "y": 2098
        },
        {
          "x": 4610,
          "y": 2098
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-1",
      "name": "Fairview Garden Villa #1",
      "type": "residential_house",
      "center": {
        "x": 1500,
        "y": 1100
      },
      "footprint": [
        {
          "x": 1410,
          "y": 1010
        },
        {
          "x": 1590,
          "y": 1010
        },
        {
          "x": 1590,
          "y": 1190
        },
        {
          "x": 1410,
          "y": 1190
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-2",
      "name": "Fairview Garden Villa #2",
      "type": "residential_house",
      "center": {
        "x": 1700,
        "y": 1100
      },
      "footprint": [
        {
          "x": 1610,
          "y": 1010
        },
        {
          "x": 1790,
          "y": 1010
        },
        {
          "x": 1790,
          "y": 1190
        },
        {
          "x": 1610,
          "y": 1190
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-3",
      "name": "Fairview Garden Villa #3",
      "type": "residential_house",
      "center": {
        "x": 1900,
        "y": 1100
      },
      "footprint": [
        {
          "x": 1810,
          "y": 1010
        },
        {
          "x": 1990,
          "y": 1010
        },
        {
          "x": 1990,
          "y": 1190
        },
        {
          "x": 1810,
          "y": 1190
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-4",
      "name": "Fairview Garden Villa #4",
      "type": "residential_house",
      "center": {
        "x": 2100,
        "y": 1100
      },
      "footprint": [
        {
          "x": 2010,
          "y": 1010
        },
        {
          "x": 2190,
          "y": 1010
        },
        {
          "x": 2190,
          "y": 1190
        },
        {
          "x": 2010,
          "y": 1190
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-5",
      "name": "Fairview Garden Villa #5",
      "type": "residential_house",
      "center": {
        "x": 2300,
        "y": 1100
      },
      "footprint": [
        {
          "x": 2210,
          "y": 1010
        },
        {
          "x": 2390,
          "y": 1010
        },
        {
          "x": 2390,
          "y": 1190
        },
        {
          "x": 2210,
          "y": 1190
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-6",
      "name": "Fairview Garden Villa #6",
      "type": "residential_house",
      "center": {
        "x": 2500,
        "y": 1100
      },
      "footprint": [
        {
          "x": 2410,
          "y": 1010
        },
        {
          "x": 2590,
          "y": 1010
        },
        {
          "x": 2590,
          "y": 1190
        },
        {
          "x": 2410,
          "y": 1190
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-7",
      "name": "Fairview Garden Villa #7",
      "type": "residential_house",
      "center": {
        "x": 2700,
        "y": 1100
      },
      "footprint": [
        {
          "x": 2610,
          "y": 1010
        },
        {
          "x": 2790,
          "y": 1010
        },
        {
          "x": 2790,
          "y": 1190
        },
        {
          "x": 2610,
          "y": 1190
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-8",
      "name": "Fairview Garden Villa #8",
      "type": "residential_house",
      "center": {
        "x": 2900,
        "y": 1100
      },
      "footprint": [
        {
          "x": 2810,
          "y": 1010
        },
        {
          "x": 2990,
          "y": 1010
        },
        {
          "x": 2990,
          "y": 1190
        },
        {
          "x": 2810,
          "y": 1190
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-9",
      "name": "Fairview Garden Villa #9",
      "type": "residential_house",
      "center": {
        "x": 3100,
        "y": 1100
      },
      "footprint": [
        {
          "x": 3010,
          "y": 1010
        },
        {
          "x": 3190,
          "y": 1010
        },
        {
          "x": 3190,
          "y": 1190
        },
        {
          "x": 3010,
          "y": 1190
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-10",
      "name": "Fairview Garden Villa #10",
      "type": "residential_house",
      "center": {
        "x": 3300,
        "y": 1100
      },
      "footprint": [
        {
          "x": 3210,
          "y": 1010
        },
        {
          "x": 3390,
          "y": 1010
        },
        {
          "x": 3390,
          "y": 1190
        },
        {
          "x": 3210,
          "y": 1190
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-11",
      "name": "Fairview Garden Villa #11",
      "type": "residential_house",
      "center": {
        "x": 1500,
        "y": 1300
      },
      "footprint": [
        {
          "x": 1410,
          "y": 1210
        },
        {
          "x": 1590,
          "y": 1210
        },
        {
          "x": 1590,
          "y": 1390
        },
        {
          "x": 1410,
          "y": 1390
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-12",
      "name": "Fairview Garden Villa #12",
      "type": "residential_house",
      "center": {
        "x": 1700,
        "y": 1300
      },
      "footprint": [
        {
          "x": 1610,
          "y": 1210
        },
        {
          "x": 1790,
          "y": 1210
        },
        {
          "x": 1790,
          "y": 1390
        },
        {
          "x": 1610,
          "y": 1390
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-13",
      "name": "Fairview Garden Villa #13",
      "type": "residential_house",
      "center": {
        "x": 1900,
        "y": 1300
      },
      "footprint": [
        {
          "x": 1810,
          "y": 1210
        },
        {
          "x": 1990,
          "y": 1210
        },
        {
          "x": 1990,
          "y": 1390
        },
        {
          "x": 1810,
          "y": 1390
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-14",
      "name": "Fairview Garden Villa #14",
      "type": "residential_house",
      "center": {
        "x": 2100,
        "y": 1300
      },
      "footprint": [
        {
          "x": 2010,
          "y": 1210
        },
        {
          "x": 2190,
          "y": 1210
        },
        {
          "x": 2190,
          "y": 1390
        },
        {
          "x": 2010,
          "y": 1390
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-15",
      "name": "Fairview Garden Villa #15",
      "type": "residential_house",
      "center": {
        "x": 2300,
        "y": 1300
      },
      "footprint": [
        {
          "x": 2210,
          "y": 1210
        },
        {
          "x": 2390,
          "y": 1210
        },
        {
          "x": 2390,
          "y": 1390
        },
        {
          "x": 2210,
          "y": 1390
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-16",
      "name": "Fairview Garden Villa #16",
      "type": "residential_house",
      "center": {
        "x": 2500,
        "y": 1300
      },
      "footprint": [
        {
          "x": 2410,
          "y": 1210
        },
        {
          "x": 2590,
          "y": 1210
        },
        {
          "x": 2590,
          "y": 1390
        },
        {
          "x": 2410,
          "y": 1390
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-17",
      "name": "Fairview Garden Villa #17",
      "type": "residential_house",
      "center": {
        "x": 2700,
        "y": 1300
      },
      "footprint": [
        {
          "x": 2610,
          "y": 1210
        },
        {
          "x": 2790,
          "y": 1210
        },
        {
          "x": 2790,
          "y": 1390
        },
        {
          "x": 2610,
          "y": 1390
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-18",
      "name": "Fairview Garden Villa #18",
      "type": "residential_house",
      "center": {
        "x": 2900,
        "y": 1300
      },
      "footprint": [
        {
          "x": 2810,
          "y": 1210
        },
        {
          "x": 2990,
          "y": 1210
        },
        {
          "x": 2990,
          "y": 1390
        },
        {
          "x": 2810,
          "y": 1390
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-19",
      "name": "Fairview Garden Villa #19",
      "type": "residential_house",
      "center": {
        "x": 3100,
        "y": 1300
      },
      "footprint": [
        {
          "x": 3010,
          "y": 1210
        },
        {
          "x": 3190,
          "y": 1210
        },
        {
          "x": 3190,
          "y": 1390
        },
        {
          "x": 3010,
          "y": 1390
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-20",
      "name": "Fairview Garden Villa #20",
      "type": "residential_house",
      "center": {
        "x": 3300,
        "y": 1300
      },
      "footprint": [
        {
          "x": 3210,
          "y": 1210
        },
        {
          "x": 3390,
          "y": 1210
        },
        {
          "x": 3390,
          "y": 1390
        },
        {
          "x": 3210,
          "y": 1390
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-21",
      "name": "Fairview Garden Villa #21",
      "type": "residential_house",
      "center": {
        "x": 1500,
        "y": 1500
      },
      "footprint": [
        {
          "x": 1410,
          "y": 1410
        },
        {
          "x": 1590,
          "y": 1410
        },
        {
          "x": 1590,
          "y": 1590
        },
        {
          "x": 1410,
          "y": 1590
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-22",
      "name": "Fairview Garden Villa #22",
      "type": "residential_house",
      "center": {
        "x": 1700,
        "y": 1500
      },
      "footprint": [
        {
          "x": 1610,
          "y": 1410
        },
        {
          "x": 1790,
          "y": 1410
        },
        {
          "x": 1790,
          "y": 1590
        },
        {
          "x": 1610,
          "y": 1590
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-23",
      "name": "Fairview Garden Villa #23",
      "type": "residential_house",
      "center": {
        "x": 1900,
        "y": 1500
      },
      "footprint": [
        {
          "x": 1810,
          "y": 1410
        },
        {
          "x": 1990,
          "y": 1410
        },
        {
          "x": 1990,
          "y": 1590
        },
        {
          "x": 1810,
          "y": 1590
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-24",
      "name": "Fairview Garden Villa #24",
      "type": "residential_house",
      "center": {
        "x": 2100,
        "y": 1500
      },
      "footprint": [
        {
          "x": 2010,
          "y": 1410
        },
        {
          "x": 2190,
          "y": 1410
        },
        {
          "x": 2190,
          "y": 1590
        },
        {
          "x": 2010,
          "y": 1590
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-25",
      "name": "Fairview Garden Villa #25",
      "type": "residential_house",
      "center": {
        "x": 2300,
        "y": 1500
      },
      "footprint": [
        {
          "x": 2210,
          "y": 1410
        },
        {
          "x": 2390,
          "y": 1410
        },
        {
          "x": 2390,
          "y": 1590
        },
        {
          "x": 2210,
          "y": 1590
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-26",
      "name": "Fairview Garden Villa #26",
      "type": "residential_house",
      "center": {
        "x": 2500,
        "y": 1500
      },
      "footprint": [
        {
          "x": 2410,
          "y": 1410
        },
        {
          "x": 2590,
          "y": 1410
        },
        {
          "x": 2590,
          "y": 1590
        },
        {
          "x": 2410,
          "y": 1590
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-27",
      "name": "Fairview Garden Villa #27",
      "type": "residential_house",
      "center": {
        "x": 2700,
        "y": 1500
      },
      "footprint": [
        {
          "x": 2610,
          "y": 1410
        },
        {
          "x": 2790,
          "y": 1410
        },
        {
          "x": 2790,
          "y": 1590
        },
        {
          "x": 2610,
          "y": 1590
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-28",
      "name": "Fairview Garden Villa #28",
      "type": "residential_house",
      "center": {
        "x": 2900,
        "y": 1500
      },
      "footprint": [
        {
          "x": 2810,
          "y": 1410
        },
        {
          "x": 2990,
          "y": 1410
        },
        {
          "x": 2990,
          "y": 1590
        },
        {
          "x": 2810,
          "y": 1590
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-29",
      "name": "Fairview Garden Villa #29",
      "type": "residential_house",
      "center": {
        "x": 3100,
        "y": 1500
      },
      "footprint": [
        {
          "x": 3010,
          "y": 1410
        },
        {
          "x": 3190,
          "y": 1410
        },
        {
          "x": 3190,
          "y": 1590
        },
        {
          "x": 3010,
          "y": 1590
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-30",
      "name": "Fairview Garden Villa #30",
      "type": "residential_house",
      "center": {
        "x": 3300,
        "y": 1500
      },
      "footprint": [
        {
          "x": 3210,
          "y": 1410
        },
        {
          "x": 3390,
          "y": 1410
        },
        {
          "x": 3390,
          "y": 1590
        },
        {
          "x": 3210,
          "y": 1590
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-31",
      "name": "Fairview Garden Villa #31",
      "type": "residential_house",
      "center": {
        "x": 1500,
        "y": 1700
      },
      "footprint": [
        {
          "x": 1410,
          "y": 1610
        },
        {
          "x": 1590,
          "y": 1610
        },
        {
          "x": 1590,
          "y": 1790
        },
        {
          "x": 1410,
          "y": 1790
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-32",
      "name": "Fairview Garden Villa #32",
      "type": "residential_house",
      "center": {
        "x": 1700,
        "y": 1700
      },
      "footprint": [
        {
          "x": 1610,
          "y": 1610
        },
        {
          "x": 1790,
          "y": 1610
        },
        {
          "x": 1790,
          "y": 1790
        },
        {
          "x": 1610,
          "y": 1790
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-33",
      "name": "Fairview Garden Villa #33",
      "type": "residential_house",
      "center": {
        "x": 1900,
        "y": 1700
      },
      "footprint": [
        {
          "x": 1810,
          "y": 1610
        },
        {
          "x": 1990,
          "y": 1610
        },
        {
          "x": 1990,
          "y": 1790
        },
        {
          "x": 1810,
          "y": 1790
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-34",
      "name": "Fairview Garden Villa #34",
      "type": "residential_house",
      "center": {
        "x": 2100,
        "y": 1700
      },
      "footprint": [
        {
          "x": 2010,
          "y": 1610
        },
        {
          "x": 2190,
          "y": 1610
        },
        {
          "x": 2190,
          "y": 1790
        },
        {
          "x": 2010,
          "y": 1790
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-35",
      "name": "Fairview Garden Villa #35",
      "type": "residential_house",
      "center": {
        "x": 2300,
        "y": 1700
      },
      "footprint": [
        {
          "x": 2210,
          "y": 1610
        },
        {
          "x": 2390,
          "y": 1610
        },
        {
          "x": 2390,
          "y": 1790
        },
        {
          "x": 2210,
          "y": 1790
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-36",
      "name": "Fairview Garden Villa #36",
      "type": "residential_house",
      "center": {
        "x": 2500,
        "y": 1700
      },
      "footprint": [
        {
          "x": 2410,
          "y": 1610
        },
        {
          "x": 2590,
          "y": 1610
        },
        {
          "x": 2590,
          "y": 1790
        },
        {
          "x": 2410,
          "y": 1790
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-37",
      "name": "Fairview Garden Villa #37",
      "type": "residential_house",
      "center": {
        "x": 2700,
        "y": 1700
      },
      "footprint": [
        {
          "x": 2610,
          "y": 1610
        },
        {
          "x": 2790,
          "y": 1610
        },
        {
          "x": 2790,
          "y": 1790
        },
        {
          "x": 2610,
          "y": 1790
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-38",
      "name": "Fairview Garden Villa #38",
      "type": "residential_house",
      "center": {
        "x": 2900,
        "y": 1700
      },
      "footprint": [
        {
          "x": 2810,
          "y": 1610
        },
        {
          "x": 2990,
          "y": 1610
        },
        {
          "x": 2990,
          "y": 1790
        },
        {
          "x": 2810,
          "y": 1790
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-39",
      "name": "Fairview Garden Villa #39",
      "type": "residential_house",
      "center": {
        "x": 3100,
        "y": 1700
      },
      "footprint": [
        {
          "x": 3010,
          "y": 1610
        },
        {
          "x": 3190,
          "y": 1610
        },
        {
          "x": 3190,
          "y": 1790
        },
        {
          "x": 3010,
          "y": 1790
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-40",
      "name": "Fairview Garden Villa #40",
      "type": "residential_house",
      "center": {
        "x": 3300,
        "y": 1700
      },
      "footprint": [
        {
          "x": 3210,
          "y": 1610
        },
        {
          "x": 3390,
          "y": 1610
        },
        {
          "x": 3390,
          "y": 1790
        },
        {
          "x": 3210,
          "y": 1790
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-41",
      "name": "Fairview Garden Villa #41",
      "type": "residential_house",
      "center": {
        "x": 1500,
        "y": 1900
      },
      "footprint": [
        {
          "x": 1410,
          "y": 1810
        },
        {
          "x": 1590,
          "y": 1810
        },
        {
          "x": 1590,
          "y": 1990
        },
        {
          "x": 1410,
          "y": 1990
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-42",
      "name": "Fairview Garden Villa #42",
      "type": "residential_house",
      "center": {
        "x": 1700,
        "y": 1900
      },
      "footprint": [
        {
          "x": 1610,
          "y": 1810
        },
        {
          "x": 1790,
          "y": 1810
        },
        {
          "x": 1790,
          "y": 1990
        },
        {
          "x": 1610,
          "y": 1990
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-43",
      "name": "Fairview Garden Villa #43",
      "type": "residential_house",
      "center": {
        "x": 1900,
        "y": 1900
      },
      "footprint": [
        {
          "x": 1810,
          "y": 1810
        },
        {
          "x": 1990,
          "y": 1810
        },
        {
          "x": 1990,
          "y": 1990
        },
        {
          "x": 1810,
          "y": 1990
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-44",
      "name": "Fairview Garden Villa #44",
      "type": "residential_house",
      "center": {
        "x": 2100,
        "y": 1900
      },
      "footprint": [
        {
          "x": 2010,
          "y": 1810
        },
        {
          "x": 2190,
          "y": 1810
        },
        {
          "x": 2190,
          "y": 1990
        },
        {
          "x": 2010,
          "y": 1990
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-45",
      "name": "Fairview Garden Villa #45",
      "type": "residential_house",
      "center": {
        "x": 2300,
        "y": 1900
      },
      "footprint": [
        {
          "x": 2210,
          "y": 1810
        },
        {
          "x": 2390,
          "y": 1810
        },
        {
          "x": 2390,
          "y": 1990
        },
        {
          "x": 2210,
          "y": 1990
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-46",
      "name": "Fairview Garden Villa #46",
      "type": "residential_house",
      "center": {
        "x": 2500,
        "y": 1900
      },
      "footprint": [
        {
          "x": 2410,
          "y": 1810
        },
        {
          "x": 2590,
          "y": 1810
        },
        {
          "x": 2590,
          "y": 1990
        },
        {
          "x": 2410,
          "y": 1990
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-47",
      "name": "Fairview Garden Villa #47",
      "type": "residential_house",
      "center": {
        "x": 2700,
        "y": 1900
      },
      "footprint": [
        {
          "x": 2610,
          "y": 1810
        },
        {
          "x": 2790,
          "y": 1810
        },
        {
          "x": 2790,
          "y": 1990
        },
        {
          "x": 2610,
          "y": 1990
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-48",
      "name": "Fairview Garden Villa #48",
      "type": "residential_house",
      "center": {
        "x": 2900,
        "y": 1900
      },
      "footprint": [
        {
          "x": 2810,
          "y": 1810
        },
        {
          "x": 2990,
          "y": 1810
        },
        {
          "x": 2990,
          "y": 1990
        },
        {
          "x": 2810,
          "y": 1990
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-49",
      "name": "Fairview Garden Villa #49",
      "type": "residential_house",
      "center": {
        "x": 3100,
        "y": 1900
      },
      "footprint": [
        {
          "x": 3010,
          "y": 1810
        },
        {
          "x": 3190,
          "y": 1810
        },
        {
          "x": 3190,
          "y": 1990
        },
        {
          "x": 3010,
          "y": 1990
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-50",
      "name": "Fairview Garden Villa #50",
      "type": "residential_house",
      "center": {
        "x": 3300,
        "y": 1900
      },
      "footprint": [
        {
          "x": 3210,
          "y": 1810
        },
        {
          "x": 3390,
          "y": 1810
        },
        {
          "x": 3390,
          "y": 1990
        },
        {
          "x": 3210,
          "y": 1990
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-51",
      "name": "Fairview Garden Villa #51",
      "type": "residential_house",
      "center": {
        "x": 1500,
        "y": 2100
      },
      "footprint": [
        {
          "x": 1410,
          "y": 2010
        },
        {
          "x": 1590,
          "y": 2010
        },
        {
          "x": 1590,
          "y": 2190
        },
        {
          "x": 1410,
          "y": 2190
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-52",
      "name": "Fairview Garden Villa #52",
      "type": "residential_house",
      "center": {
        "x": 1700,
        "y": 2100
      },
      "footprint": [
        {
          "x": 1610,
          "y": 2010
        },
        {
          "x": 1790,
          "y": 2010
        },
        {
          "x": 1790,
          "y": 2190
        },
        {
          "x": 1610,
          "y": 2190
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-fv-53",
      "name": "Fairview Garden Villa #53",
      "type": "residential_house",
      "center": {
        "x": 1900,
        "y": 2100
      },
      "footprint": [
        {
          "x": 1810,
          "y": 2010
        },
        {
          "x": 1990,
          "y": 2010
        },
        {
          "x": 1990,
          "y": 2190
        },
        {
          "x": 1810,
          "y": 2190
        }
      ],
      "floors": 2,
      "unitCount": 8
    },
    {
      "id": "bld-fv-54",
      "name": "Fairview Garden Villa #54",
      "type": "residential_house",
      "center": {
        "x": 2100,
        "y": 2100
      },
      "footprint": [
        {
          "x": 2010,
          "y": 2010
        },
        {
          "x": 2190,
          "y": 2010
        },
        {
          "x": 2190,
          "y": 2190
        },
        {
          "x": 2010,
          "y": 2190
        }
      ],
      "floors": 3,
      "unitCount": 12
    },
    {
      "id": "bld-fv-55",
      "name": "Fairview Garden Villa #55",
      "type": "residential_house",
      "center": {
        "x": 2300,
        "y": 2100
      },
      "footprint": [
        {
          "x": 2210,
          "y": 2010
        },
        {
          "x": 2390,
          "y": 2010
        },
        {
          "x": 2390,
          "y": 2190
        },
        {
          "x": 2210,
          "y": 2190
        }
      ],
      "floors": 1,
      "unitCount": 4
    },
    {
      "id": "bld-civic-1",
      "name": "Federal Ministry Pavilion #1",
      "type": "institutional",
      "center": {
        "x": 3800,
        "y": 5757
      },
      "footprint": [
        {
          "x": 3755,
          "y": 5686
        },
        {
          "x": 3845,
          "y": 5686
        },
        {
          "x": 3845,
          "y": 5828
        },
        {
          "x": 3755,
          "y": 5828
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-civic-2",
      "name": "Federal Ministry Pavilion #2",
      "type": "institutional",
      "center": {
        "x": 3900,
        "y": 5757
      },
      "footprint": [
        {
          "x": 3855,
          "y": 5686
        },
        {
          "x": 3945,
          "y": 5686
        },
        {
          "x": 3945,
          "y": 5828
        },
        {
          "x": 3855,
          "y": 5828
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-civic-3",
      "name": "Federal Ministry Pavilion #3",
      "type": "institutional",
      "center": {
        "x": 4000,
        "y": 5757
      },
      "footprint": [
        {
          "x": 3955,
          "y": 5686
        },
        {
          "x": 4045,
          "y": 5686
        },
        {
          "x": 4045,
          "y": 5828
        },
        {
          "x": 3955,
          "y": 5828
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-civic-4",
      "name": "Federal Ministry Pavilion #4",
      "type": "institutional",
      "center": {
        "x": 4100,
        "y": 5757
      },
      "footprint": [
        {
          "x": 4055,
          "y": 5686
        },
        {
          "x": 4145,
          "y": 5686
        },
        {
          "x": 4145,
          "y": 5828
        },
        {
          "x": 4055,
          "y": 5828
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-civic-5",
      "name": "Federal Ministry Pavilion #5",
      "type": "institutional",
      "center": {
        "x": 4200,
        "y": 5757
      },
      "footprint": [
        {
          "x": 4155,
          "y": 5686
        },
        {
          "x": 4245,
          "y": 5686
        },
        {
          "x": 4245,
          "y": 5828
        },
        {
          "x": 4155,
          "y": 5828
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-civic-6",
      "name": "Federal Ministry Pavilion #6",
      "type": "institutional",
      "center": {
        "x": 3800,
        "y": 5914
      },
      "footprint": [
        {
          "x": 3755,
          "y": 5843
        },
        {
          "x": 3845,
          "y": 5843
        },
        {
          "x": 3845,
          "y": 5985
        },
        {
          "x": 3755,
          "y": 5985
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-civic-7",
      "name": "Federal Ministry Pavilion #7",
      "type": "institutional",
      "center": {
        "x": 3900,
        "y": 5914
      },
      "footprint": [
        {
          "x": 3855,
          "y": 5843
        },
        {
          "x": 3945,
          "y": 5843
        },
        {
          "x": 3945,
          "y": 5985
        },
        {
          "x": 3855,
          "y": 5985
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-civic-8",
      "name": "Federal Ministry Pavilion #8",
      "type": "institutional",
      "center": {
        "x": 4000,
        "y": 5914
      },
      "footprint": [
        {
          "x": 3955,
          "y": 5843
        },
        {
          "x": 4045,
          "y": 5843
        },
        {
          "x": 4045,
          "y": 5985
        },
        {
          "x": 3955,
          "y": 5985
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-civic-9",
      "name": "Federal Ministry Pavilion #9",
      "type": "institutional",
      "center": {
        "x": 4100,
        "y": 5914
      },
      "footprint": [
        {
          "x": 4055,
          "y": 5843
        },
        {
          "x": 4145,
          "y": 5843
        },
        {
          "x": 4145,
          "y": 5985
        },
        {
          "x": 4055,
          "y": 5985
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-civic-10",
      "name": "Federal Ministry Pavilion #10",
      "type": "institutional",
      "center": {
        "x": 4200,
        "y": 5914
      },
      "footprint": [
        {
          "x": 4155,
          "y": 5843
        },
        {
          "x": 4245,
          "y": 5843
        },
        {
          "x": 4245,
          "y": 5985
        },
        {
          "x": 4155,
          "y": 5985
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-civic-11",
      "name": "Federal Ministry Pavilion #11",
      "type": "institutional",
      "center": {
        "x": 3800,
        "y": 6071
      },
      "footprint": [
        {
          "x": 3755,
          "y": 6000
        },
        {
          "x": 3845,
          "y": 6000
        },
        {
          "x": 3845,
          "y": 6142
        },
        {
          "x": 3755,
          "y": 6142
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-civic-12",
      "name": "Federal Ministry Pavilion #12",
      "type": "institutional",
      "center": {
        "x": 3900,
        "y": 6071
      },
      "footprint": [
        {
          "x": 3855,
          "y": 6000
        },
        {
          "x": 3945,
          "y": 6000
        },
        {
          "x": 3945,
          "y": 6142
        },
        {
          "x": 3855,
          "y": 6142
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-civic-13",
      "name": "Federal Ministry Pavilion #13",
      "type": "institutional",
      "center": {
        "x": 4000,
        "y": 6071
      },
      "footprint": [
        {
          "x": 3955,
          "y": 6000
        },
        {
          "x": 4045,
          "y": 6000
        },
        {
          "x": 4045,
          "y": 6142
        },
        {
          "x": 3955,
          "y": 6142
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-civic-14",
      "name": "Federal Ministry Pavilion #14",
      "type": "institutional",
      "center": {
        "x": 4100,
        "y": 6071
      },
      "footprint": [
        {
          "x": 4055,
          "y": 6000
        },
        {
          "x": 4145,
          "y": 6000
        },
        {
          "x": 4145,
          "y": 6142
        },
        {
          "x": 4055,
          "y": 6142
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-civic-15",
      "name": "Federal Ministry Pavilion #15",
      "type": "institutional",
      "center": {
        "x": 4200,
        "y": 6071
      },
      "footprint": [
        {
          "x": 4155,
          "y": 6000
        },
        {
          "x": 4245,
          "y": 6000
        },
        {
          "x": 4245,
          "y": 6142
        },
        {
          "x": 4155,
          "y": 6142
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-civic-16",
      "name": "Federal Ministry Pavilion #16",
      "type": "institutional",
      "center": {
        "x": 3800,
        "y": 6229
      },
      "footprint": [
        {
          "x": 3755,
          "y": 6158
        },
        {
          "x": 3845,
          "y": 6158
        },
        {
          "x": 3845,
          "y": 6300
        },
        {
          "x": 3755,
          "y": 6300
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-civic-17",
      "name": "Federal Ministry Pavilion #17",
      "type": "institutional",
      "center": {
        "x": 3900,
        "y": 6229
      },
      "footprint": [
        {
          "x": 3855,
          "y": 6158
        },
        {
          "x": 3945,
          "y": 6158
        },
        {
          "x": 3945,
          "y": 6300
        },
        {
          "x": 3855,
          "y": 6300
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-civic-18",
      "name": "Federal Ministry Pavilion #18",
      "type": "institutional",
      "center": {
        "x": 4000,
        "y": 6229
      },
      "footprint": [
        {
          "x": 3955,
          "y": 6158
        },
        {
          "x": 4045,
          "y": 6158
        },
        {
          "x": 4045,
          "y": 6300
        },
        {
          "x": 3955,
          "y": 6300
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-civic-19",
      "name": "Federal Ministry Pavilion #19",
      "type": "institutional",
      "center": {
        "x": 4100,
        "y": 6229
      },
      "footprint": [
        {
          "x": 4055,
          "y": 6158
        },
        {
          "x": 4145,
          "y": 6158
        },
        {
          "x": 4145,
          "y": 6300
        },
        {
          "x": 4055,
          "y": 6300
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-civic-20",
      "name": "Federal Ministry Pavilion #20",
      "type": "institutional",
      "center": {
        "x": 4200,
        "y": 6229
      },
      "footprint": [
        {
          "x": 4155,
          "y": 6158
        },
        {
          "x": 4245,
          "y": 6158
        },
        {
          "x": 4245,
          "y": 6300
        },
        {
          "x": 4155,
          "y": 6300
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-civic-21",
      "name": "Federal Ministry Pavilion #21",
      "type": "institutional",
      "center": {
        "x": 3800,
        "y": 6386
      },
      "footprint": [
        {
          "x": 3755,
          "y": 6315
        },
        {
          "x": 3845,
          "y": 6315
        },
        {
          "x": 3845,
          "y": 6457
        },
        {
          "x": 3755,
          "y": 6457
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-civic-22",
      "name": "Federal Ministry Pavilion #22",
      "type": "institutional",
      "center": {
        "x": 3900,
        "y": 6386
      },
      "footprint": [
        {
          "x": 3855,
          "y": 6315
        },
        {
          "x": 3945,
          "y": 6315
        },
        {
          "x": 3945,
          "y": 6457
        },
        {
          "x": 3855,
          "y": 6457
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-civic-23",
      "name": "Federal Ministry Pavilion #23",
      "type": "institutional",
      "center": {
        "x": 4000,
        "y": 6386
      },
      "footprint": [
        {
          "x": 3955,
          "y": 6315
        },
        {
          "x": 4045,
          "y": 6315
        },
        {
          "x": 4045,
          "y": 6457
        },
        {
          "x": 3955,
          "y": 6457
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-civic-24",
      "name": "Federal Ministry Pavilion #24",
      "type": "institutional",
      "center": {
        "x": 4100,
        "y": 6386
      },
      "footprint": [
        {
          "x": 4055,
          "y": 6315
        },
        {
          "x": 4145,
          "y": 6315
        },
        {
          "x": 4145,
          "y": 6457
        },
        {
          "x": 4055,
          "y": 6457
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-civic-25",
      "name": "Federal Ministry Pavilion #25",
      "type": "institutional",
      "center": {
        "x": 4200,
        "y": 6386
      },
      "footprint": [
        {
          "x": 4155,
          "y": 6315
        },
        {
          "x": 4245,
          "y": 6315
        },
        {
          "x": 4245,
          "y": 6457
        },
        {
          "x": 4155,
          "y": 6457
        }
      ],
      "floors": 7,
      "unitCount": 28
    },
    {
      "id": "bld-civic-26",
      "name": "Federal Ministry Pavilion #26",
      "type": "institutional",
      "center": {
        "x": 3800,
        "y": 6543
      },
      "footprint": [
        {
          "x": 3755,
          "y": 6472
        },
        {
          "x": 3845,
          "y": 6472
        },
        {
          "x": 3845,
          "y": 6614
        },
        {
          "x": 3755,
          "y": 6614
        }
      ],
      "floors": 4,
      "unitCount": 16
    },
    {
      "id": "bld-civic-27",
      "name": "Federal Ministry Pavilion #27",
      "type": "institutional",
      "center": {
        "x": 3900,
        "y": 6543
      },
      "footprint": [
        {
          "x": 3855,
          "y": 6472
        },
        {
          "x": 3945,
          "y": 6472
        },
        {
          "x": 3945,
          "y": 6614
        },
        {
          "x": 3855,
          "y": 6614
        }
      ],
      "floors": 6,
      "unitCount": 24
    },
    {
      "id": "bld-civic-28",
      "name": "Federal Ministry Pavilion #28",
      "type": "institutional",
      "center": {
        "x": 4000,
        "y": 6543
      },
      "footprint": [
        {
          "x": 3955,
          "y": 6472
        },
        {
          "x": 4045,
          "y": 6472
        },
        {
          "x": 4045,
          "y": 6614
        },
        {
          "x": 3955,
          "y": 6614
        }
      ],
      "floors": 8,
      "unitCount": 32
    },
    {
      "id": "bld-civic-29",
      "name": "Federal Ministry Pavilion #29",
      "type": "institutional",
      "center": {
        "x": 4100,
        "y": 6543
      },
      "footprint": [
        {
          "x": 4055,
          "y": 6472
        },
        {
          "x": 4145,
          "y": 6472
        },
        {
          "x": 4145,
          "y": 6614
        },
        {
          "x": 4055,
          "y": 6614
        }
      ],
      "floors": 5,
      "unitCount": 20
    },
    {
      "id": "bld-civic-30",
      "name": "Federal Ministry Pavilion #30",
      "type": "institutional",
      "center": {
        "x": 4200,
        "y": 6543
      },
      "footprint": [
        {
          "x": 4155,
          "y": 6472
        },
        {
          "x": 4245,
          "y": 6472
        },
        {
          "x": 4245,
          "y": 6614
        },
        {
          "x": 4155,
          "y": 6614
        }
      ],
      "floors": 7,
      "unitCount": 28
    }
  ],
  "pois": [
    {
      "id": "poi-grand-central",
      "name": "Grand Central Concourse",
      "category": "transit_hub",
      "location": {
        "x": 4400,
        "y": 3700
      },
      "icon": "train",
      "description": "The bustling pulse of the metropolis where thousands intersect hourly."
    },
    {
      "id": "poi-cathedral-square",
      "name": "Cathedral Plaza",
      "category": "landmark",
      "location": {
        "x": 3600,
        "y": 3700
      },
      "icon": "church",
      "description": "Ancient stone bells echoing over open markets and cobblestone cafes."
    },
    {
      "id": "poi-financial-spire",
      "name": "Apex Skydeck (Level 68)",
      "category": "landmark",
      "location": {
        "x": 5200,
        "y": 3700
      },
      "icon": "building",
      "description": "Observation deck overlooking the harbor, river, and mountain peaks."
    },
    {
      "id": "poi-harbor-pier",
      "name": "Fishermans Wharf & Maritime Pier",
      "category": "tavern_food",
      "location": {
        "x": 6600,
        "y": 3700
      },
      "icon": "anchor",
      "description": "Seafood taverns, street musicians, and incoming ferry boats."
    },
    {
      "id": "poi-stock-exchange",
      "name": "Novaria Stock Exchange Trading Floor",
      "category": "civic",
      "location": {
        "x": 5800,
        "y": 3700
      },
      "icon": "bank",
      "description": "The capital heartbeat of the continental economy."
    },
    {
      "id": "poi-capitol-rotunda",
      "name": "Federal Senate Rotunda",
      "category": "civic",
      "location": {
        "x": 4400,
        "y": 6200
      },
      "icon": "landmark",
      "description": "Neoclassical dome and chambers of the supreme council."
    },
    {
      "id": "poi-supreme-court",
      "name": "Palace of Justice",
      "category": "civic",
      "location": {
        "x": 4100,
        "y": 6400
      },
      "icon": "scale",
      "description": "Pillared high courts and marble halls of jurisprudence."
    },
    {
      "id": "poi-national-opera",
      "name": "Royal Opera & Symphony Hall",
      "category": "landmark",
      "location": {
        "x": 5200,
        "y": 3300
      },
      "icon": "music",
      "description": "Acoustic masterpiece hosting world philharmonic performances."
    },
    {
      "id": "poi-museum-art",
      "name": "Metropolitan Museum of Fine Arts",
      "category": "landmark",
      "location": {
        "x": 3800,
        "y": 4200
      },
      "icon": "palette",
      "description": "Galleries preserving three centuries of continental masterpieces."
    },
    {
      "id": "poi-grand-library",
      "name": "Royal Archive & Great Library",
      "category": "landmark",
      "location": {
        "x": 2000,
        "y": 3700
      },
      "icon": "book",
      "description": "Three million volumes, ancient illuminated manuscripts, and reading atriums."
    },
    {
      "id": "poi-med-center",
      "name": "St. Jude Teaching Hospital",
      "category": "civic",
      "location": {
        "x": 2000,
        "y": 4200
      },
      "icon": "hospital",
      "description": "Premier medical center and surgical research facility."
    },
    {
      "id": "poi-coliseum-arena",
      "name": "Aurelia Metropolitan Arena",
      "category": "landmark",
      "location": {
        "x": 5600,
        "y": 5000
      },
      "icon": "trophy",
      "description": "60,000-seat sports and concert venue."
    },
    {
      "id": "poi-clocktower-market",
      "name": "Old Clocktower Covered Bazaar",
      "category": "shop_market",
      "location": {
        "x": 3300,
        "y": 3500
      },
      "icon": "shopping-bag",
      "description": "Victorian iron-and-glass market of artisan merchants and bakeries."
    },
    {
      "id": "poi-eastgate-galleria",
      "name": "Horizon Sky Galleria",
      "category": "shop_market",
      "location": {
        "x": 5400,
        "y": 5800
      },
      "icon": "shopping-cart",
      "description": "Four-story glass atrium shopping center."
    },
    {
      "id": "poi-port-lighthouse",
      "name": "Estuary Maritime Lighthouse",
      "category": "landmark",
      "location": {
        "x": 7500,
        "y": 2800
      },
      "icon": "compass",
      "description": "Historic beacon guarding the entrance to Novaria Bay."
    },
    {
      "id": "poi-customs-house",
      "name": "Imperial Customs & Port Authority",
      "category": "civic",
      "location": {
        "x": 6600,
        "y": 3300
      },
      "icon": "shield",
      "description": "Quayside authority inspecting international cargo ships."
    },
    {
      "id": "poi-botanical-conservatory",
      "name": "Aurelia Crystal Palm House",
      "category": "landmark",
      "location": {
        "x": 4100,
        "y": 5000
      },
      "icon": "sun",
      "description": "Victorian glasshouse with exotic equatorial flora."
    },
    {
      "id": "poi-fortress-citadel",
      "name": "Isla Novaria Fortress Bastion",
      "category": "landmark",
      "location": {
        "x": 3500,
        "y": 2820
      },
      "icon": "castle",
      "description": "17th-century star fortress commanding the river bend."
    },
    {
      "id": "poi-westmount-overlook",
      "name": "Westmount Panoramic Vista",
      "category": "landmark",
      "location": {
        "x": 1300,
        "y": 5600
      },
      "icon": "mountain",
      "description": "Scenic cliffside lookout over the entire illuminated skyline."
    },
    {
      "id": "poi-lake-fairview-pier",
      "name": "Lake Fairview Boathouse",
      "category": "tavern_food",
      "location": {
        "x": 2000,
        "y": 1400
      },
      "icon": "coffee",
      "description": "Lakeside cafe, kayak rentals, and picnic lawns."
    },
    {
      "id": "poi-foundry-museum",
      "name": "Historic Vulcan Smelter Works",
      "category": "landmark",
      "location": {
        "x": 5200,
        "y": 1600
      },
      "icon": "flame",
      "description": "Preserved 19th-century blast furnace and industrial heritage center."
    },
    {
      "id": "poi-smugglers-cove",
      "name": "Old Docks Smugglers Vault",
      "category": "danger_secret",
      "location": {
        "x": 6300,
        "y": 2900
      },
      "icon": "skull",
      "description": "Hidden brick chambers underneath the original wharf timbers."
    },
    {
      "id": "poi-secret-archives",
      "name": "Subterranean Ministry Crypts",
      "category": "danger_secret",
      "location": {
        "x": 3800,
        "y": 6400
      },
      "icon": "key",
      "description": "Restricted vaults containing unredacted diplomatic treaty records."
    },
    {
      "id": "poi-university-observatory",
      "name": "Crown Astronomical Observatory",
      "category": "landmark",
      "location": {
        "x": 1400,
        "y": 4200
      },
      "icon": "star",
      "description": "Historic refractor telescope dome perched atop university hill."
    }
  ],
  "topography": [
    {
      "id": "topo-citadel-contour-40",
      "name": "Citadel 40m Terrace",
      "type": "contour",
      "elevation": 40,
      "path": [
        {
          "x": 2900,
          "y": 3100
        },
        {
          "x": 3600,
          "y": 3150
        },
        {
          "x": 4200,
          "y": 3250
        },
        {
          "x": 4300,
          "y": 4200
        },
        {
          "x": 3000,
          "y": 4200
        }
      ]
    },
    {
      "id": "topo-citadel-contour-80",
      "name": "Citadel 80m Acropolis",
      "type": "contour",
      "elevation": 80,
      "path": [
        {
          "x": 3300,
          "y": 3400
        },
        {
          "x": 3900,
          "y": 3400
        },
        {
          "x": 4000,
          "y": 3900
        },
        {
          "x": 3350,
          "y": 3900
        }
      ]
    },
    {
      "id": "topo-westmount-contour-50",
      "name": "Westmount 50m Contour",
      "type": "contour",
      "elevation": 50,
      "path": [
        {
          "x": 1300,
          "y": 3200
        },
        {
          "x": 1450,
          "y": 4400
        },
        {
          "x": 1500,
          "y": 5600
        },
        {
          "x": 1400,
          "y": 6600
        }
      ]
    },
    {
      "id": "topo-westmount-contour-100",
      "name": "Westmount 100m High Ridge",
      "type": "contour",
      "elevation": 100,
      "path": [
        {
          "x": 1250,
          "y": 4600
        },
        {
          "x": 1350,
          "y": 5400
        },
        {
          "x": 1300,
          "y": 6200
        }
      ]
    },
    {
      "id": "topo-harbor-bluff-30",
      "name": "Harbor Headland 30m Contour",
      "type": "contour",
      "elevation": 30,
      "path": [
        {
          "x": 6100,
          "y": 3000
        },
        {
          "x": 6700,
          "y": 2900
        },
        {
          "x": 7100,
          "y": 3300
        },
        {
          "x": 7200,
          "y": 4200
        }
      ]
    },
    {
      "id": "topo-river-cliff-north",
      "name": "North River Gorge Palisades",
      "type": "cliff",
      "elevation": 45,
      "cliffSide": "right",
      "path": [
        {
          "x": 1800,
          "y": 2550
        },
        {
          "x": 3200,
          "y": 2650
        },
        {
          "x": 4600,
          "y": 2600
        },
        {
          "x": 5800,
          "y": 2450
        }
      ]
    },
    {
      "id": "topo-river-cliff-south",
      "name": "South Citadel Embankment Cliffs",
      "type": "cliff",
      "elevation": 40,
      "cliffSide": "left",
      "path": [
        {
          "x": 2600,
          "y": 3020
        },
        {
          "x": 3800,
          "y": 3020
        },
        {
          "x": 4500,
          "y": 2980
        }
      ]
    }
  ]
};
