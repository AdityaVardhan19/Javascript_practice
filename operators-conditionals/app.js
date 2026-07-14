console.log("------ Arithmetic Operators ------");

let a = 20;
let b = 10;

console.log("Addition : " + (a + b));

console.log("Subtraction : " + (a - b));

console.log("Multiplication : " + (a * b));

console.log("Division : " + (a / b));

console.log("Modulus : " + (a % b));

console.log("Exponent : " + (a ** 2));



console.log("------ Assignment Operators ------");

let num = 10;

console.log("Initial Value : " + num);

num += 5;
console.log("After += 5 : " + num);

num -= 3;
console.log("After -= 3 : " + num);

num *= 2;
console.log("After *= 2 : " + num);

num /= 4;
console.log("After /= 4 : " + num);

num %= 3;
console.log("After %= 3 : " + num);



console.log("------ Comparison Operators ------");

let x = 15;
let y = 10;

console.log("x > y : " + (x > y));

console.log("x < y : " + (x < y));

console.log("x >= y : " + (x >= y));

console.log("x <= y : " + (x <= y));

console.log("x == y : " + (x == y));

console.log("x != y : " + (x != y));

console.log("x === y : " + (x === y));



console.log("------ Logical Operators ------");

let marks = 85;

console.log("AND (&&) : " + (marks >= 80 && marks <= 100));

let age = 65;

console.log("OR (||) : " + (age < 18 || age >= 60));

let isLoggedIn = false;

console.log("NOT (!) : " + (!isLoggedIn));



console.log("------ Increment & Decrement Operators ------");

let count = 5;

console.log("Initial Value : " + count);

count++;

console.log("After Increment : " + count);

count--;

console.log("After Decrement : " + count);



console.log("------ Ternary Operator ------");

let studentMarks = 80;

let result = studentMarks >= 35 ? "Pass" : "Fail";

console.log("Result : " + result);



console.log("------ Typeof Operator ------");

let studentName = "Aditya Vardhan";

let studentAge = 22;

let isPlaced = false;

console.log("studentName : " + typeof studentName);

console.log("studentAge : " + typeof studentAge);

console.log("isPlaced : " + typeof isPlaced);



console.log("------ Grade Calculator ------");

let gradeMarks = 88;

if (gradeMarks >= 90) {

    console.log("Grade A");

}

else if (gradeMarks >= 80) {

    console.log("Grade B");

}

else if (gradeMarks >= 70) {

    console.log("Grade C");

}

else if (gradeMarks >= 60) {

    console.log("Grade D");

}

else {

    console.log("Fail");

}



console.log("------ Voting Eligibility ------");

let voterAge = 20;

if (voterAge >= 18) {

    console.log("Eligible to Vote");

}

else {

    console.log("Not Eligible to Vote");

}



console.log("------ ATM Balance Checker ------");

let balance = 5000;

let withdrawAmount = 2000;

if (withdrawAmount <= balance) {

    balance = balance - withdrawAmount;

    console.log("Withdrawal Successful");

    console.log("Remaining Balance : " + balance);

}

else {

    console.log("Insufficient Balance");

}