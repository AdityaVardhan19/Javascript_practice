console.clear();



console.log("========== CREATE ARRAY ==========");

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits);



console.log("\n========== ACCESS ELEMENTS ==========");

console.log(fruits[0]);

console.log(fruits[2]);



console.log("\n========== ARRAY INDEX ==========");

console.log("Index 0 : " + fruits[0]);

console.log("Index 1 : " + fruits[1]);

console.log("Index 2 : " + fruits[2]);



console.log("\n========== ARRAY LENGTH ==========");

console.log(fruits.length);



console.log("\n========== PUSH ==========");

fruits.push("Banana");

console.log(fruits);



console.log("\n========== POP ==========");

fruits.pop();

console.log(fruits);



console.log("\n========== UNSHIFT ==========");

fruits.unshift("Grapes");

console.log(fruits);



console.log("\n========== SHIFT ==========");

fruits.shift();

console.log(fruits);



console.log("\n========== SPLICE ==========");

let colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors);

console.log("\nRemove Element");

colors.splice(1, 1);

console.log(colors);

console.log("\nAdd Element");

colors.splice(1, 0, "Purple");

console.log(colors);

console.log("\nReplace Element");

colors.splice(2, 1, "Black");

console.log(colors);



console.log("\n========== SLICE ==========");

let numbers = [10, 20, 30, 40, 50];

let newNumbers = numbers.slice(1, 4);

console.log("Original Array");

console.log(numbers);

console.log("Copied Array");

console.log(newNumbers);



console.log("\n========== SPLICE vs SLICE ==========");

let languages = ["HTML", "CSS", "JavaScript", "React"];

console.log("Original Array");

console.log(languages);

console.log("\nUsing splice()");

languages.splice(1, 1);

console.log(languages);

let frameworks = ["HTML", "CSS", "JavaScript", "React"];

console.log("\nUsing slice()");

let copied = frameworks.slice(1, 3);

console.log(frameworks);

console.log(copied);



console.log("\n========== MINI PROJECT 1 : STUDENT MARKS ==========");

let marks = [85, 90, 78, 95];

console.log("Initial Marks");

console.log(marks);

marks.push(88);

console.log("After Adding Marks");

console.log(marks);

marks.pop();

console.log("After Removing Last Marks");

console.log(marks);

console.log("Total Subjects : " + marks.length);



console.log("\n========== MINI PROJECT 2 : SHOPPING CART ==========");

let cart = ["Mobile", "Laptop"];

console.log("Initial Cart");

console.log(cart);

cart.push("Headphones");

console.log("After push()");

console.log(cart);

cart.unshift("Smart Watch");

console.log("After unshift()");

console.log(cart);

cart.pop();

console.log("After pop()");

console.log(cart);

cart.shift();

console.log("After shift()");

console.log(cart);



console.log("\n========== PRACTICE ==========");

let shoppingCart = [];

console.log("Empty Cart");

console.log(shoppingCart);



shoppingCart.push("Laptop");

shoppingCart.push("Mouse");

shoppingCart.push("Keyboard");

shoppingCart.push("Monitor");

shoppingCart.push("Headphones");

console.log("\nAfter push()");

console.log(shoppingCart);



shoppingCart.pop();

shoppingCart.pop();

console.log("\nAfter pop()");

console.log(shoppingCart);



shoppingCart.unshift("Mobile");

console.log("\nAfter unshift()");

console.log(shoppingCart);



shoppingCart.shift();

console.log("\nAfter shift()");

console.log(shoppingCart);



shoppingCart.splice(1, 0, "Smart Watch");

console.log("\nAfter splice()");

console.log(shoppingCart);



let finalCart = shoppingCart.slice(1, 3);

console.log("\nAfter slice()");

console.log(finalCart);



console.log("\nFinal Shopping Cart");

console.log(shoppingCart);