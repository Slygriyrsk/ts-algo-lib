import { BinaryTreeNode } from './BinaryTreeNode';

export class BinarySearchTree<T extends number> {
  private root: BinaryTreeNode<T> | null = null;

  insert(value: T): void {
    this.root = this.insertNode(this.root, value);// insert from the root
  }

  private insertNode(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> {
    if (node === null) {
      return new BinaryTreeNode(value); // if node is null then create a new node to insert into the tree
    }

    // comparing the value to be inserted,
    // if less than root val then it should be inserted left
    // else greater than root val then at right
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: BinaryTreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) { // if value is less than root then search at the left subtree
      return this.searchNode(node.left, value);
    }

    return this.searchNode(node.right, value); // else search at the rightsubtree
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  private inOrderTraversalNode(node: BinaryTreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }
}