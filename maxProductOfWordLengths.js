var maxProduct = function(words) {
    let arr = new Array(words.length).fill(0);
    let max = 0;
    
    for(let i=0; i < words.length; i++) {
        for(let j =0; j < words[i].length; j++) {
            arr[i] |= 1 << (words[i].charCodeAt(j) - 97).toString(2); // -97 because in JavaScript each character can have 32 bits only. Also, 'OR' so that we do not set the bits a second time
        }
    }
    
    for(let i=0; i< words.length-1; i++) {
        for(let j=i+1; j<= words.length-1; j++) {
            if((arr[i] & arr[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length );   
            }
        }
    }

    return max;
};

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));