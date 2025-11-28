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



function nums(n){
  if(n==1) {
    console.log(1) 
    return;
  };
  console.log(n);
  nums(n-1);
}

nums(4)

console.log();
console.log();
console.log();


function fibonacci(n){
  if(n==1||n==0){
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(4));

console.log();
console.log();
console.log();


function BinarySearch(arr,target,st,en){
  if(st > en){
    return -1;
  }
  let mid = Math.floor((st+en)/2);

  if(arr[mid] === target) return mid;

  if(target > arr[mid]) return BinarySearch(arr, target, mid+1, en);
  if(target < arr[mid]) return BinarySearch(arr, target, st, mid-1);
}

console.log(BinarySearch([1,2,3,5,7,9,20], 9, 0, 6));


console.log();
console.log();
console.log();

function subset(n, ans, i){
  if(i === n.length){
    console.log(ans);
    return;
  }


  //include
  ans.push(n[i]);
  subset(n, ans, i+1);

  //backtracking Step
  ans.pop();

  //exclude 
  subset(n, ans, i+1)
}

function main(n){
  let ans = [];
  subset(n, ans, 0);
  return 0;
}

main([1,2,3])

console.log();
console.log();
console.log();


var Subset = function(nums, ans, i, curr){
    if (i === nums.length){
        curr.push([...ans]);
        return;
    }

    ans.push(nums[i]);
    Subset(nums, ans, i+1, curr);
    ans.pop();

    let idx = i+1;
    while(idx < nums.length && nums[idx] === nums[i]) idx++;

    Subset(nums, ans, idx, curr);
}

var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let curr = [];
    let ans = [];
    Subset(nums, ans, 0, curr);
    return curr;
};

console.log(subsetsWithDup([1,2,3]))



console.log();
console.log();
console.log();


function swap(nums, i ,j){
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

var getPermutation = function(nums, idx, ans) {
  if(idx === nums.length) {
    ans.push([...nums]);
    return;
  }

  for(let i = idx; i < nums.length; i++){
    swap(nums, idx , i);
    getPermutation(nums, idx+1, ans);

    //backtracking
    swap(nums, idx, i);
  }
} 



var permutation = function(nums) {
  let ans = [];
  getPermutation(nums, 0, ans);
  return ans;
}

console.log(permutation([1,2,3]));