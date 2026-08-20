class Tuple {
    low: number;
    high: number;

    constructor(l: number, h: number) {
        this.low = l;
        this.high = h;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        /*
        [
        0, [0: (0,0)]
        3, [0: (0,0), 3: (3,3)]
        2, [0: (0,0), 3: (2,3), 2: (2,3)]
        5, [0: (0,0), 3: (2,3), 2: (2,3), 5: (5,5)]
        4, [0: (0,0), 3: (2,5), 2: (2,3), 5: (2,5), 4: (2,5)]
        6, [0: (0,0), 3: (2,5), 2: (2,3), 5: (2,6), 4: (2,5), 6: (2,6)]
        1, [0: (0,3), 3: (2,5), 2: (0,3), 5: (2,6), 4: (2,5), 6: (2,6), 1: (0, 3)]
        1]


        */
        if (nums.length === 0) {
            return 0;
        }

        const lookup = new Map<number, Tuple>();
        for (let i = 0; i < nums.length; i++) {
            
            const a = lookup.get(nums[i] - 1);
            const b = lookup.get(nums[i] + 1);

            const a_low = a !== undefined ? a.low : nums[i]
            const b_high = b !== undefined ? b.high : nums[i]
            const a_lownode = lookup.get(a_low);
            const b_highnode = lookup.get(b_high);

            if (b_highnode !== undefined) {
                if (b_highnode.low > a_low) {
                    b_highnode.low = a_low;
                }
            }
            if (a_lownode !== undefined) {
                if (a_lownode.high < b_high) {
                    a_lownode.high = b_high;
                }
            }
            lookup.set(nums[i], new Tuple(a_low, b_high))
        }

        let largestDelta = 0;
        for (const [k,v] of lookup) {
            largestDelta = v.high-v.low >= largestDelta ? v.high-v.low : largestDelta;
        }
        return largestDelta + 1
    }
}
