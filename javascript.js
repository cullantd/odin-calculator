//here be VARIABLES
let operandA, operandB, operation;
let displayInput = "";
let operandASet = false;
let operationSet = false;

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
    if (b === 0) {
        return ("Divide by 0 error!");
        //make text red, formatting
    } else {
        return a / b;
    }
}

function multiply(a,b) {
    return a * b;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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
function clearAll() {
    operandA = 0;
    operandASet = false;
    operandB = 0;
    operation = null;
    operationSet = false;
    solution = "";
    displayInput = "";
    clearDisplay();
}

function equals() {
    if (operandASet === false || operationSet === false) {
        updateDisplay("Error!");
    } else {
        operandB = parseInt(displayInput);
        solution = operate(operandA, operandB, operation);
        updateDisplay(round(solution, 9));
        operandA = solution;
        displayInput = "";
    }
}

function updateDisplay(stringToReplace) {
    console.log("Updating Display with: " + stringToReplace);
    displayElement.textContent = stringToReplace;
}

//here be MAIN
clearDisplay();

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        console.log("Number pressed: " + numberButton.id);
        displayInput = displayInput.concat(numberButton.id);
        updateDisplay(displayInput);
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        console.log("Operator pressed: " + operatorButton.id);
        if (operandASet === true) {
            operandB = parseInt(displayInput);
        } else {
            operandA = parseInt(displayInput);
            operandASet = true; // flag for calculations that have more than one operator
        }

        if (operationSet === true) {             //treat as "equals" press, store operator for next
            equals();
            operation = operatorButton.id;
        } else {
            operation = operatorButton.id;
            operationSet = true; //flag for calculations that have more than one operator
            displayInput = "";
            clearDisplay();
            updateDisplay(operatorButton.dataset.symbol);
        }
    });
});

equalsButton.addEventListener('click', () => {
    console.log("Equals button pressed");
    equals();
});

clearButton.addEventListener('click', () => {
    console.log("Clear button pressed");
    clearAll();
});