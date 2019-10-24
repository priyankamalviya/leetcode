/**
 * initialize your data structure here.
 */
var MaxStack = function () {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
    this.arr.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
    return this.arr.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
    return Math.max(...this.arr);
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
    const max = Math.max(...this.arr);
    const index = this.arr.lastIndexOf(max);
    return this.arr.splice(index, 1)
};

/** 
 * Your MaxStack object will be instantiated and called as such:

 */

var obj = new MaxStack()
var param_1 = obj.push(5)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.peekMax()
var param_5 = obj.popMax()

console.log(param_2)
console.log(param_3);
console.log(param_4);
console.log(param_5)