class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // aabcdefga
        let map = new Map<string, number>();
        let longest = 0;
        let j = 0;

        for (let i = 0; i < s.length; i++) {
            const delta = i - j
            if (map.has(s[i])) {
                j = Math.max(j,map.get(s[i]) + 1);
            }
            map.set(s[i], i)
            longest = Math.max(longest, delta)
        }
        const delta = s.length - j
        longest = Math.max(longest, delta)
        return longest;
        // d:  # #
        // v: ####
        // f: ####
    }
}
