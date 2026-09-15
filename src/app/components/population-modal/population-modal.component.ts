import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapStateService } from '../../services/map-state.service';
import { DemographicsService } from '../../services/demographics.service';

@Component({
  selector: 'app-population-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './population-modal.component.html',
  styleUrls: ['./population-modal.component.scss']
})
export class PopulationModalComponent {
  state = inject(MapStateService);
  demographics = inject(DemographicsService);

  readonly stats = computed(() => {
    return this.demographics.calculateStats(this.state.currentMap());
  });

  close() {
    this.state.showPopulationModal.set(false);
  }
}
