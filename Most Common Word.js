var mostCommonWord = function(paragraph, banned) {
    const wordMap = paragraph.replace(/[,.!?;']/g,'').toLowerCase().split(' ').reduce((obj, word) => {
            if(!banned.includes(word)) {
               obj[word] = (obj[word] || 0)+1; 
            }
             return obj;

    },{});
    return Object.keys(wordMap).reduce((a,b) => wordMap[a] > wordMap[b] ? a: b)
};
