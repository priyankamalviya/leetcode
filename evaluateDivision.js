var calcEquation = function(equations, values, queries) {
    let neighbors = {};
    
    equations.forEach(([nom, denom], idx) => {
        const curValue = values[idx];
        neighbors[nom] = neighbors[nom] || [];
        neighbors[nom].push([denom, curValue]);
        
        neighbors[denom] = neighbors[denom] || [];
        neighbors[denom].push([nom, 1 / curValue]);
    });
    
    let result = [];
    for (let query of queries) {
        result.push(evaluate(query, neighbors));
    }
    
    return result;
};

function evaluate(query, neighbors) {
    const [nom, denom] = query;
    if (!(nom in neighbors) || !(denom in neighbors)) return -1;
    if (nom === denom) return 1;
    
    let queue = neighbors[nom].slice();
    let visited = new Set();
    
    while (queue.length) {
        const [variable, value] = queue.shift();
        
        if (variable === denom) return value;
        visited.add(variable);
        
        const next = neighbors[variable];
        next.forEach(([next, nextValue]) => {
            if (visited.has(next)) return;
            queue.push([next, nextValue * value]);
        });
    }
    
    return -1;
}

console.log(calcEquation([ ["a","b"],["b","c"] ],
[2.0,3.0],
[ ["a","c"],["b","c"],["a","e"],["a","a"],["x","x"] ]));