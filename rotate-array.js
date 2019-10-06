var rotate = function(nums, k) {
	let len = nums.length;
	let portion = nums.splice(len - (k%len), len);

	nums.unshift(...portion)
};


console.log(rotate([1,2,3,4,6, 8, 9, 88, 6, 44, 21, 36],6))