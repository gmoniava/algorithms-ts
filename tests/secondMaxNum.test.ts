import secondMaxNum from "../src/secondMaxNum";

describe("secondMaxNum", () => {
  it("returns expected output", () => {
    expect(secondMaxNum([10, 3, 10])).toBe(3);
  });
  it("returns expected output", () => {
    expect(secondMaxNum([10, 1, 2, 3, 4])).toBe(4);
  });
});
