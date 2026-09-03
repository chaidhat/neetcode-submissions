// O(1)
function doesHistoActualContainHisto(histo: Map<string, number>, histoActual: Map<string, number>): boolean {
    let pass = true
    for (const alpha of histo.keys()) {
        if ((histoActual.get(alpha) ?? 0) < (histo.get(alpha) ?? 0)) {
            pass = false
            break
        }
    }
    return pass
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     * 
     * 
     * zazyxazxay  {x,y,z,x} * 0   4 *  1   5 *   2   6
     * 
     * 1. start chopping until invalid
     * 2. slide window until valid
     * 3. repeat
     */


    minWindow(s: string, t: string): string {
        const histo = new Map<string, number>();
        for (const tt of t) {
            histo.set(tt, (histo.get(tt) ?? 0) + 1)
        }

        const histoActual = new Map<string, number>();
        let lg = -1;
        let rg = -1;
        const out:[number, number] = [0,0]
        for (let r = 0; r < s.length; r++) {
            const c = s[r]
            histoActual.set(c, (histoActual.get(c) ?? 0) + 1)
            // console.log(`l=${lg+1} r=${r+1} ${s.substring(lg+1,r+1)} ${doesHistoActualContainHisto(histo, histoActual)}`)
            if (doesHistoActualContainHisto(histo, histoActual)) {
                rg = r
                break;
            }
        }
        if (rg === -1) {
            return ""
        }
            if (doesHistoActualContainHisto(histo, histoActual)) {
                // console.log(`4 l=${lg+1} r=${rg+1} ${s.substring(lg+1,rg+1)} ${doesHistoActualContainHisto(histo, histoActual)}`)
                if ((out[0] === 0 && out[1] ===0) || (rg-lg) < out[1]-out[0]) {
                    out[0] = lg+1
                    out[1] = rg+1
                }
            }

        while (rg < s.length) {
            while (doesHistoActualContainHisto(histo, histoActual)) {
                // console.log(`l=${lg+1} r=${rg+1} ${s.substring(lg+1,rg+1)} true`)
                if ((out[0] === 0 && out[1] ===0) || (rg-lg) < out[1]-out[0]) {
                    out[0] = lg+1
                    out[1] = rg+1
                }
                lg++
                const c = s[lg]
                histoActual.set(c, (histoActual.get(c) ?? 0) - 1)
                if (!doesHistoActualContainHisto(histo, histoActual)) {
                    break;
                }
            }
            // console.log(`l=${lg+1} r=${rg+1} ${s.substring(lg+1,rg+1)} ${doesHistoActualContainHisto(histo, histoActual)}`)
            while (!doesHistoActualContainHisto(histo, histoActual)) {
                if (rg > s.length) {
                    break;
                }
                rg++
                const cr = s[rg]
                lg++
                const cl = s[lg]
        // console.log(histoActual)
                histoActual.set(cr, (histoActual.get(cr) ?? 0) + 1)
                histoActual.set(cl, (histoActual.get(cl) ?? 0) - 1)
                // console.log(`2 l=${lg+1} r=${rg+1} ${s.substring(lg+1,rg+1)} ${doesHistoActualContainHisto(histo, histoActual)}`)
        // console.log(histoActual)
                if (doesHistoActualContainHisto(histo, histoActual)) {
                    if ((out[0] === 0 && out[1] ===0) || (rg-lg) < out[1]-out[0]) {
                    out[0] = lg+1
                    out[1] = rg+1
                    }
                }
            }
        }
        if (out[0] === 0 && out[1] === 0) {
            return ""
        }

        return s.substring(out[0], out[1])
    }
}
