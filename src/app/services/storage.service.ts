import { Injectable } from '@angular/core';
import { CityMap } from '../models/map.models';

const DB_NAME = 'mapforge_db';
const DB_VERSION = 1;
const STORE_NAME = 'maps';
const CURRENT_MAP_KEY = 'active_city';
const LOCAL_STORAGE_KEY = 'mapforge_saved_city_v1';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private dbPromise: Promise<IDBDatabase | null> | null = null;

  private getDB(): Promise<IDBDatabase | null> {
    if (typeof indexedDB === 'undefined') {
      return Promise.resolve(null);
    }
    if (!this.dbPromise) {
      this.dbPromise = new Promise((resolve) => {
        try {
          const req = indexedDB.open(DB_NAME, DB_VERSION);
          req.onupgradeneeded = (e) => {
            const db = (e.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              db.createObjectStore(STORE_NAME);
            }
          };
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => {
            console.warn('IndexedDB open error:', req.error);
            resolve(null);
          };
        } catch (e) {
          console.warn('IndexedDB not supported or blocked:', e);
          resolve(null);
        }
      });
    }
    return this.dbPromise;
  }

  async saveMap(map: CityMap): Promise<void> {
    // 1. Save to IndexedDB asynchronously (supports hundreds of MBs without quota limits)
    const db = await this.getDB();
    if (db) {
      try {
        await new Promise<void>((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          const req = store.put(map, CURRENT_MAP_KEY);
          req.onsuccess = () => resolve();
          req.onerror = () => reject(req.error);
        });
      } catch (err) {
        console.warn('Failed to save to IndexedDB:', err);
      }
    }

    // 2. Also update localStorage cache if under 4.5MB threshold
    try {
      if (typeof localStorage !== 'undefined') {
        const serialized = JSON.stringify(map);
        if (serialized.length < 4_500_000) {
          localStorage.setItem(LOCAL_STORAGE_KEY, serialized);
        }
      }
    } catch {
      // Ignore localStorage quota or disabled errors
    }
  }

  async loadMap(): Promise<CityMap | null> {
    // 1. Try IndexedDB
    const db = await this.getDB();
    if (db) {
      try {
        const item = await new Promise<CityMap | null>((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const req = store.get(CURRENT_MAP_KEY);
          req.onsuccess = () => resolve(req.result || null);
          req.onerror = () => reject(req.error);
        });
        if (item && item.width > 0 && item.height > 0) {
          if (!item.gridStep) item.gridStep = 200;
          if (!item.topography) item.topography = [];
          return item;
        }
      } catch (err) {
        console.warn('Failed to load from IndexedDB:', err);
      }
    }

    // 2. Fallback to localStorage
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.width > 0 && parsed.height > 0) {
            if (!parsed.gridStep) parsed.gridStep = 200;
            if (!parsed.topography) parsed.topography = [];
            return parsed;
          }
        }
      }
    } catch {
      // Ignore
    }

    return null;
  }
}
