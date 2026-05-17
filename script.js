let first = null;
let second = null;
let operator = null;
let validDisplay = true;
let resultDisplayed = false;

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
        return first / second;
    }
    else {
        validDisplay = false;
        return "Divide by Zero";
    }
}

function operate(operator, first, second) {
    if (operator === "+") {
        return add(first, second);
    }
    else if (operator === String.fromCharCode(0x2212)) {
        return subtract(first, second);
    }
    else if (operator === String.fromCharCode(0x00D7)) {
        return multiply(first, second);
    }
    else if (operator === String.fromCharCode(0x00F7)) {
        return divide(first, second);
    }
}

function idToChar(id) {
    switch(id) {
        case "one":
            return "1";
            break;
        case "two":
            return "2";
            break;
        case "three":
            return "3";
            break;
        case "four":
            return "4";
            break;
        case "five":
            return "5";
            break;
        case "six":
            return "6";
            break;
        case "seven":
            return "7";
            break;
        case "eight":
            return "8";
            break;
        case "nine":
            return "9";
            break;
        case "zero":
            return "0";
            break;
        case "plus":
            return "+";
            break;
        case "minus":
            return String.fromCharCode(0x2212);
            break;
        case "multiply":
            return String.fromCharCode(0x00D7);
            break;
        case "divide":
            return String.fromCharCode(0x00F7);
            break;
        case "equals":
            return "=";
            break;
        case "clear":
            return "C";
            break;
        default:
            return "Case not implemented!";
    } 
}

function numeral(id) {
    if (!validDisplay) {
        return;
    }
    if (resultDisplayed) {
        first = null;
        second = null;
        operator = null;
        validDisplay = true;
        resultDisplayed = false;
    }
    let idChar = idToChar(id);
    if (((operator === null && first !== null) || (operator !== null && second !== null)) || idChar !== "0") {
        if (operator === null) {
            if (first === null) {
                first = Number(idChar);
            }
            else {
                first = (first * 10) + Number(idChar);
            } 
        }
        else {
            if (second === null) {
                second = Number(idChar);
            }
            else {
                second = (second * 10) + Number(idChar);
            } 
        }
    }
    else if (operator === null && first === null) {
        first = 0;
    }
    else if (operator !== null && second === null) {
        second = 0;
    }
}

function operatorFunc(id) {
    if (!validDisplay) {
        return;
    }
    // if (display === "") {
    //     display += 0; ////////////////////////////////////////////////
    //     first = 0;
    // }
    let idChar = idToChar(id);
    if (first !== null && second === null) {
        operator = idChar;
        resultDisplayed = false;
    }
    else if (first !== null && second !== null) {
        first = operate(operator, first, second);
        if (!validDisplay) {
            return;
        }
        second = null;
        operator = idChar;
        resultDisplayed = false;
    }
}

function utility(id) {
    if (id === "clear") {
        first = null;
        second = null;
        operator = null;
        validDisplay = true;
    }
    else if (id === "equals" && first !== null && operator !== null && second !== null && validDisplay) {
        first = operate(operator, first, second);
        if (!validDisplay) {
            return;
        }
        operator = null;
        second = null;
        resultDisplayed = true;
    }
}

function printDisplay() {
    let display = "";
    if (!validDisplay) {
        display += "Divide by Zero";
        return display;
    }
    if (first === null) {
        display += 0;
    }
    else {
        display += parseFloat(first.toFixed(9));
    }
    if (operator !== null) {
        display += " " + operator + " ";
    }
    if (second !== null) {
        display += parseFloat(second.toFixed(9));
    }
    return display;
}


let buttons = document.querySelectorAll("button");
for (button of buttons) {
    let id = button.id;
    let classid = button.className;
    button.addEventListener("click", () => {
        if (classid === "numeral") {
            numeral(id);
        }
        else if(classid === "operator") {
            operatorFunc(id);
        }
        else if(classid === "utility") {
            utility(id);
        }
        let displayPanel = document.querySelector(".display");
        displayPanel.textContent = printDisplay();
    });
}