const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Old Method

// const another = {};
// for (let key in circle)
// another [key] = circle[key];

// New Approach

// const another = Object.assign({
//     color: 'yellow'
// }, circle);  //Object.assign Method
// console.log(another);

// Spread Operator Approach

const another = { ...circle };
console.log(another);