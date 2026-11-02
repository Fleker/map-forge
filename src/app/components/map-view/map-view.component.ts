import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { MapStateService } from '../../services/map-state.service';
import { DemographicsService } from '../../services/demographics.service';
import { RoutingService } from '../../services/routing.service';
import { IsochroneService } from '../../services/isochrone.service';
import { Building, CityMap, District, NaturalFeature, POI, Point2D, Road, TopoFeature, TopoType, TransitLine, TransitStation } from '../../models/map.models';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('minimapCanvas') minimapCanvasRef?: ElementRef<HTMLCanvasElement>;

  state = inject(MapStateService);
  demographics = inject(DemographicsService);
  routing = inject(RoutingService);
  isochroneService = inject(IsochroneService);

  private map?: L.Map;
  private canvasRenderer?: L.Canvas;

  // Layer groups for fine-grained toggling
  private backgroundGroup = L.layerGroup();
  private waterParksGroup = L.layerGroup();
  private naturalFeatureLabelsGroup = L.layerGroup();
  private districtsGroup = L.layerGroup();
  private districtLabelsGroup = L.layerGroup();
  private topoGroup = L.layerGroup();
  private isochroneGroup = L.layerGroup();
  private roadsGroup = L.layerGroup();
  private roadLabelsGroup = L.layerGroup();
  private buildingsGroup = L.layerGroup();
  private buildingLabelsGroup = L.layerGroup();
  private transitLinesGroup = L.layerGroup();
  private transitStationsGroup = L.layerGroup();
  private stationLabelsGroup = L.layerGroup();
  private poisGroup = L.layerGroup();
  private gridGroup = L.layerGroup();
  private selectionGroup = L.layerGroup();
  private routeLayerGroup = L.layerGroup();
  private drawingLayerGroup = L.layerGroup();

  cursorCoords: Point2D = { x: 0, y: 0 };
  currentZoom = signal<number>(0);
  showLayersMenu = signal<boolean>(false);
  showJumpMenu = signal<boolean>(false);
  showMiniMap = signal<boolean>(true);

  // Isochrone & Topo signals
  isochroneMode = signal<'walk' | 'carriage' | 'transit'>('walk');
  topoDrawType = signal<TopoType>('cliff');

  // Viewport indicator on the minimap
  viewportBox = signal<{ left: string; top: string; width: string; height: string }>({
    left: '0%', top: '0%', width: '100%', height: '100%'
  });

  // Dynamic sectors for ultra-wide / massive maps (e.g. 20,000 x 2,000)
  readonly sectors = computed(() => {
    const map = this.state.currentMap();
    const count = Math.max(1, Math.min(10, Math.ceil(map.width / 2500)));
    const sectorWidth = map.width / count;
    const list: { id: number; label: string; startX: number; endX: number; centerX: number; centerY: number }[] = [];
    for (let i = 0; i < count; i++) {
      const startX = Math.round(i * sectorWidth);
      const endX = Math.round((i + 1) * sectorWidth);
      const centerX = Math.round((startX + endX) / 2);
      const centerY = Math.round(map.height / 2);
      list.push({
        id: i + 1,
        label: `Sector ${i + 1} (${startX}m - ${endX}m)`,
        startX,
        endX,
        centerX,
        centerY
      });
    }
    return list;
  });

  readonly landmarkBuildings = computed(() => {
    return this.state.currentMap().buildings.filter(b => b.isLandmark || b.type === 'institutional');
  });

  readonly allPois = computed(() => {
    return this.state.currentMap().pois;
  });

  readonly Math = Math;

  constructor() {
    // Re-render layers whenever currentMap changes
    effect(() => {
      const mapData = this.state.currentMap();
      if (this.map) {
        this.renderAllLayers();
        this.renderSelection();
        this.renderMiniMap();
      }
    });

    // Re-render selection highlight whenever selectedFeature changes
    effect(() => {
      const sel = this.state.selectedFeature();
      if (this.map) {
        this.renderSelection();
        if (sel) {
          this.panToSelected(sel.type, sel.id);
        }
      }
    });

    // Re-render route whenever routeResult changes
    effect(() => {
      const route = this.state.routeResult();
      if (this.map) {
        this.renderRoute();
      }
    });

    // Re-render isochrone whenever currentIsochrone changes
    effect(() => {
      const iso = this.state.currentIsochrone();
      if (this.map) {
        this.renderIsochrone();
      }
    });

    // Handle layer visibility changes
    effect(() => {
      const vis = this.state.layerVisibility();
      if (this.map) {
        this.syncLayerVisibility();
      }
    });

    // Handle tool changes
    effect(() => {
      const tool = this.state.activeTool();
      if (this.map) {
        this.updateCursorForTool(tool);
      }
    });
  }

  ngAfterViewInit() {
    this.initMap();
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  private initMap() {
    const currentMap = this.state.currentMap();
    const w = currentMap.width;
    const h = currentMap.height;

    // Use Canvas renderer for peak vector performance
    this.canvasRenderer = L.canvas({ padding: 0.5 });

    this.map = L.map(this.mapContainerRef.nativeElement, {
      crs: L.CRS.Simple,
      minZoom: -6, // Supports large maps up to 30,000+ units across
      maxZoom: 4,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      attributionControl: false,
      zoomControl: false,
      preferCanvas: true
    });

    // Bounds in CRS.Simple: [[yMin, xMin], [yMax, xMax]]
    const bounds: L.LatLngBoundsExpression = [[0, 0], [h, w]];

    // Add layer groups in order of depth
    this.backgroundGroup.addTo(this.map);
    this.districtsGroup.addTo(this.map);
    this.waterParksGroup.addTo(this.map);
    this.topoGroup.addTo(this.map);
    this.isochroneGroup.addTo(this.map);
    this.gridGroup.addTo(this.map);
    this.roadsGroup.addTo(this.map);
    this.buildingsGroup.addTo(this.map);
    this.transitLinesGroup.addTo(this.map);
    this.transitStationsGroup.addTo(this.map);
    this.poisGroup.addTo(this.map);

    // Labels & overlays on top
    this.districtLabelsGroup.addTo(this.map);
    this.naturalFeatureLabelsGroup.addTo(this.map);
    this.roadLabelsGroup.addTo(this.map);
    this.buildingLabelsGroup.addTo(this.map);
    this.stationLabelsGroup.addTo(this.map);
    this.selectionGroup.addTo(this.map);
    this.routeLayerGroup.addTo(this.map);
    this.drawingLayerGroup.addTo(this.map);

    // Initial fit bounds with a tick delay so the container layout dimensions are ready
    setTimeout(() => {
      if (this.map) {
        this.map.invalidateSize();
        this.map.fitBounds(bounds, { padding: [40, 40] });
        this.currentZoom.set(this.map.getZoom());
        this.updateZoomLabels();
        this.renderMiniMap();
        this.updateMiniMapViewport();
      }
    }, 80);

    // Map Event Listeners
    this.map.on('mousemove', (e: L.LeafletMouseEvent) => {
      this.cursorCoords = {
        x: Math.round(e.latlng.lng),
        y: Math.round(e.latlng.lat)
      };
    });

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
    });

    this.map.on('move', () => {
      if (this.map) {
        this.updateMiniMapViewport();
      }
    });

    this.map.on('zoomend', () => {
      if (this.map) {
        this.currentZoom.set(this.map.getZoom());
        this.updateZoomLabels();
        this.updateMiniMapViewport();
      }
    });

    this.renderAllLayers();
    this.updateCursorForTool(this.state.activeTool());
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  resetView() {
    if (!this.map) return;
    this.map.invalidateSize();
    const currentMap = this.state.currentMap();
    const bounds: L.LatLngBoundsExpression = [[0, 0], [currentMap.height, currentMap.width]];
    this.map.fitBounds(bounds, { padding: [40, 40] });
    this.updateMiniMapViewport();
  }

  jumpToSector(sector: { centerX: number; centerY: number }) {
    if (!this.map) return;
    const targetZoom = Math.max(this.map.getZoom(), -0.5);
    this.map.flyTo(L.latLng(sector.centerY, sector.centerX), targetZoom, { duration: 0.8 });
    this.showJumpMenu.set(false);
  }

  jumpToFeature(type: string, id: string) {
    this.state.selectedFeature.set({ type: type as any, id });
    this.panToSelected(type, id);
    this.showJumpMenu.set(false);
  }

  toggleMiniMap() {
    this.showMiniMap.set(!this.showMiniMap());
    if (this.showMiniMap()) {
      setTimeout(() => {
        this.renderMiniMap();
        this.updateMiniMapViewport();
      }, 20);
    }
  }

  onMinimapClick(e: MouseEvent) {
    const canvas = this.minimapCanvasRef?.nativeElement;
    if (!canvas || !this.map) return;
    const rect = canvas.getBoundingClientRect();
    const clickXFraction = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const clickYFraction = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    const currentMap = this.state.currentMap();
    const targetX = clickXFraction * currentMap.width;
    const targetY = currentMap.height - (clickYFraction * currentMap.height);
    this.map.panTo(L.latLng(targetY, targetX), { animate: true });
  }

  updateMiniMapViewport() {
    if (!this.map) return;
    const bounds = this.map.getBounds();
    const currentMap = this.state.currentMap();
    const mapW = currentMap.width;
    const mapH = currentMap.height;

    const west = bounds.getWest();
    const east = bounds.getEast();
    const south = bounds.getSouth();
    const north = bounds.getNorth();

    const leftPct = Math.max(0, Math.min(100, (west / mapW) * 100));
    const rightPct = Math.max(0, Math.min(100, (east / mapW) * 100));
    const widthPct = Math.max(2, Math.min(100 - leftPct, rightPct - leftPct));

    const topPct = Math.max(0, Math.min(100, ((mapH - north) / mapH) * 100));
    const bottomPct = Math.max(0, Math.min(100, ((mapH - south) / mapH) * 100));
    const heightPct = Math.max(2, Math.min(100 - topPct, bottomPct - topPct));

    this.viewportBox.set({
      left: `${leftPct.toFixed(1)}%`,
      top: `${topPct.toFixed(1)}%`,
      width: `${widthPct.toFixed(1)}%`,
      height: `${heightPct.toFixed(1)}%`
    });
  }

  renderMiniMap() {
    const canvas = this.minimapCanvasRef?.nativeElement;
    if (!canvas) return;
    const currentMap = this.state.currentMap();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const aspect = currentMap.width / Math.max(1, currentMap.height);
    const targetW = 280;
    const targetH = Math.max(36, Math.min(140, Math.round(targetW / aspect)));
    canvas.width = targetW;
    canvas.height = targetH;

    const w = canvas.width;
    const h = canvas.height;

    const era = currentMap.era;
    let minimapBg = '#161a22';
    if (era === 'cyberpunk_scifi') minimapBg = '#070a12';
    else if (era === 'contemporary_modern') minimapBg = '#11151e';
    else minimapBg = '#221c17';

    ctx.fillStyle = minimapBg;
    ctx.fillRect(0, 0, w, h);

    const scaleX = w / currentMap.width;
    const scaleY = h / currentMap.height;

    // Water & Parks
    currentMap.naturalFeatures.forEach(feat => {
      ctx.fillStyle = feat.type.includes('park') ? '#244033' : '#1e3a5f';
      ctx.beginPath();
      feat.polygon.forEach((p, i) => {
        const px = p.x * scaleX;
        const py = (currentMap.height - p.y) * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.fill();
    });

    // Districts
    currentMap.districts.forEach(d => {
      ctx.fillStyle = d.color || '#3b82f6';
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      d.polygon.forEach((p, i) => {
        const px = p.x * scaleX;
        const py = (currentMap.height - p.y) * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1.0;
    });

    // Roads
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    currentMap.roads.forEach(r => {
      ctx.beginPath();
      r.path.forEach((p, i) => {
        const px = p.x * scaleX;
        const py = (currentMap.height - p.y) * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
    });

    // Transit Lines
    ctx.lineWidth = 1.5;
    currentMap.transitLines.forEach(line => {
      ctx.strokeStyle = line.color || '#ef4444';
      ctx.beginPath();
      line.path.forEach((p, i) => {
        const px = p.x * scaleX;
        const py = (currentMap.height - p.y) * scaleY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
    });

    // Landmarks
    ctx.fillStyle = '#f59e0b';
    currentMap.buildings.forEach(b => {
      if (b.isLandmark || b.type === 'institutional') {
        const bx = b.center.x * scaleX;
        const by = (currentMap.height - b.center.y) * scaleY;
        ctx.fillRect(bx - 1.5, by - 1.5, 3, 3);
      }
    });

    this.updateMiniMapViewport();
  }

  private updateCursorForTool(tool: string) {
    if (!this.mapContainerRef) return;
    const el = this.mapContainerRef.nativeElement;
    el.classList.remove('tool-crosshair', 'tool-select', 'tool-pan');

    if (tool === 'select') el.classList.add('tool-select');
    else if (tool === 'pan') el.classList.add('tool-pan');
    else el.classList.add('tool-crosshair');
  }

  private syncLayerVisibility() {
    if (!this.map) return;
    const vis = this.state.layerVisibility();

    const toggle = (group: L.LayerGroup, isVisible: boolean) => {
      if (isVisible) {
        if (!this.map!.hasLayer(group)) this.map!.addLayer(group);
      } else {
        if (this.map!.hasLayer(group)) this.map!.removeLayer(group);
      }
    };

    toggle(this.districtsGroup, vis.districts);
    toggle(this.districtLabelsGroup, vis.districts && vis.districtLabels);
    toggle(this.topoGroup, vis.topography);
    toggle(this.isochroneGroup, vis.isochrone);
    toggle(this.waterParksGroup, vis.waterParks);
    toggle(this.naturalFeatureLabelsGroup, vis.waterParks);
    toggle(this.roadsGroup, vis.roads);
    toggle(this.roadLabelsGroup, vis.roads && vis.roadLabels);
    toggle(this.buildingsGroup, vis.buildings);
    toggle(this.buildingLabelsGroup, vis.buildings && vis.buildingLabels);
    toggle(this.transitLinesGroup, vis.transit);
    toggle(this.transitStationsGroup, vis.transitStations);
    toggle(this.stationLabelsGroup, vis.stationLabels && vis.transitStations);
    toggle(this.poisGroup, vis.pois);
    toggle(this.gridGroup, vis.grid);

    this.updateZoomLabels();
  }

  private renderAllLayers() {
    if (!this.map || !this.canvasRenderer) return;

    this.backgroundGroup.clearLayers();
    this.districtsGroup.clearLayers();
    this.districtLabelsGroup.clearLayers();
    this.waterParksGroup.clearLayers();
    this.naturalFeatureLabelsGroup.clearLayers();
    this.topoGroup.clearLayers();
    this.isochroneGroup.clearLayers();
    this.roadsGroup.clearLayers();
    this.roadLabelsGroup.clearLayers();
    this.buildingsGroup.clearLayers();
    this.buildingLabelsGroup.clearLayers();
    this.transitLinesGroup.clearLayers();
    this.transitStationsGroup.clearLayers();
    this.stationLabelsGroup.clearLayers();
    this.poisGroup.clearLayers();
    this.gridGroup.clearLayers();

    const mapData = this.state.currentMap();
    const era = mapData.era;

    // 0. Base Paper / Canvas Boundary - Era-Adaptive Dark Theming
    let paperFill = '#221c17'; // Rich dark aged vellum for Medieval (non-glaring in dark mode)
    let paperBorder = '#6b4f32';
    let defaultWaterColor = '#365369';
    let defaultWaterFill = '#182633';
    let defaultParkColor = '#3d5236';
    let defaultParkFill = '#1b2619';
    let roadCasingColor = '#14100c';
    let gridLineColor = 'rgba(200, 165, 120, 0.16)';

    if (era === 'victorian_steampunk') {
      paperFill = '#1e1b18'; // Dark mahogany / sepia atelier
      paperBorder = '#5c4836';
      defaultWaterColor = '#2b4457';
      defaultWaterFill = '#162430';
      defaultParkColor = '#344b32';
      defaultParkFill = '#182417';
      roadCasingColor = '#120f0c';
      gridLineColor = 'rgba(180, 150, 115, 0.16)';
    } else if (era === 'contemporary_modern') {
      paperFill = '#171b26';
      paperBorder = '#334155';
      defaultWaterColor = '#2563eb';
      defaultWaterFill = '#1e3a8a';
      defaultParkColor = '#059669';
      defaultParkFill = '#064e3b';
      roadCasingColor = '#0f172a';
      gridLineColor = 'rgba(255, 255, 255, 0.12)';
    } else if (era === 'cyberpunk_scifi') {
      paperFill = '#0a0d16';
      paperBorder = '#00f0ff';
      defaultWaterColor = '#0284c7';
      defaultWaterFill = '#082f49';
      defaultParkColor = '#10b981';
      defaultParkFill = '#064e3b';
      roadCasingColor = '#020617';
      gridLineColor = 'rgba(0, 240, 255, 0.18)';
    }

    const bgRect = L.rectangle([[0, 0], [mapData.height, mapData.width]], {
      renderer: this.canvasRenderer,
      fillColor: paperFill,
      fillOpacity: 1,
      color: paperBorder,
      weight: 3,
      interactive: false
    });
    this.backgroundGroup.addLayer(bgRect);

    // 1. Districts & District Labels (Rendered before natural features so parks/rivers sit on top)
    mapData.districts.forEach(dist => {
      const latLngs = dist.polygon.map(p => L.latLng(p.y, p.x));
      const poly = L.polygon(latLngs, {
        renderer: this.canvasRenderer,
        color: dist.color || '#3b82f6',
        dashArray: '6, 6',
        fillColor: dist.color || '#3b82f6',
        fillOpacity: dist.fillOpacity || 0.12,
        weight: 2
      });

      poly.bindTooltip(`<b>${dist.name}</b><br>${dist.description}`, { sticky: true });
      poly.on('click', (e) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'district', id: dist.id });
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      });
      this.districtsGroup.addLayer(poly);

      // District Name Label (Centered)
      const center = this.polygonCentroid(dist.polygon);
      const lines = this.splitIntoBalancedLines(dist.name);
      const titleHtml = lines.length > 1
        ? `<div class="district-title">${lines[0]}</div><div class="district-title">${lines.slice(1).join(' ')}</div>`
        : `<div class="district-title">${dist.name}</div>`;
      const districtLabel = L.marker(L.latLng(center.y, center.x), {
        icon: L.divIcon({
          className: 'map-district-label',
          html: `${titleHtml}<div class="district-type">${dist.type}</div>`,
          iconSize: [240, lines.length > 1 ? 64 : 48],
          iconAnchor: [120, lines.length > 1 ? 32 : 24]
        }),
        interactive: true
      });
      districtLabel.on('click', (e) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'district', id: dist.id });
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      });
      this.districtLabelsGroup.addLayer(districtLabel);
    });

    // 2. Water & Parks (Natural Features - rendered above districts for proper hit testing & tooltips)
    mapData.naturalFeatures.forEach(feat => {
      const isPark = feat.type === 'park' || feat.type === 'forest';
      const latLngs = feat.polygon.map(p => L.latLng(p.y, p.x));
      const strokeColor = feat.color || (isPark ? defaultParkColor : defaultWaterColor);
      const fillColor = isPark ? defaultParkFill : defaultWaterFill;

      const poly = L.polygon(latLngs, {
        renderer: this.canvasRenderer,
        color: strokeColor,
        fillColor: fillColor,
        fillOpacity: 0.75,
        weight: 1.5
      });

      poly.bindTooltip(`<b>${feat.name}</b><br><small>${feat.type.toUpperCase()}</small>`, { sticky: true });
      poly.on('click', (e) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: isPark ? 'park' : 'water', id: feat.id });
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      });
      this.waterParksGroup.addLayer(poly);

      // Natural Feature On-Map Name Label
      if (feat.name) {
        const center = this.polygonCentroid(feat.polygon);
        const lines = this.splitIntoBalancedLines(feat.name);
        const labelHtml = lines.length > 1
          ? `<div class="natural-title">${lines[0]}</div><div class="natural-subtitle">${lines.slice(1).join(' ')}</div>`
          : `<div class="natural-title">${feat.name}</div>`;

        const natLabel = L.marker(L.latLng(center.y, center.x), {
          icon: L.divIcon({
            className: `map-natural-label ${isPark ? 'park' : 'water'}`,
            html: labelHtml,
            iconSize: [200, lines.length > 1 ? 38 : 22],
            iconAnchor: [100, lines.length > 1 ? 19 : 11]
          }),
          interactive: true
        });

        natLabel.bindTooltip(`<b>${feat.name}</b><br><small>${feat.type.toUpperCase()}</small>`, { sticky: true });
        natLabel.on('click', (e) => {
          if (this.state.activeTool() === 'select') {
            L.DomEvent.stopPropagation(e);
            this.state.selectedFeature.set({ type: isPark ? 'park' : 'water', id: feat.id });
          } else if (this.state.activeTool() !== 'pan') {
            this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
          }
        });
        this.naturalFeatureLabelsGroup.addLayer(natLabel);
      }
    });

    // 3. Roads & Road Labels
    mapData.roads.forEach(road => {
      const latLngs = road.path.map(p => L.latLng(p.y, p.x));
      const width = this.getRoadWeight(road.type);

      const onRoadClick = (e: L.LeafletMouseEvent) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'road', id: road.id });
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      };

      // Road Tooltip HTML
      const roadTooltipHtml = `
        <div style="font-family: var(--font-main);">
          <strong style="color: #f8fafc; font-size: 13px;">${road.name}</strong>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">
            ${road.type.replace('_', ' ').toUpperCase()} &bull; ${road.lanes || 2} Lanes &bull; ${road.speedLimitKmH} km/h
          </div>
          ${road.oneWay ? '<div style="font-size: 10px; color: #f59e0b; margin-top: 2px;">One-Way Street ➜</div>' : ''}
        </div>
      `;

      // Road Casing (Outline)
      const casing = L.polyline(latLngs, {
        renderer: this.canvasRenderer,
        color: roadCasingColor,
        weight: width + 2,
        lineCap: 'round',
        lineJoin: 'round'
      });
      casing.bindTooltip(roadTooltipHtml, { sticky: true });
      casing.on('click', onRoadClick);
      this.roadsGroup.addLayer(casing);

      // Road Core Line
      const polyline = L.polyline(latLngs, {
        renderer: this.canvasRenderer,
        color: this.getRoadColor(road.type, era),
        weight: width,
        lineCap: 'round',
        lineJoin: 'round'
      });
      polyline.bindTooltip(roadTooltipHtml, { sticky: true });
      polyline.on('click', onRoadClick);
      this.roadsGroup.addLayer(polyline);

      // Road Transparent Hit Area (Makes clicking roads effortless & catches hover for tooltip!)
      const hitArea = L.polyline(latLngs, {
        color: 'transparent',
        weight: Math.max(16, width + 10),
        opacity: 0,
        className: 'road-hit-area'
      });
      hitArea.bindTooltip(roadTooltipHtml, { sticky: true });
      hitArea.on('click', onRoadClick);
      hitArea.on('mouseover', () => casing.setStyle({ weight: width + 6, color: '#38bdf8', opacity: 0.9 }));
      hitArea.on('mouseout', () => casing.setStyle({ weight: width + 2, color: roadCasingColor, opacity: 1 }));
      this.roadsGroup.addLayer(hitArea);

      // Road Label
      if (road.name && road.path.length >= 2) {
        const midIdx = Math.floor(road.path.length / 2);
        const p1 = road.path[Math.max(0, midIdx - 1)];
        const p2 = road.path[midIdx];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        const isMajor = road.type === 'avenue' || road.type === 'highway' || road.type === 'bridge';

        const roadLabel = L.marker(L.latLng(midY, midX), {
          icon: L.divIcon({
            className: `map-road-label ${isMajor ? 'major' : ''}`,
            html: `<span>${road.name}</span>`,
            iconSize: [120, 20],
            iconAnchor: [60, 10]
          }),
          interactive: true
        });
        roadLabel.bindTooltip(roadTooltipHtml, { sticky: true });
        roadLabel.on('click', onRoadClick);
        this.roadLabelsGroup.addLayer(roadLabel);
      }
    });

    // 4. Buildings & Building Labels
    mapData.buildings.forEach(bld => {
      const isLandmark = bld.isLandmark || bld.type === 'institutional';
      const latLngs = bld.footprint.map(p => L.latLng(p.y, p.x));

      let bldStroke = isLandmark ? '#d97706' : '#5c4938';
      let bldFill = isLandmark ? '#4d3219' : '#2e231a';
      if (era === 'victorian_steampunk') {
        bldStroke = isLandmark ? '#d97706' : '#544436';
        bldFill = isLandmark ? '#442e1a' : '#28211b';
      } else if (era === 'contemporary_modern') {
        bldStroke = isLandmark ? '#f59e0b' : '#64748b';
        bldFill = isLandmark ? '#78350f' : '#273142';
      } else if (era === 'cyberpunk_scifi') {
        bldStroke = isLandmark ? '#00f0ff' : '#475569';
        bldFill = isLandmark ? '#164e63' : '#141a29';
      }

      const poly = L.polygon(latLngs, {
        renderer: this.canvasRenderer,
        color: bldStroke,
        fillColor: bldFill,
        fillOpacity: 0.88,
        weight: isLandmark ? 2 : 1
      });

      const { population, jobs } = this.demographics.estimateBuildingPopAndJobs(bld, mapData.era);
      const tooltipHtml = `
        <div style="font-family: var(--font-main);">
          <strong style="color: ${isLandmark ? '#f59e0b' : '#f1f5f9'}; font-size: 13px;">${bld.name}</strong>
          <div style="font-size: 11px; color: #94a3b8; margin: 2px 0;">
            ${bld.type.replace('_', ' ').toUpperCase()} &bull; ${bld.floors} Floors
          </div>
          <div style="font-size: 11px; color: #38bdf8;">
            Pop: <b>${population}</b> | Jobs: <b>${jobs}</b>
          </div>
          ${bld.chapterReferences?.length ? `<div style="font-size: 10px; color: #a78bfa; margin-top: 4px;">🔖 ${bld.chapterReferences.join(', ')}</div>` : ''}
          ${bld.notes ? `<div style="font-size: 10px; color: #cbd5e1; margin-top: 4px; max-width: 220px; font-style: italic;">"${bld.notes}"</div>` : ''}
        </div>
      `;

      poly.bindTooltip(tooltipHtml, { sticky: true });
      poly.on('click', (e) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'building', id: bld.id });
        } else if (this.state.activeTool() === 'route') {
          L.DomEvent.stopPropagation(e);
          this.handleRoutePointPick(bld.name, bld.center);
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      });
      this.buildingsGroup.addLayer(poly);

      // Building Label (Center)
      // For high performance on large cities, instantiate DOM markers for landmarks/institutions
      // or for cities with up to 150 buildings. Generic buildings in massive cities are drawn on Canvas
      // to avoid 20,000+ DOM nodes freezing browser paint.
      const shouldCreateMarker = isLandmark || bld.type === 'institutional' || mapData.buildings.length <= 150;
      if (bld.name && shouldCreateMarker) {
        const bldLabel = L.marker(L.latLng(bld.center.y, bld.center.x), {
          icon: L.divIcon({
            className: `map-building-label ${isLandmark ? 'landmark' : ''}`,
            html: `<span>${bld.name}</span>`,
            iconSize: [140, 22],
            iconAnchor: [70, 11]
          }),
          interactive: true
        });
        bldLabel.on('click', (e) => {
          if (this.state.activeTool() === 'select') {
            L.DomEvent.stopPropagation(e);
            this.state.selectedFeature.set({ type: 'building', id: bld.id });
          } else if (this.state.activeTool() !== 'pan') {
            this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
          }
        });
        this.buildingLabelsGroup.addLayer(bldLabel);
      }
    });

    // 5. Transit Lines
    mapData.transitLines.forEach(line => {
      const latLngs = line.path.map(p => L.latLng(p.y, p.x));
      const onLineClick = (e: L.LeafletMouseEvent) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'transit_line', id: line.id });
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      };

      // Visible styled transit line
      const poly = L.polyline(latLngs, {
        renderer: this.canvasRenderer,
        color: line.color || '#e74c3c',
        weight: 4,
        dashArray: '8, 4'
      });
      poly.bindTooltip(`<b>${line.name}</b> (${line.type.toUpperCase()})<br>Frequency: every ${line.frequencyMins}m`, { sticky: true });
      poly.on('click', onLineClick);
      this.transitLinesGroup.addLayer(poly);

      // Dedicated generous hit area for effortless clicking & selecting
      const hitArea = L.polyline(latLngs, {
        color: 'transparent',
        weight: 20,
        opacity: 0,
        className: 'transit-line-hit-area'
      });
      hitArea.bindTooltip(`<b>${line.name}</b> (${line.type.toUpperCase()})<br>Frequency: every ${line.frequencyMins}m`, { sticky: true });
      hitArea.on('click', onLineClick);
      this.transitLinesGroup.addLayer(hitArea);
    });

    // 6. Transit Stations
    mapData.transitStations.forEach(st => {
      const onStationClick = (e: L.LeafletMouseEvent) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'transit_station', id: st.id });
        } else if (this.state.activeTool() === 'route') {
          L.DomEvent.stopPropagation(e);
          this.handleRoutePointPick(st.name, st.location);
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      };

      const associatedLines = this.getStationLines(st, mapData);
      const isMultiLine = associatedLines.length > 1;
      const isHub = !!st.isTransferHub || isMultiLine;

      let stationColor = isHub ? '#f59e0b' : '#e11d48';
      let conicGradientStr = '';

      if (associatedLines.length === 1) {
        stationColor = associatedLines[0].color || '#e11d48';
      } else if (associatedLines.length > 1) {
        const segAngle = 360 / associatedLines.length;
        const stops = associatedLines
          .map((l, i) => `${l.color || '#e11d48'} ${(i * segAngle).toFixed(1)}deg ${((i + 1) * segAngle).toFixed(1)}deg`)
          .join(', ');
        conicGradientStr = `conic-gradient(${stops})`;
        stationColor = associatedLines[0].color || '#f59e0b';
      }

      // 6a. Distinctive Station Circle Marker (Denoted with a particular cartographic dual-ring circle in train line's color or multi-line conic gradient)
      const circleHtml = `
        <div class="map-station-circle ${isMultiLine ? 'multi-line' : ''} ${isHub ? 'hub' : ''}"
             style="--station-color: ${stationColor}; ${conicGradientStr ? `--station-conic: ${conicGradientStr};` : ''}">
          <div class="circle-ring" style="${conicGradientStr ? `background: ${conicGradientStr};` : `border-color: ${stationColor};`}"></div>
          <div class="circle-core" style="${conicGradientStr ? `background: ${conicGradientStr};` : `background: ${stationColor};`}"></div>
        </div>
      `;

      const markerSize: [number, number] = isMultiLine ? [26, 26] : (isHub ? [22, 22] : [20, 20]);
      const markerAnchor: [number, number] = isMultiLine ? [13, 13] : (isHub ? [11, 11] : [10, 10]);

      const circleMarker = L.marker(L.latLng(st.location.y, st.location.x), {
        icon: L.divIcon({
          className: 'map-transit-station-circle-container',
          html: circleHtml,
          iconSize: markerSize,
          iconAnchor: markerAnchor
        }),
        interactive: true
      });

      const stationTooltipHtml = `
        <div style="font-family: var(--font-main); min-width: 140px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            ${associatedLines.length > 0
              ? associatedLines.map(l => `<span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: ${l.color}; box-shadow: 0 1px 2px rgba(0,0,0,0.5);"></span>`).join('')
              : `<span style="display: inline-block; width: 9px; height: 9px; border-radius: 50%; background: ${stationColor};"></span>`
            }
            <strong style="color: #f8fafc; font-size: 13px;">${st.name}</strong>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 3px;">
            ${st.type.toUpperCase()} STATION ${isHub ? '(Transfer Hub)' : ''}
          </div>
          ${associatedLines.length > 0 ? `
            <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid rgba(255,255,255,0.12); display: flex; flex-direction: column; gap: 4px;">
              <div style="font-size: 10px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">
                Serviced Lines (${associatedLines.length}):
              </div>
              ${associatedLines.map(l => `
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 11px;">
                  <span style="display: flex; align-items: center; gap: 5px;">
                    <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: ${l.color};"></span>
                    <span style="font-weight: 600; color: ${l.color};">${l.name}</span>
                  </span>
                  <span style="color: #cbd5e1; font-size: 10px;">every ${l.frequencyMins}m</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;

      circleMarker.bindTooltip(stationTooltipHtml, { sticky: true });
      circleMarker.on('click', onStationClick);
      this.transitStationsGroup.addLayer(circleMarker);

      // 6b. Separate Station Name Label
      const lineDotsHtml = associatedLines.map(l =>
        `<span class="station-line-dot" style="background: ${l.color};" title="${l.name}"></span>`
      ).join('');
      const labelBorderColor = isMultiLine ? '#f59e0b' : stationColor;

      const nameMarker = L.marker(L.latLng(st.location.y, st.location.x), {
        icon: L.divIcon({
          className: `map-station-name-label ${isHub ? 'hub' : ''}`,
          html: `<span style="border-left: 3px solid ${labelBorderColor};">${lineDotsHtml}${st.name}</span>`,
          iconSize: [140, 20],
          iconAnchor: [-10, 10]
        }),
        interactive: true
      });
      nameMarker.bindTooltip(stationTooltipHtml, { sticky: true });
      nameMarker.on('click', onStationClick);
      this.stationLabelsGroup.addLayer(nameMarker);
    });

    // 7. POIs
    mapData.pois.forEach(poi => {
      const iconHtml = `<div class="custom-poi-marker" style="width: 24px; height: 24px;">📍</div>`;
      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'poi-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker(L.latLng(poi.location.y, poi.location.x), { icon: customIcon });
      marker.bindTooltip(`<b>${poi.name}</b><br><small>${poi.category.replace('_', ' ').toUpperCase()}</small><br>${poi.description || ''}`, { sticky: true });
      marker.on('click', (e) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'poi', id: poi.id });
        } else if (this.state.activeTool() === 'route') {
          L.DomEvent.stopPropagation(e);
          this.handleRoutePointPick(poi.name, poi.location);
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      });
      this.poisGroup.addLayer(marker);
    });

    // 7b. Topography (Cliffs, Ridges, Contours)
    this.renderTopography();

    // 7c. Isochrone Travel Reach Rings
    this.renderIsochrone();

    // 8. Alphanumeric Grid
    this.renderGridLayer(mapData.width, mapData.height);

    // Sync visibility with current zoom level
    this.syncLayerVisibility();
  }

  private renderTopography() {
    this.topoGroup.clearLayers();
    const mapData = this.state.currentMap();
    if (!mapData.topography || mapData.topography.length === 0) return;

    const era = mapData.era;
    let cliffColor = '#8d6e63';
    let ridgeColor = '#bcaaa4';
    let contourColor = '#a1887f';

    if (era === 'contemporary_modern') {
      cliffColor = '#475569';
      ridgeColor = '#64748b';
      contourColor = '#94a3b8';
    } else if (era === 'cyberpunk_scifi') {
      cliffColor = '#f43f5e';
      ridgeColor = '#06b6d4';
      contourColor = '#a855f7';
    } else if (era === 'victorian_steampunk') {
      cliffColor = '#5d4037';
      ridgeColor = '#8d6e63';
      contourColor = '#795548';
    }

    mapData.topography.forEach(feat => {
      if (!feat.path || feat.path.length < 2) return;
      const latLngs = feat.path.map(p => L.latLng(p.y, p.x));

      const onTopoClick = (e: L.LeafletMouseEvent) => {
        if (this.state.activeTool() === 'select') {
          L.DomEvent.stopPropagation(e);
          this.state.selectedFeature.set({ type: 'topography', id: feat.id });
        } else if (this.state.activeTool() !== 'pan') {
          this.handleMapClick({ x: Math.round(e.latlng.lng), y: Math.round(e.latlng.lat) });
        }
      };

      if (feat.type === 'cliff') {
        const cliffLine = L.polyline(latLngs, {
          renderer: this.canvasRenderer,
          color: cliffColor,
          weight: 3,
          lineCap: 'round',
          lineJoin: 'round'
        });
        cliffLine.bindTooltip(`<b>${feat.name || 'Cliff'}</b><br>Facing: ${feat.cliffSide || feat.hachureFacing || 'right'}`, { sticky: true });
        cliffLine.on('click', onTopoClick);
        this.topoGroup.addLayer(cliffLine);

        // Directional hachure ticks along cliff edge
        const tickInterval = 24;
        const tickLen = 14;
        const facing = feat.cliffSide || feat.hachureFacing || 'right';
        const sideMult = (facing === 'left') ? -1 : 1;
        for (let i = 0; i < feat.path.length - 1; i++) {
          const p1 = feat.path[i];
          const p2 = feat.path[i + 1];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const segLen = Math.hypot(dx, dy);
          if (segLen === 0) continue;
          const udx = dx / segLen;
          const udy = dy / segLen;
          const nx = udy * sideMult;
          const ny = -udx * sideMult;

          const numTicks = Math.max(1, Math.floor(segLen / tickInterval));
          for (let t = 1; t <= numTicks; t++) {
            const factor = t / (numTicks + 1);
            const tx = p1.x + factor * dx;
            const ty = p1.y + factor * dy;
            const curLen = (t % 2 === 0 ? tickLen * 0.6 : tickLen);
            const tickLine = L.polyline([
              L.latLng(ty, tx),
              L.latLng(ty + ny * curLen, tx + nx * curLen)
            ], {
              renderer: this.canvasRenderer,
              color: cliffColor,
              weight: 1.5
            });
            this.topoGroup.addLayer(tickLine);
          }
        }
      } else if (feat.type === 'ridge') {
        const ridgeLine = L.polyline(latLngs, {
          renderer: this.canvasRenderer,
          color: ridgeColor,
          weight: 2.5,
          dashArray: '8, 4',
          lineCap: 'round'
        });
        ridgeLine.bindTooltip(`<b>${feat.name || 'Ridge'}</b>`, { sticky: true });
        ridgeLine.on('click', onTopoClick);
        this.topoGroup.addLayer(ridgeLine);
      } else if (feat.type === 'contour') {
        const isIndex = feat.elevation !== undefined && (feat.elevation % 50 === 0);
        const contourLine = L.polyline(latLngs, {
          renderer: this.canvasRenderer,
          color: contourColor,
          weight: isIndex ? 2 : 1,
          dashArray: isIndex ? undefined : '6, 4'
        });
        contourLine.bindTooltip(`<b>Contour: ${feat.elevation ?? 0}m</b>`, { sticky: true });
        contourLine.on('click', onTopoClick);
        this.topoGroup.addLayer(contourLine);

        if (feat.elevation !== undefined) {
          const midIdx = Math.floor(feat.path.length / 2);
          const pt = feat.path[midIdx];
          const labelMarker = L.marker(L.latLng(pt.y, pt.x), {
            icon: L.divIcon({
              className: 'map-contour-label',
              html: `<span>${feat.elevation}m</span>`,
              iconSize: [50, 16],
              iconAnchor: [25, 8]
            }),
            interactive: false
          });
          this.topoGroup.addLayer(labelMarker);
        }
      }

      if (feat.name && (feat.type === 'cliff' || feat.type === 'ridge')) {
        const midIdx = Math.floor(feat.path.length / 2);
        const pt = feat.path[midIdx];
        const topoLabel = L.marker(L.latLng(pt.y, pt.x), {
          icon: L.divIcon({
            className: 'map-topo-label',
            html: `<span>${feat.name}</span>`,
            iconSize: [140, 20],
            iconAnchor: [70, 10]
          }),
          interactive: true
        });
        topoLabel.on('click', onTopoClick);
        this.topoGroup.addLayer(topoLabel);
      }
    });
  }

  private renderIsochrone() {
    this.isochroneGroup.clearLayers();
    const iso = this.state.currentIsochrone();
    if (!iso || !iso.rings || iso.rings.length === 0) return;

    const sortedRings = [...iso.rings].sort((a, b) => b.minutes - a.minutes);

    sortedRings.forEach(ring => {
      if (!ring.polygon || ring.polygon.length < 3) return;
      const latLngs = ring.polygon.map(p => L.latLng(p.y, p.x));

      const poly = L.polygon(latLngs, {
        renderer: this.canvasRenderer,
        color: ring.color,
        fillColor: ring.color,
        fillOpacity: 0.22,
        dashArray: '6, 4',
        weight: 2
      });

      poly.bindTooltip(`⏱️ <b>${ring.minutes} Min Reach</b> (${iso.mode.toUpperCase()})`, { sticky: true });
      this.isochroneGroup.addLayer(poly);
    });

    // Center Origin Marker
    const center = iso.center;
    const centerIcon = L.divIcon({
      className: 'map-isochrone-center-icon',
      html: `<div class="isochrone-pulse-pin">📍</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 28]
    });
    const centerMarker = L.marker(L.latLng(center.y, center.x), { icon: centerIcon });
    centerMarker.bindTooltip(`<b>Origin:</b> Reach from (${center.x}, ${center.y})<br>Mode: <b>${iso.mode.toUpperCase()}</b>`, { permanent: false });
    this.isochroneGroup.addLayer(centerMarker);
  }

  computeIsochroneAt(pt: Point2D) {
    const mode = this.isochroneMode();
    const cityMap = this.state.currentMap();
    const result = this.isochroneService.computeIsochrone(cityMap, pt, mode, [5, 10, 15, 20]);
    this.state.setIsochrone(result);
  }

  setIsochroneMode(mode: 'walk' | 'carriage' | 'transit') {
    this.isochroneMode.set(mode);
    const iso = this.state.currentIsochrone();
    if (iso) {
      this.computeIsochroneAt(iso.center);
    }
  }

  setGridStep(step: number) {
    this.state.setGridStep(step);
    this.renderAllLayers();
  }

  private renderGridLayer(width: number, height: number) {
    const mapData = this.state.currentMap();
    const era = mapData.era;
    let gridLineColor = 'rgba(74, 59, 50, 0.22)';
    if (era === 'contemporary_modern') {
      gridLineColor = 'rgba(255, 255, 255, 0.12)';
    } else if (era === 'cyberpunk_scifi') {
      gridLineColor = 'rgba(0, 240, 255, 0.2)';
    }

    const step = mapData.gridStep || 200;
    const colCount = Math.ceil(width / step);
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

    for (let x = 0, col = 0; x <= width; x += step, col++) {
      const line = L.polyline([[0, x], [height, x]], {
        color: gridLineColor,
        weight: 1,
        dashArray: '4, 4',
        interactive: false
      });
      this.gridGroup.addLayer(line);

      if (col < cols.length) {
        const marker = L.marker([16, x + 8], {
          icon: L.divIcon({
            className: 'map-grid-label',
            html: `<span>${cols[col]}</span>`,
            iconSize: [24, 20],
            iconAnchor: [0, 0]
          }),
          interactive: false
        });
        this.gridGroup.addLayer(marker);
      }
    }

    for (let y = 0, row = 1; y <= height; y += step, row++) {
      const line = L.polyline([[y, 0], [y, width]], {
        color: gridLineColor,
        weight: 1,
        dashArray: '4, 4',
        interactive: false
      });
      this.gridGroup.addLayer(line);

      const marker = L.marker([y + 8, 8], {
        icon: L.divIcon({
          className: 'map-grid-label',
          html: `<span>${row}</span>`,
          iconSize: [24, 20],
          iconAnchor: [0, 0]
        }),
        interactive: false
      });
      this.gridGroup.addLayer(marker);
    }
  }

  private updateZoomLabels() {
    if (!this.map) return;
    const zoom = this.map.getZoom();
    const vis = this.state.layerVisibility();

    // Building labels:
    // zoom >= -0.25: show landmark labels
    // zoom >= 0.5: show all building labels
    const bldLabels = this.buildingLabelsGroup.getLayers() as L.Marker[];
    bldLabels.forEach(marker => {
      const el = marker.getElement();
      if (!el) return;
      const isLandmark = el.querySelector('.landmark') !== null || el.classList.contains('landmark');
      if (!vis.buildingLabels) {
        el.style.display = 'none';
      } else if (zoom >= 0.5) {
        el.style.display = 'block';
      } else if (zoom >= -0.25 && isLandmark) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });

    // Road labels:
    // zoom >= 0: show major road labels (avenues, highways, bridges)
    // zoom >= 0.75: show all road labels
    const roadLabels = this.roadLabelsGroup.getLayers() as L.Marker[];
    roadLabels.forEach(marker => {
      const el = marker.getElement();
      if (!el) return;
      const isMajor = el.querySelector('.major') !== null || el.classList.contains('major');
      if (!vis.roadLabels) {
        el.style.display = 'none';
      } else if (zoom >= 0.75) {
        el.style.display = 'block';
      } else if (zoom >= 0 && isMajor) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });

    // Station labels:
    // zoom >= -0.5: show transfer hub station labels
    // zoom >= 0.25: show all station labels
    const stationLabels = this.stationLabelsGroup.getLayers() as L.Marker[];
    stationLabels.forEach(marker => {
      const el = marker.getElement();
      if (!el) return;
      const isHub = el.querySelector('.hub') !== null || el.classList.contains('hub');
      if (!vis.stationLabels || !vis.transitStations) {
        el.style.display = 'none';
      } else if (zoom >= 0.25) {
        el.style.display = 'block';
      } else if (zoom >= -0.5 && isHub) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }

  private renderSelection() {
    this.selectionGroup.clearLayers();
    const sel = this.state.selectedFeature();
    if (!sel) return;

    const mapData = this.state.currentMap();

    if (sel.type === 'road') {
      const road = mapData.roads.find(r => r.id === sel.id);
      if (road) {
        const latLngs = road.path.map(p => L.latLng(p.y, p.x));
        const width = this.getRoadWeight(road.type);
        const glow = L.polyline(latLngs, {
          color: '#38bdf8',
          weight: width + 8,
          opacity: 0.85,
          lineCap: 'round',
          lineJoin: 'round'
        });
        this.selectionGroup.addLayer(glow);
      }
    } else if (sel.type === 'building') {
      const bld = mapData.buildings.find(b => b.id === sel.id);
      if (bld) {
        const latLngs = bld.footprint.map(p => L.latLng(p.y, p.x));
        const outline = L.polygon(latLngs, {
          color: '#f59e0b',
          weight: 4,
          fillOpacity: 0.1,
          dashArray: '4, 4'
        });
        this.selectionGroup.addLayer(outline);
      }
    } else if (sel.type === 'district') {
      const dist = mapData.districts.find(d => d.id === sel.id);
      if (dist) {
        const latLngs = dist.polygon.map(p => L.latLng(p.y, p.x));
        const outline = L.polygon(latLngs, {
          color: '#f59e0b',
          weight: 4,
          fillOpacity: 0.2
        });
        this.selectionGroup.addLayer(outline);
      }
    } else if (sel.type === 'transit_line') {
      const line = mapData.transitLines.find(l => l.id === sel.id);
      if (line) {
        const latLngs = line.path.map(p => L.latLng(p.y, p.x));
        const halo = L.polyline(latLngs, {
          color: '#ffffff',
          weight: 12,
          opacity: 0.9,
          lineCap: 'round',
          lineJoin: 'round'
        });
        const core = L.polyline(latLngs, {
          color: line.color || '#3b82f6',
          weight: 6,
          opacity: 1.0,
          lineCap: 'round',
          lineJoin: 'round'
        });
        this.selectionGroup.addLayer(halo);
        this.selectionGroup.addLayer(core);
      }
    } else if (sel.type === 'transit_station') {
      const st = mapData.transitStations.find(s => s.id === sel.id);
      if (st) {
        const pulse = L.circleMarker(L.latLng(st.location.y, st.location.x), {
          radius: (st.isTransferHub ? 8 : 6) + 6,
          color: '#f59e0b',
          weight: 3,
          fillColor: '#ffffff',
          fillOpacity: 0.35
        });
        this.selectionGroup.addLayer(pulse);
      }
    } else if (sel.type === 'topography') {
      const feat = mapData.topography?.find(t => t.id === sel.id);
      if (feat && feat.path.length >= 2) {
        const latLngs = feat.path.map(p => L.latLng(p.y, p.x));
        const glow = L.polyline(latLngs, {
          color: '#f59e0b',
          weight: 8,
          opacity: 0.8,
          lineCap: 'round',
          lineJoin: 'round'
        });
        this.selectionGroup.addLayer(glow);
      }
    } else if (sel.type === 'park' || sel.type === 'water') {
      const feat = mapData.naturalFeatures.find(f => f.id === sel.id);
      if (feat && feat.polygon.length >= 3) {
        const latLngs = feat.polygon.map(p => L.latLng(p.y, p.x));
        const outline = L.polygon(latLngs, {
          color: '#f59e0b',
          weight: 4,
          fillColor: '#f59e0b',
          fillOpacity: 0.25,
          dashArray: '6, 6'
        });
        this.selectionGroup.addLayer(outline);
      }
    }
  }

  private renderRoute() {
    this.routeLayerGroup.clearLayers();
    const route = this.state.routeResult();
    if (!route || route.fullPath.length < 2) return;

    const latLngs = route.fullPath.map(p => L.latLng(p.y, p.x));

    // Route Outer Glow / Casing
    const glow = L.polyline(latLngs, {
      color: '#10b981',
      weight: 8,
      opacity: 0.4,
      lineCap: 'round'
    });
    this.routeLayerGroup.addLayer(glow);

    // Route Inner Line
    const core = L.polyline(latLngs, {
      color: '#059669',
      weight: 4,
      dashArray: '6, 6',
      lineCap: 'round'
    });
    this.routeLayerGroup.addLayer(core);

    // Start Marker
    const startPt = route.fullPath[0];
    const startIcon = L.divIcon({
      html: `<div class="custom-route-marker start">A</div>`,
      className: 'route-icon',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    const startMarker = L.marker(L.latLng(startPt.y, startPt.x), { icon: startIcon });
    startMarker.bindTooltip(`<b>Start:</b> ${route.startName}`, { permanent: false });
    this.routeLayerGroup.addLayer(startMarker);

    // End Marker
    const endPt = route.fullPath[route.fullPath.length - 1];
    const endIcon = L.divIcon({
      html: `<div class="custom-route-marker end">B</div>`,
      className: 'route-icon',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    const endMarker = L.marker(L.latLng(endPt.y, endPt.x), { icon: endIcon });
    endMarker.bindTooltip(`<b>Destination:</b> ${route.endName}`, { permanent: false });
    this.routeLayerGroup.addLayer(endMarker);
  }

  private handleMapClick(pt: Point2D) {
    const tool = this.state.activeTool();

    if (tool === 'select') {
      this.state.selectedFeature.set(null);
      return;
    }

    if (tool === 'isochrone') {
      this.computeIsochroneAt(pt);
      return;
    }

    if (tool === 'route') {
      this.handleRoutePointPick(`Map Point (${pt.x}, ${pt.y})`, pt);
      return;
    }

    // Drawing Tools
    const points = [...this.state.activeDrawingPoints(), pt];
    this.state.activeDrawingPoints.set(points);

    if (tool === 'draw_station') {
      const name = prompt('Enter Station Name:', 'New Transit Station');
      if (name) {
        const nearbyLines = this.state.currentMap().transitLines.filter(l =>
          this.isPointNearPolyline(pt, l.path, 60)
        );
        const newStation: TransitStation = {
          id: `st-${Date.now()}`,
          name: name.trim(),
          type: nearbyLines.length > 0 ? nearbyLines[0].type : 'metro',
          location: pt,
          lineIds: nearbyLines.map(l => l.id),
          isTransferHub: nearbyLines.length > 1
        };
        this.state.addTransitStation(newStation);
        for (const line of nearbyLines) {
          if (!line.stationIds.includes(newStation.id)) {
            line.stationIds.push(newStation.id);
            this.state.updateTransitLine(line);
          }
        }
        this.state.selectedFeature.set({ type: 'transit_station', id: newStation.id });
      }
      this.state.activeDrawingPoints.set([]);
      return;
    }

    if (tool === 'add_poi') {
      const name = prompt('Enter POI / Landmark Name:', 'New Story Location');
      if (name) {
        const newPoi: POI = {
          id: `poi-${Date.now()}`,
          name: name.trim(),
          category: 'landmark',
          location: pt,
          icon: 'pin',
          description: 'A newly mapped point of interest for your story.'
        };
        this.state.addPOI(newPoi);
        this.state.selectedFeature.set({ type: 'poi', id: newPoi.id });
      }
      this.state.activeDrawingPoints.set([]);
      return;
    }

    if (tool === 'draw_building') {
      const w = 60, h = 40;
      const footprint: Point2D[] = [
        { x: pt.x - w / 2, y: pt.y - h / 2 },
        { x: pt.x + w / 2, y: pt.y - h / 2 },
        { x: pt.x + w / 2, y: pt.y + h / 2 },
        { x: pt.x - w / 2, y: pt.y + h / 2 }
      ];

      const name = prompt('Enter Building Name (e.g. University, Library, Hall):', 'New Building');
      if (name) {
        const newBld: Building = {
          id: `bld-${Date.now()}`,
          name: name.trim(),
          type: 'residential_apartment',
          footprint,
          center: pt,
          floors: 3,
          unitCount: 12,
          isLandmark: false
        };
        this.state.addBuilding(newBld);
        this.state.selectedFeature.set({ type: 'building', id: newBld.id });
      }
      this.state.activeDrawingPoints.set([]);
      return;
    }

    this.renderDrawingPreview(points, tool);
  }

  finishDrawing() {
    const points = this.state.activeDrawingPoints();
    const tool = this.state.activeTool();

    if (tool === 'draw_road' && points.length >= 2) {
      const name = prompt('Enter Road / Street Name:', 'New Street') || 'New Street';
      const newRoad: Road = {
        id: `rd-${Date.now()}`,
        name: name.trim(),
        type: 'local_street',
        path: points,
        lanes: 2,
        speedLimitKmH: 40
      };
      this.state.addRoad(newRoad);
      this.state.selectedFeature.set({ type: 'road', id: newRoad.id });
    } else if (tool === 'draw_transit_line' && points.length >= 2) {
      const name = prompt('Enter Transit Line Name:', 'New Metro Line') || 'New Metro Line';
      const newLine: TransitLine = {
        id: `line-${Date.now()}`,
        name: name.trim(),
        type: 'metro',
        color: '#e74c3c',
        path: points,
        stationIds: [],
        frequencyMins: 10
      };
      this.state.addTransitLine(newLine);
      this.state.selectedFeature.set({ type: 'transit_line', id: newLine.id });
    } else if (tool === 'draw_topo' && points.length >= 2) {
      const type = this.topoDrawType();
      const defaultName = type === 'cliff' ? 'North Bluffs' : (type === 'ridge' ? 'Archon\'s Ridge' : '100m Contour');
      const name = prompt(`Enter ${type.toUpperCase()} Name (optional):`, defaultName) || '';
      const elevation = type === 'contour' ? (parseInt(prompt('Enter Contour Elevation in meters:', '100') || '100', 10) || 100) : undefined;
      const newTopo: TopoFeature = {
        id: `topo-${Date.now()}`,
        name: name.trim(),
        type,
        path: points,
        elevation,
        cliffSide: 'right'
      };
      this.state.addTopoFeature(newTopo);
      this.state.selectedFeature.set({ type: 'topography', id: newTopo.id });
    } else if (tool === 'draw_district' && points.length >= 3) {
      const name = prompt('Enter District Name:', 'New District') || 'New District';
      const newDist: District = {
        id: `dist-${Date.now()}`,
        name: name.trim(),
        description: 'A newly established neighborhood.',
        type: 'residential',
        polygon: points,
        color: '#3b82f6',
        fillOpacity: 0.15,
        targetDensity: 5000
      };
      this.state.addDistrict(newDist);
      this.state.selectedFeature.set({ type: 'district', id: newDist.id });
    } else if ((tool === 'draw_water' || tool === 'draw_park') && points.length >= 3) {
      const isPark = tool === 'draw_park';
      const name = prompt(`Enter ${isPark ? 'Park' : 'Water'} Name:`, isPark ? 'Green Park' : 'River') || 'Natural Feature';
      const newNat: NaturalFeature = {
        id: `nat-${Date.now()}`,
        name: name.trim(),
        type: isPark ? 'park' : 'river',
        polygon: points
      };
      this.state.addNaturalFeature(newNat);
      this.state.selectedFeature.set({ type: isPark ? 'park' : 'water', id: newNat.id });
    }

    this.cancelDrawing();
  }

  cancelDrawing() {
    this.state.activeDrawingPoints.set([]);
    this.drawingLayerGroup.clearLayers();
    this.state.activeTool.set('select');
  }

  private renderDrawingPreview(points: Point2D[], tool: string) {
    this.drawingLayerGroup.clearLayers();
    if (points.length === 0) return;

    const latLngs = points.map(p => L.latLng(p.y, p.x));

    if (tool === 'draw_road' || tool === 'draw_transit_line') {
      const poly = L.polyline(latLngs, {
        color: '#f59e0b',
        weight: 4,
        dashArray: '5, 5'
      });
      this.drawingLayerGroup.addLayer(poly);
    } else if (tool === 'draw_topo') {
      const poly = L.polyline(latLngs, {
        color: '#10b981',
        weight: 3,
        dashArray: '6, 4'
      });
      this.drawingLayerGroup.addLayer(poly);
    } else if (tool === 'draw_district' || tool === 'draw_water' || tool === 'draw_park') {
      const poly = L.polygon(latLngs, {
        color: '#f59e0b',
        weight: 2,
        dashArray: '5, 5',
        fillColor: '#f59e0b',
        fillOpacity: 0.2
      });
      this.drawingLayerGroup.addLayer(poly);
    }

    points.forEach(p => {
      const dot = L.circleMarker(L.latLng(p.y, p.x), {
        radius: 4,
        color: '#ffffff',
        fillColor: '#f59e0b',
        fillOpacity: 1,
        weight: 2
      });
      this.drawingLayerGroup.addLayer(dot);
    });
  }

  private handleRoutePointPick(name: string, location: Point2D) {
    if (!this.state.routeStart()) {
      this.state.routeStart.set({ point: location, name });
    } else if (!this.state.routeEnd()) {
      this.state.routeEnd.set({ point: location, name });
      const res = this.routing.findRoute(
        this.state.currentMap(),
        this.state.routeStart()!.point,
        location,
        this.state.routeStart()!.name,
        name,
        this.state.travelMode()
      );
      this.state.routeResult.set(res);
      this.state.showNavigationPanel.set(true);
      this.state.activeTool.set('select');
    }
  }

  private panToSelected(type: string, id: string) {
    if (!this.map) return;
    const mapData = this.state.currentMap();
    let targetPt: Point2D | null = null;

    if (type === 'building') {
      const b = mapData.buildings.find(item => item.id === id);
      if (b) targetPt = b.center;
    } else if (type === 'poi') {
      const p = mapData.pois.find(item => item.id === id);
      if (p) targetPt = p.location;
    } else if (type === 'transit_station') {
      const s = mapData.transitStations.find(item => item.id === id);
      if (s) targetPt = s.location;
    } else if (type === 'road') {
      const r = mapData.roads.find(item => item.id === id);
      if (r && r.path.length > 0) {
        const mid = Math.floor(r.path.length / 2);
        targetPt = r.path[mid];
      }
    } else if (type === 'district') {
      const d = mapData.districts.find(item => item.id === id);
      if (d && d.polygon.length > 0) {
        targetPt = this.polygonCentroid(d.polygon);
      }
    } else if (type === 'topography') {
      const t = mapData.topography?.find(item => item.id === id);
      if (t && t.path.length > 0) {
        const mid = Math.floor(t.path.length / 2);
        targetPt = t.path[mid];
      }
    } else if (type === 'park' || type === 'water') {
      const feat = mapData.naturalFeatures.find(item => item.id === id);
      if (feat && feat.polygon.length > 0) {
        targetPt = this.polygonCentroid(feat.polygon);
      }
    }

    if (targetPt) {
      const zoom = Math.max(this.map.getZoom(), 0.5);
      this.map.flyTo(L.latLng(targetPt.y, targetPt.x), zoom, { duration: 0.7 });
    }
  }

  private polygonCentroid(pts: Point2D[]): Point2D {
    if (!pts || pts.length === 0) return { x: 0, y: 0 };
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

  private getRoadWeight(type: string): number {
    switch (type) {
      case 'highway': return 6;
      case 'avenue': return 5;
      case 'main_street': return 3.5;
      case 'bridge': return 4.5;
      case 'local_street': return 2.5;
      case 'pedestrian': return 2;
      case 'alley': return 1.5;
      default: return 2.5;
    }
  }

  private getRoadColor(type: string, era: string = 'victorian_steampunk'): string {
    if (era === 'cyberpunk_scifi') {
      switch (type) {
        case 'highway': return '#ff0055';
        case 'avenue': return '#00f0ff';
        case 'main_street': return '#38bdf8';
        case 'bridge': return '#a855f7';
        case 'pedestrian': return '#ec4899';
        default: return '#64748b';
      }
    }
    if (era === 'contemporary_modern') {
      switch (type) {
        case 'highway': return '#f97316';
        case 'avenue': return '#fbbf24';
        case 'main_street': return '#ffffff';
        case 'bridge': return '#ea580c';
        case 'pedestrian': return '#818cf8';
        default: return '#cbd5e1';
      }
    }
    if (era === 'medieval') {
      switch (type) {
        case 'highway': return '#e59846'; // warm amber gold highway
        case 'avenue': return '#c88034'; // golden sandstone avenue
        case 'main_street': return '#baa085'; // warm cobblestone/limestone
        case 'bridge': return '#d97706'; // arched stone bridge
        case 'pedestrian': return '#8f7965'; // flagstone pedestrian path
        default: return '#78624d'; // soft dirt lane / timber way
      }
    }
    // Victorian Steampunk
    switch (type) {
      case 'highway': return '#e67e22';
      case 'avenue': return '#f39c12';
      case 'main_street': return '#d1c2aa'; // gaslit macadam / stone
      case 'bridge': return '#b45309'; // ironwork bridge
      case 'pedestrian': return '#8a7d6e';
      default: return '#736353'; // cobblestone alley
    }
  }

  private getStationLines(st: TransitStation, mapData: CityMap): TransitLine[] {
    const linesMap = new Map<string, TransitLine>();

    // 1. Direct lineIds on the station
    if (st.lineIds && st.lineIds.length > 0) {
      for (const lineId of st.lineIds) {
        const found = mapData.transitLines.find(l => l.id === lineId);
        if (found) linesMap.set(found.id, found);
      }
    }

    // 2. Lines referencing station in stationIds
    for (const line of mapData.transitLines) {
      if (line.stationIds && line.stationIds.includes(st.id)) {
        linesMap.set(line.id, line);
      }
    }

    // 3. Proximity match fallback (within 60 units) if no lines explicitly attached
    if (linesMap.size === 0) {
      for (const line of mapData.transitLines) {
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
}
