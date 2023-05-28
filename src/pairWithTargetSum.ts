// Given an array of integers and a target integer, write a function to find a pair of
// numbers in the array that add up to the target. If multiple pairs exist, return any
// one of them. If no such pair exists, return an empty array.

let pairOfCurrentItemWithTargetSum = (arr: number[], targetSum: number) => {
  let encounteredNumbers: Record<number, true> = {};
  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    let pairOfCurrentItem = targetSum - currentItem;

    // If we already saw the pair for current item, it means we are done
    if (encounteredNumbers[pairOfCurrentItem]) {
      return [pairOfCurrentItem, currentItem];
    }

    encounteredNumbers[currentItem] = true;
  }
  return [];
};

export default pairOfCurrentItemWithTargetSum;
