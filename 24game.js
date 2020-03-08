var judgePoint24 = function (nums) {
    console.log(nums)
    if (nums.length == 1) {
        return Math.abs(nums[0] - 24) < 0.01;
    }

    let ans = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // grab other numbers
            const rest = [];
            for (let k = 0; k < nums.length; k++) {
                if (k != i && k != j) rest.push(nums[k]);
            }
            // grab all possibilities
            const target = [
                nums[i] + nums[j],
                nums[i] - nums[j],
                nums[j] - nums[i],
                nums[i] * nums[j]
            ];
            if (nums[i] !== 0) target.push(nums[j] / nums[i]);
            if (nums[j] !== 0) target.push(nums[i] / nums[j]);
            // try next around
            for (const t of target) {
                ans = ans || judgePoint24([t, ...rest]);
            }
        }
    }

    return ans;
};


console.log(judgePoint24([4, 1, 8, 7]));