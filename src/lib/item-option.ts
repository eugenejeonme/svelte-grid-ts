export class GridItemOption {
  fixed: boolean;
  resizable: boolean;
  draggable: boolean;
  customDragger?: boolean;
  customResizer?: boolean;
  min: {
    w: number;
    h: number;
  };
  max?: {
    w: number;
    h: number;
  };

  constructor(
    options: {
      fixed: boolean;
      resizable: boolean;
      draggable: boolean;
      customDragger?: boolean;
      customResizer?: boolean;
      min: {
        w: number;
        h: number;
      };
      max?: {
        w: number;
        h: number;
      };
    } = {
      fixed: true,
      resizable: false,
      draggable: false,
      min: { w: 1, h: 1 }
    }
  ) {
    this.fixed = options.fixed;
    this.resizable = options.resizable;
    this.draggable = options.draggable;
    this.customDragger = options.customDragger;
    this.customResizer = options.customResizer;
    this.min = options.min;
    this.max = options.max;
  }
}
