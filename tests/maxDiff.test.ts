import maxDiff from "../src/maxDiff";

describe("maxDiff", () => {
  it("returns 0 when array has fewer than 2 elements", () => {
    expect(maxDiff([])).toBe(0);
    expect(maxDiff([1])).toBe(0);
  });

  it("returns the correct difference for arrays with multiple elements", () => {
    expect(maxDiff([1, 2])).toBe(1);
    expect(maxDiff([1, 2, 3])).toBe(2);
    expect(maxDiff([5, 3, 1, 6, 4])).toBe(5);
  });

  it("returns the correct difference for arrays with negative numbers", () => {
    expect(maxDiff([-1, -2])).toBe(1);
    expect(maxDiff([-5, -3, -1, -6, -4])).toBe(5);
    expect(maxDiff([-5, -3, 1, 6, 4])).toBe(11);
  });

  it("returns the correct difference for arrays with duplicate numbers", () => {
    expect(maxDiff([1, 1, 1])).toBe(0);
    expect(maxDiff([1, 2, 2, 3, 4])).toBe(3);
    expect(maxDiff([-5, -3, -3, -6, -4])).toBe(3);
  });
});
