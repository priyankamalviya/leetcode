var totalFruit = function (tree) {
    /** [3,3,3,1,2,1,1,2,3,3,4] 
        2 baskets
        hashmap to store types of fruits & its count
    */

    let res = 0
    if (!tree || !tree.length) return res;
    let map = new Map()
    for (let i = 0, j = 0; j < tree.length; j++) {
        map.set(tree[j], (map.get(tree[j]) || 0) + 1)
        while (map.size > 2) {
            map.set(tree[i], map.get(tree[i]) - 1)
            if (map.get(tree[i]) === 0) map.delete(tree[i])
            i++
        }
        res = Math.max(res, j - i + 1)
    }
    return res
};

var lengthOfLongestSubstringTwoDistinct = function(s) {
    /** [3,3,3,1,2,1,1,2,3,3,4] 
        2 baskets
        hashmap to store types of fruits & its count
    */
    if(!s || s.length === 0) return s;
    let max = 0;
    let map = new Map();
    for(let lo = 0, hi=0; hi< s.length; hi++) {
        map.set(s[hi], (map.get(s[hi]) || 0) + 1);
        
        if(map.size > 2) {
            map.set(s[lo], map.get(s[lo])-1);
            if(map.get(s[lo]) === 0) map.delete(s[lo]);
            lo++;
        }
        
        max = Math.max(max, hi-lo+1);
    }
    return max;  
};

console.log(totalFruit([0, 1, 2, 2]));