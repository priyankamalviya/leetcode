/*var spiralOrder = function(matrix) {
	let m = matrix.length; // row
	let n = matrix[0].length; // column
	let r = 0; // starting point of row
	let c = 0; // starting point of column
	let result = [];

	while(r < m && c < n) {
		// push the first row
		for(let i = 0; i < n; i++) {
			result.push(matrix[r][i]);
		}
		r++;
		// push the last column now
		for(let i=r; i< m; i++) {
			result.push(matrix[i][n-1]);
		}
		n--;

		if(r < m) {
			// push the bottom row now
			for(let i = n-1; i>=0; i--) {
				result.push(matrix[m-1][i]);
			}
			m--;
		}

		if(c < n) {
			// go up and print the inner row
			for(let i=m-1; i>r; i--) {
				result.push(matrix[i][c])
			}
			c++;
		}
	
	}
	return result;
};

*/

var spiralOrder = function(matrix) {
    let result = [];
    if (matrix.length == 0) {
        return result;
    } 
	let rowEnd = matrix.length; // row
	let colEnd = matrix[0].length; // column
	let rowStart = 0; // starting point of row
	let colStart = 0; // starting point of column

	while(rowStart < rowEnd && colStart < colEnd) {
		// push the first row
		for(let i = colStart; i < colEnd; i++) {
			result.push(matrix[rowStart][i]);
		}
		rowStart++;
		// push the last column now
		for(let i=rowStart; i< rowEnd; i++) {
			result.push(matrix[i][colEnd-1]);
		}
		colEnd--;

		if(rowStart < rowEnd) {
			// push the bottom row now
			for(let i = colEnd-1; i>= colStart; i--) {
				result.push(matrix[rowEnd-1][i]);
			}
			rowEnd--;
		}

		if(colStart < colEnd) {
			// go up and print the inner row
			for(let i=rowEnd-1; i>=rowStart; i--) {
				result.push(matrix[i][colStart])
			}
			colStart++;
		}
	
	}
	return result;
}; 



console.log(spiralOrder([[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]]));