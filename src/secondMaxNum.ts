// Given an array of integers, find the second largest element in the array.
// If there are multiple occurrences of the second largest element, return any one of them.
// Input
//  [1, 2, 3, 9, 50, 7, 11]
// Output
//  11

let secondMaxNum = (input: number[]) => {
  if (input.length < 2) return;
  let max = Math.max(input[0], input[1]),
    secondMax = Math.min(input[0], input[1]);

  for (let i = 2; i < input.length; i++) {
    if (input[i] > max) {
      secondMax = max;
      max = input[i];
    } else {
      if (input[i] > secondMax && input[i] !== max) {
        secondMax = input[i];
      }
    }
  }

  return secondMax;
};

export default secondMaxNum;
