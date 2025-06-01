// Calculator - Mathematical calculation to be performed
// Using button onclicks method and taking user input from HTML textboxes.

/*
 # Calculate function receives three paramters - firstnumber, second number and operator.
 # On basis of the operator (mathematical), the result is calcuated on the operands (2 params)
 # And, the calcualated or final result is return to the function which has called this current function.
 # This function resposbility is to perform mathematical calculation.
*/
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

// Declare a variable to store final output that would be displayed to the user on UI
let operationResult;

/* 
 # acceptInputFromUser() function takes a operator as an input because it is called from
 # four different onclicks that differ in the argument that they pass and operation they do
 # This function body accepts two inputs from 2 textboxes for calculating & performing mathematical operation
 # It converts the input from user into a number and invokes calculate function.
 # Again, each function should have single responsibility and so separate calculate function is invoked
 # With two parameters & type of operator passed as an argument
 # Which will return the calculated or mathematical operation result.
 # It will display the output to UI similar to as it received inputs from UI.
*/
const acceptInputFromUser = (typeOfOperator) => {
  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);
  operationResult = calculate(firstNumber, secondNumber, typeOfOperator);
  document.getElementById(
    "calculatedResult"
  ).textContent = `RESULT:${operationResult}`;
};

/* 
 # Four onclick methods to be called on four different buttons
 # These four buttons are doing different operations on each 
 # of their respective clicks.
 # The operation they are performing are different but some common functionality
 # is same across all the four buttons.
 # There common functionality is wrapped up into acceptInputFromUser method - DRY CODE.
*/
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
