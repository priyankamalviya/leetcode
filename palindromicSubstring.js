/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	// create 2 D array for boolean DP values of whether substrings are palindrome or not
	   
	   let DP = [...Array(s.length)].map(i => Array(s.length).fill("false")),
		   count = 0;
	   
	   // all length 1 substrings are palindromes by default
	   for(let i = 0; i< s.length; i++) {
		   DP[i][i] = true;
		   count++;
	   }
	   
	   
	   // if there are more than 1 substrings
	   for(let i=2; i<= s.length; i++) {
		   for(let j = 0; j<= s.length - i; j++ ) {
			   let k = i+j-1; // getting the ending index
			   if(i===2) {
				   if(s.charCodeAt(j) === s.charCodeAt(k)) {
				   DP[j][k] = true;
				   count++;
					}
			   }
			   if(s.charCodeAt(j) === s.charCodeAt(k) && DP[j+1][k-1]===true) { // check equality of first & last characters, and if substring between them is palindrome
				   DP[j][k] = true;
				   count++;
			   }
		   }
	   }
	   
	   return count;
   };

console.log(countSubstrings("abc"));