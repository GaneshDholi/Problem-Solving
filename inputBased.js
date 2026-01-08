// Q1 GCD of two numbers
process.stdin.on("data", data => {
  const [a, b] = data.toString().trim().split(" ").map(Number);
  console.log(gcd(a, b));
  process.exit(0);
});
const gcd = function(a, b) {
    let smaller = Math.min(a, b);
    let hcf = 1;

    for (let i = 1; i <= smaller; i++) {
        if (a % i === 0 && b % i === 0) {
            hcf = i;
        }
    }

    return hcf;
}


// Q2 prime number or not
process.stdin.on("data", data => {   
    const num = parseInt(data.toString().trim());
    if (isPrime(num)) {
        console.log(Math.sqrt(num).toFixed(2));
    } else {
        console.log("0.00");
    }
    process.exit(0);
});

const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Q3 Strong number or not
process.stdin.on("data", data => {   
    const num = parseInt(data.toString().trim());
    if (isStrong(num)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    process.exit(0);
});

const isStrong = function(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

const factorial = function(n) {
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Q4 conver decimal integer to binary equavalent
process.stdin.on("data", data => {   
    const num = parseInt(data.toString().trim());
    console.log(decimalToBinary(num));
    process.exit(0);
});

const decimalToBinary = function(num) {
    if (num === 0) return "0";
    let binary = "";
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

// Q5 sum of all prime numbers between two numbers
process.stdin.on("data", data => {   
    const [n1, n2] = data.toString().trim().split(" ").map(Number);
    let sum = 0;
    for (let i = n1 + 1; i < n2; i++) {
        if (isPrime2(i)) {
            sum += i;
        }
    }
    console.log(sum);
    process.exit(0);
});

const isPrime2 = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// Q6 perfect square or not
process.stdin.on("data", data => {   
    const num = parseInt(data.toString().trim());
    if (isPerfectSquare(num)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    process.exit(0);
});
const isPerfectSquare = function(num) {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num);
    return sqrt * sqrt === num;
}

// Q7 vowels conver to uppercase in given string
process.stdin.on("data", data => {   
    const str = data.toString().trim();
    console.log(convertVTU(str));
    process.exit(0);
});

const convertVTU = function(str) {
    const vowels = "aeiou";
    let result = "";
    for (let char of str) {
        if (vowels.includes(char)) {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
}


// Q8 hypotenuse of triangle
process.stdin.on("data", data => {
    const [a, b] = data.toString().trim().split(" ").map(Number);
    console.log(calculateHypotenuse(a, b).toFixed(2));
    process.exit(0);
});

const calculateHypotenuse = function(a, b) {
    return Math.sqrt(a * a + b * b);
}

// Q9 Armstrong number or not
process.stdin.on("data", data => {
    const num = parseInt(data.toString().trim());
    if (isArmstrong(num)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    process.exit(0);
});

const isArmstrong = function(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

//Q10 Fibonacci series by recursion
process.stdin.on("data", data => {
    const n = parseInt(data.toString().trim());
    for (let i = 0; i < n; i++) {
        process.stdout.write(fibonacci(i) + " ");
    }
    process.exit(0);
});

const fibonacci = function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}