import { Comparable } from "./interfaces/Comparable";
import { LinkedList } from "./lists/LinkedList";
import { BinarySearchTree } from "./trees/BinarySearchTree";

class NumberWrapper implements Comparable<NumberWrapper> {
    constructor (
        public value: number,
    )
    {}

    compareTo(other: NumberWrapper): number {
        return this.value - other.value;
    }
}

// Binary Search Tree
console.log("Binary Search Tree Demo:");
const bst = new BinarySearchTree<NumberWrapper>();
bst.insert(new NumberWrapper(5));
bst.insert(new NumberWrapper(3));
bst.insert(new NumberWrapper(7));
bst.insert(new NumberWrapper(1));
bst.insert(new NumberWrapper(9));

console.log("Search for 3: ", bst.search(new NumberWrapper(3)));
console.log("Inorder Traversal: ", bst.inOrderTraversal().map(callback => callback.value));

// Linked List
console.log("\nLinked List Demo:");
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.delete(2);

console.log("Linked List:", list.toString());
