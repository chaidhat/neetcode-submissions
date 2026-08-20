class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length - 1;
        
        while(i !== j) {
            if (numbers[i] + numbers[j] > target) {
                j--;
                continue;
            }
            if (numbers[i] + numbers[j] < target) {
                i++;
                continue;
            }
            return [i+1,j+1]
        }
    }
    // [2,4,6,9] t=15
    // [1,4,6,9] t=15
    // [1,4,6,900] t=7
}
