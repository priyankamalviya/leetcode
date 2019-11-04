/* Q.53 EASY
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Time complexity = O(n);
*/
var maxSubArray = function (nums) {
    let max_sum = 0,
        dp = [];
    dp[0] = nums[0];
    nums.map((num, index) => {
        if (index !== 0) {
            let sum = Math.max(num, num + dp[index - 1]);
            dp.push(sum);
            max_sum = Math.max(max_sum, sum);
        }
    });
    return max_sum;
};

// var maxSubArray = function (nums) {
//     let n = nums.length - 1;
//     if (n + 1 == 0) return 0;
//     return maxSubArrayHelperFunction(nums, 0, 8);
// };


// var maxSubArrayHelperFunction = function (arr, left, right) {
//     if (right === left) return arr[left];
//     console.log("right->", right)
//     let mid = left + right / 2;
//     let leftSum = maxSubArrayHelperFunction(arr, left, mid);
//     let rightSum = maxSubArrayHelperFunction(arr, mid + 1, right);
//     let leftMax = arr[mid];
//     let rightMax = arr[mid + 1];
//     let temp = 0;
//     for (let i = mid; i >= left; i--) {
//         temp += arr[i];
//         if (temp > leftMax) leftMax = temp;
//     }

//     temp = 0;

//     for (let i = mid + 1; i < right; i++) {
//         temp += arr[i];
//         if (temp > rightMax) rightMax = temp;
//     }

//     return Math.max(leftSum, rightSum, rightMax + leftMax);
// };


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));