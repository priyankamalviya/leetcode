var minMeetingRooms = function (intervals) {
    let startArr = intervals.concat().sort((x, y) => {
        return x.start - y.start;
    })
    let endArr = intervals.sort((x, y) => {
        return x.end - y.end;
    })
    let rooms = 0;
    let end = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (startArr[i].start < endArr[end].end) {
            rooms++;
        } else end++;
    }
    return rooms;
};

console.log(minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20]
]));