/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    let heights = [],
        result = [];
    for (let i = 0; i < buildings.length; i++) {
        let temp = buildings[i];
        heights.push([temp[0], -temp[2]]); // starting points & heights
        heights.push([temp[1], temp[2]]); // ending points and heights
    }

    // now sort the heights nested array 
    heights.sort((a, b) => {
        if (a[0] !== b[0]) { // if starting points are different, then sort by them else sort by end points, result will be sorted list of both starting & ending points
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });


    // console.log(heights)

    let currHeightsMap = {},
        prevMax = 0;
    for (let i = 0; i < heights.length; i++) {
        let h = heights[i];
        if (h[1] < 0) { // means we are looking at the pair with starting point and height
            currHeightsMap[-h[1]] = currHeightsMap[-h[1]] ? currHeightsMap[-h[1]] + 1 : 1; // if you find height value, increment its value by 1, else add 1 in the map
        } else {
            currHeightsMap[h[1]]--;
            if (currHeightsMap[h[1]] === 0) {
                delete currHeightsMap[h[1]];
            }

        }

        // console.log( currHeightsMap)


        let currMax = 0;
        for (let key in currHeightsMap) {
            if (key - 0 > currMax) { // key - 0 coz key of an object is a string in javascript, just check if key is more than 0, if key >m0, assing it to currentMax
                currMax = key - 0;
            }
        }

        if (prevMax !== currMax) { // if previousMax !== currMax, then add it to result
            result.push([h[0], currMax]);
            prevMax = currMax;
        }


    }


    return result;
};


console.log(getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8]
]));