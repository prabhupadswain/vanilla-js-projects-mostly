// Calculator - invoke button onclicks

function calculate(number1, number2, typeOfOperation) {
  let result;
  switch (typeOfOperation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 >= number2 ? number1 - number2 : number2 - number1;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }
  return result;
}

let operationResult;

const acceptInputFromUser = (typeOfOperator) => {
  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);
  operationResult = calculate(firstNumber, secondNumber, typeOfOperator);
  document.getElementById(
    "calculatedResult"
  ).textContent = `RESULT:${operationResult}`;
};

document.getElementById("add").onclick = function () {
  acceptInputFromUser("+");
};

document.getElementById("minus").onclick = function () {
  acceptInputFromUser("-");
};

document.getElementById("multiply").onclick = function () {
  acceptInputFromUser("*");
};

document.getElementById("divide").onclick = function () {
  acceptInputFromUser("/");
};
