var removeDuplicates = function(nums) {
        //return [...new Set(nums)];
        let i = 0, j = 1;
        while (j < nums.length) 
            if (nums[i] !== nums[j++]) 
                 nums[++i] = nums[j - 1];
        return i + 1;
    
 };

 console.log(removeDuplicates([1,1,2]));