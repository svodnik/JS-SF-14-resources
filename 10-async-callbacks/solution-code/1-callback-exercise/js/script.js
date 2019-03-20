////////////////////////////
// Callback Functions Lab //
////////////////////////////

//  * STEP 1
//    Create variables to reference the DOM elements with the following ID values:
//    - num1
//    - num2
//    - add
//    - subtract
//    - result

const num1input = document.querySelector('#num1');
const num2input = document.querySelector('#num2');

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');

const resultDiv = document.querySelector("#result");

//  * STEP 2
//    Create a function called 'add' that accepts 2 values as parameters and
//    returns the result of adding them. (Use a return statement.)

function add(num1, num2) {
  return num1 + num2;
}

//  * STEP 3
//    Create a function called 'showAnswer' that accepts a value as a parameter 
//    and sets that value as the text content of the div with the id value
//    'result'.

function showAnswer(answer) {
  resultDiv.textContent = answer;
}

//  * STEP 4
//    Create a function called 'calcResult' that accepts the name of a callback 
//    function as a parameter, and does the following:
//    - creates a variable called 'answer' whose value is the result of calling
//      the callback function and passing it the values in the two input boxes
//      as arguments
//    - calls the showAnswer function, passing it the 'answer' variable.

function calcResult(mathFunction) {
  let answer = mathFunction(Number(num1input.value), Number(num2input.value));
  showAnswer(answer);
}

//  * STEP 5
//    Create an event listener for the click even on the Add button, calling
//    the calcResult() function and passing the 'add' function as the argument.
//    Save your work, then test in the browser by entering a number in each
//    input box and clicking the Add button.

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  calcResult(add);
});

//  * STEP 6
//    Create a function called 'subtract' that accepts 2 values as parameters
//    and returns the result of adding them. (Use a return statement.)

function subtract(num1, num2) {
  return num1 - num2;
}

//  * STEP 7
//    Create an event listener for the click even on the Subtract button, 
//    calling the calcResult() function and passing the 'subtract' function as 
//    the argument. Save your work, then test in the browser by entering a
//    number in each input box and clicking the Subtract button.

subtractBtn.addEventListener('click', function (event) {
  event.preventDefault();
  calcResult(subtract);
});


///////////
// BONUS //
///////////

// Create a variable that references the element with the id value 'operator'.

// Update the showAnswer function to change the content of the element with the
// id value 'operator' to a plus symbol after the user clicks the Add button,
// or to a minus symbol after the user clicks the Subtract button.


// const operator = document.querySelector("#operator");

// function showAnswer(answer, mathFunction) {
//   if (mathFunction === add) {
//     operator.textContent = '+';
//   } else if (mathFunction === subtract) {
//     operator.textContent = '-';
//   }
//   resultDiv.textContent = answer;
// }

// function calcResult(mathFunction) {
//   let answer = mathFunction(Number(num1input.value), Number(num2input.value));
//   showAnswer(answer, mathFunction);
// }
