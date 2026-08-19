class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const l = s.length;
        const histo = new Map<string, number>();
        for (let i = 0; i < l; i++) {
            histo.set(s[i],  histo.get(s[i]) === undefined ? 1 : histo.get(s[i]) + 1)
            histo.set(t[i],  histo.get(t[i]) === undefined ? -1 : histo.get(t[i]) - 1)

        }
        return [...histo.values()].every(x => x === 0);
    }
}
