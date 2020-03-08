// input : 'The quick brown fox jumps over the lazy dog', 39
// output = "The quick brown fox jumps over the lazy"

// input : "Why not", 100
// output : "Why not"

// input: "Codility We test coders", 14
// output: "Codility We"
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(message, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    // this solution entails O (n) time complexity 
    // firstly trim it so extra space at the end is gone
    message = message.trim(); // O (n) worst case time complexity

    // corner condition - if K is more than length of words, return the whole thing
    if (K > message.length) {
        return message;
    }

    // the words should become the separator - so space can be the starting point of taking a substring

    const res = message.substr(0, message.lastIndexOf(' ', K)); // runtime is O (n) in the worst case since we might have to go up to the entire length of the string looking for the index of

    return res;
}