## Algorithm Questions and Solutions

This repository contains a collection of algorithm questions and solutions located inside the src folder. Within the src folder, you will also find an `index.ts` file where you can run demos of these algorithms.

To run a demo of an algorithm, you can import the algorithm function and call it with your own data. For example:

```
// index.ts

import bubbleSort from "./bubbleSort";

const unsortedArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = bubbleSort(unsortedArr);

console.log(sortedArr);
```
## Compiling TypeScript to JavaScript

Compile your TypeScript code to JavaScript by running the following command:

`npx tsc`

This will generate a new `dist` directory in your project directory that contains the compiled JavaScript files.

## Running the Program

After compiling your TypeScript code, you can run the program by entering the following command in your terminal:

`node dist/index.js`

## Tests

This repository also contains a tests folder that you can use to test the algorithms. To run the tests, first run the command `npm install` to install the necessary packages. Then run the command:

`npm test`
