const sumNumbers = (a, b) => {
    while (true) {
        let sum = a ^ b;
        let carry = (a & b) << 1;
        if (b === 0) {
            return a;
        }
        a = sum;
        b = carry;
    }
}

console.log(sumNumbers(1, 3));