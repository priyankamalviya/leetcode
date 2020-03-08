var nextPermutation = function (nums) {
    let max = Number.MAX_VALUE,
        pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i]; // we found max
            pos = i;
        }
    }

    if (pos === 0) {
        return nums.sort();
    } else {
        let temp = nums[pos - 1];
        nums[pos - 1] = max;
        max = temp;
    }
}