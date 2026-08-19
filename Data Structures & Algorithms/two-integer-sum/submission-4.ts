class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // left pointer right if nums[i] + nums[j] < t
    // right pointer left if nums[i] + nums[j] > t
    // 1 2 3 9 10. target = 12
    twoSum(nums: number[], target: number): number[] {
        let b = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            if (b.get(target - nums[i]) !== undefined) {
                return [b.get(target - nums[i]), i];
            }
            b.set(nums[i], i)
        }
    }
}
