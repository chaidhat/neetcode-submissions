class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const col = Array.from({length: 9 }, () => new Map<string, boolean>())
        const row = Array.from({length: 9 }, () => new Map<string, boolean>())
        const box = Array.from({length: 3}, () => Array.from({length:3}, () => new Map<string, boolean>()))

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const a = board[j][i]; // j=y, i=x
                if (a === ".") {
                    continue;
                }

                if (col[i].get(a)) {
                    console.log(`duplicate col ${i}: ${a}`)
                    return false;
                }
                col[i].set(a, true);

                if (row[j].get(a)) {
                    console.log(`duplicate row ${j}`)
                    return false;
                }
                row[j].set(a, true);
                const ii = Math.floor(i/3)
                const jj = Math.floor(j/3)

                if (box[ii][jj].get(a)) {
                    console.log(`duplicate box ${ii}, ${jj}`)
                    return false;
                }
                box[ii][jj].set(a, true);
            }
        }
        return true;
    }
}
