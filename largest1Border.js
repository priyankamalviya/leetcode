var largest1BorderedSquare = function (grid) {
    let count = 0,
        flag = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (i === 0 && grid[i][j] === 1) count++;
            else if (j === 0 && grid[i][j] === 1) count++;
            else if (i === j && i < grid.length && j < grid.length) count++;
            else if (i === grid.length - 1 && grid[i][j] === 1) count++;
            else if (j === grid.length - 1 && grid[i][j] === 1) count++;
        }
    }
    return count;
};

console.log(largest1BorderedSquare([
    [0, 0, 0, 1]
]));