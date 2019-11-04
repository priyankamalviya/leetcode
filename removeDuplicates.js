// var removeDuplicates = function (nums) {
//     //return [...new Set(nums)];
//     let i = 0,
//         j = 1;
//     while (j < nums.length)
//         if (nums[i] !== nums[j++])
//             nums[++i] = nums[j - 1];
//     return i + 1;

// };

let removeDuplicates = function (nums) {
    let i = 0,
        len = nums.length,
        arr = [];
    arr.push(nums[0]);
    while (i < len && typeof (nums[i + 1]) !== 'undefined') {
        if (nums[i] !== nums[i + 1]) {
            arr.push(nums[i + 1]);
        } else {
            i++;
            continue;
        }
        i++;
    }
    return arr;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));