const numbers = [1, 2, 3, 4];

// Solution 1

numbers = []; //Only if the main array does not have multiple references.

// Solution 2
number.length = 0;

// Soltion 3
numbers.splice(0, numbers.length);

// Solution 4 (Pop Mehtod)
while(numbers.length > 0)
numbers.pop();