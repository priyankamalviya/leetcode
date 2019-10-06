const live = 1;
const dead = 0;

var copyBoard = function (dest, src) {
    if (src.length == 0) return;
    var m = src.length;
    var n = src[0].length;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            dest[i][j] = src[i][j];
        }
    }
}

/**
 * @param {number[][]} board
 * @param {number} i
 * @param {number} j
 * @return {number} the number of live neighsbours about (i,j); max 8
 */
var getNumLiveNeighbours = function (board, i, j) {
    if (board.length == 0) return 0;

    var m = board.length;
    var n = board[0].length;

    var totalLive = 0;
    var iTooLarge = i + 1 >= m;
    var iTooSmall = i - 1 < 0;
    var jTooLarge = j + 1 >= n;
    var jTooSmall = j - 1 < 0;

    if (!iTooLarge && board[i + 1][j] == live) totalLive++;
    if (!iTooSmall && board[i - 1][j] == live) totalLive++;
    if (!jTooLarge && board[i][j + 1] == live) totalLive++;
    if (!jTooSmall && board[i][j - 1] == live) totalLive++;

    if (!iTooLarge && !jTooLarge && board[i + 1][j + 1] == live) totalLive++;
    if (!iTooLarge && !jTooSmall && board[i + 1][j - 1] == live) totalLive++;
    if (!iTooSmall && !jTooLarge && board[i - 1][j + 1] == live) totalLive++;
    if (!iTooSmall && !jTooSmall && board[i - 1][j - 1] == live) totalLive++;

    return totalLive;
}

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    if (board.length == 0) return;

    var m = board.length;
    var n = board[0].length;
    var newBoard = new Array(m);

    for (var i = 0; i < m; i++) {
        newBoard[i] = new Array(n);
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var curCell = board[i][j];
            var numLiveNeighbours = getNumLiveNeighbours(board, i, j);

            switch (numLiveNeighbours) {
                case 2:
                    // state stays the same
                    newBoard[i][j] = board[i][j];
                    break;
                case 3:
                    if (curCell == dead) newBoard[i][j] = live;
                    else newBoard[i][j] = board[i][j];
                    break;
                default:
                    // dies by default
                    newBoard[i][j] = dead;
            }
        }
    }

    copyBoard(board, newBoard);
};


console.log(gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]));



/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var gameOfLife = function(board) {


//     let next = [];
//     // initialize a 2d array with empty values
//     next = [...Array(board.length)].map(e => Array(board[0].length));
//     for(let x = 1; x < board.length-1; x++) {
//         for(let y = 1; y < board[0].length-1; y++) {

//             // Add up all the states in the surrounding grid
//             let neighbors = 0;
//             for(let i = -1; i<= 1; i++) {
//                 for(let j = -1; j<= 1; j++ ) {
//                     neighbors +=board[x+i][y+j]
//                 }
//             }
//             // substract the current cell's state 
//             neighbors -= board[x][y];

//             // Rules of Life
//             if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
//             else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
//             else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
//             else                                            next[x][y] = board[x][y];  // Stasis
//         }
//     }
//     return next; 
// };