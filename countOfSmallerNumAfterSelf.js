var countSmaller = function (nums) {
    let arr = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let index = findIndex(arr, nums[i]);
        arr.splice(index, 0, nums[i]); // splice alters an array in place. 2nd variable denotes how many elements to replace. Here it is 0, means we are only inserting
        nums[i] = index;
    }
    return nums;
};

function findIndex(arr, target) {
    if (arr === null || arr.length === 0) return 0;
    let left = 0;
    let right = arr.length - 1;
    while (left + 1 < right) {
        let middle = Math.floor(left + (right - left) / 2);
        if (arr[middle] >= target) {
            right = middle;
        } else {
            left = middle;
        }
    }
    if (target > arr[right]) {
        return right + 1;
    } else if (target <= arr[left]) {
        return left;
    } else {
        return right;
    }
}

console.log(countSmaller([5, 2, 6, 1]));