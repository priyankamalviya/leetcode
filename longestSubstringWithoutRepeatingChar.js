/** Given a string, find the length of the longest substring without repeating characters.*/

/**
 * @param {string} s
 * @return {number}
 */
/*var lengthOfLongestSubstring = function(s) {
	let map = {}
	let start = 0
	let maxLen = 0
	let arr = s.split('');
	for (let i=0; i < s.length; i++) {
		let current = map[arr[i]];	
		if (current!=null && start <= current) {
			start = current + 1;
		} else {
			maxLen = Math.max(maxLen, i - start + 1)
		}
		map[arr[i]] = i;
	}
return maxLen;
};*/

var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1)
        return s.length;

    let map = new Map();
    let len = s.length;
    let max = 0;
    let start = 0;

    for (let i = 0; i < len; i++) {
        let c = s.charAt(i)

        if (map.has(c) && map.get(c) >= start) {
            start = map.get(c) + 1; // Read the logic in the notes above
        }

        map.set(c, i)

        max = Math.max(max, i - start + 1)
    }

    return max;
};


console.log(lengthOfLongestSubstring("abcabcbb"));