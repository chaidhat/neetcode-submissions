class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        /*
        abc


        abc
        abac

        lecaabee
        000001
        00001
        */

        const histo = new Map<string, number>()
        const histoActual = new Map<string, number>()

        for (const c of s1.split("")) {
            histo.set(c,(histo.get(c) ?? 0) + 1)
        }

        let l = 0
        if (s2.length === 0 && s1.length === 0) {
            return true
        }
        for (let r = 0; r < s2.length; r++) {
            const c = s2[r]
            if ((histoActual.get(c) ?? 0) >= (histo.get(c) ?? 0)) {
                const c2 = s2[l]
                histoActual.set(c2, (histoActual.get(c2) ?? 0) - 1)
                l++
                r-- // r stay in place
            } else {
                if ((histo.get(c) ?? 0) > 0) {
                    histoActual.set(c, (histoActual.get(c) ?? 0) + 1)
                } else {
                    // reset
                    for (const alpha of "abcdefghijklmnopqrstuvwxyz".split("")) {
                        histoActual.set(alpha, 0)
                    }
                }
            }
            let pass = true
            for (const alpha of "abcdefghijklmnopqrstuvwxyz".split("")) {
                if ((histoActual.get(alpha) ?? 0) !== (histo.get(alpha) ?? 0)) {
                    pass = false
                    break
                }
            }
            if (pass) {
                return true
            }
        }
        return false
    }
}
