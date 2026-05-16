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