import { describe, it, expect } from 'vitest';
import { SpatialGrid } from './spatial-grid';

describe('SpatialGrid Utility', () => {
  it('inserts and queries items accurately', () => {
    const grid = new SpatialGrid<string>(500);

    grid.insert('building-1', 100, 140, 100, 140);
    grid.insert('building-2', 600, 640, 600, 640);
    grid.insert('building-3', 1200, 1240, 1200, 1240);

    // Query covering only building-1
    const result1 = grid.query(0, 500, 0, 500);
    expect(result1).toContain('building-1');
    expect(result1).not.toContain('building-2');
    expect(result1).not.toContain('building-3');

    // Query covering building-2
    const result2 = grid.query(500, 1000, 500, 1000);
    expect(result2).toContain('building-2');
    expect(result2).not.toContain('building-1');
    expect(result2).not.toContain('building-3');

    // Query covering all
    const resultAll = grid.query(0, 2000, 0, 2000);
    expect(resultAll.length).toBe(3);
  });

  it('performs query in sub-millisecond time on 50,000 items', () => {
    const grid = new SpatialGrid<number>(1000);
    for (let i = 0; i < 50000; i++) {
      const x = (i * 37) % 20000;
      const y = (i * 73) % 20000;
      grid.insert(i, x, x + 40, y, y + 40);
    }

    expect(grid.size()).toBe(50000);

    const start = performance.now();
    // Viewport query covering 2000x2000 units (1/100th of the map)
    const candidates = grid.query(2000, 4000, 2000, 4000);
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(5); // should be < 5ms (usually < 0.5ms)
    expect(candidates.length).toBeGreaterThan(0);
    expect(candidates.length).toBeLessThan(50000);
  });
});
