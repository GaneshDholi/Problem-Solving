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
let arrght = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(WaterLevel(arrght));

function WaterLevel(arr) {
    let fill = 0;

    for (let i = 1; i < arr.length - 1; i++) {

        let x = arr[i];
        for (let j = 0; j < i; j++) {
            x = Math.max(x, arr[j]);
        }

        let y = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            y = Math.max(y, arr[j]);
        }

        fill += Math.min(x, y) - arr[i];
    }

    return fill;
}



console.log();
console.log();
console.log();

//135. Candy
let ratings = [1, 0, 2, 1, 2, 2, 0, 1, 2];
let resultCandys = solveCandyProblem(ratings);
console.log(resultCandys);

function solveCandyProblem(ratings) {
    const n = ratings.length;
    if (n === 0) {
        return 0;
    }

    const candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    let totalCandies = 0;
    for (let i = 0; i < n; i++) {
        totalCandies += candies[i];
    }

    return totalCandies;
}

// 1108. Defanging an IP Address
let address = "255.100.50.0";

let arrAddress = address.split("");
console.log(arrAddress)
const modifiedArray = arrAddress.map(str => str.replaceAll(".", "[.]"));
for (let i = 0; i < arrAddress.length - 1; i++) {
    if (arrAddress[i] === ".") {
        arrAddress[i] = "[.]";
    }
}
console.log(arrAddress.join(""))
console.log(modifiedArray.join(""))

console.log();
console.log();
console.log();


// 2114. Maximum Number of Words Found in Sentences
let sentences = ["please wait", "continue to fight", "continue to win"]
let temp = new Array(sentences.length);
for (let i = 0; i < sentences.length; i++) {
    let newTemp = sentences[i].split(" ");

    temp[i] = newTemp.length;
}

let biggest = temp[0];

for (let i = 1; i < temp.length; i++) {
    if (biggest < temp[i]) {
        biggest = temp[i];
    }
}

console.log(biggest);

console.log();
console.log();
console.log();



// 1662. Ch+
3636
let word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]

let first = word1.join("");
let second = word2.join("");

if (first === second) {
    console.log(true);
} else {
    console.log(false);
}

console.log();
console.log();
console.log();




// 2678. Number of Senior Citizens
let details = ["1313579440F2036", "2921522980M5644"];
let countSenior = 0
for (let i = 0; i < details.length; i++) {
    let age = details[i].slice(11, 13);
    if (age > 60) {
        countSenior++
    }
}

console.log(countSenior);


console.log();
console.log();
console.log();

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let x = height[0];
let fill = 0;

for (let i = 0; i < height.length; i++) {
    let sum = 0;
    if (height[i] === 0) {
        i++;
    }

    if (i === height.length - 1 && x === height[i]) {
        height[x] += 1;
        i = height.indexOf(height[x]);
        console.log(i, height[x]);

    }

    if (x <= i) {
        x = i;
        fill += sum;
        sum = 0

    } else {
        sum += height[x] - height[i];
    }

}

// 890. Find and Replace Pattern

let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"], pattern = "abb";
console.log(findAndReplace(words, pattern));

function findAndReplace(words, pattern) {
    let matchString = [];

    const matchsPattern = (word, pattern) => {
        if (word.length !== pattern.length) {
            return false;
        }

        const patternToWord = {};
        const wordToPattern = {};

        for (let i = 0; i < word.length; i++) {
            const wordChar = word[i];
            const patternChar = pattern[i];

            if (patternToWord[patternChar]) {
                if (patternToWord[patternChar] != wordChar) {
                    console.log(patternToWord[patternChar], wordChar + "1th");
                    return false;
                }
            } else {
                patternToWord[patternChar] = wordChar;
                console.log(patternToWord[patternChar], wordChar + "2th");
            }


            if (wordToPattern[wordChar]) {
                if (wordToPattern[wordChar] != patternChar) {
                    console.log(wordToPattern[wordChar], patternChar + "3th");
                    return false;
                }
            } else {
                wordToPattern[wordChar] = patternChar
                console.log(wordToPattern[wordChar], patternChar + "4th");
            }
        }

        return true;
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (matchsPattern(word, pattern)) {
            matchString.push(word);
            console.log(word + "word");
        }
    }

    return matchString;
}


// 2023. Number of Pairs of Strings With Concatenation Equal to Target

let numsPair = ["1", "1", "1"], target = "11";
let countPair = 0;
const P = numsPair.length;

for (let i = 0; i < P; i++) {
    for (let j = 0; j < P; j++) {
        if (i !== j) {
            if (numsPair[i] + numsPair[j] === target) {
                countPair++;
            }
        }
    }
}

console.log(countPair);


// 65. Valid Number
let Str = "99e2.5";
console.log(validNumber(Str));

function validNumber(s) {
    s = s.trim();
    let i = 0;
    let n = s.length;

    let foundDigit = 0;
    let foundDot = 0;
    let foundExponential = 0;

    if (s[i] === '+' || s[i] === '-') {
        i++;
    }

    while (i < n && (s[i] >= '0' && s[i] <= '9' || s[i] === '.')) {
        if (s[i] === '.') {
            if (foundDot || foundExponential) {
                return false;
            }
            foundDot = true;
        } else {
            foundDigit = true;
        }
        i++;
    }

    if (!foundDigit) {
        return false;
    }

    if (i < n && (s[i] === 'e' || s[i] === 'E')) {
        foundExponential = true;
        i++;

        if (i === '+' && i === '-') {
            i++;
        }

        let foundExponentialDigit = true;
        while (i < n && (s[i] >= '0' && s[i] <= '9')) {
            foundExponentialDigit = true;
            i++;
        }

        if (!foundExponentialDigit) {
            return false;
        }

    }

    return i === n;

};

//matrix
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(diagonalSum(matrix))
console.log(diagonalSum2(matrix))
function diagonalSum(mat) {
    let n = mat.length;
    let leftSum = 0, rightSum = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (i == j) leftSum += mat[i][j]
            if (i + j == n - 1) rightSum += mat[i][j]
        }
    }
    console.log(leftSum, rightSum)
    return leftSum + rightSum;
}
function diagonalSum2(mat) {
    let n = mat.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        sum += mat[i][n - 1 - i];
    }

    if (n % 2 === 1) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }

    return sum;
}

console.log();
console.log();
console.log();


//transpose based on daigonal

function transpose(mat) {
    // let ans = Array.from({length: matrix[0].length}, () => Array(matrix.length));
    let row = matrix.length;
    let col = matrix[0].length;

    let ans = new Array(col);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = new Array(row);
    }
    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans[i].length; j++) {
            ans[i][j] = matrix[j][i];
        }
    }
    return ans;
}
console.log(transpose(matrix));

console.log();
console.log();
console.log();


//rotate a matrix of 90 degree
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function rotate(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = i; j < mat[i].length; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
    for (let i = 0; i < mat.length; i++) {
        let k = 0, j = mat[i].length - 1;
        while (k < j) {
            let temp = mat[i][k];
            mat[i][k] = mat[i][j];
            mat[i][j] = temp;
            k++
            j--
        }
    }
    return mat;
}

console.log(rotate(mat));


let arr8 = [[1, 2], [3, 4], [5, 6]]
console.log(arr8.length);

let str3 = "Madam";
console.log(str3)
// Write your code here
let i = 0;
let j = str3.length - 1;

while (i < j) {
    if (str3[i] !== str3[j]) {
        console.log('No')
    }
    i++;
    j--;
    console.log(i, j)
} console.log(i, j)
console.log('Yes')


console.log();
console.log();
console.log();


//54. spiral Matrixs
let matrixMain = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralMatrix(matrixMain));

    function spiralMatrix(mat) {
        let result = [];
        let i = 0;  
        let colIn = 0, colOut = mat[i].length - 1;
        let rowIn = 0, rowOut = mat.length - 1;

        while (rowIn <= rowOut && colIn <= colOut) {
            for (let i = colIn; i <= colOut; i++) {
                result.push(mat[colIn][i])
            }
            rowIn++;


            for (let i = rowIn; i <= rowOut; i++) {
                result.push(mat[i][colOut]);
            }
            colOut--;

            if (rowIn <= rowOut) {
                for (let i = colOut; i >= colIn; i--) {
                    result.push(mat[rowOut][i])
                }
                rowOut--;
            }

            if (colIn <= colOut) {
                for (let i = rowOut; i >= rowIn; i--) {
                    result.push(mat[i][colIn])
                }
                colIn++;
            }

        }
        return result;
    }


// 73. Set Matrix Zeroes

let matrix4 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(matrixZeroes(matrix4));

function matrixZeroes(mat){
    let row = mat.length;
    let col = mat[i].length;
    let r = new Array(row).fill(false);
    let c = new Array(col).fill(false);

    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (mat[i][j] === 0){
                r[i] = true;
                c[i] = true;
            }
        }
    }

    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if(r[i] || c[j]){
                mat[i][j] = 0;
            }
        }
    }
    
    return mat;
}


let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log(gameOfLife(board));

function gameOfLife(mat){
    let i = 0;
    let row = mat.length, col = mat[i].length;
    
    let newArray = Array.from({length: matrix[0].length}, () => Array(matrix.length));

    let directions = [[-1,-1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    for(let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (mat[i][j] == 1 || mat[j][i] == 1){
                
            }
        }
    }
}