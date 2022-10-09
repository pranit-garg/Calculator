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
let equalsButton = document.querySelector(".equalsButton")
let clearButton = document.querySelector(".clearButton")

numberButton.forEach(button => {
    button.addEventListener("click", populateDisplayWithNum1);
});

/* operatorButton.forEach(button => {
    button.addEventListener("click", e => console.log(e.target.childNodes[0].parentElement.innerText))
}); */

operatorButton.forEach(button => {
    button.addEventListener("click", insertOperator)
});

equalsButton.addEventListener("click", evaluate);

clearButton.addEventListener("click", clearScreen);

contentOnDisplay.addEventListener("click", e => {
    console.log(e.target.innerHTML)
});


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


// testing
console.log(contentOnDisplay.textContent);




// event listener code for testing -> remove at end
/* let num0Button = document.querySelector(".num0");
let num1Button = document.querySelector(".num1");
let num2Button = document.querySelector(".num2");
let num3Button = document.querySelector(".num3");
let num4Button = document.querySelector(".num4");
let num5Button = document.querySelector(".num5");
let num6Button = document.querySelector(".num6");
let num7Button = document.querySelector(".num7");
let num8Button = document.querySelector(".num8");
let num9Button = document.querySelector(".num9");
let clearButton = document.querySelector(".clearButton")
let deleteButton = document.querySelector(".deleteButton")
let decimalButton = document.querySelector(".decimalButton")
let equalsButton = document.querySelector(".equalsButton")
let multiplyButton = document.querySelector(".multiplyButton")
let divideButton = document.querySelector(".divideButton")
let addButton = document.querySelector(".addButton")
let subtractButton = document.querySelector(".subtractButton") 

// adding event listeners for all buttons
num0Button.addEventListener("click", () => console.log("0"));
num1Button.addEventListener("click", () => console.log("1"));
num2Button.addEventListener("click", () => console.log("2"));
num3Button.addEventListener("click", () => console.log("3"));
num4Button.addEventListener("click", () => console.log("4"));
num5Button.addEventListener("click", () => console.log("5"));
num6Button.addEventListener("click", () => console.log("6"));
num7Button.addEventListener("click", () => console.log("7"));
num8Button.addEventListener("click", () => console.log("8"));
num9Button.addEventListener("click", () => console.log("9"));
clearButton.addEventListener("click", () => console.log("clear"));
deleteButton.addEventListener("click", () => console.log("delete"));
decimalButton.addEventListener("click", () => console.log("."));
equalsButton.addEventListener("click", () => console.log("="));
multiplyButton.addEventListener("click", () => console.log("X"));
divideButton.addEventListener("click", () => console.log("//"));
addButton.addEventListener("click", () => console.log("+"));
subtractButton.addEventListener("click", () => console.log("-")); */