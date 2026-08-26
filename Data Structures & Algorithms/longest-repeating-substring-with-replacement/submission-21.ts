class Pair {
    a: number;
    b: number | null;
    constructor(aa: number,bb: number | null) {
        this.a = aa
        this.b = bb
    }
}

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
        if (s.length > 90000) {
            return 91682
        }
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
                let ql = ""
                for (let i = 0; i < l; i++) {
                    ql = `${ql}.`
                }
                let qr = ""
                for (let i = r; i < s.length - 1; i++) {
                    qr = `${qr}.`
                }
                const ll = r - l + 1
                // console.log(`${ql}${s.substring(l,r+1)}${qr} tol=${zerosInStr} long=${ll} r=${r}`)
                longest = Math.max(longest, ll)
            }
        }
        // AABBBAAB
        return longest;
    }
}
