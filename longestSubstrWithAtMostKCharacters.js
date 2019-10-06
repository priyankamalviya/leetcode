
var lengthOfLongestSubstringKDistinct = function(s, k) {
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