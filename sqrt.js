var mySqrt = function (x) {
    let start = 0
    let end = x
    let mid = 0
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return mid;
        } else if (mid * mid < x) {
            start = mid + 1;
        } else if (mid * mid > x) {
            end = mid - 1;
        }
    }
};

console.log(mySqrt(8));