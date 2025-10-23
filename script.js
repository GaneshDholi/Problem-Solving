let prompt = require('prompt-sync')();

let n = parseInt(prompt('Enter a number: '));

// Q1.   1
//      2 2
//     3 3 3
//    4 4 4 4
// Number Triangular

for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n - 1; j++) {
        process.stdout.write(" ");
    }
    for (let j = i; j <= 2 * i - 1; j++) {
        process.stdout.write(i + " ");
    }
    console.log("")
}
console.log("")
console.log("")
console.log("")

// Q2.   1
//       1 2
//       1 2 3
//       1 2 3 4
//  Number Increasing Pyramid

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    } console.log("");
}

console.log("")
console.log("")
console.log("")


// Q3.   1 2 3 4
//       1 2 3
//       1 2 
//       1
//  Number Increasing Reverse Pyramid

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(j + " ");
    } console.log("");
}

console.log("")
console.log("")
console.log("")



// Q4.   1 
//       0 1
//       1 0 1 
//       0 1 0 1
//  Zero-One Triangle

for (let i = 1; i <= n; i++) {
    for (let j = i; j <= 2 * i - 1; j++) {
        if (j % 2 == 0) {
            process.stdout.write("0 ");
        } else {
            process.stdout.write("1 ");
        }

    } console.log("");
}

console.log("")
console.log("")
console.log("")




// Q5.   * * * *
//        * * * *
//         * * * *
//          * * * *
//  Rhombus pattern



for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log("");
}

console.log("")
console.log("")
console.log("")




// Q6.      * * * *
//          * * * *
//          * * * *
//          * * * *
//  Square Fill Pattern


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    } console.log("");
}

console.log("")
// console.log("")
// console.log("")




// Q7.      * 
//          * *
//          * * *
//          * * * *
//  Right Half Pyramid


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    } console.log("");
}

console.log("")
// console.log("")
// console.log("")




// Q8.      * * * * 
//          * * *
//          * * 
//          * 
//  Reverse Right Half Pyramid


for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
        process.stdout.write("* ");
    } console.log("");
}

console.log("")
console.log("")
console.log("")




// Q8.          * 
//            * *
//          * * *
//        * * * * 
//  left Half Pyramid


// for (let i = 1; i <= n; i++){
//     for (let j = i; j <= n; j++){
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j >= i; j--){
//         process.stdout.write("* ");
//     }console.log("");
// }


// console.log("")
// console.log("")
// console.log("")



// Q9. Max element of an array

let arr = [20, 10, 25, 90, 90, 27];
let biggest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
        biggest = arr[i];
    }
}

console.log(biggest)


console.log("")
console.log("")
console.log("")



// Q10. SecondMax element of an array

let max = Math.max(arr[0], arr[1]);
let secmax = Math.min(arr[0], arr[1]);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secmax = max;
        max = arr[i];
    } else if (secmax < arr[i] && arr[i] != max) {
        secmax = arr[i];
    }
}

console.log(secmax)

console.log("")
console.log("")
console.log("")


// Q11. reverse of an a array


let rev = new Array(arr.length);
let i = 0

for (let j = arr.length-1; j >= 0; j--) {
    rev[i] = arr[j];
    i++;
}

console.log(rev)


console.log("")
console.log("")
console.log("")



// Q12. all zero left side and all one right side an a array

let array = [1,1,0,0,1,1,0,0];
let j = 0;

for (let i = 0; i < array.length; i++){
    if (array[i] == 0){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
        j++;
    }
}

console.log(array)


console.log("")
console.log("")
console.log("")


