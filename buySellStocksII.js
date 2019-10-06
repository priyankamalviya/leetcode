var maxProfit = function (prices) {
    /** min, max, totalMax
        buy -> 1, sell -> 5 - max = 4 
    */

    let maxProfit = 0;

    if (prices.length <= 1) return maxProfit;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4, 34, 2, 13, 3, 5, 90]));