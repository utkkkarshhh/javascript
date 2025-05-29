const arr = [10, 20, 30, 40, 50];

// Push -> Adds one or more elements to the end of an array and returns the new length of the array | element1, element2|
// const result = arr.push(10, 20);

// Pop -> Removes the last element from an array and returns that element | No Params
// const result = arr.pop();

// Shift -> Removes the first element from an array and returns that element. This method changes the length of the array. | No Params
// const result = arr.shift();

// Unshift -> Adds one or more elements to the beginning of an array and returns the new length of the array | element1, element2|
// const result = arr.unshift(10, 20);

// Concat -> Combines two or more arrays and returns a new array.
// const arr2 = [60, 70];
// const result = arr.concat(arr2);

// Slice -> Returns a shallow copy of a portion of an array into a new array object | (start, end)
// const result = arr.slice(0, 2);

// Splice -> Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. (startIndice, deleteItems)
// const result = arr.splice(0, 2); // -> Returns deleted Items | Changes original Array

// Map -> Will return a new array
// const result = arr.map((item, indice) => {
//   return item * 10;
// }); // -> Returns a new array

//forEach -> Executes a provided function once for each array element.
// const result = arr.forEach((item) => {
//   item * 2;
// }); // -> Returns undefined | Only logs results

// Reduce -> Will return a accumulated value where you can use an initail value
// const result = arr.reduce((total, currentValue)=>{
//    return currentValue + total;
// }, 0)

// Filter -> Creates a new array with all elements that pass the test implemented by the provided function.
// const result = arr.filter((item, indice) => {
//   return item <= 20;
// });

// IndexOf -> Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const result = arr.lastIndexOf(20);

// LastIndexOf -> Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// const result = arr.lastIndexOf(20);

// Find -> Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// const result = arr.find((item, indice) => {
//   return item > 30; // Returns first element that satisfies the provided testing function
// });

// findIndex() -> Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.
// const result = arr.findIndex((item, indice) => {
//     return item > 30; // Returns first element that satisfies the provided testing function
// });

console.log(result, arr);
