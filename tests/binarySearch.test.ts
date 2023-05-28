import binarySearch from "../src/binarySearch";

describe("binarySearch", () => {
  it("Finds element", () => {
    const sortedArray = [1, 3, 5, 7, 9, 11];

    expect(binarySearch(sortedArray, 7)).toBe(3);
    expect(binarySearch(sortedArray, 1)).toBe(0);
    expect(binarySearch(sortedArray, 11)).toBe(5);
  });
  it("Can't find element", () => {
    const sortedArray = [1, 3, 5, 7, 9, 11];

    expect(binarySearch(sortedArray, 4)).toBe(-1);
    expect(binarySearch(sortedArray, 10)).toBe(-1);
    expect(binarySearch(sortedArray, 0)).toBe(-1);
  });
});
