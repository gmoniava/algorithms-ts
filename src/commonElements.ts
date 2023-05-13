// Given two arrays of integers, write a function that returns an array containing only
// the elements that appear in both arrays. The returned array should not contain any
// duplicates, and the order of the elements should be the same as in the first array.
// Input
//  [1, 2, 3], [3, 2, 4]
// Output
//  [2,3]
let commonElements = (arr1: number[], arr2: number[]) => {
  let numsSeenInSecondArr: Record<number, boolean> = {};
  let result: number[] = [];

  // First let's just store which integers we encountered in the second array
  arr2.forEach((x) => {
    numsSeenInSecondArr[x] = true;
  });

  // Now, iterate first array and see if we already saw this element in the second array
  arr1.forEach((y) => {
    if (numsSeenInSecondArr[y]) {
      result.push(y);
      delete numsSeenInSecondArr[y];
    }
  });

  return result;
};

export default commonElements;
