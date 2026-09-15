import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapStateService } from '../../services/map-state.service';
import { ExportService } from '../../services/export.service';
import { BookTheme, ExportSettings, TrimSize, TRIM_SIZES } from '../../models/map.models';

@Component({
  selector: 'app-export-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.scss']
})
export class ExportModalComponent implements AfterViewInit {
  state = inject(MapStateService);
  exportService = inject(ExportService);

  @ViewChild('previewCanvas') previewCanvasRef!: ElementRef<HTMLCanvasElement>;

  settings: ExportSettings = {
    title: this.state.currentMap().name,
    subtitle: `Mapped for "${this.state.currentMap().name}" Chronicles`,
    theme: (this.state.currentMap().era === 'medieval' || this.state.currentMap().era === 'victorian_steampunk') ? 'grimoire' : 'parchment',
    trimSize: 'custom',
    showGutterGuide: false,
    spineSide: 'left',
    resolutionScale: 2, // Default to 2x for preview/eBook
    format: 'png',
    jpegQuality: 0.95,
    showBorder: true,
    showCompassRose: true,
    showScaleBar: true,
    showGrid: this.state.layerVisibility().grid,
    showTitleBox: true,
    showLegend: false,
    showDistricts: this.state.layerVisibility().districts,
    showDistrictLabels: this.state.layerVisibility().districtLabels,
    showWater: this.state.layerVisibility().waterParks,
    showParks: this.state.layerVisibility().waterParks,
    showNaturalFeatureLabels: true,
    showTopography: this.state.layerVisibility().topography ?? true,
    showIsochrone: this.state.layerVisibility().isochrone ?? true,
    showRoads: this.state.layerVisibility().roads,
    showRoadLabels: this.state.layerVisibility().roadLabels,
    showMinorRoads: true,
    showBuildings: this.state.layerVisibility().buildings,
    showBuildingLabels: this.state.layerVisibility().buildingLabels,
    onlyLandmarkBuildingLabels: true, // cleaner for books
    showTransitLines: this.state.layerVisibility().transit,
    showTransitStations: this.state.layerVisibility().transitStations,
    showStationLabels: this.state.layerVisibility().stationLabels,
    showPois: this.state.layerVisibility().pois,
    showPoiLabels: true
  };

  isRendering = false;
  private renderDebounceTimer: any = null;

  ngAfterViewInit() {
    this.refreshPreview();
  }

  getTargetDimensions(): { width: number; height: number; scale: number; clamped: boolean } {
    return this.exportService.getSafeDimensions(this.state.currentMap(), this.settings.resolutionScale, this.settings.trimSize, this.settings.spineSide);
  }

  isCurrentTrimSpread(): boolean {
    return this.settings.trimSize === '12x9_spread';
  }

  setSpineSide(side: 'left' | 'right') {
    this.settings.spineSide = side;
    this.refreshPreview();
  }

  onTrimSizeChange(trim: TrimSize) {
    this.settings.trimSize = trim;
    if (trim !== 'custom' && this.settings.resolutionScale < 3) {
      // Default to 300 DPI for book trim prints
      this.settings.resolutionScale = 4;
    }
    this.refreshPreview();
  }

  onResolutionScaleChange(scale: number) {
    this.settings.resolutionScale = scale;
    // Auto-adjust sensible feature visibility based on resolution
    if (scale <= 1) {
      this.settings.onlyLandmarkBuildingLabels = true;
      this.settings.showMinorRoads = false;
    } else {
      this.settings.showMinorRoads = true;
    }
    this.refreshPreview();
  }

  onThemeChange(theme: BookTheme) {
    this.settings.theme = theme;
    this.refreshPreview();
  }

  refreshPreview() {
    if (!this.previewCanvasRef) return;
    this.isRendering = true;

    if (this.renderDebounceTimer) {
      clearTimeout(this.renderDebounceTimer);
    }

    // Debounce rapid input/toggle changes
    this.renderDebounceTimer = setTimeout(() => {
      this.executePreviewRender();
    }, 40);
  }

  private executePreviewRender() {
    if (!this.previewCanvasRef) return;
    const cityMap = this.state.currentMap();
    const maxDim = Math.max(cityMap.width, cityMap.height);
    // Adapt preview resolution: cap longest edge to 1200px so even 20,000x2,000 renders in < 10ms
    const previewScale = Math.min(1.0, 1200 / maxDim);

    const canvas = this.previewCanvasRef.nativeElement;
    // Draw directly to the existing preview canvas element without offscreen allocation
    this.exportService.renderToCanvas(cityMap, this.settings, canvas, previewScale, this.state.currentIsochrone());
    this.isRendering = false;
  }

  downloadRaster(format: 'png' | 'jpeg') {
    this.isRendering = true;
    setTimeout(() => {
      const cityMap = this.state.currentMap();
      const fullResCanvas = this.exportService.renderToCanvas(cityMap, this.settings, undefined, undefined, this.state.currentIsochrone());
      const safeTitle = (this.settings.title || 'mapforge_city').toLowerCase().replace(/[^a-z0-9]/g, '_');
      const safeDim = this.getTargetDimensions();
      const dpiName = this.settings.resolutionScale === 4 ? '300dpi' : `${this.settings.resolutionScale}x`;
      this.exportService.downloadImage(
        fullResCanvas,
        `${safeTitle}_${this.settings.theme}_${dpiName}_${safeDim.width}x${safeDim.height}`,
        format,
        this.settings.jpegQuality
      );
      this.isRendering = false;
    }, 50);
  }

  downloadSVG() {
    const svgContent = this.exportService.exportSVG(this.state.currentMap(), this.settings, this.state.currentIsochrone());
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeTitle = (this.settings.title || 'mapforge_city').toLowerCase().replace(/[^a-z0-9]/g, '_');
    link.download = `${safeTitle}_${this.settings.theme}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  }

  close() {
    if (this.renderDebounceTimer) {
      clearTimeout(this.renderDebounceTimer);
    }
    this.state.showExportModal.set(false);
  }
}
