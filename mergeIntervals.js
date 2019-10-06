/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

 function Interval(start, end) {
    this.start = start;
    this.end = end;
}
    
const merge = intervals => {
    intervals.sort((intervalA, intervalB) => intervalA.start - intervalB.start);
    for (let i = 1; i < intervals.length; i++) {
      const previousInterval = intervals[i - 1];
      const currentInterval = intervals[i];
      if (currentInterval.start <= previousInterval.end) {
        intervals[i] = new Interval(
          Math.min(previousInterval.start, currentInterval.start),
          Math.max(previousInterval.end, currentInterval.end)
        );
        intervals[i - 1] = null;
      }
    }
    return intervals.filter(interval => interval);
  };


  console.log(merge([[4,5],[1,4]]));