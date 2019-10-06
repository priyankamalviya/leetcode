var validUtf8 = function(data) {
    
    var findLen = function(data) {
        let bitIndex = 7;
        while(bitIndex >=0 && ((data >> bitIndex) &1) != 0) {
            bitIndex--;
        }
        return 7- bitIndex -1;
    }
    for(let i=0; i< data.length; i++) {
        let len = findLen(data[i]);
        if(len < 0) continue;
        if(len ===0 || len >=4) return false;
        for(let j= i+1; j <= i+len; j++) {
            if(((data[j] >> 7) &1) !=1 || ((data[j] >> 6) & 1) != 0 ) return false;
        }
        i = i+ len;
    }
    return true;
};

console.log(validUtf8([197, 130, 1]));