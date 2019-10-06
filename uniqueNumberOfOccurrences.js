/*
1207.

Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map.hasOwnProperty(arr[i])) {
            map[arr[i]] = map[arr[i]] + 1;
        } else {
            map[arr[i]] = 1;
        }
    }

    let set = new Set(Object.values(map));
    if (set.size === Object.keys(map).length) {
        return true;
    } else {
        return false;
    }
};