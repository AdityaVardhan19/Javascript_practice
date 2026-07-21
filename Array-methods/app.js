console.clear();



console.log("========== MAP() ==========");

let prices = [100, 200, 300];

console.log("Original");

console.log(prices);

let finalPrices = prices.map(function(price){

    return price * 1.18;

});

console.log("After GST");

console.log(finalPrices);




console.log("\n========== MAP() PRODUCT NAMES ==========");

let products = [

    {

        name : "Laptop",

        price : 50000

    },

    {

        name : "Phone",

        price : 20000

    },

    {

        name : "Watch",

        price : 5000

    }

];

let names = products.map(function(product){

    return product.name;

});

console.log(names);




console.log("\n========== FILTER() ==========");

let marks = [30,45,80,90,20];

console.log("Original");

console.log(marks);

let passed = marks.filter(function(mark){

    return mark >= 35;

});

console.log("Passed");

console.log(passed);




console.log("\n========== FILTER() PRODUCTS ==========");

let items = [

    {

        name : "Laptop",

        stock : true

    },

    {

        name : "Phone",

        stock : false

    },

    {

        name : "Watch",

        stock : true

    }

];

let available = items.filter(function(item){

    return item.stock;

});

console.log(available);




console.log("\n========== REDUCE() ==========");

let numbers = [100,200,300];

console.log(numbers);

let total = numbers.reduce(function(sum, number){

    return sum + number;

},0);

console.log("Total");

console.log(total);




console.log("\n========== SHOPPING CART ==========");

let cart = [

    {

        name : "Laptop",

        price : 500

    },

    {

        name : "Keyboard",

        price : 800

    },

    {

        name : "Mouse",

        price : 200

    }

];

let bill = cart.reduce(function(sum,item){

    return sum + item.price;

},0);

console.log("Final Bill");

console.log(bill);




console.log("\n========== PRACTICE TASKS ==========");



console.log("\nTask 1 : GST");

let gst = [1000,2000,3000];

let result = gst.map(function(price){

    return price * 1.18;

});

console.log(result);



console.log("\nTask 2 : Passed Students");

let scores = [25,60,90,15,80];

let pass = scores.filter(function(score){

    return score >= 35;

});

console.log(pass);



console.log("\nTask 3 : Cart Total");

let cartPrice = [500,800,1000,200];

let totalBill = cartPrice.reduce(function(sum,item){

    return sum + item;

},0);

console.log(totalBill);



console.log("\nTask 4 : Product Names");

let mobiles = [

    {

        name : "Samsung"

    },

    {

        name : "Apple"

    },

    {

        name : "OnePlus"

    }

];

let mobileNames = mobiles.map(function(item){

    return item.name;

});

console.log(mobileNames);