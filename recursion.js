let n = 5, k = 2;
// console.log(Joseph(n, k));

// function Joseph(n, k) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   console.log(arr)

//   let i = 0;
//   while (arr.length > 1) {
//     i = (i + k - 1) % arr.length;
//     console.log(i)
//     arr.splice(i, 1);
//     console.log(arr)
//   }

//   return arr[0];
// }


var findTheWinner = function (n, k) {
  function josephus(n, k) {
    if (n === 1) return 0;
    return (josephus(n - 1, k) + k) % n;
  }

  return josephus(n, k) + 1;
}

console.log(findTheWinner(n, k))


var solve = function (nums, ans, curr, i) {
  if (i === nums.length) {
    ans.push([...curr]);
    return
  }
  //pick
  curr.push(nums[i]);
  solve(nums, ans, curr, i + 1);
  curr.pop()
  //not pick
  solve(nums, ans, curr, i + 1);
}

var subsets = function (nums) {
  let curr = [];
  let ans = [];
  solve(nums, ans, curr, 0);
  return ans;
};

console.log(subsets([1, 2, 3]))

//2
var solve = function(nums, ans, curr, index){
    if(index === nums.length){
        if (curr.length != 0) {
            ans.push(curr);
        }
        return;
    }

    // not pick
    solve(nums, ans, curr, index + 1);

    // pick
    solve(nums, ans, curr + nums[index], index + 1);
}

var subsets = function (nums) {
  let curr = "";
  let ans = [];
  solve(nums, ans, curr, 0);
  return ans;
};
let a = subsets("abc").sort()
console.log(a);

//3 permutation
var swap = function(nums, i , j){
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

var solveing = function(nums, ans, curr, i){
  if (i === nums.length-1){
    ans.push([...nums]);
    return
  }

  for(let j = i; j < nums.length; j++){
    swap(nums, i , j);
    solveing(nums, ans, curr, i+1);
    swap(nums, i , j)
  }
}

var permutation = function(nums){
  let curr = [];
  let ans = [];
  solveing(nums, ans, curr, 0);
  return ans;
}

console.log(permutation([1,2,3]))