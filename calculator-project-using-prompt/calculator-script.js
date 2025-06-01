// Calculator Project
// Using JavaSctipt Prompt Method

/*
 # This function checks if valid numbers is input or not as strings
 # from JavaScript prompt() method. If its valid, return the converted 
 # values from string to number. 
*/
const convertAndCheckIfValidNumber = (firstUserInput, secondUserInput) => {
  const firstNumber = Number(firstUserInput);
  const secondNumber = Number(secondUserInput);

  if (typeof firstNumber === "number" && typeof secondNumber === "number")
    return [firstNumber, secondNumber];
};

/*
  # Calculate function - based on the operator, it calculates the operation
  # on both the operands and return value to the function that has called this function
*/
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

/*
 # This function acceptUserInput() takes two user inputs from from JS prompt method
 # And, takes a mathematica operator as an input from user.
 # It checks for the valid operator is entered or not and if successful
 # It checks if valid number is input as a string or not.
 # If its a valid number on converting value from string to number via a convertAndCheckValidNumber() function
 # We calculate the final value and store it in a variable declared via a calculate() function
 # To display it in output.
*/
const acceptUserInput = () => {
  // Declare variable to store final mathematical calculation value to display to UI.
  let operationResult;

  // User Input - (numbers and  operator)
  const firstNumberUserInput = prompt(`Enter first number to operate!`);
  const secondNumberUserInput = prompt(`Enter second number to operate!`);
  const operator = prompt(
    `Enter the desired operator to calculate. Please, enter one of the following else current process will terminate to restart again. (Operator: +,-,*,/)`
  );

  // Check if valid operator input or not.
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    // Check if valid numbers are input or not.
    // If valid, successful converted values are store in and returned from function doing that
    // The calculate mathematical operation is done via function call.
    const [firstNumberToCalculate, secondNumberToCalculate] =
      convertAndCheckIfValidNumber(firstNumberUserInput, secondNumberUserInput);

    // Calculate function
    operationResult = calculate(
      firstNumberToCalculate,
      secondNumberToCalculate,
      operator
    );

    // Display it to the UI
    document.getElementById(
      "calculated-result"
    ).textContent = `RESULT: ${operationResult}`;
  }
};

/*
  # This function acceptUserInput() is the only function that directly is invoked or called
  # when the script is run from index.html file.
*/
acceptUserInput();
