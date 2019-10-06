/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	let m = word1.length, n = word2.length;
	let T = [];
	for (var i = 0; i <= m; i++) {
		T[i] = new Array(n);
	}
	for (var i = 0; i <= m; i++) {
		T[i][0] = i;
	}
	for (var j = 0; j <= n; j++) {
		T[0][j] = j;
	}
	for(let i = 1; i <= m; i++) {
		for(let j = 1; j <= n; j++) {
			if(word1[i-1] !== word2[j-1]) {
				T[i][j] = Math.min(T[i-1][j] +1, T[i][j-1] +1, T[i-1][j-1] +1);
			} else {
				T[i][j] = T[i-1][j-1];
			}
		}
	}
	return T[m][n];
};