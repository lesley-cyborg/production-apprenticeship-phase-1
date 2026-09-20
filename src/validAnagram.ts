/**
 * Valid Anagram - Optimized Frequency Array Solution
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Assumes s and t consist of lowercase English letters only.
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++; // 'a'.charCodeAt(0) === 97
    freq[t.charCodeAt(i) - 97]--;
  }

  for (const count of freq) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}