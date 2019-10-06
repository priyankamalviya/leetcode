var firstMissingPositive = function(nums) {
    let len = nums.length;  
    
    for(let i=0; i< len; i++) {
        while(nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] -1]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] -1] = nums[i];
            nums[i] = temp;
        }
    }
    
    for(let i = 0; i<= len; i++) {
        if(nums[i] !== i+1) {
            return i + 1;
        }
    }
    
    return len + 1;
};

console.log(firstMissingPositive([1,2,0]));