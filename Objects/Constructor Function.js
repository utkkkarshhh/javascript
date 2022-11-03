//  Use Pascal Notation for Constructor Functions
// Pascal Notation -> OneTwoThreeFour (First Word is always normal case)

// Constructor Function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw");
    }
}

const circle = new Circle(1);