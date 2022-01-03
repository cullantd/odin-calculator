//here be VARIABLES
let displayString = "";
let operandA;
let operandB;
let selectedOperator;
let solution;

const displayElement = document.getElementById("display");
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

//here be FUNCTIONS
//a and b are both numbers
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a-b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
    return a * b;
}

function operate(a, b, operator) {
    switch (operator) {
        case ('addition'):
            return add(a,b);
        case ('subtraction'):
            return subtract(a,b);
        case ('division'):
            return divide(a,b);
        case ('multiplication'):
            return multiply(a,b);
    }
}

function appendToDisplay(number) {
    displayString = displayString.concat(number);
    updateDisplay(displayString);
}

function clearDisplay() {
    updateDisplay("");
}

function updateDisplay(stringToReplace) {
    console.log("Updating Diplay with: " + stringToReplace);
    displayElement.textContent = stringToReplace;
}

//here be MAIN
clearDisplay();

//if button w/ class number-button is clicked, append to display
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        console.log("Number pressed: " + numberButton.id);
        appendToDisplay(numberButton.id);
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        console.log("Operator pressed: " + operatorButton.id);
        operandA = parseInt(displayString);
        selectedOperator = operatorButton.id;
        appendToDisplay(operatorButton.dataset.symbol);
        clearDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    console.log("Equals button pressed")
    operandB = parseInt(displayString);
    clearDisplay();
    solution = operate(operandA, operandB, selectedOperator);
    updateDisplay(solution);
});

clearButton.addEventListener('click', () => {
    console.log("Clear button pressed")
    clearDisplay();
    displayString = "";
});
