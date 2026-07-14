console.clear();

console.log("========== FUNCTION DECLARATION ==========");

function welcome() {

    console.log("Welcome to JavaScript Functions");

}

welcome();



console.log("\n========== FUNCTION WITH PARAMETERS ==========");

function greet(name) {

    console.log("Hello " + name);

}

greet("Aditya Vardhan");



console.log("\n========== MULTIPLE PARAMETERS ==========");

function student(name, age) {

    console.log("Name : " + name);

    console.log("Age  : " + age);

}

student("Aditya Vardhan", 22);



console.log("\n========== RETURN KEYWORD ==========");

function add(a, b) {

    return a + b;

}

let sum = add(20, 10);

console.log("Addition : " + sum);



console.log("\n========== ARROW FUNCTION ==========");

const square = (number) => {

    return number * number;

}

console.log("Square of 5 : " + square(5));



console.log("\n========== GLOBAL SCOPE ==========");

let company = "Mphasis";

function showCompany() {

    console.log("Company : " + company);

}

showCompany();



console.log("\n========== LOCAL SCOPE ==========");

function employee() {

    let employeeName = "Aditya";

    console.log("Employee : " + employeeName);

}

employee();



console.log("\n========== BLOCK SCOPE ==========");

{

    let course = "JavaScript";

    const trainer = "Massive Mission";

    console.log("Course  : " + course);

    console.log("Trainer : " + trainer);

}



console.log("\n========== MINI TASK : CALCULATOR ==========");

function addition(a, b) {

    return a + b;

}

function subtraction(a, b) {

    return a - b;

}

function multiplication(a, b) {

    return a * b;

}

function division(a, b) {

    return a / b;

}

console.log("Addition       : " + addition(25, 5));

console.log("Subtraction    : " + subtraction(25, 5));

console.log("Multiplication : " + multiplication(25, 5));

console.log("Division       : " + division(25, 5));



console.log("\n==========BMI CALCULATOR ==========");

function calculateBMI(weight, height) {

    return weight / (height * height);

}

let weight = 70;

let height = 1.75;

let bmi = calculateBMI(weight, height);

console.log("Weight : " + weight + " kg");

console.log("Height : " + height + " m");

console.log("BMI    : " + bmi.toFixed(2));