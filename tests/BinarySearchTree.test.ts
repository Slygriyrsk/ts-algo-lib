import { BinarySearchTree } from '../src/trees/BinarySearchTree';
import { Comparable } from '../src/interfaces/Comparable';

class TestNumber implements Comparable<TestNumber> {
  constructor(public value: number) {}

  compareTo(other: TestNumber): number {
    return this.value - other.value;
  }
}

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree<TestNumber>;

  beforeEach(() => {
    bst = new BinarySearchTree<TestNumber>();
  });

  test('insert and search', () => {
    bst.insert(new TestNumber(5));
    bst.insert(new TestNumber(3));
    bst.insert(new TestNumber(7));

    expect(bst.search(new TestNumber(3))).toBe(true);
    expect(bst.search(new TestNumber(7))).toBe(true);
    expect(bst.search(new TestNumber(1))).toBe(false);
  });

  test('inOrderTraversal', () => {
    bst.insert(new TestNumber(5));
    bst.insert(new TestNumber(3));
    bst.insert(new TestNumber(7));
    bst.insert(new TestNumber(1));
    bst.insert(new TestNumber(9));

    const result = bst.inOrderTraversal().map(node => node.value);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });
});