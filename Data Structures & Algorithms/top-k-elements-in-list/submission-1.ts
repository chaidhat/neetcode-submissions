class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */


    /*
    num to occurence


    1: 1
    2: 2

    nums.length = 3
    distinct = 2
    avg = 1.5

    1: 1
    2: 2
    3: 2

    nums.length = 5
    distinct = 3
    avg = 1.6

    1: 1
    2: 2
    3: 3

    nums.length = 6
    distinct = 3
    avg = 2






    1: 1
    2: 5
    3: 3
    8: 7
    4: 2

    nums.length = 18
    distinct = 5
    avg = 3.6 (>2.5 (>2))
    [1,3,2], [5,7]

    */
    topKFrequent(nums: number[], k: number): number[] {
        const m = new Map<number, number>();
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            m.set(nums[i], (m.get(nums[i]) ?? 0) + 1)
            sum += nums[i]
        }

        const a : number[][] = Array.from({ length: nums.length + 1 }, () => [])
        for (const [ky, v] of m) {
            a[v].push(ky)
        }
        const results = []
        for (let i = nums.length; i >= 0; i--) {
            for (const v of a[i]) {
                results.push(v)
                if (results.length === k) {
                    return results
                }
            }
        }
    }
}
