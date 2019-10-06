var rob = function (nums) {
    const len = nums.length;
    let first = robHelper(nums, 0);
    let sec = robHelper(nums, 1);
    return Math.max(first, sec);
};

var robHelper = function (nums, i) {
    let sum = 0;
    for (let t = i; t < nums.length; t += 2) {
        sum += nums[t];
    }
    return sum;
}

console.log(rob([2, 1, 1, 2]));