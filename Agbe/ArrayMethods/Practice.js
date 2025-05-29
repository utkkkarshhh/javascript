// Problem 1: Filtering Even and Odd Numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const separateEvenAndOdd = (array) => {
//   const evens = array.filter((item) => item % 2 === 0);
//   const odds = array.filter((item) => item % 2 !== 0);
//   return { evens: evens, odds: odds };
// };

// const result1 = separateEvenAndOdd(numbers);
// console.log(result1);

// Problem 2: Summing Positive Numbers
const numbers2 = [-10, -5, 0, 5, 10];

// const summingAllPositives = (array) => {
//   return array
//     .filter((item) => item > 0)
//     .reduce((sum, currentValue) => sum + currentValue, 0);
// };

// console.log(summingAllPositives(numbers2));

// Problem 3: Filtering and Summing Even Numbers

// const sumOfAllEven = (array) => {
//   return array
//     .filter((item) => item % 2 === 0)
//     .reduce((sum, currentValue) => {
//       return sum + currentValue;
//     }, 0);
// };

// console.log(sumOfAllEven(numbers));

// Problem 4: Counting Occurrences

// const countingOccurrences = (array) => {
//   return array.reduce((acc, curr) => { acc[curr] = (acc[curr] || 0) + 1; return acc; }, 0);};

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// console.log(countingOccurrences(words));

// Problem 5: Filtering and Reducing Objects
// Write a function that takes an array of objects and returns the total value of a specified property from objects that meet a certain condition.

// const products = [
//   { name: "Product 1", price: 10, inStock: true },
//   { name: "Product 2", price: 20, inStock: false },
//   { name: "Product 3", price: 15, inStock: true },
//   { name: "Product 4", price: 25, inStock: false },
//   { name: "Product 5", price: 30, inStock: true },
// ];

// const totalValueInStock = (arr) => {
//   return arr
//     .filter((x) => x.inStock === true)
//     .reduce((acc, curr) => {
//       return acc + curr.price;
//     }, 0);
// };

// console.log(totalValueInStock(products));

// Problem 6: Finding the Maximum Number
// Write a function that takes an array of numbers and returns the maximum number. Use reduce to accomplish this.

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 100];

// const findTheMax = (arr) => {
//   return arr.reduce((acc, curr) => {
//     if (curr > acc) return curr;
//     return acc;
//   }, 0);
// };

// console.log(findTheMax(arr));

// Problem 7: Filtering and Summing Ages
// Write a function that takes an array of objects representing people and returns the sum of ages of people who are older than a specified age.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Dave", age: 40 },
// ];

// const sumOfBiggerThan = (arr, number) => {
//   return arr
//     .filter((item) => item.age > number)
//     .reduce((acc, curr) => {
//       return acc + curr.age;
//     }, 0);
// };

// console.log(sumOfBiggerThan(people, 30));

// Problem 8: Average Length of Strings
// Write a function that takes an array of strings and returns the average length of the strings.

// const strings = ["hello", "world", "JavaScript", "is", "fun"];

// const averageLength = (arr) => {
//   const totalLength = arr.reduce((acc, curr) => acc + curr.length, 0);
//   return totalLength / arr.length;
// };

// console.log(averageLength(strings));

// Problem 9: Grouping by Property
// Write a function that takes an array of objects and returns an object that groups the objects by a specified property.

// const people = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 30, city: "San Francisco" },
//   { name: "Charlie", age: 25, city: "New York" },
//   { name: "Dave", age: 30, city: "San Francisco" },
// ];

// const groupByProperty = (arr, property) => {
//   return arr.reduce((acc, curr) => {
//     const key = curr[property];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(curr);
//     return acc;
//   }, {});
// };

// console.log(groupByProperty(people, "name"));
