// function createCircle (radius) {   // Object in a Function ''
//   const circle = {
//     radius: radius,
//     location: {
//       x: 1,
//       y: 1
//     },
//     isVisible: true,
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }


// Factory Function 

function createCircle (radius) {  
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2)