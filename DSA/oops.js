// Class named Person with a constructor, a constructor needs to be added all the time

class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// Object Instance created to access the constructor function
const person1 = new Person("Utkarsh", 2001);

//Class named Circle with formulas related to circle : Base Class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Class named Cylinder with formulas related to cylinder : Derived Class
class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius); // Call the constructor of the base class
    this.height = height;
  }

  getVolume() {
    return this.getArea() * this.height;
  }
}

// Object instances
let Circle1 = new Circle(10);
let Circle2 = new Circle(20);

let Cylinder1 = new Cylinder(5, 10);
let Cylinder2 = new Cylinder(8, 15);

// Polymorphism:
console.log("Circle1 Circumference:", Circle1.getCircumference());

// Inherited class's object instance using parent's class function
console.log("Cylinder1 Circumference:", Cylinder1.getCircumference());

console.log("Circle2 Area:", Circle2.getArea());

// It gets the πr²h function from the parent class named getArea() and multiply it with the height of cylinder
console.log("Cylinder2 Volume:", Cylinder2.getVolume());

// _________ STATIC METHOD ___________
//Static Methods - They are attached to the class and not to the instance, the can be called directly instead of creating an instance

class Maths {
  static add(x, y) {
    return x + y;
  }
}

console.log(Maths.add(10, 50));

// OOPS:

// 1. Class and Object:
// Classes act as blueprints for creating objects, and objects are instances of these classes.

// 2. Constructor:
// Constructors are special methods called when an object is created. They initialize the object's state.

// 3. Encapsulation:
// Encapsulation refers to bundling data (properties) and methods that operate on that data within a single unit (class).

// 4. Methods:
// Methods represent the behavior of the objects. They perform operations and provide functionality.

// 5. Inheritance:
// Inheritance allows a class (Cylinder) to inherit properties and methods from another class (Circle), promoting code reuse and creating an "is-a" relationship.

// 6.Polymorphism:
// Polymorphism allows objects of different types to be treated as objects of a common type. In this case, common method names are used for both base and derived classes.
