/**
 * Longest Substring Without Repeating Characters
 * Sliding Window + Hash Map solution.
 *
 * Given a string s, return the length of the longest substring
 * that contains no repeating characters.
 */
export function lengthOfLongestSubstring(s: string): number {
  const lastIndex = new Map<string, number>(); // char → most recent index
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If the character is inside the current window, move left past it
    if (lastIndex.has(char) && lastIndex.get(char)! >= left) {
      left = lastIndex.get(char)! + 1;
    }

    lastIndex.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}