class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (s.length === 0) {
            return false;
        }
        const abc = "abcdefghijklmnopqrstuvwxyz0123456789"
        const s_parsed = (s.toLowerCase().split("").filter(a => abc.split("").includes(a)).join())

console.log(s_parsed)
        let i = 0;
        let j = s_parsed.length - 1;
        while (i <= j) {
            if (s_parsed[i] !== s_parsed[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
