class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = 101;
        let delta = 0;
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < min) {
                min = prices[i]
            }
            if (prices[i] - min > delta) {
                delta = prices[i] - min
            }
        }
        return delta
    }
}
