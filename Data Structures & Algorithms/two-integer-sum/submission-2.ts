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
        let q = nums.map((q,i) => [q, i]);
        q.sort((a,b) => a[0]-b[0]);
        console.log(nums);
        let i = 0;
        let j = q.length - 1;
        while (q[i][0] + q[j][0] !== target) {
            if (q[i][0] + q[j][0] < target) {
                i++;
            } else if (q[i][0] + q[j][0] > target) {
                j--;
            }
        }
        return [q[i][1], q[j][1]];
    }
}
