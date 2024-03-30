// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223

/*
    1. Treat input as a number, reverse the number.
        Only worked with number input.
    2. Treat input as a string, use array.reverse() to reverse the string.
        It works with number and string.
*/
function reverseNumber(num){
    if(typeof num !== "number"){
        return "input is not a number.";
    }
    let res = 0;
    let pos = num > 0;
    let newNum = Math.abs(num);
    while(newNum>0){
        let cur = newNum %10;
        newNum = Math.floor(newNum/=10);
        res = res * 10 + cur;
    }
    return pos ? res : -res;
}

function reverseNumber2(num){
    let pos = true;
    if(num < 0){
        pos = false;
        num = Math.abs(num);
    }
    num += "";
    
    let arr = num.split("").reverse().join("");
    return pos ? arr : "-" + arr;
}
// console.log(reverseNumber2(987));
// console.log(reverseNumber2(-987));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
/*
    1. Compare the left and right character.
    2. Using Array.reverse(). Removing the spaces, then convert string to array and reverse,
        check if the reversed string are same as the one with no spaces.
*/
function checkPalindrome(s){
    let arr = s.split("");
    let left = 0, right = arr.length - 1;
    while(left < right){
        while(arr[left] == " "){
            left++;
        }
        while(arr[right] == " "){
            right--;
        }
        if(left >= right){
            return true;
        }
        if(arr[left] !== arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function checkPalindrome2(s){
    let ns = s.split(' ').join('');
    let revs = ns.split('').reverse().join('');
    return ns == revs;
}
// console.log(checkPalindrome2("asda ddsa"))
// console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("nurses run"));
// console.log(checkPalindrome("okay"));


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
/*
   Using two nested for loop, the first for loop is used to locate the start position,
    the second for loop is used to iterate the string and find all the combinations.
    Using set to remove duplicated combinations.
*/
function combination(s){
    let set = new Set();

    for(let i = 0 ; i < s.length; i++){
        let cur = s.charAt(i);
        set.add(cur);
        for(let j = i + 1; j < s.length; j++){
            cur += s.charAt(j);
            set.add(cur);
        }
    }

    return set;
}
// console.log(combination("doggg"));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabeticalOrder(s){
    let aidx = 'a'.charCodeAt(0)
    let arr  = Array(26).fill(0)
    for(let c of s.split("")){
        arr[c.charCodeAt(0) - aidx]++;
    }
    let res = "";
    for(let i = 0; i < 26; i++){
        let idx = arr[i];
        while(idx > 0){
            res += String.fromCharCode(i+aidx);
            idx--;
        }
    }
    return res;
}
// console.log(alphabeticalOrder("cbbba"));
// console.log(alphabeticalOrder("cwebmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function upperFirstLetter(s){
    let arr = s.split(" ");
    let res = "";
    for(let i of arr){
        res += i.charAt(0).toUpperCase() + i.substring(1) + " ";
    }
    return res.substring(0, res.length);
}
// console.log(upperFirstLetter("the quick brown fox"));
// console.log(upperFirstLetter("i am the quick brown fox"));


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
function longgestWrod(s){
    let arr = s.split(" ");
    let res = "";
    for(let a of arr){
        if(a.length > res.length){
            res = a;
        }
    }
    return res;
}
// console.log(longgestWrod("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function numberOfVowels(s){
    let res = 0;
    vowels = ['a','e','i','o','u'];
    for(let c of s){
        if(vowels.includes(c)) res++;
    }
    return res;
}
// console.log(numberOfVowels("The quick brown fox"));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function isPrime(n){
    let m = Math.sqrt(n);
    for(let i = 2; i <= m; i++){
        if(n % i == 0){ return false;}
    }
    return true;
}
// console.log(isPrime(11));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.
function argType(s){
    return typeof s ;
}
// console.log(argType(1));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n){
    let res = [];
    for(let i = 0; i < n; i++){
        let cur = Array(n).fill(0);
        cur[i] = 1;
        res.push(cur);
    }
    return res;
}
// console.log(identityMatrix(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function findLowGreat(a){
    if(a.length <= 1){
        return null;
    }
    a.sort((a,b)=>a-b);
    res = [];
    res.push(a[1]);
    res.push(a[a.length - 2]);
    return res;
}
// console.log(findLowGreat([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function isPerfectNumber(n){
    let factors = computeFactors(n);
    let total = 0;
    for(let f of factors){
        total += f;
    }
    return n == (total/2);
}
// console.log(isPerfectNumber(496));

// 13. Write a JavaScript function to compute the factors of a positive integer.

function computeFactors(num) {
    let res = [];

    for (let i = 1; i <= num; i++) {
        if(num % i === 0)
            res.push(i); 
    }

    return res;
}
// console.log(computeFactors(15));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function amountTocoins(n, coins){
    let res = [];
    let idx = 0;
    coins.sort((a,b)=>b-a);
    while(n > 0 && idx < coins.length){
        while(n >= coins[idx]){
            res.push(coins[idx]);
            n -= coins[idx];
        }
        idx++;
    }
    return res;
}
// console.log(amountTocoins(99, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 
function exponent(b, n){
    return Math.pow(b, n);
}
// console.log(exponent(3,3));


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqueCharacters(s){
    let arr = s.split("");
    let set = new Set();
    arr.forEach(i => set.add(i));
    return [...set].join("");
}
// console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function occurrencesOfLetter(s){
    let aidx = 'a'.charCodeAt(0)
    let arr  = Array(26).fill(0)
    for(let c of s.split("")){
        arr[c.charCodeAt(0) - aidx]++;
    }
    let res = [];
    for(let i = 0; i < 26; i++){
        if(arr[i] > 0){
            let cur = [String.fromCharCode(i+aidx), arr[i]];
            res.push(cur);
        }
    }
    return res;
}
// console.log(occurrencesOfLetter("aabb"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.
function binarySearch(arr, target){
    let left = 0, right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}
// console.log(binarySearch([1,2,3,4,5,6,7,8,9], -10));


// 19. Write a JavaScript function that returns array elements larger than a number. 
function getLargerElements(arr, num){
    let res = [];
    for(let i of arr){
        if(i > num) res.push(i);
    }
    return res;
}
// console.log(getLargerElements([1,2,3,4,5,6,7,8,9], 5));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomString(n){
    if(n < 0){
        return "String length should be greater than 0.";
    }
    let res = "";
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let range = s.length;
    for(let i = 0; i< n; i++){
        res+=s.charAt(Math.floor(Math.random() * range));
    }
    return res;
}
// console.log(randomString(5));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function FixedLenthCombination(arr, n){
    let res = [];

    function backtracking(idx, cur){
        if(cur.length === n){
            res.push(cur.slice());
            return;
        }
        for(let i = idx; i < arr.length; i++){
            cur.push(arr[i]);
            backtracking(i+1,cur);
            cur.pop();
        }
    }

    backtracking(0,[]);
    return res;
}
// console.log(FixedLenthCombination([1,2,3,4],3));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function numOfOccurrences(s, l){
    let res = 0;
    let arr = s.split("");
    for(let c of arr){
        if(c === l) res++;
    }
    return res;
}

// console.log(numOfOccurrences('microsoft.com', 'o' ));


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function notRepeatedCharater(s){
    let set = new Set();
    let visited = new Set();
    for(let i = s.length - 1; i >= 0; i--){
        let cur = s.charAt(i);
        if(set.has(cur)){
            set.delete(cur);
        }else{
            if(!visited.has(cur)){
                visited.add(cur);
                set.add(cur);
            }
        }
    }
    if(set.size === 0){
        return "All characters are repeated."
    }
    return [...set][set.size - 1];
}
// console.log(notRepeatedCharater("ieiabacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubblSort(arr){
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = 0; j < len - i - 1; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubblSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountryName(arr){
    arr.sort((a,b) => b.length - a.length);
    return arr[0];
}
// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 
function longestSubstring(s){
    let res = "";
    let set = new Set();
    let left = 0;
    for(let i = 0; i < s.length; i++){
        let curChar = s.charAt(i);
        if(!set.has(curChar)){
            set.add(curChar);
        }else{
            if(res.length < s.substring(left,i)) res = s.substring(left,i);
            while(set.has(curChar)){
                set.delete(s.charAt(left));
                left++;
            }
            set.add(curChar);
        }
    }
    if(s.length - left > res.length) res = s.substring(left, s.length);
    return res;
}
// console.log(longestSubstring("abcaed"));
// console.log(longestSubstring("xzcvbn"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.
function longestPalindrome(s){
    let res = "";
    function findPalindrome(i,j){
        while(i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)){
            i--;
            j++;
        }
        if(j - i - 2 > res.length){
            res = s.substring(i+1, j);
        }
    }

    for(let i = 0; i < s.length -1; i++){
        findPalindrome(i,i);
        findPalindrome(i,i+1)
    }
    return res;
}
// console.log(longestPalindrome("babbbbb"));


//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function add(a, b){
    return a + b;
}
function calculate(f, a, b){
    return f(a,b);
}
// console.log(calculate(add, 1, 2));

//29. Write a JavaScript function to get the function name. 
function getFunctionName(f){
    if(typeof f === "function"){
        return f.name;
    }else{
        return "Not a function";
    }
}
// let a = 0;
// console.log(getFunctionName(a));