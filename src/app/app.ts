import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { SidebarInspectorComponent } from './components/sidebar-inspector/sidebar-inspector.component';
import { PopulationModalComponent } from './components/population-modal/population-modal.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { ExportModalComponent } from './components/export-modal/export-modal.component';
import { LoreDrawerComponent } from './components/lore-drawer/lore-drawer.component';
import { MapStateService } from './services/map-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent,
    MapViewComponent,
    SidebarInspectorComponent,
    PopulationModalComponent,
    NavigationPanelComponent,
    ExportModalComponent,
    LoreDrawerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  state = inject(MapStateService);
}
