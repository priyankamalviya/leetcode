/**
 * Initialize your data structure here.
 */
var Logger = function () {
    this.map = new Map();
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    let flag = false;
    if (this.map.has(message)) {
        let remainingTime = Math.abs(parseInt(this.map.get(message)) - timestamp);
        if (remainingTime >= 10) {
            this.map.set(message, timestamp);
            flag = true;
        }
    } else {
        this.map.set(message, timestamp);
        flag = true;
    }
    return flag;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

var obj = new Logger();
var param_1 = obj.shouldPrintMessage(4, "foo");
console.log(param_1)