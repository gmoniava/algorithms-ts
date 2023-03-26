import maxDiff from "../src/maxDiff";

describe("maxDiff", () => {
  it("returns expected output", () => {
    expect(maxDiff([3, 5, 1, 8, 2])).toBe(7);
  });
  it("returns expected output", () => {
    expect(maxDiff([12, 5, 7, 8, 2])).toBe(10);
  });
  it("returns expected output", () => {
    expect(maxDiff([4, 4])).toBe(0);
  });
  it("returns expected output", () => {
    expect(maxDiff([2])).toBe(0);
  });
});
