class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasRepitition = false;
        const set = {};
        for (let i = 0; i < nums.length; i++) {
            const item = nums[i];

            if (set[item]) {
                set[item] += 1;
            } else {
                set[item] = 1;
            }
        }

        for (const [_, value] of Object.entries(set)) {
            if (value > 1) {
                hasRepitition = true;
            }
        }

        return hasRepitition;
    }
}
