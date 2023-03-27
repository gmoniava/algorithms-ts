import firstNonRepeatedCharacter from "../src/firstNonRepeatedCharacter";

describe("firstNonRepeatedCharacter", () => {
  test("should return the first non-repeated character in the string", () => {
    expect(firstNonRepeatedCharacter("hello")).toBe("h");
    expect(firstNonRepeatedCharacter("aabbcdd")).toBe("c");
    expect(firstNonRepeatedCharacter("aabbccddeeff")).toBe(null);
  });

  test("should return null for an empty string", () => {
    expect(firstNonRepeatedCharacter("")).toBe(null);
  });

  test("should return the first character for a string with only one character", () => {
    expect(firstNonRepeatedCharacter("a")).toBe("a");
  });
});
