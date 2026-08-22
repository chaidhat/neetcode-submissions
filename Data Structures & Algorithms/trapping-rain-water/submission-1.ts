class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const map = new Map<number, number>(); // height, idx
        let output = 0;

        for (let i = 0; i < height.length; i++) {
            const h = height[i]
            for (let j = 0; j < h; j++) {
                const hh = map.get(j)
                if (hh === undefined) {
                    map.set(j, i);
                } else {
                    output += i - hh - 1;
                    map.set(j, i);
                }
            }
        }

        return output;

        /*

              #
          #   #
        # # # # #

          #
          #   #
        # # # # #
        */

    }
}
