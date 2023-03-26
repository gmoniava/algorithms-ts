import pairWithTargetSum from "../src/pairWithTargetSum";

describe("pairWithTargetSum", () => {
  it("returns expected output", () => {
    expect(pairWithTargetSum([1, 2, 3, 4, 5], 7)).toEqual([3, 4]);
  });
});
