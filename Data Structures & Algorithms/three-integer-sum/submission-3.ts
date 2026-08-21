class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = [...nums].sort((a,b) => a-b);
        const output = [];
        for (let i = 0; i < sortedNums.length && sortedNums[i] <= 0; i++) {
             if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            let low = i+1;
            let high = sortedNums.length - 1;
            while (low < high) {
                const sum = sortedNums[i] + sortedNums[low] + sortedNums[high]
                if (sum < 0) {
                    low++
                    continue;
                }
                if (sum > 0) {
                    high--
                    continue;
                }
                if (sum === 0) {
                    output.push([sortedNums[i],sortedNums[low], sortedNums[high]])
                    while (low < high && sortedNums[high] === sortedNums[high-1]) high--
                    while (low < high && sortedNums[low] === sortedNums[low+1]) low--
                    low++
                    high--
                }
            }
        }

        return output;
    }
}
