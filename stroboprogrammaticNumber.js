var findStrobogrammatic = function(n) {
    if(n === 0) return [""]
    if(n === 1) return ["0","1","8"]
    let prevs = findStrobogrammatic(n-2);
    const res = [], lefts = ["0","1","6","8","9"], rights = ["0","1","9","8","6"];
    for(let str of prevs){
      for(let i=0; i < 5; i++) 
          res.push(lefts[i]+str+rights[i])
    }
    return res;
}

console.log(findStrobogrammatic(2));