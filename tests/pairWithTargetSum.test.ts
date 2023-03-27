import pairWithTargetSum from "../src/pairWithTargetSum";

describe("pairWithTargetSum", () => {
  it("returns a pair of numbers that add up to the target", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 7;
    expect(pairWithTargetSum(arr, target)).toContain(3);
    expect(pairWithTargetSum(arr, target)).toContain(4);
  });

  it("returns an empty array if no such pair exists", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 10;
    expect(pairWithTargetSum(arr, target)).toEqual([]);
  });

  it("returns any one pair of numbers if multiple pairs exist", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const target = 7;
    expect(pairWithTargetSum(arr, target)).toContain(3);
    expect(pairWithTargetSum(arr, target)).toContain(4);
    expect(pairWithTargetSum(arr, target)).not.toContain(1);
    expect(pairWithTargetSum(arr, target)).not.toContain(6);
  });

  it("returns an empty array if the array is empty", () => {
    const arr: number[] = [];
    const target = 10;
    expect(pairWithTargetSum(arr, target)).toEqual([]);
  });
});
