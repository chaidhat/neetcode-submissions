class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const m = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            m.set(nums[i], (m.get(nums[i]) ?? 0) + 1)
        }
        const mp = [];
        for (const [k, v] of m) {
            mp.push([k,v])
        }
        const output = mp.sort((a,b) => b[1] - a[1]).map(a => a[0]);
        return output.splice(0,k);
    }
}
