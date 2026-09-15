import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapStateService } from '../../services/map-state.service';
import { RoutingService } from '../../services/routing.service';
import { Point2D } from '../../models/map.models';

interface WaypointOption {
  name: string;
  type: string;
  point: Point2D;
}

@Component({
  selector: 'app-navigation-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  state = inject(MapStateService);
  routing = inject(RoutingService);

  selectedStartId = '';
  selectedEndId = '';
  isPickingStart = false;
  isPickingEnd = false;

  readonly waypointOptions = computed<WaypointOption[]>(() => {
    const map = this.state.currentMap();
    const options: WaypointOption[] = [];

    // Buildings & Landmarks
    map.buildings.forEach(b => {
      options.push({
        name: b.name,
        type: b.isLandmark ? 'Landmark' : b.type.replace('_', ' '),
        point: b.center
      });
    });

    // Transit Stations
    map.transitStations.forEach(s => {
      options.push({
        name: s.name,
        type: `${s.type} Station`,
        point: s.location
      });
    });

    // POIs
    map.pois.forEach(p => {
      options.push({
        name: p.name,
        type: p.category.replace('_', ' '),
        point: p.location
      });
    });

    return options.sort((a, b) => a.name.localeCompare(b.name));
  });

  onStartSelectChange() {
    const opt = this.waypointOptions().find(o => o.name === this.selectedStartId);
    if (opt) {
      this.state.routeStart.set({ point: opt.point, name: opt.name });
    }
  }

  onEndSelectChange() {
    const opt = this.waypointOptions().find(o => o.name === this.selectedEndId);
    if (opt) {
      this.state.routeEnd.set({ point: opt.point, name: opt.name });
    }
  }

  pickStartOnMap() {
    this.isPickingStart = true;
    this.isPickingEnd = false;
    this.state.activeTool.set('route');
  }

  pickEndOnMap() {
    this.isPickingEnd = true;
    this.isPickingStart = false;
    this.state.activeTool.set('route');
  }

  calculateRoute() {
    const start = this.state.routeStart();
    const end = this.state.routeEnd();
    if (!start || !end) {
      alert('Please select both a start location and a destination.');
      return;
    }

    const result = this.routing.findRoute(
      this.state.currentMap(),
      start.point,
      end.point,
      start.name,
      end.name,
      this.state.travelMode()
    );

    this.state.routeResult.set(result);
  }

  setTravelMode(mode: 'walk' | 'drive' | 'transit') {
    this.state.travelMode.set(mode);
    if (this.state.routeStart() && this.state.routeEnd()) {
      this.calculateRoute();
    }
  }

  swapStartAndEnd() {
    const s = this.state.routeStart();
    const e = this.state.routeEnd();
    this.state.routeStart.set(e);
    this.state.routeEnd.set(s);
    if (s && e) {
      this.selectedStartId = e.name;
      this.selectedEndId = s.name;
      this.calculateRoute();
    }
  }

  clearRoute() {
    this.state.routeStart.set(null);
    this.state.routeEnd.set(null);
    this.state.routeResult.set(null);
    this.selectedStartId = '';
    this.selectedEndId = '';
  }

  close() {
    this.state.showNavigationPanel.set(false);
  }
}
