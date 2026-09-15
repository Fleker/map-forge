import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapStateService } from '../../services/map-state.service';
import { Building, POI, Point2D } from '../../models/map.models';

interface ChapterBookmark {
  chapterName: string;
  items: {
    type: 'building' | 'poi';
    id: string;
    name: string;
    location: Point2D;
    notes?: string;
  }[];
}

@Component({
  selector: 'app-lore-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lore-drawer.component.html',
  styleUrls: ['./lore-drawer.component.scss']
})
export class LoreDrawerComponent {
  state = inject(MapStateService);

  searchFilter = '';

  readonly chapters = computed<ChapterBookmark[]>(() => {
    const map = this.state.currentMap();
    const chapterMap = new Map<string, ChapterBookmark['items']>();

    // Scan buildings
    map.buildings.forEach(b => {
      b.chapterReferences?.forEach(ch => {
        if (!chapterMap.has(ch)) chapterMap.set(ch, []);
        chapterMap.get(ch)!.push({
          type: 'building',
          id: b.id,
          name: b.name,
          location: b.center,
          notes: b.notes
        });
      });
    });

    // Scan POIs
    map.pois.forEach(p => {
      if (p.chapterReference) {
        if (!chapterMap.has(p.chapterReference)) chapterMap.set(p.chapterReference, []);
        chapterMap.get(p.chapterReference)!.push({
          type: 'poi',
          id: p.id,
          name: p.name,
          location: p.location,
          notes: p.description
        });
      }
    });

    const result: ChapterBookmark[] = [];
    chapterMap.forEach((items, chapterName) => {
      result.push({ chapterName, items });
    });

    return result.sort((a, b) => a.chapterName.localeCompare(b.chapterName));
  });

  readonly keyLandmarks = computed(() => {
    const map = this.state.currentMap();
    return map.buildings.filter(b => b.isLandmark || b.type === 'institutional');
  });

  selectLocation(type: 'building' | 'poi', id: string) {
    this.state.selectedFeature.set({ type, id });
  }

  close() {
    this.state.showLoreDrawer.set(false);
  }
}
