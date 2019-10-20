/* Q 57. Insert Interval HARD
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

*/

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


console.log(merge([
  [4, 5],
  [1, 4]
]));