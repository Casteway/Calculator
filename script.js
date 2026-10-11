let numbersOperation = "";
let number1 = "";
let number2 = "";
let operatorClicked = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operation, a, b) {
  return operation(a, b);
}

const digitButtons = document.querySelectorAll(".digitButtons");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clearButton");
const operatorButtons = document.querySelectorAll(".operatorButtons");
const sumButton = document.querySelector(".sumButton");

digitButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    display.textContent += event.target.textContent;
    if (operatorClicked === true) {
      number2 += event.target.textContent;
    } else {
      number1 += event.target.textContent;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    operatorClicked = true;
    numbersOperation = event.target.textContent;
  });
});

clearButton.addEventListener("click", () => {
  display.textContent = " ";
});

sumButton.addEventListener("click", () => {
  console.log("Sum has been clicked");
});
