import commonElements from "../src/commonElements";

describe("commonElements", () => {
  it("returns an empty array when given two empty arrays", () => {
    expect(commonElements([], [])).toEqual([]);
  });

  it("returns an empty array when there are no common elements", () => {
    expect(commonElements([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it("returns an array with the common elements in the same order as in the first array", () => {
    expect(commonElements([1, 2, 3], [3, 2, 4])).toEqual([2, 3]);
  });

  it("ignores duplicate elements in the second array", () => {
    expect(commonElements([1, 2, 3], [2, 2, 3, 3, 4])).toEqual([2, 3]);
  });

  it("ignores duplicate elements in the first array", () => {
    expect(commonElements([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([2, 3]);
  });

  it("handles arrays of different lengths", () => {
    expect(commonElements([1, 2, 3], [2, 3, 4, 5])).toEqual([2, 3]);
  });
});
