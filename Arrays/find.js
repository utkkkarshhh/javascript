//Primitives

const numbers = [1, 2, 3, 4];

numbers.indexOf(); // If the item is not in the array then it 
// return -1

numbers.lastIndexOf(); //To find its latest postion in the array

//Finding if the element exists in the array
numbers.includes(1);

// Reference Type

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(function(course) {
    course.name === 'a';
});