/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

var rob = function (nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let max1 = robHelp(nums, 0, nums.length - 2);
    let max2 = robHelp(nums, 1, nums.length - 1);
    return Math.max(max1, max2);

    function robHelp(nums, i, j) {
        if (i === j) return nums[i];

        let dp = new Array(nums.length);
        dp[i] = nums[i];
        dp[i + 1] = Math.max(nums[i + 1], dp[i]);

        for (let k = i + 2; k <= j; k++) {
            dp[k] = Math.max(dp[k - 1], dp[k - 2] + nums[k]);
        }
        return dp[j];
    }
};

console.log(rob([1, 3, 2, 1]))