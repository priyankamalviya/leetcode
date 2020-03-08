var fullJustify = function (words, maxWidth) {
    let rowCount = words[0].length;
    let rowArr = [words[0]];
    words.shift();
    if (rowCount >= maxWidth) {
        console.log(rowArr);
    } else {
        if (words.length > 0) {
            let tempWordLen = words[0].length;
            while (rowCount + 1 + tempWordLen <= maxWidth) {
                rowCount = rowCount + 1 + tempWordLen;
                if (rowCount < maxWidth) {
                    rowArr.push(words[0] + " ");
                } else if (rowCount === maxWidth) {
                    rowArr.push(words[0]);
                    rowArr = rowArr.join(" ");
                    console.log(rowArr);
                } else {
                    console.log("");
                };
                words.shift();
            }
            if (rowCount + 1 + tempWordLen > maxWidth) {
                console.log(words[0]);
                words.shift();
            }
        }
    }
};

// console.log(fullJustify(["I", "love", "you"], 6));

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));