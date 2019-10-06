var twoSum = function (nums, target) {
    /** 
    map : {2-> 0, 7-> 1, 11-> 2, 15-> 3}
    
    
    */
    let res = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }

};

console.log(twoSum([3, 2, 4], 6))