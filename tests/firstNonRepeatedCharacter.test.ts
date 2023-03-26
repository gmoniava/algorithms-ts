import firstNonRepeatedCharacter from "../src/firstNonRepeatedCharacter";

describe("firstNonRepeatedCharacter", () => {
  it("returns expected output", () => {
    expect(firstNonRepeatedCharacter("aabbccddggghjjjuu")).toBe("h");
  });
  it("returns expected output", () => {
    expect(firstNonRepeatedCharacter("aabbccddggghhjuu")).toBe("j");
  });
});
