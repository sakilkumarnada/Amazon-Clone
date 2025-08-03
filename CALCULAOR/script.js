const inputValue = document.getElementById("user-input");

// Clear display
const clearDisplay = () => (inputValue.innerText = "0");

// Delete last character
const deleteLast = () => {
  inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
};

// Add number or operator to display
const appendToDisplay = (value) => {
  if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
    inputValue.innerText = value;
  } else {
    inputValue.innerText += value;
  }
};

// Evaluate the expression safely
const evaluateExpression = () => {
  try {
    inputValue.innerText = eval(inputValue.innerText.replace("%", "/100"));
  } catch {
    inputValue.innerText = "NaN";
  }
};

// Add event listeners to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "AC") {
      clearDisplay();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === "=") {
      evaluateExpression();
    } else {
      appendToDisplay(value);
    }
  });
});
