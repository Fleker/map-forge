import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapStateService } from '../../services/map-state.service';
import { DemographicsService } from '../../services/demographics.service';
import { Building, District, POI, Road, TransitLine, TransitStation, NaturalFeature, TopoFeature } from '../../models/map.models';

@Component({
  selector: 'app-sidebar-inspector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar-inspector.component.html',
  styleUrls: ['./sidebar-inspector.component.scss']
})
export class SidebarInspectorComponent {
  state = inject(MapStateService);
  demographics = inject(DemographicsService);

  newChapterRef = '';

  transitSwatches = [
    { name: 'Crimson Red', color: '#e11d48' },
    { name: 'Sky Blue', color: '#0284c7' },
    { name: 'Emerald Green', color: '#059669' },
    { name: 'Amber Gold', color: '#d97706' },
    { name: 'Vibrant Purple', color: '#7c3aed' },
    { name: 'Hot Pink', color: '#db2777' },
    { name: 'Safety Orange', color: '#ea580c' },
    { name: 'Cyan / Teal', color: '#06b6d4' },
    { name: 'Midnight Navy', color: '#1e3a8a' },
    { name: 'Steel Slate', color: '#475569' }
  ];

  setLineColor(line: TransitLine, color: string) {
    line.color = color;
    this.updateLine(line);
  }

  isLineSelected(st: TransitStation, lineId: string): boolean {
    return !!st.lineIds && st.lineIds.includes(lineId);
  }

  toggleStationLine(st: TransitStation, lineId: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (!st.lineIds) {
      st.lineIds = [];
    }

    if (isChecked) {
      if (!st.lineIds.includes(lineId)) {
        st.lineIds = [...st.lineIds, lineId];
      }
      const line = this.state.currentMap().transitLines.find(l => l.id === lineId);
      if (line && !line.stationIds.includes(st.id)) {
        line.stationIds = [...line.stationIds, st.id];
        this.state.updateTransitLine(line);
      }
    } else {
      st.lineIds = st.lineIds.filter(id => id !== lineId);
      const line = this.state.currentMap().transitLines.find(l => l.id === lineId);
      if (line && line.stationIds.includes(st.id)) {
        line.stationIds = line.stationIds.filter(id => id !== st.id);
        this.state.updateTransitLine(line);
      }
    }

    if (st.lineIds.length >= 2) {
      st.isTransferHub = true;
    }

    this.updateStation(st);
  }

  close() {
    this.state.selectedFeature.set(null);
  }

  deleteCurrent() {
    const sel = this.state.selectedFeature();
    if (!sel) return;

    if (confirm(`Delete this ${sel.type.replace('_', ' ')}?`)) {
      switch (sel.type) {
        case 'building': this.state.deleteBuilding(sel.id); break;
        case 'road': this.state.deleteRoad(sel.id); break;
        case 'district': this.state.deleteDistrict(sel.id); break;
        case 'transit_line': this.state.deleteTransitLine(sel.id); break;
        case 'transit_station': this.state.deleteTransitStation(sel.id); break;
        case 'poi': this.state.deletePOI(sel.id); break;
        case 'water':
        case 'park': this.state.deleteNaturalFeature(sel.id); break;
        case 'topography': this.state.deleteTopoFeature(sel.id); break;
      }
    }
  }

  asBuilding(item: any): Building { return item as Building; }
  asRoad(item: any): Road { return item as Road; }
  asDistrict(item: any): District { return item as District; }
  asStation(item: any): TransitStation { return item as TransitStation; }
  asLine(item: any): TransitLine { return item as TransitLine; }
  asPOI(item: any): POI { return item as POI; }
  asNatural(item: any): NaturalFeature { return item as NaturalFeature; }
  asTopo(item: any): TopoFeature { return item as TopoFeature; }

  updateBuilding(bld: Building) {
    this.state.updateBuilding(bld);
  }

  updateRoad(road: Road) {
    this.state.updateRoad(road);
  }

  updateDistrict(dist: District) {
    this.state.updateDistrict(dist);
  }

  updateStation(st: TransitStation) {
    this.state.updateTransitStation(st);
  }

  updateLine(line: TransitLine) {
    this.state.updateTransitLine(line);
  }

  updatePOI(poi: POI) {
    this.state.updatePOI(poi);
  }

  updateNatural(feat: NaturalFeature) {
    this.state.updateNaturalFeature(feat);
  }

  updateTopo(topo: TopoFeature) {
    this.state.updateTopoFeature(topo);
  }

  addChapterRef(bld: Building) {
    if (!this.newChapterRef.trim()) return;
    if (!bld.chapterReferences) bld.chapterReferences = [];
    bld.chapterReferences.push(this.newChapterRef.trim());
    this.newChapterRef = '';
    this.updateBuilding(bld);
  }

  removeChapterRef(bld: Building, index: number) {
    bld.chapterReferences?.splice(index, 1);
    this.updateBuilding(bld);
  }

  setAsRouteStart(name: string, location: { x: number; y: number }) {
    this.state.routeStart.set({ point: location, name });
    this.state.showNavigationPanel.set(true);
  }

  setAsRouteEnd(name: string, location: { x: number; y: number }) {
    this.state.routeEnd.set({ point: location, name });
    this.state.showNavigationPanel.set(true);
  }
}
