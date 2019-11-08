var insert = function (intervals, newInterval) {
    const output = [];
    let ptr = newInterval;
    for (const interval of intervals) {
        if (isOverlapped(interval, ptr)) {
            ptr = merge(interval, ptr);
        } else {
            const min = interval[0] < ptr[0] ? interval : ptr;
            const max = interval[0] > ptr[0] ? interval : ptr;
            output.push(min);
            ptr = max;
        }
    }
    output.push(ptr);
    return output;
};

function merge(interval1, interval2) {
    return [Math.min(interval1[0], interval2[0]), Math.max(interval1[1], interval2[1])];
}

function isOverlapped(interval1, interval2) {
    if (interval1[0] > interval2[0]) {
        return isOverlapped(interval2, interval1);
    }
    return interval2[0] <= interval1[1] && interval2[1] >= interval1[0];
}

console.log(insert([
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16]
], [4, 8]));