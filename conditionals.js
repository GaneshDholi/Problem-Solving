let prompt = require('prompt-sync')();

// 1) Even/Odd without %: Determine if n is even or odd WITHOUT using %, bitwise trick allowed.
let n = 4

if ((n & 1) == 0) {
    console.log("even");
} else {
    console.log("odd");
}

// 2) Sign of Number: Print 'NEG', 'ZERO', or 'POS' using nested conditionals only (no Math.sign).
if (n > 0) {
    console.log('POS');
} else if (n < 0) {
    console.log('NEG');
} else if (n == 0) {
    console.log('Zero');
} else {
    console.log("gives incorrect value");
}

// 3) Max of Three: Read a, b, c → print the largest using only if/else (no Math.max). Consider equality cases.

let a = 80
let b = 70
let c = 90

if (a > b && a > c) {
    console.log("Largest is" + a);
} else if (b > c && b > c) {
    console.log("Largest is" + b);
} else {
    console.log("Largest is" + c);
}

// 4) Grade Bands: Given marks 0–100, print A (≥90), B (75–89), C (60–74), D (40–59), F (<40). Validate out-of-range inputs.
if (n >= 90) {
    console.log("A")
} else if (n >= 75 && n < 89) {
    console.log("B");
} else if (n >= 60 && n < 74) {
    console.log("C");
} else if (n >= 40 && n < 59) {
    console.log("D");
} else {
    console.log("F");
}


// 5) Simple Calculator: Given (a, b, op) where op ∈ {'+','-','*','/'} — compute result. Print 'Invalid op' if unknown; guard against divide-by-zero
let op = '*'
switch (op) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        break;
}

// 6) Safe Parse: Given a string s, if s is a valid integer print it; else print 'INVALID'. No regex; use Number/parseInt and conditionals carefully
let s = "49";
console.log(parseInt(s))
if (parseInt(s) == Number) {
    console.log(s);
} else {
    console.log("INVALID");
}

//  7) Clamp Value: Given n and range [L,R], print n if within range, else clamp to nearest bound (L or R).

let N = 7;
let L = 0;
let R = 5;

let claval = N;


claval = (claval < L) ? L : claval;

claval = (claval > R) ? R : claval;

console.log(claval);

// 8) Triangle Validity: Given sides a,b,c, first check if a triangle is possible, then print type: Equilateral/Isosceles/Scalene; else 'Invalid'.

let x = 10;
let y = 12;
let z = 15;

if (x <= 0 || y <= 0 || z <= 0) {
    console.log("Invalid: Side lengths must be positive.");
} else if ((x + y > z) && (x + z > y) && (y + z > x)) {
    if (x === y && y === z) {
        console.log("Equilateral");
    } else if (x === y || y === z || x === z) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
} else {
    console.log("Invalid");
}

// 9) Leap Year (Correct Rule): Year is leap if divisible by 400 OR (divisible by 4 AND not by 100). Test on 1900, 2000, 2024
let year = 2024;

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    console.log("leap year");
} else {
    console.log("not a leap year");
}

//  10) Time of Day Label: Given hour (0–23) print 'Night'(0–5), 'Morning'(6–11), 'Afternoon'(12–17), 'Evening'(18–23). Validate input.
let day = 8;

if (day > 0 && day <= 5) {
    console.log("Night");
} else if (day >= 6 && day <= 11) {
    console.log("Morning");
} else if (day >= 12 && day <= 17) {
    console.log("Afternoon");
} else if (day >= 18 && day <= 23) {
    console.log("Evening");
} else {
    console.log("Invalid input");
}

//11) FizzBuzz+: For 1..n: 'Fizz' if %3, 'Buzz' if %5, 'FizzBuzz' if both, else number; also print 'Jazz' if the number contains digit '3'.
let p = 30;

for (let i = 1; i <= p; i++) {
    let output = '';
    let isDivisibleBy3 = i % 3 === 0;
    let isDivisibleBy5 = i % 5 === 0;
    let containsDigit3 = i.toString().includes('3');

    if (isDivisibleBy3 && isDivisibleBy5) {
        output = 'fizzbuzz';
    } else if (isDivisibleBy3) {
        output = 'fizz';
    } else if (isDivisibleBy5) {
        output = 'buzz';
    } else {
        output = i;
    }

    if (containsDigit3) {
        output += 'jazz';
    }

    console.log(output);
}


// 12) Armstrong Check (3-digit): For n, print 'Armstrong' if sum of cubes of digits equals n (e.g., 153)
let arms = 153;
let temp = arms;
let sum = 0;
while (arms > 0) {
    let a = arms % 10;
    let queb = Math.pow(a, 3);
    sum += queb;
    arms = parseInt(Math.floor(arms / 10));
}

if (sum == temp) {
    console.log("Armstrong Number");
} else {
    console.log("Not a Armstrong number");
}


// 13) Palindrome Number (Iterative): Check if n is same when digits reversed. Avoid converting to string

let pal = 122;
let other = pal;
let rev = 0;

if (pal < 0) {
  console.log("invalid please enter valid digit above 0")
} else {
  while (pal > 0) {
    const a = pal % 10;
    rev = rev * 10 + a;
    pal = Math.floor(pal / 10);
  }
  
}

if (other === rev) {
  console.log(`${other} is a palindrome.`);
} else {
  console.log(`${other} is not a palindrome.`);
}

