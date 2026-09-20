/**
 * Two Sum - Optimized Hash Map Solution
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Assumes exactly one solution exists and the same element cannot be used twice.
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  // Problem guarantees a solution, but TypeScript needs a return
  throw new Error("No two sum solution found");
}
