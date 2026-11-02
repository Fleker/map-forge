import { describe, it, expect, vi } from 'vitest';
import { StorageService } from './storage.service';
import { AETHELBURG_PRESET } from './preset-maps';

describe('StorageService', () => {
  it('handles save and load gracefully in environments without native IndexedDB', async () => {
    const service = new StorageService();
    // In Node test environment, indexedDB is undefined
    await expect(service.saveMap(AETHELBURG_PRESET)).resolves.not.toThrow();
  });

  it('saves and loads from localStorage fallback when under quota limit', async () => {
    const service = new StorageService();
    const fakeStorage: Record<string, string> = {};

    vi.stubGlobal('localStorage', {
      getItem: (key: string) => fakeStorage[key] || null,
      setItem: (key: string, val: string) => { fakeStorage[key] = val; },
      removeItem: (key: string) => { delete fakeStorage[key]; }
    });

    await service.saveMap(AETHELBURG_PRESET);
    const loaded = await service.loadMap();

    expect(loaded).toBeDefined();
    expect(loaded?.id).toBe(AETHELBURG_PRESET.id);

    vi.unstubAllGlobals();
  });
});
