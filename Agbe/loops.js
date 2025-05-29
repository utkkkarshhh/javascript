// // Loops in JavaScript
const fruits = ["apple", "banana", "grapes", "mango"];
const student = {
  name: "Utkarsh",
  roll: 20,
  subject: "Computer Science",
};

// // For Loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// // For Each
fruits.forEach((fruit) => {
  console.log(fruit);
});

// // For In
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// // For Of
for (let fruit of fruits) {
  console.log(fruit);
}

// While Loop
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Do While

let j = 0;
do {
  console.log(fruits[j]);
  j++;
} while (j < fruits.length);
