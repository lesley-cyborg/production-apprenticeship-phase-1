import { containsDuplicate } from "../containsDuplicate";

describe("containsDuplicate", () => {
  // 1. Standard case
  test("standard case: [1, 2, 3, 1] → true", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  // 2. Edge case with negatives
  test("edge case with negatives: [-1, 0, 1, -1, 2] → true", () => {
    expect(containsDuplicate([-1, 0, 1, -1, 2])).toBe(true);
  });

  // 3. Minimal case
  test("minimal case: [1] → false", () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  // 4. Clean no-duplicate case
  test("no duplicates: [1, 2, 3, 4] → false", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});