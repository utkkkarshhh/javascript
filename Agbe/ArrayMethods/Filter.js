//Filter
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// It doesn't modify the original array but returns a new array.

// -> It creates a new array
// -> It does not modify the original array
// -> The function which refines the  array is a required argument.

const divisibleByTen = (x) => {
  return x % 10 === 0;
};

const array = [10, 20, 30, 40, 50];

const filteredArray = array.filter((item) => divisibleByTen(item));

console.log(filteredArray);

// First Argument is the iterable, the current element on which you want to apply the filter function.


