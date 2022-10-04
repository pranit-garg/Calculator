// four caclulation functions to add, subtract, multiply, and divide

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// operate function

function operator(calculationFunction, num1, num2) {
    return calculationFunction(num1, num2);
}

console.log(operator(subtract, 2, 6));