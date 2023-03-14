
Inside `src/index.ts` you can test different algorithms located in the same directory:

```
import { bubbleSort } from "./sorting";

const unsortedArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = bubbleSort(unsortedArr);

console.log(sortedArr);
```

Compile your TypeScript code to JavaScript by running the following command:

`npx tsc`

This will generate a new `dist` directory in your project directory, which will contain the compiled JavaScript files.

Run your program by entering the following command in your terminal:

`node dist/index.js`
