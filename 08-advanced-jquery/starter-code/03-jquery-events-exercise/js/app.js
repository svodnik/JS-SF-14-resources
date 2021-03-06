/*

Rewrite the following code to use jQuery instead of vanilla JS.

Clicking each button should hide the block below it with the corresponding color.

*/

// STEP 1
// After the variable declarations below, write statements setting the value of each variable to reference one of the three buttons at the top of the page.
// (HINT: The buttons are p elements with the id values r, b, and y.)

let redBtn;
let blueBtn;
let yellowBtn;

redBtn = document.querySelector('#r');
blueBtn = document.querySelector('#b');
yellowBtn = document.querySelector('#y');

// STEP 2
// After the variable declarations below, write statements setting the value of each variable to reference one of the three blocks in the middle of the page.
// (HINT: The blocks are div elements with the class values red, blue, and yellow.)

let redBlock;
let blueBlock;
let yellowBlock;

redBlock = document.querySelector('.red');
blueBlock = document.querySelector('.blue');
yellowBlock = document.querySelector('.yellow');

// STEP 3
// Write a statement to add an event listener to the redBtn element. In response to the click event, it should add the class name 'hidden' to the redBlock element.

redBtn.addEventListener('click', function () {
  redBlock.className = 'hidden';
});

// STEP 4
// Write a statement to add an event listener to the blueBtn element. In response to the click event, it should add the class name 'hidden' to the blueBlock element.

blueBtn.addEventListener('click', function () {
  blueBlock.className = 'hidden';
});

// STEP 5
// Write a statement to add an event listener to the yellowBtn element. In response to the click event, it should add the class name 'hidden' to the yellowBlock element.

yellowBtn.addEventListener('click', function () {
  yellowBlock.className = 'hidden';
});

// STEP 6
// Save your changes, open index.html in your browser, and test each of the buttons.


// BONUS
// Add an event listener for the "Show all blocks" button that removes the hidden class from all the colored block elements.

let showAll = document.querySelector('#show');
showAll.addEventListener('click', function () {
  redBlock.className = 'red';
  blueBlock.className = 'blue';
  yellowBlock.className = 'yellow';
});