/* Q.340 HARD
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
*/
var lengthOfLongestSubstringKDistinct = function (s, k) {
    let [map, start, result] = [new Map(), 0, 0];
    [...s].forEach((key, i) => {
        map.set(key, i);
        while (map.size > k) {
            if (map.get(s[start]) == start) map.delete(s[start]);
            start++;
        }
        result = Math.max(result, i - start + 1);
    })
    return result;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));