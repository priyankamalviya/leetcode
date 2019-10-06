/* Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:

Input:
[[1,1,1],  
 [1,0,1],
 [1,1,1]]

 [[1,1,1,0],  
 [1,0,1,1],
 [1,0,0,1],
 [1,1,1,0]]

 Neighbors:
(0,0) -> (0, 1), (1,1), (1, 0)

(1,1) -> (0,0), (0,1), (1,2), (1, 0), (1,2), (2,0), (2,1), (2,2)

(2,1) -> (2,0), (2,2), (1,0), (1,1), (1,2)


Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0 */



/**
 * @param {number[][]} M
 * @return {number[][]}
 */

var findSum = function(i, j, M) {
    let count = 1, sum = M[i][j];
    if(i+1 < M.length) {
        sum +=M[i+1][j];
        count++;
    }
    if(j+1 < M[0].length ) {
        sum += M[i][j+1];
        count++;
    }
    if(j-1 >= 0) {
        sum +=M[i][j-1];
        count++;
    }
    if(i-1 >= 0) {
        sum += M[i-1][j];
        count++;
    }
    if(i-1 >= 0 && j-1 >=0) {
        sum += M[i-1][j-1];
        count++;
    }

    if(i+1 < M.length && j+1 < M[0].length) {
        sum += M[i+1][j+1];
        count++;
    }

    if(i+1 < M.length && j-1 >= 0) {
        sum += M[i+1][j-1];
        count++;
    }

    if(i-1 >= 0 && j+1 < M[0].length) {
        sum += M[i-1][j+1];
        count++;
    }

    return Math.floor(sum/count);
}
var imageSmoother = function(M) {
    let result = [];
    let r = M.length;
    let c = M[0].length;

    for(let i = 0; i<r; i++) {
        let temp = [];
        for(let j = 0; j< c; j++) {
            temp.push(findSum(i, j, M));
        }
        result.push(temp);
    }
    return result;
};

console.log(imageSmoother([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]));


// [[4,4,5],[5,6,6],[8,9,9],[11,12,12],[13,13,14]]