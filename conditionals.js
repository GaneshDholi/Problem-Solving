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

// 14) Power of Two (Bitwise): Print Yes if n>0 and (n & (n-1))==0, else No. Explain for edge cases n=0, n=1.

if (n > 0 && (n & (n - 1)) === 0) {
    console.log("Yes");
} else {
    console.log("No");
}

n = 0;
if (n > 0 && (n & (n - 1)) === 0) {
    console.log("Yes");
} else {
    console.log("No");
}

n = 1;
if (n > 0 && (n & (n - 1)) === 0) {
    console.log("Yes");
} else {
    console.log("No");
}

n = 6;
if (n > 0 && (n & (n - 1)) === 0) {
    console.log("Yes");
} else {
    console.log("No");
}


//  15) Digit Category: Given n, print '1-digit', '2-digit', ..., '5+-digit' using condition ranges
n = 50;
let count = 0;
s = 0
while (n > 0) {
    let a = n % 10;
    s += a;
    count++;
    n = parseInt(Math.floor(n / 10));
}

if (count <= 0) {
    console.log("invalid please enter some value");
} else if (count == 1) {
    console.log("1-digit");
} else if (count == 2) {
    console.log("2-digit");
} else if (count == 3) {
    console.log("3-digit");
} else if (count == 4) {
    console.log("4-digit");
} else if (count == 5) {
    console.log("5-digit");
} else if (count > 5) {
    console.log("5+digit");
}

// 16) Char Classifier: Given a single char ch, print UPPER/LOWER/DIGIT/SPECIAL using code-point comparisons.
let ch = 'e';

let charCode = ch.charCodeAt(0);
console.log(charCode);

if (charCode >= 65 && charCode <= 90) {
    console.log("UPPER");
} else if (charCode >= 97 && charCode <= 122) {
    console.log("LOWER");
} else if (charCode >= 48 && charCode <= 57) {
    console.log("DIGIT");
} else {
    console.log("SPECIAL");
}


//  17) Vowel/Consonant: Given a Latin letter, case-insensitive; if non-letter, print 'Not an alphabet'.
let CH = ch.toUpperCase();
let code = CH.charCodeAt(0);
if (code >= 65 && code <= 90) {
    if (CH == 'A' || CH == 'E' || CH == 'I' || CH == 'O' || CH == 'U') {
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }
} else {
    console.log("Not an alphabet")
}


//  18) Normalize Case: Given a string s, if s is mixed case print 'MIXED', else 'UPPER' or 'LOWER'. Ignore non-letters for the decision.
let str = "Ganesh";

let upper = false;
let lower = false;

for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (code >= 65 && code <= 90) {
        upper = true;
    } else if (code >= 97 && code <= 122) {
        lower = true;
    }
}

if (upper && lower) {
    console.log('MIXED');
} else if (upper) {
    console.log('UPPER');
} else {
    console.log('LOWER');
}

//   19) String Palindrome (Cleaned): Check palindrome after removing spaces and converting to lowercase. Use two-pointer logic.
str = "wavaw";
let palindrome = true;

let j = str.length - 1;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j]) {
        palindrome = false;
        break;
    }
    j--;
}

if (palindrome) {
    console.log(str + " Is a Palindrome string");
} else {
    console.log(str + " Not a Palindrome string");
}


//  20) Password Category: Given a password, print 'WEAK' (<6) / 'MEDIUM' (≥6 and only letters) / 'STRONG' (≥8 and has letters+digits) / 'INVALID' (contains spaces).
let pass = "Ganesh@123";
count = 0;
let morethansix = false;
let letterhave = false;
let digithave = false;
let specialCharHave = false;


if (pass.includes(" ")) {
    console.log('INVALID');
} else {
    for (let i = 0; i < pass.length; i++) {
        const char = pass[i];

        if (/[a-zA-Z]/.test(char)) {
            letterhave = true;
        }

        if (/[0-9]/.test(char)) {
            digithave = true;
        }

        if (/[^a-zA-Z0-9]/.test(char)) {
            specialCharHave = true;
        }
    }

    if (pass.length >= 6) {
        morethansix = true;
    }

    if (!morethansix) {
        console.log('WEAK');
    } else if (letterhave && digithave && specialCharHave && pass.length >= 8) {
        console.log('STRONG');
    } else if (letterhave && digithave) {
        console.log('MEDIUM');
    } else {
        console.log("NOT APPLICABLE");
    }
}


//   21) Second Largest (of 3): Given x,y,z print the median value using only conditionals (no sort)
x = 5, y = 9, z = 12
if ((x >= y && x <= z) || (x <= y && x >= z)) {
    console.log(x);
} else if ((y >= x && y <= z) || (y <= x && y >= z)) {
    console.log(y);
} else {
    console.log(z);
}

// 22) Majority Element (3 values only): Given three values a,b,c — print the value that appears at least twice; else print 'None'.
x = 15; y = 10; z = 5;
if (x == y || x == z) {
    console.log(x);
} else if (y == x || y == z) {
    console.log(y);
} else if (z == x || z == y) {
    console.log(z);
} else {
    console.log("None")
}

// 23) Sort Order Label: Given three numbers n1,n2,n3 — print 'Non-decreasing' if n1≤n2≤n3, 'Non-increasing' if n1≥n2≥n3, else 'Unsorted'

let n1 = 25, n2 = 20, n3 = 15;

if (n1 <= n2 && n2 <= n3) {
    console.log("Non-decreasing");
} else if (n1 >= n2 && n2 >= n3) {
    console.log("Non-increasing");
} else {
    console.log("Unsorted");
}

//  24) Strictly Increasing Triplet Check: For array of length 3, print 'Strictly Increasing' if a<b<c else 'No'

let arr = [10, 15, 31];

if (arr[0] < arr[1] && arr[1] < arr[2]) {
    console.log('Strictly Increasing');
} else {
    console.log('No');
}

// 25) Range Bucket: Given a number n, print bucket: [0,10):'S', [10,20):'M', [20,50):'L', [50,∞):'XL'. Negative-> 'Invalid'.
n = 25;
let bucket;

if (n < 0) {
    bucket = 'Invalid';
} else if (n < 10) {
    bucket = 'S';
} else if (n < 20) {
    bucket = 'M';
} else if (n < 50) {
    bucket = 'L';
} else {
    bucket = 'XL';
}

console.log(`The number ${n} is in bucket: '${bucket}'`);


//  26) Billing with Slabs: Electricity bill for units u: first 100 @ 5/unit, next 100 @ 7/unit, remaining @ 10/unit. Add fixed meter charge 50. Validate u≥0
let u = 350;
let fc = 50;
let bill = 0;

if (u < 0) {
    console.log("Invalid: Units must be non-negative.");
} else {
    if (u > 200) {
        bill += (u - 200) * 10;
        u = 200;
    }
    if (u > 100) {
        bill += (u - 100) * 7;
        u = 100;
    }
    if (u >= 0) {
        bill += u * 5;
    }

    bill += fc;

    console.log("For " + u + " units, the total bill is ₹" + bill);
}

//  27) Attendance Eligibility: Given totalClasses and attendedClasses, if attendance% ≥ 75 print 'Allowed', else 'Not Allowed'. If medical=true allow with ≥60%.
let totalClasses = 200;
let attendedClasses = 140;

let percentage = Math.floor((attendedClasses / totalClasses) * 100);
let medical = true;
if (percentage >= 75) {
    console.log('Allowed');
} else if (medical == true && percentage >= 60) {
    console.log("Allowed");
} else {
    console.log('Not Allowed');
}

//  28) E-commerce Discount: If cart ≥ 5000 → 20% off; else if ≥ 2000 → 10% off; else if coupon 'FRESH100' and cart≥ 1000 → flat 100 off; prioritize MAX discount.
let Amount = 1500;
let coupon = 'FRESH100';

if (Amount >= 5000) {
    Amount -= Amount * 0.20;
} else if (Amount >= 2000) {
    Amount -= Amount * 0.10;
} else if (coupon == 'FRESH100' && Amount >= 1000) {
    Amount -= 100;
}
console.log("The Amount Is : " + Amount);

//  29) Taxi Fare: Base 50 for first 3 km, 12/km for next 7 km, 10/km beyond; night surcharge +20% between 22:00–5:00. Input distance, hour; output fare or 'Invalid'.
const distance = 15;
const hour = 23;
let fare = 0;

if (distance <= 0 || hour < 0 || hour > 23) {
    fare = 'Invalid';
} else {
    if (distance <= 3) {
        fare = 50;
    } else if (distance <= 10) {
        fare = 50 + (distance - 3) * 12;
    } else {
        fare = 50 + (7 * 12) + (distance - 10) * 10;
    }

    if (hour >= 22 || hour < 5) {
        fare = fare * 1.20;
    }
}

console.log(Math.floor(fare));


// 30) Library Fine: If days late d: 0→No fine, 1–5→2/day, 6–10→3/day, >10→5/day. If lost: 500 flat. Print reasoned output

let late = 8;
let lost = false;
let fine = 0;

if (lost === true) {
    fine = 500;
    console.log("The book are lost");
    console.log("Flat fine for a lost book: ₹ " + fine);
} else {
    if (late === 0) {
        fine = 0;
        console.log("The book was return");
        console.log("Fine amount: ₹ " + fine);
    } else if (late >= 1 && late <= 5) {
        fine = late * 2;
        console.log("The book is " + late + " days late (1-5 days).");
        console.log("Fine amount (₹ 2 per day): ₹ " + fine);
    } else if (late >= 6 && late <= 10) {
        fine = late * 3;
        console.log("The book is " + late + " days late (6-10 days).");
        console.log("Fine amount (₹ 3 per day): ₹ " + fine);
    } else if (late > 10) {
        fine = late * 5;
        console.log("The book is " + late + " days late (over 10 days).");
        console.log("Fine amount (₹ 5 per day): ₹ " + fine);
    } else {
        console.log("Invalid input for days late.");
    }
}

//  31) Predict Output: let a=2,b=3,c=2; if(a==b) console.log('X'); else if(a==c) console.log('Y'); else console.log('Z');
a = 2, b = 3, c = 2;

if (a == b) {
    console.log('X');
} else if (a == c) {
    console.log('Y'); //output
} else {
    console.log('Z');
}

//  32) Predict Output: const x='5'; const y=5; if(x==y && x!==y) console.log('A'); else console.log('B'); Explain why.
const xa = '5';
const ya = 5;
// because of the !== check the typeOf an element or variable where the type are false as string or number that's why they also true
if (xa == ya && xa !== ya) {
    console.log('A'); //output
} else {
    console.log('B');
}

//  33) Predict Output: let n=0; if(n) console.log('T'); else console.log('F'); Then: n='0'; if(n) console.log('T'); else console.log('F'); // discuss truthy/falsy
n = 0;
if (n) console.log('T');
else console.log('F'); // output because the 0 value have false in boolean when print as an console

n = '0';
if (n) console.log('T');// output because the non empty string have true value all the time 
else console.log('F');


// 34) Find the Bug: let i=5; while(i>0){ console.log(i); i++; } What’s wrong? Fix to count down 5..1.
let i = 5;
while (i > 0) { console.log(i); i-- }
//because of the i++ they goes upper side not in downside means they needs decrement not the increament 


//35) Fix & Explain: const s='42px'; const v=Number(s); if(!isNaN(v)) console.log('OK'); else console.log('BAD'); // Why BAD? Fix using parseInt safely.
const sa = '42px';
const v = parseInt(sa); // this line gives Nan because Number treat whole value as convert in number but where some else have as px so they gives the  NAN
if (!isNaN(v)) console.log('OK'); // they give by parseInt because the parseInt gives an integer from the string as they check from left to right or remove anything else in string except of digits
else console.log('BAD');


// 36) Minimal Notes/Coins: Given amount A, output min notes among [2000,500,200,100,50,20,10,5,2,1] (greedy). Validate A≥0.

let amount = 8647;
let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let notesCount = Array(10).fill(0);

for (let i = 0; i < 10; i++) {
    if (amount >= notes[i]) {
        notesCount[i] = Math.floor(amount / notes[i]);
        amount = amount % notes[i];
    }
}

for (let i = 0; i < 10; i++) {
    if (notesCount[i] != 0) {
        console.log("note " + notes[i], "note-Count " + notesCount[i])
    }
}


//37) Strong Number Check: For n, if sum of factorials of digits equals n → 'YES' else 'NO' (e.g., 145). Keep it iterative.
let strong = 145;
let strong2 = strong;
let factsum = 0;
while (strong > 0) {
    let a = strong % 10;
    let fact = 1;
    for (let i = 1; i <= a; i++) {
        fact *= i;
    }
    factsum += fact;
    strong = Math.floor(strong / 10);
}

if (strong2 === factsum) {
    console.log('YES');
} else {
    console.log('NO');
}


//  38) Quadratic Roots Category: Given a,b,c: print 'Two real', 'One real', or 'Complex' based on discriminant; handle a==0 separately.
a = 2;
b = 2;
c = 2;

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log('Infinite solutions');
        } else {
            console.log('No solution');
        }
    } else {
        console.log('One real');
    }
} else {
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        console.log('Two real');
    } else if (discriminant === 0) {
        console.log('One real');
    } else {
        console.log('Complex');
    }
}


// 39) License Eligibility: Input age; if <18 'Not eligible'; 18–70 'Eligible'; >70 'Medical required'. Edge-check exact 18 and 70.
let age = 70;
if (age < 18) {
    console.log('Not eligible');
} else if (age >= 18 && age <= 70) {
    console.log('Eligible');
} else if (age > 70) {
    console.log("Medical required");
}


// 40) CSV Field Validator: Given a line 'name,age,city' — print 'VALID' if all present and age is integer ≥0; else 'INVALID'. No regex.
const line = 'Ganesh,20,Ajmer';
const fields = line.split(',');

if (fields.length !== 3) {
    console.log('INVALID');
} else {
    const ageString = fields[1].trim();
    if (ageString === '') {
        console.log('INVALID');
    } else {
        const ageMain = +ageString;

        if (!Number.isInteger(ageMain) || ageMain < 0) {
            console.log('INVALID');
        } else {
            console.log('VALID');
        }
    }
}


//  41) Substring Position Type: Given s and t, print 'prefix' if t starts at index 0, 'suffix' if ends at last index, middle' if occurs inside, 'absent' otherwise.

let S = "world hello";
let T = "hello";

if (S.startsWith(T)) {
    console.log('prefix');
} else if (S.endsWith(T)) {
    console.log('suffix');
} else if (S.includes(T)) {
    console.log('middle');
} else {
    console.log('absent');
}

//  42) Compare Versions: Given v1='1.10.2' and v2='1.2.10', print which is newer using conditional checks on segments. No array sort; split then compare piecewise.
let v1 = '1.10.2';
let v2 = '1.2.10';


const v1Seg = v1.split('.').map(Number);
const v2Seg = v2.split('.').map(Number);

const maxLength = Math.max(v1Seg.length, v2Seg.length);

for (let i = 0; i < maxLength; i++) {
    const seg1 = v1Seg[i] || 0;
    const seg2 = v2Seg[i] || 0;

    if (seg1 > seg2) {
        console.log(`v1 ('${seg1}') is newer than v2 ('${seg2}')`);
    }
    if (seg2 > seg1) {
        console.log(`v2 ('${seg1}') is newer than v1 ('${seg2}')`);
    }

    if (seg1 == seg2){
        console.log(`v1 ('${seg1}') and v2 ('${seg2}') are the same version`);
    }
}

//43) Min-Max Swap: Given a,b — if a>b swap; then print in non-decreasing order. No temp variable (use arithmetic or destructuring).

a = 30;
b = 20;

if (a > b){
    a = a + b;
    b = a - b;
    a = a - b
    console.log(`a is ${a} and b is ${b}`);
} else {
    console.log(`a is ${a} and b is ${b}`);
}
 

//  44) Interval Overlap: Given [l1,r1] and [l2,r2], print 'Overlap' if intervals intersect, else 'Disjoint'. Consider inclusive ends.
let l1 = 3, l2 = 5, r1 = 8, r2 = 12;
   if (Math.max(l1, l2) <= Math.min(r1, r2)) {
    console.log('Overlap');
  } else {
    console.log('Disjoint');
  }


//  45) Near Multiple of Ten: Given n, print 'YES' if n is within ±2 of a multiple of 10, else 'NO' (e.g., 8→YES, 13→NO, 18→YES).
n = 30;

if (n%2 == 0 || n%-2 == 0){
    console.log('YES');
} else {
    console.log('NO');
}