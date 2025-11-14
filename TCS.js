//Q1. Given a non-negative integer array Arr having size N. Each element of the array will carry a different value. This means no two elements can have the same values.The candidate has to do this with minimal changes in the original value of the elements, making every element as least as much value as it originally had.
//Find the minimum sum of all elements that can be set the array for:
import pro from 'prompt-sync';

const prompt = pro();

// let n = parseInt(prompt("Enter length of an Array : "));

// let arr = new Array(n);

// let wrong = 0;

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     let input = prompt("Enter value of " + i + " is ")
//     arr[i] = parseInt(input);
// }

// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] === arr[j]) {
//             arr[i] = arr[i] + 1;
//         }

//         if (arr[i] < 0) {
//             wrong = 1;
//         }
//     }
// }

// for (let i = 0; i < n; i++) {
//     sum += arr[i];
// }
// if (wrong == 1) {
//     console.log("Wrong");
// } else {
//     console.log(sum);
// }


//Q2. Joseph is learning digital logic subject which will be for his next semester. He usually tries to solve unit assignment problems before the lecture. Today, he got one tricky question. The problem statement is “A positive integer has been given as an input. Convert decimal value to binary representation. Toggle all bits of it after the most significant bit including the most significant bit. Print the positive integer value after toggling all bits”.

let N = prompt("Enter input : ");
let binaryString = "";
if (N <= 100){
    while(N > 0){
        let r = N % 2;
        binaryString = r + binaryString;
        N = Math.floor(N/2);
    }
    let binaryArr = binaryString.split("");
    console.log(binaryArr);

    shiftByOne(binaryArr);
    console.log(binaryArr)

    let answer = binaryDecimal(binaryArr);
    console.log(answer)
}else {
    console.log("Wrong input");
}


function binaryDecimal(binary) {
    let decimal = 0;      
    const n = binary.length;

    for (let i = 0; i < n; i++) {
        const digit = parseInt(binary[n - i - 1]);
        decimal += digit * Math.pow(2, i);
    }

    return decimal;
}

function shiftByOne(binaryArr) {
    let temp = binaryArr[0];

    for (let i = 0; i < binaryArr.length-1; i++){
        binaryArr[i] = binaryArr[i+1];
    }

    binaryArr[binaryArr.length-1] = temp;

    return binaryArr;
}