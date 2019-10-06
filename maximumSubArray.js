var maxSubArray = function (nums) {
    let dp = [];
    let max_sum = nums[0];
    dp[0] = nums[0];
    nums.forEach((num, index) => {
        if (index != 0) {
            let sum = Math.max(num, dp[index - 1] + num);
            dp.push(sum);
            max_sum = max_sum > sum ? max_sum : sum;
        }
    })
    return max_sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))