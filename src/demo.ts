import { Stack } from './stack/Stack';
import { Queue } from './queue/Queue';
import { PriorityQueue } from './queue/PriorityQueue';
import { BinarySearchTree } from './trees/BinarySearchTree';
import { LinkedList } from './lists/LinkedList';

console.log('Stack Demo:');
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack:', stack.toString());
console.log('Pop:', stack.pop());
console.log('Stack after pop:', stack.toString());

console.log('\nQueue Demo:');
const queue = new Queue<string>();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log('Queue:', queue.toString());
console.log('Dequeue:', queue.dequeue());
console.log('Queue after dequeue:', queue.toString());

console.log('\nPriority Queue Demo:');
const pq = new PriorityQueue<string>();
pq.enqueue('Low', 3);
pq.enqueue('High', 1);
pq.enqueue('Medium', 2);
console.log('Priority Queue:', pq.toString());
console.log('Dequeue:', pq.dequeue());
console.log('Priority Queue after dequeue:', pq.toString());

console.log('\nBinary Search Tree Demo:');
const bst = new BinarySearchTree<number>();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(9);
console.log('BST in-order traversal:', bst.inOrderTraversal());
console.log('BST search for 7:', bst.search(7));
console.log('BST search for 6:', bst.search(6));

console.log('\nLinked List Demo:');
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log('Linked List:', linkedList.toString());
linkedList.delete(2);
console.log('Linked List after deleting 2:', linkedList.toString());