class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let current = 0;
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                current += 1;
                max = Math.max(current, max);
            }

            if (nums[i] === 0) {
                current = 0;
            }
        }

        return max;
    }
}
