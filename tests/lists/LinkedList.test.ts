import { LinkedList } from '../../src/lists/LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test('append and toArray', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('prepend', () => {
    list.append(2);
    list.append(3);
    list.prepend(1);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('delete', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.delete(2);

    expect(list.toArray()).toEqual([1, 3]);
  });

  test('toString', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toString()).toBe('1,2,3');
  });
});