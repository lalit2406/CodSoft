const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      input += value;
      display.value = input;
    }
  });
});

clearButton.addEventListener("click", () => {
  input = "";
  display.value = "";
});

equalsButton.addEventListener("click", () => {
  try {
    // Use eval() safely for basic arithmetic
    const result = eval(input);
    display.value = result;
    input = result.toString();
  } catch (error) {
    display.value = "Error";
    input = "";
  }
});
