import { GridItemSize } from './item-size';

export class GridItemHelper {
  col: number;
  size: GridItemSize;

  constructor(col: number, size: GridItemSize) {
    this.col = col;
    this.size = size;
  }

  genX(index: number): number {
    return (index % this.col) * this.size.w;
  }

  genY(index: number): number {
    return Math.floor(index / this.col) * this.size.h;
  }
}
