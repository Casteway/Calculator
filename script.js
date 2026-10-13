let numbersOperation = "";
let number1 = "";
let number2 = "";
let operation = "";
let operatorClicked = false;
let result = "";
let resultShown = false;
let tempResult = "";

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (Number(a) === 0 || Number(b) === 0) {
    return alert("No divide by 0");
  }
  return Number(a) / Number(b);
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
    if (resultShown === true) {
      display.textContent = "";
      resultShown = false;
    }
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
    display.textContent = "";
    operatorClicked = true;
    numbersOperation = event.target.textContent;
    if (number1 !== "" && number2 !== "") {
      tempResult = operate(operation, Number(number1), Number(number2));
      number1 = tempResult;
      number2 = "";
      operation = "";
      resultShown = true;
      display.textContent = Number(number1);
    }
    switch (numbersOperation) {
      case "+":
        operation = add;
        numbersOperation = "";
        break;
      case "-":
        operation = subtract;
        numbersOperation = "";
        break;
      case "X":
        operation = multiply;
        numbersOperation = "";
        break;
      case "/":
        operation = divide;
        numbersOperation = "";
        break;
      default:
        break;
    }
  });
});

clearButton.addEventListener("click", () => {
  display.textContent = " ";
  numbersOperation = "";
  number1 = "";
  number2 = "";
  operation = "";
  operatorClicked = false;
  result = "";
  resultShown = false;
});

sumButton.addEventListener("click", () => {
  if (number1 !== "" && number2 !== "" && operation !== "") {
    console.log("Sum has been clicked");
    result = operate(operation, Number(number1), Number(number2));
    display.textContent = result;
    numbersOperation = "";
    number1 = "";
    number2 = "";
    operation = "";
    operatorClicked = false;
    result = "";
    resultShown = true;
    tempResult = "";
  }
});
