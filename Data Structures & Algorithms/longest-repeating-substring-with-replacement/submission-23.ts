class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if (s.length === 0) {
            return 0
        }
        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let longest = 0;
        for (const a of alpha.split("")) {
            // console.log("-")
            let l = 0;
            let r = 0;
            if (k === 0) {
                let oc = 0
                for (let i = 0; i < s.length; i++) {
                    if (s[i] === a) {
                        oc++
                    } else {
                        oc = 0
                    }
                    longest = Math.max(longest, oc)
                }
                break
            }

            let zerosInStr = s[0] === a ? 0 : 1;
            while (r < s.length - 1 || l < s.length - 1) {
                if (r >= s.length - 1) {
                    if (s[l] !== a) {
                        zerosInStr--
                    }
                    l++
                } else {
                    if (zerosInStr > k) {
                        if (s[l] !== a) {
                            zerosInStr--
                        }
                        l++
                    } else if (zerosInStr <= k ) {
                        r++
                        if (s[r] !== a) {
                            zerosInStr++
                        }
                        while (r < s.length - 1 && s[r+1] === a) {
                            r++
                            if (s[r] !== a) {
                                zerosInStr++
                            }
                        }
                    }
                }
                if (zerosInStr > k) {
                    continue;
                }
                const ll = r - l + 1
                longest = Math.max(longest, ll)
            }
        }
        // AABBBAAB
        return longest;
    }
}
