/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    // handle 0 edge cases
    if (matrix.length === 0) return [];
    
    let m = matrix.length, n = matrix[0].length;
    let ans = [];
    
    //search UP
    const searchUp = function(row, col) {
        ans.push(matrix[row][col]);
        if (ans.length === m*n) return ans;
        
        if (row === 0) { 
            col < n - 1 ? searchDown(row, col + 1) : searchDown(row + 1, col);
        } else {
            col === n - 1 ? searchDown(row + 1, col) : searchUp(row - 1, col + 1);
        }
    }
    //search DOWN
    const searchDown = function(row, col) {
        ans.push(matrix[row][col]);
        if (ans.length === m*n) return ans;
        
        if (col === 0) {
            row < m - 1 ? searchUp(row + 1, col) : searchUp(row, col + 1);
        } else {
            row === m -1 ? searchUp(row, col + 1) : searchDown(row + 1, col - 1);
        }
    }
    
    // start search in top left
    searchUp(0,0);    
    return ans;
};


console.log(findDiagonalOrder([[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]]));
