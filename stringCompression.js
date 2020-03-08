const stringCompression = (str) => {
    let map = {};

    for (let i = 0; i < str.length; i++) {
        map[str[i]] = map[str[i]] + 1 || 1;
    }

    return map;
}

console.log(stringCompression(["a", "a", "b", "b", "b"]));