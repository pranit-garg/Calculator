// calculation numbers
let currentNumber = "";
let previousNumber = "";
let operator = "";


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

// setting query selectors for all buttons
let numberButton = document.querySelectorAll(".numberButton");
let operatorButton = document.querySelectorAll(".operatorButton");
let contentOnDisplay = document.querySelector(".calculatorDisplay");
let previousNumberOnDisplay = document.querySelector(".calculatorDisplayForPreviousNumber");
let equalsButton = document.querySelector(".equalsButton");
let clearButton = document.querySelector(".clearButton");
let deleteButton = document.querySelector(".deleteButton");
let decimalButton = document.querySelector(".decimalButton");

numberButton.forEach(button => {
    button.addEventListener("click", populateDisplayWithNum1);
});

/* operatorButton.forEach(button => {
    button.addEventListener("click", e => console.log(e.target.childNodes[0].parentElement.innerText))
}); */

operatorButton.forEach(button => {
    button.addEventListener("click", insertOperator)
});

contentOnDisplay.addEventListener("click", e => {
    console.log(e.target.innerHTML)
});

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clearScreen);
deleteButton.addEventListener("click", deleteCurrentNumber);
decimalButton.addEventListener("click", addDecimal);

function populateDisplayWithNum1(e) {
    // console.log(parseInt(e.target.childNodes[0].parentElement.innerText));
    currentNumber += e.target.childNodes[0].parentElement.innerText;
    contentOnDisplay.innerHTML = currentNumber;
    //console.log(currentNumber);
} 

function insertOperator(e) {
    operator = e.target.childNodes[0].parentElement.innerText;
    previousNumber = currentNumber;
    previousNumberOnDisplay.innerHTML = previousNumber;
    currentNumber = "";
    contentOnDisplay.innerHTML = currentNumber;
}

function evaluate() {
    let result;
    if (previousNumber == "") {
        previousNumber = 0;
    }

    if (operator == "x") {
       result = previousNumber * currentNumber;
    } else if (operator == "÷") {
        result = previousNumber / currentNumber;
    } else if (operator == "+") {
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
    } else if (operator == "-") {
        result = previousNumber - currentNumber;
    }
   
    previousNumberOnDisplay.innerHTML = `${previousNumber} ${operator} ${currentNumber}`
    contentOnDisplay.innerHTML = result;
    currentNumber = result;
}

function clearScreen() {
    previousNumber = "";
    currentNumber = "";
    contentOnDisplay.innerHTML = 0;
    previousNumberOnDisplay.innerHTML = "";
}

function deleteCurrentNumber() {
    currentNumber = currentNumber.slice(0, -1);
    contentOnDisplay.innerHTML = currentNumber;
}

function addDecimal() {
    if (!currentNumber.includes(".")) {
        currentNumber = currentNumber + ".";
        contentOnDisplay.innerHTML = currentNumber;
    }
}