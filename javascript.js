//here be VARIABLES
let operandA, operandB, operation;
let displayInput = "";
let operandASet = false;
let operationSet = false;
let decimalPressed = false;

const displayElement = document.getElementById("display");
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const decimalButton = document.getElementById('decimal');

//here be FUNCTIONS
//a and b are both numbers
function add(a,b) {
    console.log("Performing operation: " + a + " + " + b);
    return a + b;
}

function subtract(a,b) {
    console.log("Performing operation: " + a + " - " + b);
    return a-b;
}

function divide(a,b) {
    if (b === 0) {
        return ("Divide by 0 error!");
        //make text red, formatting
    } else {
        console.log("Performing operation: " + a + " / " + b);
        return a / b;
    }
}

function multiply(a,b) {
    console.log("Performing operation: " + a + " * " + b);
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
    decimalPressed = false;
    clearDisplay();
}

function equals() {
    if (operandASet === false || operationSet === false) {
        updateDisplay("Error!");
    } else {
        operandB = parseFloat(displayInput);
        solution = operate(operandA, operandB, operation);
        updateDisplay(round(solution, 9));
        operandA = solution;
        console.log("operandA is: " + operandA);
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
            operandB = parseFloat(displayInput);
            console.log("operandB is: " + operandB);
        } else {
            operandA = parseFloat(displayInput);
            console.log("operandA is: " + operandA);
            operandASet = true; // flag for calculations that have more than one operator
            decimalPressed = false; // in case the 2nd number also contains a decimal
        }

        if (operationSet === true) { //treat as "equals" press, store operator for next
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

backspaceButton.addEventListener('click', () => {
    console.log("Backspace button pressed");
    displayInput = displayInput.slice(0, -1);
    updateDisplay(displayInput);
});

decimalButton.addEventListener('click', () => {
    console.log("Decimal button pressed");
    if (decimalPressed === false) {
        displayInput = displayInput.concat('.');
        updateDisplay(displayInput);
        decimalPressed = true;
    }
});

// listeners for keys
window.addEventListener('keydown', function(event) { //or keyup?
    switch (event.key) {
    case 49: // 1
    case 50: // 2
    case 51: // 3
    case 52: // 4
    case 53: // 5
    case 54: // 6
    case 55: // 7
    case 56: // 8 (also *?)
    case 57: // 9
    case 48: // 0

    case 13: // enter
    case 187: // +
    case 189: // -
    case 191: // /
    case 8: // backspace
    case 67: // c (clear)

    }
  });