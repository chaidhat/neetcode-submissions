class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const histo = new Map<string, Set<number>>();
        for (let i = 0; i < strs.length; i++) {
            const hash =[...strs[i]].sort().join()
            if (!histo.get(hash)) {
                histo.set(hash, new Set())
            }
            histo.get(hash).add(i);
        }
        // check
        const out = [];
        for (let o of histo.values()) {
            out.push([...o].map(i => strs[Number(i)]))
        }
        return out;
    }
}
