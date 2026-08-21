class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length - 1;
        let maxVol = 0;
        while(i !== j) {
            if (heights[j] > heights[i]) {
                const vol = Math.min(heights[j], heights[i]) * (j-i)
                if (vol > maxVol) {
                    maxVol = vol;
                }
                i++;
                continue;
            }
            if (heights[i] > heights[j]) {
                const vol = Math.min(heights[j], heights[i]) * (j-i)
                if (vol > maxVol) {
                    maxVol = vol;
                }
                j--;
                continue;
            }
            if (heights[i] === heights[j]) {
                const vol = Math.min(heights[j], heights[i]) * (j-i)
                if (vol > maxVol) {
                    maxVol = vol;
                }
                i++;
                continue;
            }
        }
        return maxVol;
    }
}
