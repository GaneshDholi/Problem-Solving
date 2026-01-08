// let n = 5, k = 2;
// // console.log(Joseph(n, k));

// // function Joseph(n, k) {
// //   let arr = [];
// //   for (let i = 1; i <= n; i++) {
// //     arr.push(i);
// //   }

// //   console.log(arr)

// //   let i = 0;
// //   while (arr.length > 1) {
// //     i = (i + k - 1) % arr.length;
// //     console.log(i)
// //     arr.splice(i, 1);
// //     console.log(arr)
// //   }

// //   return arr[0];
// // }


// var findTheWinner = function (n, k) {
//   function josephus(n, k) {
//     if (n === 1) return 0;
//     return (josephus(n - 1, k) + k) % n;
//   }

//   return josephus(n, k) + 1;
// }

// console.log(findTheWinner(n, k))


// var solve = function (nums, ans, curr, i) {
//   if (i === nums.length) {
//     ans.push([...curr]);
//     return
//   }
//   //pick
//   curr.push(nums[i]);
//   solve(nums, ans, curr, i + 1);
//   curr.pop()
//   //not pick
//   solve(nums, ans, curr, i + 1);
// }

// var subsets = function (nums) {
//   let curr = [];
//   let ans = [];
//   solve(nums, ans, curr, 0);
//   return ans;
// };

// console.log(subsets([1, 2, 3]))

// //2
// var solve = function(nums, ans, curr, index){
//     if(index === nums.length){
//         if (curr.length != 0) {
//             ans.push(curr);
//         }
//         return;
//     }

//     // not pick
//     solve(nums, ans, curr, index + 1);

//     // pick
//     solve(nums, ans, curr + nums[index], index + 1);
// }

// var subsets = function (nums) {
//   let curr = "";
//   let ans = [];
//   solve(nums, ans, curr, 0);
//   return ans;
// };
// let a = subsets("abc").sort()
// console.log(a);

// //3 permutation
// var swap = function(nums, i , j){
//   let temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

// var solveing = function(nums, ans, curr, i){
//   if (i === nums.length-1){
//     ans.push([...nums]);
//     return
//   }

//   for(let j = i; j < nums.length; j++){
//     swap(nums, i , j);
//     solveing(nums, ans, curr, i+1);
//     swap(nums, i , j)
//   }
// }

// var permutation = function(nums){
//   let curr = [];
//   let ans = [];
//   solveing(nums, ans, curr, 0);
//   return ans;
// }

// console.log(permutation([1,2,3]))



function nums(n) {
  if (n == 1) {
    console.log(1)
    return;
  };
  console.log(n);
  nums(n - 1);
}

nums(4)

console.log();
console.log();
console.log();


function fibonacci(n) {
  if (n == 1 || n == 0) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));

console.log();
console.log();
console.log();


function BinarySearch(arr, target, st, en) {
  if (st > en) {
    return -1;
  }
  let mid = Math.floor((st + en) / 2);

  if (arr[mid] === target) return mid;

  if (target > arr[mid]) return BinarySearch(arr, target, mid + 1, en);
  if (target < arr[mid]) return BinarySearch(arr, target, st, mid - 1);
}

console.log(BinarySearch([1, 2, 3, 5, 7, 9, 20], 9, 0, 6));


console.log();
console.log();
console.log();

function subset(n, ans, i) {
  if (i === n.length) {
    console.log(ans);
    return;
  }


  //include
  ans.push(n[i]);
  subset(n, ans, i + 1);

  //backtracking Step
  ans.pop();

  //exclude 
  subset(n, ans, i + 1)
}

function main(n) {
  let ans = [];
  subset(n, ans, 0);
  return 0;
}

main([1, 2, 3])

console.log();
console.log();
console.log();

//subset with no duplicate value
var Subset = function (nums, ans, i, curr) {
  if (i === nums.length) {
    curr.push([...ans]);
    return;
  }

  ans.push(nums[i]);
  Subset(nums, ans, i + 1, curr);
  ans.pop();

  let idx = i + 1;
  while (idx < nums.length && nums[idx] === nums[i]) idx++;

  Subset(nums, ans, idx, curr);
}

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let curr = [];
  let ans = [];
  Subset(nums, ans, 0, curr);
  return curr;
};

console.log(subsetsWithDup([1, 2, 3]))



console.log();
console.log();
console.log();

//permutations
function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

var getPermutation = function (nums, idx, ans) {
  if (idx === nums.length) {
    ans.push([...nums]);
    return;
  }

  for (let i = idx; i < nums.length; i++) {
    swap(nums, idx, i);
    getPermutation(nums, idx + 1, ans);

    //backtracking
    swap(nums, idx, i);
  }
}



var permutation = function (nums) {
  let ans = [];
  getPermutation(nums, 0, ans);
  return ans;
}

console.log(permutation([1, 2, 3]));

console.log();
console.log();
console.log();


//letter combination
var solve = function(s, ans, curr, i, map){
    if(i === s.length){
        ans.push(curr);
        return;
    }

    let temp = map.get(Number(s[i]));

    for(let j = 0; j < temp.length; j++){
        solve(s, ans, curr + temp[j], i + 1, map);
    }
}

var letterCombinations = function(digits) {

    if(digits.length === 0) return [];

    const LetterMap = new Map([
        [2, "abc"],
        [3, "def"],
        [4, "ghi"],
        [5, "jkl"],
        [6, "mno"],
        [7, "pqrs"],
        [8, "tuv"],
        [9, "wxyz"],
    ]);

    let ans = [];
    solve(digits, ans, "", 0, LetterMap);
    return ans;
};

console.log(letterCombinations("34"));

console.log();
console.log();
console.log();

//sudoku solve
var solve = function(board, row, col){
    if(row === board.length) return true;
    
    let nr = row;
    let nc = col + 1;

    if (nc === 9) {         
        nr = row + 1;
        nc = 0;
    }

    if(board[row][col] !== '.'){
        if(solve(board, nr, nc)) return true;
    } else {
        for(let i = 1; i <= 9; i++){
            let ch = i.toString();
            if(isValid(board, row, col, ch)){
                board[row][col] = ch;
                if(solve(board, nr, nc)) return true;
                board[row][col] = '.';
            }
        }
    }
    return false;
}

var isValid = function(board, row, col, ch){
    for(let i=0; i<9; i++) {
        if(board[row][i] == ch) return false;
        if(board[i][col] == ch) return false;
    }

    let sumMatrixRow = Math.floor(row/3) * 3;
    let sumMatrixCol = Math.floor(col/3) * 3;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(board[sumMatrixRow+i][sumMatrixCol+j] === ch) return false;
        }
    }
    return true;
}
var solveSudoku = function(board) {
    solve(board, 0, 0);
};
const input = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

solveSudoku(input);
console.log(input)

console.log();
console.log();
console.log();

// method2 of sudoku solve
var solveSudoku = function(board) {
    const rowUsed = Array.from({ length: 9 }, () => Array(10).fill(false));
    const colUsed = Array.from({ length: 9 }, () => Array(10).fill(false));
    const boxUsed = Array.from({ length: 9 }, () => Array(10).fill(false));

    // Initialize tracking tables
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] !== '.') {
                const num = board[r][c] - "0";
                rowUsed[r][num] = true;
                colUsed[c][num] = true;
                boxUsed[(r / 3 | 0) * 3 + (c / 3 | 0)][num] = true;
            }
        }
    }

    function solve(r, c) {
        if (r === 9) return true;

        let nr = r, nc = c + 1;
        if (nc === 9) {
            nr = r + 1;
            nc = 0;
        }

        if (board[r][c] !== ".") {
            return solve(nr, nc);
        }

        let boxIndex = (r / 3 | 0) * 3 + (c / 3 | 0);

        for (let num = 1; num <= 9; num++) {
            if (!rowUsed[r][num] && !colUsed[c][num] && !boxUsed[boxIndex][num]) {

                // place
                board[r][c] = String(num);
                rowUsed[r][num] = colUsed[c][num] = boxUsed[boxIndex][num] = true;

                if (solve(nr, nc)) return true;

                // undo
                board[r][c] = ".";
                rowUsed[r][num] = colUsed[c][num] = boxUsed[boxIndex][num] = false;
            }
        }

        return false;
    }

    solve(0, 0);
};
solveSudoku(input);
console.log(input)

console.log();
console.log();
console.log();



//n queens placed
var solveNQueens = function(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const res = [];

    const isValid = (row, col) => {
        // check column
        for (let r = 0; r < row; r++) {
            if (board[r][col] === "Q") return false;
        }

        // check left diagonal
        for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
            if (board[r][c] === "Q") return false;
        }

        // check right diagonal
        for (let r = row - 1, c = col + 1; r >= 0 && c < n; r--, c++) {
            if (board[r][c] === "Q") return false;
        }

        return true;
    };

      const solve = (row) => {
          if (row === n) {
              res.push(board.map(r => r.join("")));
              return;
          }

          for (let col = 0; col < n; col++) {
              if (isValid(row, col)) {
                  board[row][col] = "Q";
                  solve(row + 1);
                  board[row][col] = ".";
              }
          }
      };

    solve(0);
    return res;
};


console.log(solveNQueens(4))


//word search in board m X n
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (r, c, idx) => {
        if (idx === word.length) return true; 
        if (r < 0 || c < 0 || r >= rows || c >= cols) return false;
        if (board[r][c] !== word[idx]) return false;

        let temp = board[r][c];
        board[r][c] = '#';  // mark visited

        const res = 
            dfs(r+1, c, idx+1) ||
            dfs(r-1, c, idx+1) ||
            dfs(r,  c+1, idx+1) ||
            dfs(r,  c-1, idx+1);

        board[r][c] = temp; // backtrack
        return res;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) { 
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
