/** 
 * 
 * Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.

 

Rules for a valid pattern:

Each pattern must connect at least m keys and at most n keys.
All the keys must be distinct.
If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
The order of keys used matters.

 * */

/*function numberOfPatterns(m, n) {
    var used = Array(3).fill({}).map(r => [false, false, false]);
    return traverse(0, 0, 0) * 4 + traverse(0, 0, 1) * 4 + traverse(0, 1, 1);

    function traverse(count, r, c) {
        if (count >= n) return 0;
        if (r < 0 || c < 0 || r >= 3 || c >= 3) return 0;
        if (used[r][c]) return 0;
        if (count === 8) return 1;

        count++;
        var local = count >= m ? 1 : 0;
        used[r][c] = true;
        for (var dr = -1; dr <= 1; dr++) {
            for (var dc = -1; dc <= 1; dc++) {
                if (used[r + dr] && used[r + dr][c + dc]) {
                    local += traverse(count, r + dr + dr, c + dc + dc);
                } else {
                    local += traverse(count, r + dr, c + dc);
                }

                if (dr * dc !== 0) {
                    local += traverse(count, r + dr + dr, c + dc);
                    local += traverse(count, r + dr, c + dc + dc);
                }
            }
        }
        used[r][c] = false;
        count--;
        return local;
    }
}*/

function numberOfPatterns(m, n) {
    let jumps = Array(10).fill(0).map(() => Array(10).fill(0))
    let visited = new Array(10).fill(false);
    jumps[1][3] = jumps[3][1] = 2;
    jumps[1][7] = jumps[7][1] = 4;
    jumps[3][9] = jumps[9][3] = 6;
    jumps[7][9] = jumps[9][7] = 8;
    jumps[4][6] = jumps[6][4] = 5;
    jumps[2][8] = jumps[8][2] = 5;
    
    jumps[1][9] = jumps[9][1] = jumps[3][7] = jumps[7][3] = 5;
    
    let count = 0;
    
    let DFS = function(num, len, count, m, n) {
        if (len >= m) count++; // only count if moves are larger than m
        
        len++;
        if (len > n) return count;
        visited[num] = true;
        for (let next = 1; next <= 9; next++) {
            let jump = jumps[num][next];
            if (!visited[next] && (jump == 0 || visited[jump])) {
                count = DFS(next, len, count, m, n);
            }
        }
        visited[num] = false; // backtracking
        return count;
    }
    
    count +=DFS(1, 1, 0, m, n)*4; // pick one from the pattern and *4 will give count for all similar 4
    count += DFS(2, 1, 0, m, n)*4;
    
    count +=DFS(5, 1, 0, m, n);
    
    return count;
}

console.log(numberOfPatterns(1,2));