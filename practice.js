// 1. Two Sum: Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// const twoSum = (array, target) => {
//     for(let i = 0; i <array.length; i++){
//         for(let j = 0; j<array.length; j++){
//             if(array[i]+ array[j] == target){
//                 return [i,j];
//             }
//         }
//     }
// }

// const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(twoSum(array, 40));


// 2. Reverse a String: Write a function that reverses a string.

// const reverseAString = (string) => {
//     return string.split('').reverse().join('');
// }

// const string = "Utkarsh Bhardwaj";
// console.log(reverseAString(string));


// 3. Check Palindrome: Write a function to check if a given string is a palindrome.

// const checkPalindrome = (string) => {
//     let low = 0;
//     let high = string.length - 1;

//     string = string.toLowerCase();

//     while(low < high){
//         if(string[low] != string[high]){
//             return false;
//         }
//         low++;
//         high--;
//     }
//     return true;
// }

// const namea = "Raar";
// console.log(checkPalindrome(namea));

// 4. Anagram Check: Write a function to check if two strings are anagrams of each other.

// const anagramCheck = (string1, string2) => {
//     if(string1.length != string2.length){
//         return false;
//     }
//     const sortedStr1 = string1.split('').sort().join('');
//     const sortedStr2 = string2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

// console.log(anagramCheck("ram", "silent"));

// 5. FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

// const fizzBuzz = () => {
//     for(let i = 0; i < 100; i++){
//         if(i% 3 == 0 && i% 5 == 0){
//             console.log("FizzBuzz");
//         }
//         else if(i% 3 == 0){
//             console.log("Fizz");
//         }
//         else if(i % 5 == 0){
//             console.log("Buzz");
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

// 6. Find Duplicates: Write a function that takes an array of integers and returns an array of duplicates.
// const returnDuplicates = (array) => {
//     const seen = new Set();
//     const duplicates = new Set();

//     for(let num of array){
//         if(seen.has(num)){
//             duplicates.add(num);
//         }
//         else{
//             seen.add(num);
//         }
//     }

//     return Array.from(duplicates);
// }

// console.log("Duplicates: " + returnDuplicates([10, 10, 20, 30, 20, 40, 30, 40, 50, 40, 60]));


// 7. Flatten Array: Write a function to flatten a nested array (e.g., [1, [2, [3, 4], 5]] should become [1, 2, 3, 4, 5]).

// const flattenArray = (arr) => {
//     let result = [];
    
//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             result.push(...flattenArray(element));
//         } else {
//             result.push(element);
//         }
//     });
    
//     return result;
// };

// console.log(flattenArray([1, [2, [3, 4], 5]]));


// 8. Deep Clone: Write a function to deep clone an object.

// const deepClone = (obj) => {
//     if(obj === null || typeof obj !== 'object'){
//         return obj;
//     }

//     let clone;
//     if(Array.isArray(obj)){
//         clone = [];
//     }
//     else{
//         clone = {};
//     }

//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             clone[key] = deepClone(obj[key]);
//         }
//     }
//     return clone;
// }

// const myObject = {
//     "name" : "Utkarsh",
//     "age" : 22,
//     "country" : "India",
//     "address": {
//         "city": "Bahadurgarh",
//         "zipcode": 124507
//     },
//     "hobbies": ["reading", "travelling"]
// };

// console.log(deepClone(myObject));


// 9. Remove Duplicates from Array: Write a function to remove duplicates from an array.

// const removeDuplicates = (arr) => {
//     const uniqueArray = new Set(arr);
//     return Array.from(uniqueArray);   
// }

// console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5, 6, 2, 4, 2]));

// 10. Find Intersection: Write a function to find the intersection of two arrays.

// const findIntersection = (arr1, arr2) => {
    
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
    
//     const intersection = [];
    
//     for(let value of set1){
//         if(set2.has(value)){
//             intersection.push(value);
//         }
//     }
    
//     return intersection;
// }

// console.log(findIntersection([1, 2, 4, 1, 4, 1], [3, 5, 4, 2, 5, 2]));



// 11. Implement bind: Write your own implementation of the bind function.



// 12. Debounce Function: Write a debounce function that delays invoking a function until after a specified time has elapsed since the last time it was invoked.

// 13. Throttle Function: Write a throttle function that ensures a function is called at most once in a specified time period.

// 14. LRU Cache: Implement a Least Recently Used (LRU) cache.

// 15. Promise All: Write your own implementation of Promise.all.

// 16. Event Emitter: Implement an Event Emitter class in JavaScript.

// 17. Find Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// 18. Longest Common Prefix: Write a function to find the longest common prefix string amongst an array of strings.

// 19. Max Subarray Sum: Write a function to find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// const maxSubarraySum = (arr, target) => {

// }

// 20. Binary Search: Implement binary search in JavaScript.

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end) {
        const middle = Math.floor((start + end) / 2);
        if(arr[middle] == target){
            return middle;
        }
        else if(arr[middle] > target){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
    }
    return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));