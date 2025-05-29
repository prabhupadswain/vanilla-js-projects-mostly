// Calculator Project
// Using JavaSctipt Prompt Method

const convertAndCheckIfValidNumber = (firstUserInput, secondUserInput) => {
  const firstNumber = Number(firstUserInput);
  const secondNumber = Number(secondUserInput);

  if (typeof firstNumber === "number" && typeof secondNumber === "number")
    return [firstNumber, secondNumber];
};

const calculate = (firstNumber, secondNumber, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }
  return result;
};

const acceptUserInput = () => {
  let operationResult;

  const firstNumberUserInput = prompt(`Enter first number to operate!`);
  const secondNumberUserInput = prompt(`Enter second number to operate!`);
  const operator = prompt(
    `Enter the desired operator to calculate. Please, enter one of the following else current process will terminate to restart again. (Operator: +,-,*,/)`
  );

  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    const [firstNumberToCalculate, secondNumberToCalculate] =
      convertAndCheckIfValidNumber(firstNumberUserInput, secondNumberUserInput);
    operationResult = calculate(
      firstNumberToCalculate,
      secondNumberToCalculate,
      operator
    );

    document.getElementById(
      "calculated-result"
    ).textContent = `RESULT: ${operationResult}`;
  }
};

acceptUserInput();
