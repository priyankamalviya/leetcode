// s: ['h', 'e', 'l', 'l', 'o'];

let count = 1;

function reverseString(str) {
    if (str.length === 0)
        return "";
    else
        return reverseString(str.slice(1, str.length)) + str[0];
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))