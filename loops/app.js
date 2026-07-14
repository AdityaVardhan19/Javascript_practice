
console.log("------ For Loop ------");

for (let i = 1; i <= 5; i++) {

    console.log(i);

}


console.log("------ While Loop ------");

let i = 1;

while (i <= 5) {

    console.log(i);

    i++;

}



console.log("------ Do While Loop ------");

let j = 1;

do {

    console.log(j);

    j++;

} while (j <= 5);



console.log("------ Break Statement ------");

for (let i = 1; i <= 10; i++) {

    if (i == 6) {

        break;

    }

    console.log(i);

}



console.log("------ Continue Statement ------");

for (let i = 1; i <= 10; i++) {

    if (i == 6) {

        continue;

    }

    console.log(i);

}



console.log("------ Nested Loops ------");

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(`i = ${i}, j = ${j}`);

    }

}



console.log("------ Number Pattern ------");

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern += j;

    }

    console.log(pattern);

}



console.log("------ Star Pattern ------");

for (let i = 1; i <= 5; i++) {

    console.log("*".repeat(i));

}



console.log("------ Reverse Star Pattern ------");

for (let i = 5; i >= 1; i--) {

    console.log("*".repeat(i));

}



console.log("------ Multiplication Table ------");

let number = 7;

for (let i = 1; i <= 10; i++) {

    console.log(`${number} x ${i} = ${number * i}`);

}



console.log("------ Even Numbers ------");

for (let i = 2; i <= 50; i += 2) {

    console.log(i);

}