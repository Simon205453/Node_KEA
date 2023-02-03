// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result3 = +numberOne + +numberTwo;
console.log(result3)

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result4 = Number(anotherNumberOne) + Number(anotherNumberTwo)
console.log(result4.toFixed(2))


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;


// Show in the console the avg. with 5 decimals


const result5 = (one + two + three) / 3
console.log(result5.toFixed(5))


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const lastletter = letters.charAt(2)
console.log(lastletter)


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const sliceFact = fact.slice(0, 17) + fact.charAt(17).toUpperCase() + fact.slice(18)
const replaceFact = fact.replace("j", "J")
console.log(replaceFact)


// --------------------------------------
