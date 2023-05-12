import generatePalindrome from "../src/generatePalindrome";

const isPalindrome = (str: string): boolean => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

describe("generatePalindrome", () => {
  test("returns an empty string when a palindrome cannot be created", () => {
    expect(generatePalindrome("abc")).toBe("");
    expect(generatePalindrome("xyz")).toBe("");
    expect(generatePalindrome("hello")).toBe("");
  });

  test("returns a rearranged palindrome created from the input string", () => {
    const input = "aabbccd";
    const result = generatePalindrome(input);
    expect(isPalindrome(result)).toBe(true);
  });

  // Additional test cases
  test("returns a rearranged palindrome for a single character input", () => {
    const input = "a";
    const result = generatePalindrome(input);
    expect(isPalindrome(result)).toBe(true);
  });

  test("returns a rearranged palindrome for an empty string input", () => {
    const input = "";
    const result = generatePalindrome(input);
    expect(isPalindrome(result)).toBe(true);
  });

  test("returns a rearranged palindrome for a string with repeated characters", () => {
    const input = "aaaabbbb";
    const result = generatePalindrome(input);
    expect(isPalindrome(result)).toBe(true);
  });

  test("returns a rearranged palindrome for a string with odd length", () => {
    const input = "abcdedbca";
    const result = generatePalindrome(input);
    expect(isPalindrome(result)).toBe(true);
  });

  // Additional test cases
  test("returns a rearranged palindrome for a string with all same characters", () => {
    const input = "cccccccdd";
    const result = generatePalindrome(input);
    expect(isPalindrome(result)).toBe(true);
  });

  test("returns a rearranged palindrome for a string with all distinct characters", () => {
    const input = "abcde";
    const result = generatePalindrome(input);
    expect(isPalindrome(result)).toBe(true);
  });
});
