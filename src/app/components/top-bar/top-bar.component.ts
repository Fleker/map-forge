import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapStateService } from '../../services/map-state.service';
import { EditorTool } from '../../models/map.models';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  state = inject(MapStateService);

  showMetadataModal = false;
  metaName = '';
  metaAuthor = '';
  metaEra: any = 'victorian_steampunk';
  metaDescription = '';
  metaWidth = 2000;
  metaHeight = 2000;
  metaUnitsPerKm = 500;
  metaGridStep = 200;

  setTool(tool: EditorTool) {
    this.state.activeTool.set(tool);
    this.state.activeDrawingPoints.set([]);
  }

  onPresetChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    if (val === 'aethelburg' || val === 'oakhaven' || val === 'blank') {
      if (confirm('Load preset? Any unsaved changes on current map will be replaced.')) {
        this.state.loadPreset(val);
      }
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.state.importFromJsonFile(input.files[0]).then(success => {
        if (success) {
          alert('City map loaded successfully!');
        } else {
          alert('Failed to parse map file. Make sure it is a valid MapForge JSON file.');
        }
        input.value = '';
      });
    }
  }

  openMetadataEditor() {
    const map = this.state.currentMap();
    this.metaName = map.name;
    this.metaAuthor = map.author;
    this.metaEra = map.era;
    this.metaDescription = map.description;
    this.metaWidth = map.width;
    this.metaHeight = map.height;
    this.metaUnitsPerKm = map.unitsPerKm;
    this.metaGridStep = map.gridStep || 200;
    this.showMetadataModal = true;
  }

  setEra(era: any) {
    const map = this.state.currentMap();
    this.state.updateCityMetadata(map.name, map.author, era, map.description);
  }

  saveMetadata() {
    this.state.updateCityMetadata(this.metaName, this.metaAuthor, this.metaEra, this.metaDescription);
    this.state.updateCityDimensions(this.metaWidth, this.metaHeight, this.metaUnitsPerKm, this.metaGridStep);
    this.showMetadataModal = false;
  }
}
