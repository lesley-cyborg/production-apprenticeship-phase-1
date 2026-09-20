import { twoSum } from "../twoSum";

describe("twoSum", () => {
  // 1. Standard case
  test("standard case: [2, 7, 11, 15], target 9 → [0, 1]", () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  // 2. Edge case (negatives + possible duplicates)
  test("edge case with negatives: [-3, 4, -3, 8], target 5 → [0, 3] or [2, 3]", () => {
    const result = twoSum([-3, 4, -3, 8], 5);
    // Accept either valid pair
    const valid =
      (result[0] === 0 && result[1] === 3) ||
      (result[0] === 2 && result[1] === 3);
    expect(valid).toBe(true);
  });

  // Additional clear edge case
  test("edge case: [3, 2, 4], target 6 → [1, 2]", () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  // 3. Minimal valid case
  test("minimal valid case: [3, 3], target 6 → [0, 1]", () => {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual([0, 1]);
  });
});
