/* Q 317. HARD
You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:

Each 0 marks an empty land which you can pass by freely.
Each 1 marks a building which you cannot pass through.
Each 2 marks an obstacle which you cannot pass through.
*/

var shortestDistance = function (grid) {
    let width = grid[0].length,
        height = grid.length,
        dirs = [
            [-1, 0],
            [0, -1],
            [0, 1],
            [1, 0]
        ];
    let dist = 0,
        res = Infinity,
        house = 1,
        houseCount = 0,
        avoidArea = [],
        road = -1;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const num = grid[i][j];
            if (num === 1) {
                houseCount++;
            }
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const num = grid[i][j];
            if (num <= 0 && avoidArea.indexOf(num) < 0) {
                let temp = bfs([
                    [i, j, -1, 0]
                ], house, num, road);
                if (temp < houseCount) {
                    avoidArea.push(road);
                } else {
                    res = Math.min(dist, res);
                }
                road--;
                house = house + 2;
                dist = 0;
            }
        }
    }
    return res !== Infinity ? res : -1;

    function bfs(queue, house, road, checkedRoad) {
        let hc = 0;
        while (queue.length > 0) {
            let y = queue[0][0],
                x = queue[0][1],
                direction = queue[0][2],
                path = queue[0][3];
            if (y > -1 && y < height && x > -1 && x < width) {
                const num = grid[y][x];
                if (num > 0 && num !== 2 && num <= house) {
                    grid[y][x] = house + 2;
                    dist += path;
                    hc++;
                } else if (num === road) {
                    grid[y][x] = checkedRoad;
                    for (let i = 0; i < 4; i++) {
                        if (i != 3 - direction) {
                            queue.push([y + dirs[i][0], x + dirs[i][1], i, path + 1]);
                        }
                    }
                }
            }
            queue.shift();
        }
        return hc;
    }
};

console.log(shortestDistance([
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
]));