// Write a function that takes an array of sorted integers and a target value as input and performs a binary search
// to find the target value in the array. If the target is found, the function should return the index of the
// target. If the target is not found, the function should return -1.

let binarySearch = (
  input: number[],
  target: number,
  start: number = 0,
  end: number = input.length - 1
): number => {
  let middle = start + Math.floor((end - start) / 2);

  if (input.length == 0) return -1;

  if (input[middle] == target) return middle;

  if (start >= end) return -1;

  if (input[middle] < target) {
    return binarySearch(input, target, middle + 1, end);
  } else {
    return binarySearch(input, target, start, middle - 1);
  }
};

export default binarySearch;
