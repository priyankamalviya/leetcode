function curry(fn) {
    if (fn.length === 0) {
        return fn;
    }

    function _curried(depth, args) {
        return function (newArgument) {
            if (depth - 1 === 0) {
                return fn(...args, newArgument);
            }
            return _curried(depth - 1, [...args, newArgument]);
        };
    }

    return _curried(fn.length, []);
}

function add(a, b) {
    return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

console.log(addFive);