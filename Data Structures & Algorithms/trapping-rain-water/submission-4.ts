class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const map = new Map<number, number>(); // height, idx
        let output = 0;
        let i = 0;
        let j = height.length - 1;
        let heightI = 0;
        let heightJ = 0;

        while (i !== j) {
            if (heightI < height[i]) {
                heightI = height[i]
            }
            if (heightJ < height[j]) {
                heightJ = height[j]
            }

            output += heightI-height[i]
            output += heightJ-height[j]

            if (heightI > heightJ) {
                j--
                continue
            } 
            if (heightJ > heightI) {
                i++
                continue
            }
            if (heightI === heightJ) {
                i++
                continue
            }
        }

        return output;

        /*
                  #
              #.  #
          #   #.  #
        # # # # # # #

          #
          #   #
        # # # # #
        */

    }
}
