alert('Hello, my name is Maria');

let message;
// Saving a string in the 'message' variable
message = 'I am 25 years old';
// Shows the contents of the variable
alert(message);

const userName = prompt('What is your name?');
console.log('Hello, nice to see you,', userName);
alert(`Hello, ${userName}`);

// Age
confirm('Are you > 18 years of age?');
let age = +prompt('How old are you?', 28);
alert(`You are ${age} years!`);
console.log('Great, you age:', age);

// Calculation of age relative to the year of birth 
const YEAR = 2024;
const birthYear = +prompt('When were you born?');
console.log('You really are:', YEAR - birthYear);

// Perimeter square
const squareSide = +prompt('Enter the length of the side of the square:');
const perimeter = squareSide * 4;
alert(`Look, I did the math. The perimeter of the square is equal: ${perimeter}`);
console.log('The perimeter of the square is equal to:', perimeter);

// Circle radius
const radius = +prompt('Set the radius of the circle');
const pi = Math.PI;
const circleArea = pi * radius * radius;
console.log('Іs the area of a circle with a radius:', radius, 'is equal to', circleArea);

// currency converter
// 1 USD = 0.9014 EUR
const usd = +prompt('number of dollars:');
let difference  = 0.9014;
const eur = usd * difference;
console.log('From', usd, 'you will receive', eur, 'euros');