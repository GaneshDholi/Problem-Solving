// 383. Ransom Note
let ransomNote = "abscs", magazine = "bjdkfsjksklavc";
console.log(RansomeNote(ransomNote, magazine));

function RansomeNote(ransomNote, magazine) {
    let magazineMap = new Map();
    let ransomCount = ransomNote.length;

    for (let i = 0; i < magazine.length; i++) {
        magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1);
    }
    for (let i = 0; i < ransomCount; i++) {
        if (!magazineMap.has(ransomNote[i]) || magazineMap.get(ransomNote[i]) == 0) {
            return false;
        }
        magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1);
    }
    return true;
}



console.log();
console.log();
console.log();


//practive
let Mainsentence = "YHGTREFDSWQAUJIKOLPMNBVCXZ";
let sentence = Mainsentence.toLowerCase();
let arrSet = new Array(26);
let FreqSet = new Set();
let ascii = new Array(26);
for (let i = 0; i < 26; i++) {
    ascii[i] = String.fromCharCode(i + 97)
}
if (sentence.length !== ascii.length) {
    console.log("not Anagram")
} else {
    for (let i = 0; i < sentence.length; i++) {
        let freqset = sentence.charCodeAt(i);
        FreqSet.add(String.fromCharCode(freqset));
    }

    if (FreqSet.size != ascii.length) {
        console.log("not Anagram")
    } else {
        console.log("anagram")
    }
}


console.log();
console.log();
console.log();

let jewels = "aA", stones = "aAAbbbb";

let set = new Set(jewels);
let count = 0;

for (let i = 0; i < stones; i++) {
    let ch = stones.charCodeAt(i)
    if (set.has(ch)) {
        count++;
    }
}

console.log(count)


let n = 100;
let setHappy = new Set();
let main = saperateAndSum(String(n));

// while (main != 1) {
//     console.log(main);

//     setHappy.add(n);
//     n = main;

//     main = saperateAndSum(String(n));
//     if (setHappy.has(n)) {
//         console.log("Not a Happy number");
//     }
// }
// if (main === 1) {
//     console.log("Happy number");
// }

function saperateAndSum(n) {
    let sum = 0;
    let m = Number(n);
    for (let i = 0; i < n.length; i++) {
        let q = n % 10;
        sum += q*q;
        m = Math.floor(n / 10);
    }
    return sum
}
// console.log(String(n).length)

console.log();
console.log();
console.log();


//map & sets
function isAnagram(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    let map = new Map();

    for (let i = 0; i < a.length; i++) {
        map.set(a[i], (map.get(a[i]) || 0) + 1);
    }

    for (let i = 0; i < b.length; i++) {
        if (!map.has(b[i])) {
            return false;
        }
        map.set(b[i], map.get(b[i]) - 1);
        console.log(map)
    }

    for (let value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}

let str1 = "Saransh";
let str2 = "Sraansh";

if (isAnagram(str1, str2)) {
    console.log("The two strings are anagrams of each other");
} else {
    console.log("The two strings are not anagrams of each other");
}

console.log();
console.log();
console.log();


// 2
function uniqCharachter(s) {
  let charCountMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }
  console.log(charCountMap.get(s[0]))
  if (charCountMap.get(s[0]) <= 1) {
    return true;
  } else {
    return false;
  }
  
}

console.log(uniqCharachter("leetcode"));
console.log();
console.log();

//3
const groupAnagrams = function(strs) {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }

        anagramMap.get(sortedStr).push(str);
    }

    return Array.from(anagramMap.values());
};  

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

console.log();
console.log();
console.log();

//4
const topKFrequent = (nums, k) => {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  console.log(freqMap)
  const sortedByFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  return sortedByFreq.slice(0, k).map(([num]) => num);
};


console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log();
console.log();
console.log();



//5
const twoSum = (nums, target) => {
  const numMap = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9))

console.log();
console.log();
console.log();

//6
function subarraySum(nums, k) {
    let count = 0;
    let currentSum = 0;
    const prefixSums = new Map(); 

    prefixSums.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (prefixSums.has(currentSum - k)) {
            count += prefixSums.get(currentSum - k);
        }

        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
    }

    return count;
}

console.log(subarraySum([1,1,1], 2))

console.log();
console.log();
console.log();


//7
function subarraysDivByK(nums, k) {
    let count = 0;
    let prefixSum = 0;
    const remainderMap = new Map();
    remainderMap.set(0, 1);

    for (let num of nums) {
        prefixSum += num;
        let remainder = (prefixSum % k + k) % k;

        if (remainderMap.has(remainder)) {
            count += remainderMap.get(remainder);
            remainderMap.set(remainder, remainderMap.get(remainder) + 1);
        } else {
            remainderMap.set(remainder, 1);
        }
    }

    return count;
}

console.log(([4,5,0,-2,-3,1],5))

console.log();
console.log();
console.log();

//8
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map(); 

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }
        

        charMap.set(char, i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

console.log();
console.log();
console.log();

//11
function containsNearbyDuplicate(nums, k) {
  const numMap = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numMap.has(num) && i - numMap.get(num) <= k) {
      return true; 
    }
    numMap.set(num, i);
    console.log(numMap, i , numMap.get(num))
  }

  return false; 
}

console.log(containsNearbyDuplicate([1,2,3,1], 3))

console.log();
console.log();
console.log();

//13
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToT = new Map();
    const tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (sToT.has(charS) && sToT.get(charS) !== charT) {
            return false;
        }
        if (tToS.has(charT) && tToS.get(charT) !== charS) {
            return false;
        }

        sToT.set(charS, charT);
        tToS.set(charT, charS);
    }

    return true;
}

console.log(isIsomorphic("egg", "sge"))

console.log();
console.log();
console.log();


//leet code

const canConstruct = (ransomNote, magazine) => {
    const charCounts = {};
    for (const char of magazine) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!charCounts[char]) {
            return false;
        }
        charCounts[char]--;
    }

    return true;
};

console.log(canConstruct("aaa","aaaa"));

console.log();
console.log();
console.log();


var wordPattern = function(pattern, s) {
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (charToWord.has(char)) {

            if (charToWord.get(char) !== word) {
                return false;
            }
        } else {
           
            if (wordToChar.has(word)) {
                return false;
            }
            charToWord.set(char, word);
            wordToChar.set(word, char);
        }
    }

    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"))
console.log();
console.log();
console.log();

function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestSequence = 0;

    for (const num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentSequenceLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentSequenceLength++;
            }

            longestSequence = Math.max(longestSequence, currentSequenceLength);
        }
    }

    return longestSequence;
}

console.log(longestConsecutive([100,4,200,1,3,2]))