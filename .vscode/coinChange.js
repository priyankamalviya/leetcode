var coinChange = function (coins, amount) {
    const used = new Array(amount + 1);
    const INF = Number.MAX_SAFE_INTEGER;
    used[0] = 0;

    for (let i = 1; i <= amount; i++) {
        let tmp = INF;
        used[i] = INF;

        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) tmp = used[i - coins[j]];
            if (tmp !== INF) used[i] = Math.min(used[i], tmp + 1);
        }
    }

    return used[amount] !== INF ? used[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11));