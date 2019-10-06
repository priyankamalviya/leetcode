/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let left = 1;
    let right = 1;
    let result = new Array(nums.length).fill(1);

    if (!nums || nums.length === 0) return result;

    for (let i = 0, j = nums.length - 1; i < nums.length, j > 0; i++, j--) {
        left = left * nums[i];
        result[i + 1] = result[i + 1] * left;
        right = right * nums[j];
        result[j - 1] = result[j - 1] * right;
    }
    return result;
};