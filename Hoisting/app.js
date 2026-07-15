console.clear();

console.log("========== VARIABLE HOISTING (var) ==========");

console.log(a);

var a = 10;

console.log(a);



console.log("\n========== TEMPORAL DEAD ZONE (let) ==========");

try {

    console.log(b);

}

catch (error) {

    console.log(error.message);

}

let b = 20;

console.log(b);



console.log("\n========== FUNCTION DECLARATION ==========");

show();

function show() {

    console.log("Hello JavaScript");

}



console.log("\n========== FUNCTION EXPRESSION ==========");

try {

    display();

}

catch (error) {

    console.log(error.message);

}

var display = function () {

    console.log("Hello");

}

display();



console.log("\n========== MEMORY CREATION PHASE ==========");

console.log("var  -> undefined");

console.log("let  -> TDZ");

console.log("const -> TDZ");

console.log("Function Declaration -> Hoisted");

console.log("Function Expression -> Variable Hoisted");



console.log("\n========== EXECUTION PHASE ==========");

var language = "JavaScript";

console.log(language);



console.log("\n========== EXERCISE 1 ==========");

console.log(x);

var x = 50;



console.log("\n========== EXERCISE 2 ==========");

try {

    console.log(y);

}

catch (error) {

    console.log(error.message);

}

let y = 100;



console.log("\n========== EXERCISE 3 ==========");

course();

function course() {

    console.log("Full Stack Development");

}



console.log("\n========== HOMEWORK EXERCISE 4 ==========");

try {

    trainer();

}

catch (error) {

    console.log(error.message);

}

var trainer = function () {

    console.log("Massive Mission");

}

trainer();



console.log("\n========== FINAL OUTPUT ==========");

console.log("✔ Variable Hoisting");

console.log("✔ Temporal Dead Zone");

console.log("✔ Function Declaration Hoisting");

console.log("✔ Function Expression Hoisting");

console.log("✔ Memory Creation Phase");

console.log("✔ Execution Phase");