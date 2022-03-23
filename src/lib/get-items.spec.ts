import { getGridItems } from './get-items';

describe('getGridItems', () => {
  var { cols, items } = getGridItems({
    items: [...Array(13).keys()].map((e) => {
      return {
        id: e.toString(),
        title: `${e} title`
      };
    }),
    cols: [
      {
        width: 2048,
        cols: 4
      },
      {
        width: 1024,
        cols: 2
      },
      {
        width: 500,
        cols: 1
      }
    ],
    size: {
      w: 1,
      h: 4
    }
  });

  it('Check cols', () => {
    expect(typeof cols === typeof [[0, 1]]);
  });

  it('Check items', () => {
    expect(typeof items === typeof [{ id: 'id' }]);
  });
});
