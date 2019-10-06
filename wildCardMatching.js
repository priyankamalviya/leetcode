/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var matchChar = function(c, p){
    return (p === '?' || p === c);
}
var isMatch = function(s, p) {
    if(s === null || p === null)   {
        return false;
    }
    
    var idxS = 0;
    var idxP = 0;
    
    var lenS = s.length;
    var lenP = p.length;
    
    var back = false;
    var preS = 0;
    var preP = 0;
    
    while(idxS < lenS) {
        var charS = s[idxS];
        var charP = p[idxP];

        if(idxP < lenP && matchChar(s[idxS], p[idxP])) {
            idxP++;
            idxS++;
        } else if(idxP < lenP && p[idxP] === '*') {
            while(idxP < lenP && p[idxP] === '*') {
                idxP++;
            }
            
            back = true;
            preS = idxS;
            preP = idxP;
        } else if(back) {
        // since * means any sequence including ''. We can use greedy approach
        // str = "abefcdgiescdfimde" pattern = "ab*cd?i*de"
        // first * is "ef" first ? is "g" second * is escdfim
            idxS = ++preS;
            idxP = preP;
        // preP is the pattern index after *
        // even idxP got advanced by first the condition idxP < lenP && matchChar(s[idxS], p[idxP])
        // when the first and second condition don't work out, we backtrack of using the last wild card position.
        } else {
            return false;
        }
    }
    
    while(idxP < lenP && p[idxP] === '*') {
        idxP++;
    }
    
    if(idxS === lenS && idxP === lenP) {
        return true;
    }
    
    return false;
};

console.log(isMatch("aa", "*"));