var productExceptSelf = function (nums) {
    // Efficient linear method

    let left = 1,
        res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i]
    }

    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));