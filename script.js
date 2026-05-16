let first;
let second;
let operator;

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    if (second !== 0) {
        return parseFloat((first / second).toFixed(9));
    }
    else {
        return "Divide by Zero";
    }
}

function operate(operator, first, second) {
    if (operator === "+") {
        return add(first, second);
    }
    else if (operator === "-") {
        return subtract(first, second);
    }
    else if (operator === "*") {
        return multiply(first, second);
    }
    else if (operator === "/") {
        return divide(first, second);
    }
}