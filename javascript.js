//here be VARIABLES
let displayString = "";

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
        case ('+'):
            add(a,b);
            break;
        case ('-'):
            subtract(a,b);
            break;
        case ('/'):
            divide(a,b);
            break;
        case ('*'):
            multiply(a,b);
            break;
    }
}

function appendToDisplay(number) {
    displayString = displayString.concat(number);
    updateDisplay(displayString);
}

function updateDisplay(stringToReplace) {
    document.getElementById("display").textContent = stringToReplace;
}

//here be MAIN
updateDisplay(displayString);

//if button w/ class number-button is clicked, append to display
const numberButtons = document.querySelectorAll('.number-button')
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        appendToDisplay(numberButton.id);
    });
});

