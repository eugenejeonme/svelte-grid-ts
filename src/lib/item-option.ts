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
      fixed?: boolean;
      resizable?: boolean;
      draggable?: boolean;
      customDragger?: boolean;
      customResizer?: boolean;
      min?: {
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
    this.fixed = options.fixed ?? true;
    this.resizable = options.resizable ?? false;
    this.draggable = options.draggable ?? false;
    this.customDragger = options.customDragger;
    this.customResizer = options.customResizer;
    this.min = options.min ?? { w: 1, h: 1 };
    this.max = options.max;
  }
}
