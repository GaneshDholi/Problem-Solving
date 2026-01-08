//Q1. Movie Rating 
// console.log("enter rating of movie");
// process.stdin.on("data", data => {
//     const rating = parseInt(data.toString().trim());
//     if (rating >= 1 && rating <= 10) {
//         console.log("Valid Rating");
//         if (rating >= 8) {
//             console.log("Excellent Movie");
//         } else if (rating >= 5) {
//             console.log("Average Movie");
//         } else {
//             console.log("Poor Movie");
//         }
//     } else {
//         console.log("Invalid Rating");
//     }
//     process.exit();
// });


// Q2. Age Category
// console.log("enter age");
// process.stdin.on("data", data => {
//     const Age = parseInt(data.toString().trim());
//     if (Age < 0) {
//         console.log("Invalid Age");
//     } else if (Age <= 12) {
//         console.log("Child");
//     } else if (Age <= 19) {
//         console.log("Teenager");
//     } else if (Age <= 59) {
//         console.log("Adult");
//     } else {
//         console.log("Senior Citizen");
//     }
//     process.exit();
// })


// Q3. Vowel or Consonant
// const isVowel = function(char) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     return vowels.includes(char);
// }
// process.stdin.on("data", data => {   
//     const char = data.toString().trim();
//     if (char.length !== 1 || !(/[a-zA-Z]/).test(char)) {
//         console.log("Invalid Input");
//     }
//     else if (isVowel(char)) {
//         console.log("Vowel");
//     } else {
//         console.log("Consonant");
//     }
//     process.exit();
// });



// Q4. Valid ISBN Number
// const isValidISBN = function(isbn) {
//     if (isbn.length !== 10) return false;
//     let sum = 0;
//     for (let i = 0; i < 10; i++) {
//         const digit = parseInt(isbn[i]);
//         if (isNaN(digit)) return false;
//         sum += digit * (10 - i);
//     }
//     return sum % 11 === 0;
// }
// console.log("enter ISBN number");
// process.stdin.on("data", data => {   
//     const isbnNumb = data.toString().trim();
//     if (isValidISBN(isbnNumb)) {
//         console.log("Valid ISBN");
//     } else {
//         console.log("Invalid ISBN");
//     }
//     process.exit(0);
// });


// Q5 Harshad Number or not
// const isHarshad = function(num) {
//     let sum = 0;
//     let temp = num;
//     while (temp > 0) {
//         sum += temp % 10;
//         temp = Math.floor(temp / 10);
//     }
//     return num % sum === 0;
// }
// console.log("enter a number to check Harshad Number or not");
// process.stdin.on("data", data => {
//     const harshadNum = parseInt(data.toString().trim());
//     if (isHarshad(harshadNum)) {
//         console.log(`Yes, ${harshadNum} is a Harshad Number`);
//     } else {
//         console.log(`No, ${harshadNum} is not a Harshad Number`);
//     }
//     process.exit(0);
// })



// Q6 Perfect Square or not
// const isPerfectSquare = function(num) {
//     if (num < 0) return false;
//     const sqrt = Math.sqrt(num);
//     return sqrt * sqrt === num;
// }
// console.log("enter a number to check Perfect Square or not");
// process.stdin.on("data", data => {
//     const PerfectSquare = parseInt(data.toString().trim());
//     if (isPerfectSquare(PerfectSquare)) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
//     process.exit(0);
// })


// Q7 Abundant Number
// const isAbundant = function(num) {
//     let sum = 0;
//     for (let i = 1; i <= Math.floor(num / 2); i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum > num;
// }
// console.log("enter a number to check Abundant Number or not");
// process.stdin.on("data", data => {
//     const AbundantNum = parseInt(data.toString().trim());
//     if (isAbundant(AbundantNum)) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
//     process.exit(0);
// })


//Q8 Count Numbers with Exactly X Divisors
// process.stdin.on("data", data => {
//     const input = data.toString().trim().split(" ");
//     const N = parseInt(input[0]);
//     const X = parseInt(input[1]);
//     let count = 0;

//     const countDivisors = function(num) {
//         let divisors = 0;
//         for (let i = 1; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 divisors++;
//                 if (i !== num / i) {
//                     divisors++;
//                 }
//             }
//         }
//         return divisors;
//     }

//     for (let i = 1; i <= N; i++) {
//         if (countDivisors(i) === X) {
//             count++;
//         }
//     }

//     console.log(count);
//     process.exit(0);
// });

//Q9 Prime Factor of a Number
// const primeFactors = function(num) {
//     const factors = [];
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         while (num % i === 0) {
//             factors.push(i);
//             num /= i;
//         }
//     }
//     if (num > 1) {
//         factors.push(num);
//     }
//     return factors;
// }

// console.log("enter a number to find its Prime Factors");
// process.stdin.on("data", data => {
//     const number = parseInt(data.toString().trim());
//     const factors = primeFactors(number);
//     console.log(`Prime Factors of ${number}: ${factors.join(", ")}`);
//     process.exit(0);
// });

//Q10 Write a program to calculate the area of a circle, rectangle, and triangle using a switch statement
// console.log("Enter shape (circle, rectangle, triangle) followed by dimensions:");
// process.stdin.on("data", data => {
//     const input = data.toString().trim().split(" ");
//     const shape = input[0].toLowerCase();
//     let area;
//     switch (shape) {
//         case 'circle':
//             const radius = parseFloat(input[1]);
//             area = Math.PI * radius * radius;
//             console.log(`Area of Circle: ${area.toFixed(2)}`);
//             break;
//         case 'rectangle':
//             const length = parseFloat(input[1]);
//             const width = parseFloat(input[2]);
//             area = length * width;
//             console.log(`Area of Rectangle: ${area.toFixed(2)}`);
//             break;
//         case 'triangle':
//             const base = parseFloat(input[1]);
//             const height = parseFloat(input[2]);
//             area = 0.5 * base * height;
//             console.log(`Area of Triangle: ${area.toFixed(2)}`);
//             break;
//         default:
//             console.log("Invalid shape");
//     }
//     process.exit(0);
// });


// Q11. neon Number
// const isNeonNumber = function(num) {
//     let Square = num * num;
//     let sum = 0;
//     let temp = Square;
//     while(temp > 0) {
//         sum += temp % 10;
//         temp = Math.floor(temp/10);
//     }

//     return sum === num;
// }

// console.log("enter a number to check Neon Number or not");
// process.stdin.on("data", data => {
//     const neonNumber = parseInt(data.toString().trim());
//     if(isNeonNumber(neonNumber)){
//         console.log(`Yes ${neonNumber} is a neon Number.`);
//     }else {
//         console.log(`No ${neonNumber} is not a neon Number.`)
//     }
//     process.exit(0);
// })


//Q12 perfect number
// const isperfectNumber = function (num) {
//     let sum = 1;
//     if (num < 0) return false;

//     for (let i = 2; i < Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sum += i;
//             let correspondingFactor = number / i;
//             if (i !== correspondingFactor) {
//                 sum += correspondingFactor;
//             }
//         }
//     }

//     return sum === num;
// }

// console.log("enter a number to check is a Perfect number or not");
// process.stdin.on("data", data => {
//     const PerfectNumber = parseInt(data.toString().trim());
//     if (isperfectNumber(PerfectNumber)) {
//         console.log(`${PerfectNumber} is a Perfect Number.`);
//     } else {
//         console.log(`${PerfectNumber} is Not a Perfect number.`)
//     }
// })

//Q13 Friendly Pair

const sumOfDivisors = function(num) {
    let sum = 0;

    for(let i = 1; i < num; i++){
        if(num % i === 0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log("enter two numbers as input by space")
process.stdin.on("data", data => {
    const [a, b] = data.toString().trim().split(" ").map(Number);

    const sumA = sumOfDivisors(a);
    const sumB = sumOfDivisors(b);

    if(sumA/a === sumB/b){
        console.log(`${a} & ${b} are friendly pairs.`);
    } else {
        console.log(`${a} & ${b} are not friendly pairs.`)
    }
})


