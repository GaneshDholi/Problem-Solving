//1.) Remove element quesiton in leet code

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let count = 0;
let temp = new Array(nums.length);
let val = 2;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
        count++;
    } else {
        temp.unshift(nums[i]);
    }
    temp.pop();
}
console.log(count, temp);


// 2.) Index of First occuring string

let haystack = "sadbutsad";
let needle = "sadf";

if (haystack.indexOf(needle)) {
    console.log(haystack.indexOf(needle));
} else {
    console.log(haystack.indexOf(needle));
}


// 3.) Longest Common Prefix
let strs = ["flower", "flow", "flight"];
let strMain = null;

// if (strs.length === 0) {
//     console.log("");
// } else {
//     let first = strs[0];
//     for (let i = 0; i < strs.length; i++) {
//         // console.log(strs[i].indexOf(first) !== 0)
//         while (strs[i].lastIndexOf(first, strs.length-1) !== 0) {
//             first = first.slice(1);
//             console.log(first)
//             if (first === "") {
//                 console.log("");
//                 return;
//             }
//         }
//         console.log(first)
//     }
// }

// for (let i = 0; i < strs.length; i++) {
//     // arr.unshift(strs[i].slice(0,2));
//     let arr = new Array();
//     for (let j = 0; j < strs.length; j++) {
//         arr = strs[j].split(''); // Splits the string into an array of characters
//     }
//     console.log(arr)
// }

// console.log(strs)

// for (let j = 0; j < arr.length; j++){
//     if (arr[j] === arr[j+1] && arr[j] === arr[j+2]){
//         console.log(String(arr[j]));
//     } else {
//         console.log(arr[j]);
//     }
// }


// Bubble Sort
let arr = [19, 20, 41, 30, 3];

for (let i = 0; i < arr.length - 1; i++){
    for (let j = 0; j < arr.length - i - 1; j++){
        if (arr[j] > arr[j+1]){
            arr[j] = arr[j] + arr[j+1];
            arr[j+1] = arr[j] - arr[j+1];
            arr[j] = arr[j] - arr[j+1];
        }
    }
}

console.log(arr)

// longest consecurive secquence
let numsMain2 = [99, 100, 1, 2, 3, 4, 8, 0, 5, 5, 8, 3, 99, 102, 6, 7];
let newNums = numsMain2.sort((a, b) => a - b);
let longest = 0;
let current = 0;

if (newNums.length > 0) {
  longest = 1;
  current = 1;
}

for (let i = 1; i < newNums.length; i++) {
  if (newNums[i] === newNums[i - 1]) {
    continue;
  } else if (newNums[i] === newNums[i - 1] + 1) {
    current++;
  } else {
    longest = Math.max(longest, current);
    current = 1;
  }
}

longest = Math.max(longest, current);
console.log("The longest consecutive sequence is: " + longest + newNums);


//