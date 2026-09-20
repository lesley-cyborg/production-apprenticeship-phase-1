import { lengthOfLongestSubstring } from "../longestSubstring";

describe("lengthOfLongestSubstring", () => {
  // 1. Standard case
  test('standard case: "abcabcbb" → 3', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  // 2. Edge case – all same characters
  test('edge case all same: "bbbbb" → 1', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  // 3. Minimal / empty case
  test('empty string: "" → 0', () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  // 4. Crucial edge case that tests the ">= left" logic
  test('crucial edge case: "abba" → 2', () => {
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });

  // Extra useful case
  test('classic case: "pwwkew" → 3', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});