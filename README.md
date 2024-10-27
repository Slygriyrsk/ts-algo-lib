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

## Usage

```typescript
import { BinarySearchTree, LinkedList } from 'ts-algo-lib';

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
```

## Running Tests

To run the test suite:

```shellscript
npm test
```
![Screenshot 2024-10-26 195638](https://github.com/user-attachments/assets/3db92d17-99e3-4119-90bd-b3ebcb1301a5)

## Running Demo

To run the demo script:

```shellscript
npm run demo
```
![Screenshot 2024-10-26 195650](https://github.com/user-attachments/assets/b6f402c7-c115-47e9-825a-2c0baf98662e)

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
│   ├── trees/
│   │   ├── BinarySearchTree.ts
│   │   └── BinaryTreeNode.ts
│   ├── lists/
│   │   └── LinkedList.ts
│   ├── demo.ts
│   └── index.ts
├── tests/
│   ├── BinarySearchTree.test.ts
│   └── LinkedList.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
