import { GridItemHelper } from './item-helper';
import { GridItemOption } from './item-option';
import { GridItemSize } from './item-size';

export function getGridItems<T extends { id: string }>({
  items,
  cols,
  size = { w: 1, h: 1 },
  options = new GridItemOption()
}: {
  items: Array<T>;
  cols: Array<{
    width: number;
    cols: number;
  }>;
  size?: {
    w?: number;
    h?: number;
  };
  options?: GridItemOption;
}) {
  const itemSize = new GridItemSize(size);

  const colsHelper = cols.reduce<Record<number, GridItemHelper>>(
    (helper, obj) => {
      helper[obj.cols] = new GridItemHelper(obj.cols, itemSize);
      return helper;
    },
    {}
  );

  const newItems = items.map((e, index) => {
    const indexHelper = Object.fromEntries(
      Object.entries(colsHelper).map(([key, helper]) => [
        key,
        {
          x: helper.genX(index),
          y: helper.genY(index),
          ...itemSize,
          ...options
        }
      ])
    );

    return {
      id: e.id,
      data: e,
      ...indexHelper
    };
  });

  return { items: newItems, cols: cols.map((e) => [e.width, e.cols]) };
}
