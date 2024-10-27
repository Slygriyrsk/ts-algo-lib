# TS Algorithm and Data Structures Library

This library provides implementations of various data structures and algorithms in TypeScript.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Slygriyrsk/ts-algo-lib.git
cd ts-algo-lib
```
2. Install dependencies:

```shellscript
npm install
```

3. Alternatively, you can install it directly from npm:
```shellscript
npm install ts-algo-lib
```

## Available Data Structures

- Binary Search Tree
- Linked List
- Stack
- Queue
- Priority Queue

## Usage

```typescript
import { BinarySearchTree, LinkedList, Stack, Queue, PriorityQueue } from 'ts-algo-lib';

// Binary Search Tree
const bst = new BinarySearchTree<number>();
bst.insert(5);
bst.insert(3);
bst.insert(7);
console.log(bst.search(3)); // true
console.log(bst.search(6)); // false

// Linked List
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // "1,2,3"

// Stack
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2

// Queue
const queue = new Queue<string>();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue.dequeue()); // 'a'
console.log(queue.front()); // 'b'

// Priority Queue
const pq = new PriorityQueue<string>();
pq.enqueue('Low', 3);
pq.enqueue('High', 1);
pq.enqueue('Medium', 2);
console.log(pq.dequeue()); // 'High'
console.log(pq.front()); // 'Medium'
```

## Running Tests

To run the test suite:

```shellscript
npm test
```
![Screenshot 2024-10-27 231634](https://github.com/user-attachments/assets/edb0b528-469a-4aa8-95b9-c763e20003c2)

## Running Demo

To run the demo script:

```shellscript
npm run demo
```
![Screenshot 2024-10-27 231605](https://github.com/user-attachments/assets/7a5240c0-b552-4054-8306-a61d377c27fe)

## Building the Project

To compile the TypeScript code to JavaScript:

```shellscript
npm run build
```

The compiled output will be in the `dist` directory.

## Project Structure

```plaintext
ts-algo-lib/
├── src/
│   ├── interfaces/
│   │   └── Comparable.ts
|   |   └── Collection.ts
│   ├── trees/
│   │   ├── BinarySearchTree.ts
│   │   └── BinaryTreeNode.ts
│   ├── lists/
│   │   └── LinkedList.ts
│   ├── stack/
│   │   └── Stack.ts
│   ├── queue/
│   │   ├── Queue.ts
│   │   └── PriorityQueue.ts
│   ├── demo.ts
│   └── index.ts
├── tests/
│   ├── trees/
│   │   └── BinarySearchTree.test.ts
│   ├── lists/
│   │   └── LinkedList.test.ts
│   ├── stack/
│   │   └── Stack.test.ts
│   └── queue/
│       ├── Queue.test.ts
│       └── PriorityQueue.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
