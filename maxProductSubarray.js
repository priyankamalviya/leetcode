/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let result = nums[0];
    let minPrevProduct = 1;
    let maxPrevProduct = 1;
    let minCurrentProduct = 1;
    let maxCurrentProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        minCurrentProduct = Math.min(maxPrevProduct * nums[i], minPrevProduct * nums[1], nums[i]);
        maxCurrentProduct = Math.max(maxPrevProduct * nums[i], minPrevProduct * nums[i], nums[i]);
        result = Math.max(maxCurrentProduct, result);
        maxPrevProduct = maxCurrentProduct;
        minPrevProduct = minCurrentProduct;
    }

    return result;
};

console.log(maxProduct([-2, -1, 2, -4]));