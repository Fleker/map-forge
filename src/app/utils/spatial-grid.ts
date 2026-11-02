export interface BoundedItem<T> {
  item: T;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export class SpatialGrid<T> {
  private cellSize: number;
  private grid = new Map<string, BoundedItem<T>[]>();
  private allItems: BoundedItem<T>[] = [];

  constructor(cellSize = 1000) {
    this.cellSize = cellSize > 0 ? cellSize : 1000;
  }

  clear(): void {
    this.grid.clear();
    this.allItems = [];
  }

  insert(item: T, minX: number, maxX: number, minY: number, maxY: number): void {
    const entry: BoundedItem<T> = { item, minX, maxX, minY, maxY };
    this.allItems.push(entry);

    const startCellX = Math.floor(minX / this.cellSize);
    const endCellX = Math.floor(maxX / this.cellSize);
    const startCellY = Math.floor(minY / this.cellSize);
    const endCellY = Math.floor(maxY / this.cellSize);

    for (let cx = startCellX; cx <= endCellX; cx++) {
      for (let cy = startCellY; cy <= endCellY; cy++) {
        const key = `${cx},${cy}`;
        let list = this.grid.get(key);
        if (!list) {
          list = [];
          this.grid.set(key, list);
        }
        list.push(entry);
      }
    }
  }

  query(minX: number, maxX: number, minY: number, maxY: number): T[] {
    const startCellX = Math.floor(minX / this.cellSize);
    const endCellX = Math.floor(maxX / this.cellSize);
    const startCellY = Math.floor(minY / this.cellSize);
    const endCellY = Math.floor(maxY / this.cellSize);

    const resultSet = new Set<T>();

    for (let cx = startCellX; cx <= endCellX; cx++) {
      for (let cy = startCellY; cy <= endCellY; cy++) {
        const list = this.grid.get(`${cx},${cy}`);
        if (list) {
          for (let i = 0; i < list.length; i++) {
            const entry = list[i];
            // Precise AABB intersection test
            if (entry.minX <= maxX && entry.maxX >= minX && entry.minY <= maxY && entry.maxY >= minY) {
              resultSet.add(entry.item);
            }
          }
        }
      }
    }

    return Array.from(resultSet);
  }

  getAll(): T[] {
    return this.allItems.map(b => b.item);
  }

  size(): number {
    return this.allItems.length;
  }
}
