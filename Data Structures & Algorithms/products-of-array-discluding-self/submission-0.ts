class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftBuf = new Array(nums.length).fill(1);
        const rightBuf = new Array(nums.length).fill(1);

        let numOfZeros = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            const a = i > 0 ? leftBuf[i-1] : 1;
            if (nums[i] === 0) {
                leftBuf[i] = 1 * a;
            } else {
                leftBuf[i] = nums[i] * a;
            }
            if (nums[i] === 0) {
                numOfZeros++;
            }
        }
        if (nums[nums.length - 1] === 0) {
            numOfZeros++;
        }

        console.log(leftBuf)
        for (let i = nums.length - 1; i > 0; i--) {
            const a = i < nums.length-1 ? rightBuf[i+1] : 1;
            if (nums[i] === 0) {
                rightBuf[i] = 1 * a;
            } else {
                rightBuf[i] = nums[i] * a;
            }
        }
        console.log(rightBuf)
        const output = [];
        for (let i = 0; i < nums.length; i++) {
            const a = i > 0 ? leftBuf[i-1] : 1
            const b = i < nums.length - 1 ? rightBuf[i+1] : 1
            if (numOfZeros > 0) {
                if (numOfZeros === 1 && nums[i] === 0) {
                    output.push(a*b)
                } else {
                    output.push(0)
                }
            } else {
                output.push(a*b)
            }
        }
        return output;
    }
}
