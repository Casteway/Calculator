let numbersOperation;
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

const buttons = document.querySelectorAll(".digitButtons");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clearButton");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    display.textContent += event.target.textContent;
    number1 += event.target.textContent;
    console.log(number1);
  });
});

clearButton.addEventListener("click", () => {
  display.textContent = " ";
});
