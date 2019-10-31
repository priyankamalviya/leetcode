/* Q 33. MEDIUM
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let found = false;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			found = true;
			console.log(i);
			return i;
		}
	}
	if (!found) return -1;
	// return nums.indexOf(target);
};

console.log(search([1, 2, 3, 5], 3));