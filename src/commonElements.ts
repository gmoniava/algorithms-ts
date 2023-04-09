// Given two arrays of integers, write a function that returns an array containing only
// the elements that appear in both arrays. The returned array should not contain any
// duplicates, and the order of the elements should be the same as in the first array.
// Input
//  [1, 2, 3], [3, 2, 4]
// Output
//  [2,3]
let commonElements = (arr1: number[], arr2: number[]) => {
  let numsSeen: Record<number, boolean> = {};

  // First let's just store which integers we encountered in the second array
  arr2.forEach((x) => {
    numsSeen[x] = true;
  });
  let result: number[] = [];

  // Now, iterate first array and see if any of its elements are in the map we created above
  arr1.forEach((y) => {
    if (numsSeen[y]) {
      result.push(y);
      delete numsSeen[y];
    }
  });

  return result;
};

export default commonElements;
