const person = [
  {
    name: "Andrew",
    nationality: "American",
    food: "Mac and Cheese",
  },
  {
    name: "Rajesh",
    nationality: "Indian",
    food: 'Pav Bhaji',
  }
];

// Call
// Calls a method with specfic value
// The call method allows you to call a function with a specified this value and arguments provided individually.
const greet = function(){
    console.log(this.name + " is an " + this.nationality);
}

greet.call(person[0], person[0]);

// Bind
// Creates a new method with specfic value
// The bind method creates a new function that, when called, has its this value set to the provided value. 
// It also allows you to predefine some arguments.

const favouriteFood = function(){
    console.log(this.name + "'s favourite food is " + this.food);
}

const andrewFood = favouriteFood.bind(person[0], person[0]);
const rajeshFood = favouriteFood.bind(person[1], person[1]);

andrewFood();
rajeshFood();

// Apply
// Similar to Call but instead takes an array of arguments
// The apply method is similar to call, but it takes an array of arguments instead of listing them individually.

const food = ["Dhokla", "Sambhar", "Vada Pav"];

const myFood = function(){
    console.log(`${this.name} likes to eat ${food.join(', ')}` )
}

myFood.apply(person[0], food);
