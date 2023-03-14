// Question:
// Given an array of integers and a target integer, write a function to find a pair of
// numbers in the array that add up to the target. If multiple pairs exist, return any
// one of them. If no such pair exists, return an empty array.
export let findPairWithTargetSum = (arr: number[], sum: number) => {
  let foundNums: Record<number, any> = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let pair = sum - item;

    if (foundNums[pair]) {
      return [item, pair];
    } else {
      foundNums[item] = true;
    }
  }
  return [];
};
