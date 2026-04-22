class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const reduced = nums.reduce(
            (acc, item) => {
                if (item === 1) {
                    acc[0] += 1;
                    acc[1] = Math.max(acc[0], acc[1]);
                }

                if (item === 0) {
                    acc[0] = 0;
                }

                return acc;
            },
            [0, 0],
        );

        return Math.max(reduced[0], reduced[1]);
    }
}
