import secondMaxNum from "../src/secondMaxNum";

describe("secondMaxNum", () => {
  it("returns the second largest element in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(secondMaxNum(arr)).toEqual(4);
  });

  it("returns the second largest element in the array if there are multiple occurrences", () => {
    const arr = [1, 2, 3, 4, 4, 5];
    expect(secondMaxNum(arr)).toEqual(4);
  });

  it("returns undefined if the array has fewer than two elements", () => {
    const arr = [1];
    expect(secondMaxNum(arr)).toBeUndefined();
  });
});
