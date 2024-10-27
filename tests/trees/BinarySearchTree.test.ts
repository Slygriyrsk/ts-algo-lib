import { BinarySearchTree } from '../../src/trees/BinarySearchTree';

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  test('insert and search', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    expect(bst.search(3)).toBe(true);
    expect(bst.search(7)).toBe(true);
    expect(bst.search(1)).toBe(false);
  });

  test('inOrderTraversal', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(9);

    const result = bst.inOrderTraversal();
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });
});