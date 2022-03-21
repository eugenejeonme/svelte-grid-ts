export class GridItemSize {
  w: number;
  h: number;

  constructor({ w = 1, h = 1 }: { w?: number; h?: number }) {
    this.w = w;
    this.h = h;
  }

  get toMap(): { w: number; h: number } {
    return {
      w: this.w,
      h: this.h
    };
  }
}
