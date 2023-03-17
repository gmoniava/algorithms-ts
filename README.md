## Introduction

This repository contains solutions to some algorithm questions in TypeScript.

## Notes about the project structure

Algorithm questions and solutions are located inside the `src` folder.
Inside that folder you will also find `index.ts` file, where you can
run demos of those algorithms, like here:

```
// index.ts

import bubbleSort from "./sorting";

const unsortedArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = bubbleSort(unsortedArr);

console.log(sortedArr);
```

Compile your TypeScript code to JavaScript by running the following command:

`npx tsc`

This will generate a new `dist` directory in your project directory, which will contain the compiled JavaScript files.

Run your program by entering the following command in your terminal:

`node dist/index.js`
