//variables state
let digitsInput = "";
let secondaryDigitsInput = "";
let expressionText = "";
let txtDisplay = "";
let selectedOpt = "";
let result = undefined;
const ERROR_CLASSES = ["is-error", "is-error-glow"];

//DOM Elements
const calcContainer = document.querySelector(".calc-container");
const operatorBtns = document.querySelectorAll(".operator");
const digitsBtns = document.querySelectorAll(".digit");
const txtDisplayDiv = document.querySelector("#txt-display");
const clearBtn = document.querySelector(".clear");
const expressionScrn = document.querySelector(".expression");
const equalButton = document.querySelector("#equal-btn");
const toggleBtn = document.querySelector("#toggle");
//__________________________event listerner for digits____________________

for (const digit of digitsBtns) {
  digit.addEventListener("click", (e) => {
    if (!selectedOpt) {
      digitsInput += e.target.value;
      updateDisplay(digitsInput);
    } else {
      clearDisplay();
      secondaryDigitsInput += e.target.value;
      updateExpression(`${digitsInput} ${selectedOpt} ${secondaryDigitsInput}`);
      updateDisplay(secondaryDigitsInput);
    }
  });
}

//_____________________________Capture Operator event listeners_____________
for (const operator of operatorBtns) {
  operator.addEventListener("click", (e) => {
    if (!digitsInput) {
      return;
    }
    if (e.target.value === "clear" || e.target.value === "equal") {
      // todo - add error version 2
      return;
    } else {
      updateOperator(e.target.value);

      clearDisplay();
      updateExpression(digitsInput + " " + e.target.value);
    }
    // todo handle multiple inputs
  });
}

//______________________equal event listener__________________________

equalButton.addEventListener("click", (e) => {
  if (!digitsInput || !secondaryDigitsInput || !selectedOpt) {
    return;
  } else {
    calcOp(digitsInput, secondaryDigitsInput, selectedOpt);
    updateDisplay(result);
    digitsInput = String(result);
    secondaryDigitsInput = "";
    selectedOpt = "";
  }
});

//___________________________clear event listener______________________

clearBtn.addEventListener("click", (e) => {
  clearAll();
  clearDisplay();
  clearExpression();
});

//___________________________toggle color__________________
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
});

//____________________________________________functions__________________
function clearDisplay() {
  txtDisplayDiv.textContent = "|";
  txtDisplayDiv.classList.add("blink");
}

function updateOperator(opSign) {
  selectedOpt = opSign;
  console.log(opSign);
}

function updateDisplay(txtForDisplay) {
  if (txtDisplayDiv.textContent.length > 10) {
    clearAll(); //will need update later with error
    return;
  }
  if (!txtDisplayDiv.textContent) {
  }
  txtDisplayDiv.classList.remove("blink");
  txtDisplayDiv.textContent = txtForDisplay;
}

function updateExpression(txtForExpression) {
  expressionScrn.textContent = txtForExpression;
}

function clearExpression() {
  expressionScrn.textContent = "Expression will show here";
}

function clearAll() {
  digitsInput = "";
  secondaryDigitsInput = "";
  expressionText = "";
  txtDisplay = "";
  txtDisplayDiv.textContent = "|";
  txtDisplayDiv.classList.add("blink");
  selectedOpt = "";
  result = undefined;
}

function displayError() {
  txtDisplayDiv.classList.add(...ERROR_CLASSES);
  txtDisplayDiv.classList.add("blink");
  txtDisplayDiv.textContent = "|";
  clearAll();
  //disable buttons and blink clear
}

function clearError() {
  txtDisplayDiv.classList.remove(...ERROR_CLASSES);
}

function toggleBlink() {
  txtDisplayDiv.classList.toggle("blink");
}

//_____________function to calculate_________________
function calcOp(num1, num2, op) {
  let firstNum = +num1;
  let secondNum = +num2;
  if (op === "+") {
    result = firstNum + secondNum;
  } else if (op === "-") {
    result = firstNum - secondNum;
  } else if (op === "/") {
    result = firstNum / secondNum;
  } else if (op === "x") {
    result = firstNum * secondNum;
  } else {
    result = undefined;
  }
  console.log(result);
}
