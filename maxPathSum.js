/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

var lengthOfLongestSubstring = function (s) {
	let map = {}
	let start = 0
	let maxLen = 0
	let arr = s.split('')

	for (i = 0; i < s.length; i++) {
		let current = map[arr[i]]

		if (current != null && start <= current) {
			start = current + 1
		} else {
			maxLen = Math.max(maxLen, i - start + 1)
		}
		map[arr[i]] = i

	}

	return maxLen
};

console.log(lengthOfLongestSubstring("bbbbb"));