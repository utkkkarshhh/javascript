const array = [10, 20, 30, 40, 50];

const multiplyByTwo = (x) => {
  return x * 2;
};

const newArray = array.map(multiplyByTwo);

// Define a funciton here itself.
const newArray1 = array.map((x) => x + 1);

console.log(newArray);
console.log(newArray1);
