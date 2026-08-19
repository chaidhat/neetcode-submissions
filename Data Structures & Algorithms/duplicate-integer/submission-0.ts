class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let exists = {};
        for (let i = 0; i < nums.length; i++) {
            if (exists[nums[i]] !== 1) {
                exists[nums[i]] = 1;
            } else {
                return true;
            }
        }
        return false;
    }
}