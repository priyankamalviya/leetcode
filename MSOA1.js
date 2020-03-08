// input =  eedaaad
// output = "eedaad"


// input = "xxxtxxx"
// output = "xxtxx"
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(str) {
    // write your code in JavaScript (Node.js 8.9.4)

    // not more than 2 consecutive characters should remain - slice method can be used 
    let arr = [...str],
        curr = arr[0];
    count = 0;


    const result = arr.reduce((ans, ch) => {
        if (ch !== curr) {
            curr = ch;
            count = 0; // reset count of consecutive, since we found a different character
        }

        if (ch === curr && count < 2) { // found consecutive but filtering for < 2 caracters
            count++;
            ans += ch; // accumulating the characters in our answer

        }
        return ans;
    }, '');

    return result;

}