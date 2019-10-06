var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length -1;
    let regex = /^[a-z0-9]+/g;

    if(s.length ===0 || !s ) {
        return true;
    }
    while(i<j) {
        if(!s[i].match(regex)) {
            i++;
            continue;
        }
        if(!s[j].match(regex)) {
            j--;
            continue;
        }
        if(s.charAt(i) !== s.charAt(j)) {
            return false;
        } 
        i++;
        j--;
    }
    return true;
};
