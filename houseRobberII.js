var rob = function(nums) {
    if(!nums || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    
    let max1 = robHelp(nums, 0, nums.length -2);
    let max2 = robHelp(nums, 1, nums.length -1);
    return Math.max(max1, max2);
    
    function robHelp(nums,i ,j) {
        if(i===j) return nums[i];
        
        let dp = new Array(nums.length);
        dp[i] = nums[i];
        dp[i+1] = Math.max(nums[i+1], dp[i]);
        
        for(let k = i+2; k<=j; k++) {
            dp[k] = Math.max(dp[k-1], dp[k-2] + nums[k]);
        }
        return dp[j];
    }
};

console.log(rob([1,3,2,1]))