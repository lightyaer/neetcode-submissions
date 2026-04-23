class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const setS = {};
        const setT = {};
        let isAnagram = true;

        for (let c of s) {
            if (setS[c]) {
                setS[c] += 1;
            } else {
                setS[c] = 1;
            }
        }

        for (let c of t) {
            if (setT[c]) {
                setT[c] += 1;
            } else {
                setT[c] = 1;
            }
        }

        const sValues = Object.values(setS);
        const tValues = Object.values(setT);

        if (sValues.length !== tValues.length) {
            isAnagram = false;
            return isAnagram;
        }

        for (const key in setS) {
            if (!setT[key] || setT[key] !== setS[key]) {
                isAnagram = false;
            }
        }
        return isAnagram;
    }
}
