// let str = "Ganesh";
// console.log(str.substring(2, 7))
// let str2 = str.toLowerCase();
// let arr = str2.split("");

// console.log(arr)
// let arr2 = [1, 50, 6, 77, 7];
// console.log(arr.sort());


// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach((fruit) => {
//  console.log(fruit);
// });



//     const items = ['a', 'b', 'c', 'd'];
//     const indexToRemove = 1;
//     const newItems = items.filter((_, index) => index !== indexToRemove);
//     console.log(newItems); // Output: ['a', 'c', 'd']
//     let data = [1, 3, 2, 3, 4, 5, 3, 6];

// // Create a new array that only includes items that are NOT equal to 3
// let filteredData = data.filter(item => item !== 3);

// console.log(filteredData);
// // Output: [1, 2, 4, 5, 6]
// let haystack = "sadbutsad";
// let needle = "sad";
// let indices = [];
// let startIndex = 0;

// while ((startIndex = haystack.indexOf(needle, startIndex)) !== -1) {
//     indices.push(startIndex);
//     // Move the search start position past the current match
//     // to find the next occurrence. Incrementing by 1 allows finding
//     // overlapping matches if needed, but for non-overlapping matches,
//     // increment by needle.length
//     startIndex += needle.length; 
// }

// console.log(indices);
// // Output: [0, 6] 



//56. Remove an Element
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let count = 0;

let arr2 = nums.filter(item => item !== val);

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
        count++;
    }
}

if (nums.length !== arr2.length) {
    let maxLength = nums.length > arr2.length ? nums.length : arr2.length;

    while (nums.length < maxLength) {
        nums[nums.length] = "_";
    }

    while (arr2.length < maxLength) {
        arr2[arr2.length] = "_";
    }
}

console.log(count, arr2)


console.log();
console.log();
console.log();

//57. Find the Index of the First Occurrence in a String
let haystack = "leetcode", needle = "leeto";
let arr = [];
let sI = 0;

while ((sI = haystack.indexOf(needle, sI)) !== -1) {
    arr.push(sI);

    sI += needle.length;
}

if (arr.length == 0) console.log("-1");
else console.log(arr.join(" "));


//58. Length of Last Word
let s = "luffy is still joyboy";
let arrMain = s.split(" ");
let arrMain2 = arrMain.filter(item => item !== (" ", ""));
let element = arrMain2[arrMain2.length - 1];
console.log(element.length)

console.log();
console.log();
console.log();



//13. Roman to Integer
const Roman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
]);

let str = "MCMXCIV";
let Integer = str.split("");
let sum = 0;

for (let i = 0; i < str.length; i++) {
    const firstChar = Roman.get(str[i]);
    const secondChar = Roman.get(str[i + 1]);


    if (secondChar > firstChar) {
        sum += secondChar - firstChar;
        console.log(sum, firstChar, secondChar);
        i++;
    } else {
        sum += firstChar;
    }
}

console.log(sum);

console.log();
console.log();
console.log();


// Merge Sort by qusiton

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
let newNums1 = new Array(m);
let newNums2 = new Array(n);

for (let i = 0; i < m; i++) {
    newNums1[i] = nums1[i];
}

for (let j = 0; j < n; j++) {
    newNums2[j] = nums2[j];
}

if (newNums1.length == newNums2.length) {
    console.log(mergeSort(newNums1, newNums2));
} else {
    if (m > n) {
        console.log(newNums1);
    } else if (m < n) {
        console.log(newNums2);
    } else {
        console.log("UNSORTED");
    }
}

function mergeSort(x, y) {
    let sortedArray = [];

    while (x.length && y.length) {
        if (x[0] < y[0]) {
            sortedArray.push(x.shift());
        } else {
            sortedArray.push(y.shift());
        }
    }

    return [...sortedArray, ...x, ...y];
}

console.log();
console.log();
console.log();


//121. Best Time to Buy and Sell Stock
let prices = [7, 6, 4, 3, 1];
let price = 0;
let startIndex = prices[1];
let countMain = 0;

for (let i = startIndex; i < prices.length; i++) {
    if (startIndex < prices[i + 1]) {
        countMain++;
    }
}
if (countMain > 2) {
    price += (prices[prices.length - 2] - prices[1]);
    console.log(price);
} else {
    console.log(price);
}

console.log();
console.log();
console.log();


// 80. Remove Duplicates from Sorted Array II
let numsMain = [1, 1, 1, 2, 2, 3]
const result = numsMain.filter((value, index, arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count <= 2 || arr.indexOf(value) === index || arr.indexOf(value, arr.indexOf(value) + 1) === index;
})

let count2 = 0;

for (let i = 0; i < result.length; i++) {
    count2++;
}



if (result.length !== numsMain.length) {
    let maxLength = result.length < numsMain.length ? numsMain.length : result.length;


    while (result.length < maxLength) {
        result[result.length] = "_";
    }
}


console.log(count2, result)
console.log();
console.log();
console.log();




// 189. Rotate Array
let numsR = [-1, -100, 3, 99], k = 2
k = k % numsR.length;
for (let i = 0; i < k; i++) {
    let last = numsR[numsR.length - 1];
    numsR.pop(numsR.length - 1);
    numsR.unshift(last);
}

console.log(numsR);
console.log();
console.log();
console.log();



// 122. Best Time to Buy and Sell Stock II

let pricesMain = [7, 6, 4, 3, 1];
let originalPrice = 0;
let isSorted = true;

for (let i = 0; i < pricesMain.length - 1; i++) {
    if (pricesMain[i] > pricesMain[i + 1]) {
        isSorted = false;
        break;
    }
}

if (isSorted) {
    originalPrice = pricesMain[pricesMain.length - 1] - pricesMain[0];
    console.log(originalPrice);
} else {
    let small = pricesMain[0];
    for (let i = 1; i < pricesMain.length; i++) {
        if (small > pricesMain[i]) {
            small = pricesMain[i]
        }
    }
    if (small === pricesMain.indexOf(pricesMain[pricesMain.length - 1])) {
        console.log(originalPrice);
    } else {
        for (let i = pricesMain[small]; i < pricesMain.length; i++) {
            if (i < pricesMain.length - 1) {
                let profit = pricesMain[i + 1] - pricesMain[i];
                originalPrice += profit;
                i++;
            }
        }
        console.log(originalPrice);

    }

}

console.log();
console.log();
console.log();



// 55. Jump Game 
let Jump_nums = [3, 2, 1, 0, 4];
console.log(jumpToNext(Jump_nums));
function jumpToNext(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) {
            return false;
        }
        max = Math.max(max, i + nums[i]);
        if (max >= nums.length - 1) {
            return true;
        }
    }
    return true;
}

console.log();
console.log();
console.log();

//151. Reverse Words in a String
let S = "the sky is blue";

let reverse = S.split(" ").filter(word => word.length > 0);

let newReverse = reverse.reverse().join(" ");

console.log(newReverse);

console.log();
console.log();
console.log();


// 42. Trapping Rain Water
let height = [0,1,0,2,1,0,1,3,2,1,2,1];



console.log();
console.log();
console.log();

//135. Candy
let ratings = [1,2,2];

if (ratings[0] > ratings[1]) {
    if (ratings[1] < ratings[2]){
        console.log(5);
    } else {
        console.log(5);
    }
} else if (ratings[1] > ratings[0]) {
    if (ratings[2] <= ratings[1]){
        console.log(4)
    } else {
        console.log(4);
        
    }
}



