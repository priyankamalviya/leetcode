/* Q 317. HARD
You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:

Each 0 marks an empty land which you can pass by freely.
Each 1 marks a building which you cannot pass through.
Each 2 marks an obstacle which you cannot pass through.
*/

const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

function distanceFromBuilding(grid, r, c, distance, start) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [
        [r, c, 1]
    ];
    let qIndex = 0;
    let minDistance = Infinity;
    while (qIndex < queue.length) {
        const [r0, c0, d] = queue[qIndex]; // Do this to avoid queue.shift everytime.
        for (const [dr, dc] of DIRECTIONS) {
            const r1 = r0 + dr;
            const c1 = c0 + dc;
            if (0 <= r1 && r1 < rows && 0 <= c1 && c1 < cols && grid[r1][c1] === start) {
                distance[r1][c1] += d;
                minDistance = Math.min(minDistance, distance[r1][c1]);
                grid[r1][c1] -= 1;
                queue.push([r1, c1, d + 1]);
            }
        }
        qIndex += 1;
    }
    return minDistance;
}

var shortestDistance = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const distance = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
    let start = 0;
    let minDistance = 0;
    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (grid[r][c] === 1) {
                minDistance = distanceFromBuilding(grid, r, c, distance, start);
                if (minDistance === Infinity) { // Early exit if one building cannot reach.
                    return -1;
                }
                start -= 1;
            }
        }
    }
    return minDistance;
};

console.log(shortestDistance([
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
]));