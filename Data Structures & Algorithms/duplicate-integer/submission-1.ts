class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const exists = new Set<number>;
        for (let i = 0; i < nums.length; i++) {
            if (!exists.has(nums[i])) {
                exists.add(nums[i])
            } else {
                return true;
            }
        }
        return false;
    }
}