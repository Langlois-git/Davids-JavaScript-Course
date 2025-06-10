/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');
console.log(10 + 10 + 10);
console.log('David');
console.log(24);
let firstName = 'David';
console.log(firstName); 
console.log(firstName); 
console.log(firstName); 
*/

/* Variable naming conventions
Camel Case: The first letter of the first word is lowercase, 
and the first letter of each subsequent word is uppercase.
Example: myVariableName
Snake Case: All letters are lowercase, and words are separated by underscores.

Variables cannot start with a number
Variables cannot contain spaces or special characters (except for underscores and dollar signs).
Variables should be descriptive and meaningful, indicating their purpose or content.
The error "Uncaught SyntaxError: Unexpected token" usually occurs when there is a syntax error in the code, 
such as a missing or misplaced character, or an incorrect use of a keyword.
Variables should not use reserved keywords (e.g., let, const, var, function, etc.) as names.
The variable 'name' is not defined because it has not been declared or assigned a value before being used.
Varibles in uppercase are usually used for constants or values that should not change. such as pi
*/
// myFirstJob = 'Power Engineer'
// mySecondJob = 'Programmer'

/* In Javascript every is either an object, which is a collection of key-value pairs, 
or a primitive value, which is a single value.

There are 7 primitive data types in JavaScript:
1. Number: Represents numeric values, both integers and floating-point numbers.
2. String: Represents a sequence of characters, enclosed in single or double quotes.
3. Boolean: Represents a logical value, either true or false.
4. Undefined: Represents a variable that has been declared but has not been assigned a value.
5. Null: Represents the intentional absence of any object value.
6. Symbol: Represents a unique and immutable value, often used as object property keys.
7. BigInt: Represents integers with arbitrary precision, allowing for very
large numbers beyond the range of the Number type.
*/
/*

true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Javascript is evaluated from top to bottom, so if you try to use a variable before it is declared, you will get an error.

console.log(typeof javascriptIsFun);
console.log(typeof 17);
console.log(typeof 'David');
console.log(typeof true);

// Javascript is a dynamically typed language, meaning that variables can change their type during runtime.

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);

// When you decare an empty variable, it is automatically assigned the value of undefined.

year = 2025;
console.log(typeof year);

console.log(typeof null); // null is an object, but it is a primitive value
// This is a known bug in JavaScript, and it is not going to be fixed.



// 
// let, const and var
// let is used to declare variables that can be reassigned later.

let age = 23;
age = 24; // This is allowed with let, this is called mutating a variable

// const is used to declare variables that cannot be reassigned later.
const birthYear = 2001
// birthYear = 2000; // This will throw an error Assignmennt to constant, because const variables cannot be reassigned
// Variables that cannot be reassigned are immutable, meaning that their value cannot change after they are declared.
// You should always use const when you know that the value of the variable will not change,
// and use let when you know that the value of the variable will change.

var job = 'programmer'; // var is used to declare variables that can be reassigned later, 
// but it is not recommended to use var anymore.

// We do not actually need to declare variables in JavaScript, but it is a good practice to do so.
lastName = 'langlois'; // This is allowed, but it is not recommended to use undeclared variables.
console.log(lastName); // This will print the value of lastName, which is 'langlois'
// This is called a global variable, meaning that it can be accessed from anywhere in the code.
// Global variables are not recommended, because they can cause conflicts with other variables in the code.
*/
/*
const now = 2025;
const ageDavid = 2025 - 2001;
const ageEmily = 2025 - 2018; 
console.log(ageDavid);
console.log(ageDavid, ageEmily);
console.log(ageDavid * 2, ageEmily / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'David';
const lastname = 'langlois';
console.log(firstName + ' ' + lastName); // This is called string concatenation,
// meaning that we are joining two strings together

// Assignment operators
let X = 24 - 18; // ' = ' is the assignment operator, meaning that we are assigning the value of
//  24 - 18 to the variable X
x += 10; // ads 10 to the value of x, so x = x + 10
x *= 10; // multiplies the value of x by 10, so x = x * 10
x++; // adds 1 to the value of x, so x = x + 1
x--; // subtracts 1 from the value of x, so x = x - 1

// Comparison operators
console.log(ageDavid > ageEmily); // Is ageDavid greater than ageEmily? (True or False)
// >, <, >=, <= are comparilson operators
console.log(ageEmily >= 18); // Is ageEmily greater than or equal to 18? (True or False)
const isFullAge = ageEmily >= 18; // This is a boolean variable, meaning that it can only be true or false
console.log(now - 2001 > now - 2018); // Is David's age greater than Emily's age? (True or False)
*/
// ===============================OPERTAOR PRECEDENCE========================
/*██╗     ███████╗ ██████╗████████╗██╗   ██╗██████╗ ███████╗                
██║     ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗██╔════╝                
██║     █████╗  ██║        ██║   ██║   ██║██████╔╝█████╗                  
██║     ██╔══╝  ██║        ██║   ██║   ██║██╔══██╗██╔══╝                  
███████╗███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║███████╗                
╚══════╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝                
                                                                          
 ██╗██╗  ██╗                                                              
███║██║  ██║                                                              
╚██║███████║                                                              
 ██║╚════██║                                                              
 ██║     ██║▄█╗                                                           
 ╚═╝     ╚═╝╚═╝                                                           
                                                                          
 ██████╗ ██████╗ ███████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗        
██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗       
██║   ██║██████╔╝█████╗  ██████╔╝███████║   ██║   ██║   ██║██████╔╝       
██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗       
╚██████╔╝██║     ███████╗██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║       
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝       
                                                                          
██████╗ ██████╗ ███████╗ ██████╗███████╗██████╗ ███████╗███╗   ██╗ ██████╗
██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝████╗  ██║██╔════╝
██████╔╝██████╔╝█████╗  ██║     █████╗  ██║  ██║█████╗  ██╔██╗ ██║██║     
██╔═══╝ ██╔══██╗██╔══╝  ██║     ██╔══╝  ██║  ██║██╔══╝  ██║╚██╗██║██║     
██║     ██║  ██║███████╗╚██████╗███████╗██████╔╝███████╗██║ ╚████║╚██████╗
╚═╝     ╚═╝  ╚═╝╚══════╝ ╚═════╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝
                                                                          
███████╗                                                                  
██╔════╝                                                                  
█████╗                                                                    
██╔══╝                                                                    
███████╗                                                                  
╚══════╝ 
*/                                                                 
const now = 2025;
const ageDavid = 2025 - 2001;
const ageEmily = 2025 - 2018; 

console.log(now - 2001 > now - 2018); // Is David's age greater than Emily's age? (True or False)

// Operator precedence determines the order in which operators are evaluated in an expression.
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

let x,y = 25-10-5;

/* Coding Challenge #1 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.8*/

const massMark1 = 78;
const heightMark1 = 1.69;

const massMark2 = 95;
const heightMark2 = 1.88;

const massJohn1 = 92;
const heightJohn1 = 1.95;

const massJohn2 = 85;
const heightJohn2 = 1.76;

bodyMassIndex = mass / height ** 2 // Mass in kg, height in meters

markHigherBMI = massMark > massJohn
