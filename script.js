const display = document.querySelector(".display");
const keypad = document.querySelector(".keypad");
let firstValue = "";
let operatorValue = "";
let secondValue = "";
let result = "";
let activeOperator = "";

keypad.addEventListener("click", (e) => {
  if (e.target.classList.contains("digit")) {
    if (!operatorValue) {
      firstValue += e.target.value;
      display.textContent = firstValue;
    } else {
      secondValue += e.target.value;
      display.textContent = secondValue;
    }
  }

  if (e.target.classList.contains("operator")) {
    operatorValue = e.target.value;
    activeOperator = e.target;
    activeOperator.classList.add("active");
  }

  if (e.target.classList.contains("equal")) {
    if(activeOperator) activeOperator.classList.remove("active");
    switch(operatorValue) {
    case "+":
      result = parseFloat(firstValue) + parseFloat(secondValue);
      break;
    case "-":
      result = parseFloat(firstValue) - parseFloat(secondValue);
      break;
    case "*":
      result = parseFloat(firstValue) * parseFloat(secondValue);
      break;
    case "/":
      if (secondValue === "0") {
        display.textContent = "Error: Cannot divide by 0";
        return;
      }
      result = parseFloat(firstValue) / parseFloat(secondValue);
      break;
    }
    display.textContent = result;
  }

  if (e.target.classList.contains("clear")) {
    firstValue = "";
    operatorValue = "";
    secondValue = "";
    result = "";
    if(activeOperator) activeOperator.classList.remove("active");
    display.textContent = "";
  }
});
