// Write a function that takes in an array of integers and returns the largest
// difference between any two elements in the array. Your function should work
// for arrays of any length and should return 0 if the array contains fewer
// than 2 elements.

// Input
//  [3, 5, 1, 8, 2]
// Output
//  7

let maxDiff = (input: number[]): number => {
  let min = input[0],
    max = input[0];

  // The intuition behind the algorithm is that the maximum
  // difference will be the difference between the largest
  // and the smallest  number of the array

  if (input.length < 2) return 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > max) max = input[i];
    if (input[i] < min) min = input[i];
  }

  return max - min;
};

export default maxDiff;
