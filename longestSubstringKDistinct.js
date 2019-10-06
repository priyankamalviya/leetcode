var lengthOfLongestSubstringKDistinct = function (s, k) {
    // this method uses sliding window
    let map = new Map();
    let start = 0,
        end = 0;
    let windowSize = 1;
    let windowStart = 0;
    map.set(s[0], 1);

    for (let i = 1; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1);
        } else {
            let val = map.get(s[i]);
            map.set(s[i], val + 1);
        }
        end++;

        var isLessThanK = function (map, k) {
            let count = 0,
                num;
            for (let key of map) {
                num = map.get(key);
                if (map.get(key) > 0) {
                    count++;
                }
            }
            return count <= k;
        }

        // move start forward if num of unique char is > k

        while (!isLessThanK(map, k)) {
            let temp = map.get(s.charAt(start));
            map.set(s[start], --temp);
            start++;
        }

        if (end - start + 1 > windowSize) {
            windowSize = end - start + 1;
            windowStart = start;
        }

    }
    return s.substring(windowStart, windowStart + windowSize);

};


console.log(lengthOfLongestSubstringKDistinct("eceba", 2));