/* Q 283. EASY
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
var moveZeroes = function (nums) {
    let numOfZeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            numOfZeroes++;
            continue;
        }
        if (numOfZeroes > 0) {
            nums[i - numOfZeroes] = nums[i];
            nums[i] = 0;
        }
    }
};


// alternate method

let moveZeroes = function (nums) {
    let zeroIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[++zeroIndex] = nums[i];
            if (zeroIndex !== i) {
                nums[i] = 0;
            }
        }
    }
}

console.log(moveZeroes([0, 1, 0, 3, 12]));