var isOneEditDistance = function(s, t) {
    if(!s  && !t ) return true;
    if(!s || !t) return false;
    if(0 === s.length && 0 === t.length) return false;

    let sLen = s.length;
    let tLen = t.length;
    
    var oneChangeDist = function(s,t) {
        let flag = false;
        for(let i =0; i< sLen; i++) {
            if(s[i] !== t[i]) {
                if(flag) {
                    return false;
                } else {
                    flag = true;
                }
            }
        }
        return flag;
    }

    var oneRemoveDist = function(s,t) {
        let flag = false;

        let fast = 0;
        for(let slow =0; slow<tLen; slow++) {
            if(s[fast] !== t[slow]) {
                if(flag) {
                    return false;
                }
                flag = true;
                slow--;
            }
            fast++;
        }
        return true;
    }
    
    if(sLen === tLen) {
        return oneChangeDist(s,t);
    } else if(sLen - tLen ===1) {
        return oneRemoveDist(s,t);
    } else if(tLen - sLen ===1) {
        return oneRemoveDist(t,s);
    }
    
    return false;
};

console.log(isOneEditDistance("ab", "acb"));