// Calculator App
// Starter: has add and subtract — you will add more operations via GitHub Flow

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// TODO (feature/multiply-divide): add multiply(a, b) and divide(a, b) functions
// TODO (feature/power-function): add power(base, exponent) function

module.exports = { add, subtract };

function squareRoot(n) {
    if (n < 0) throw new Error('Cannot take square root of a negative number');
    return Math.sqrt(n);
}

module.exports.squareRoot = squareRoot;
