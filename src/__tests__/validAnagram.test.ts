import { isAnagram } from "../validAnagram";

describe("isAnagram", () => {
  // 1. Standard case
  test('standard case: "anagram" and "nagaram" → true', () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  // 2. Edge case - different lengths
  test('edge case different lengths: "a" and "ab" → false', () => {
    expect(isAnagram("a", "ab")).toBe(false);
  });

  // 3. Minimal case
  test('minimal case: "a" and "a" → true', () => {
    expect(isAnagram("a", "a")).toBe(true);
  });

  // 4. Different characters, same length
  test('different characters same length: "rat" and "car" → false', () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});