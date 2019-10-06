/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let found = false;
	for(let i=0; i< nums.length; i++) {
		if(nums[i] === target) {
			found = true;
			console.log(i);
			return i;
		}
	}
	if(!found) return -1; 
	// return nums.indexOf(target);
};

 console.log(search([1,2,3,5], 3));