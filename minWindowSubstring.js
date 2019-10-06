var minWindow = function (s, t) {
    let map = new Array(128).fill(0);

    for (let i = 0; i < s.length; i++) {
        map[t.charCodeAt(i)]++;
    }

    let minLen = Number.MAX_VALUE,
        minStart = 0,
        minEnd = 0,
        count = 0;
    let hi = 0,
        lo = 0;

    for (hi = 0; hi < s.length; hi++) {
        if (map[s.charCodeAt(hi)] > 0) {
            count++;
        }

        map[s.charCodeAt(hi)]--;
        if (count === t.length) {

            while (lo < hi && map[s.charCodeAt(lo)] < 0) {
                map[s.charCodeAt(lo)]++;
                lo++;
            }

            if (minLen > hi - lo + 1) {
                minLen = hi - lo + 1;
                minStart = lo;
                minEnd = hi + 1;
            }

            map[s.charCodeAt(lo)]++;
            lo++;
            count--;
        }
    }

    return minLen === Number.MAX_VALUE ? '' : s.substring(minStart, minEnd)
};

console.log(minWindow("ADOBECODEBANC", "ABC"));