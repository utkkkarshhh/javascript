// Task: Geometric Shapes

class Shape {
  #name;
  #color;

  constructor(name, color) {
    this.#name = name;
    this.#color = color;
  }

  getName() {
    return this.#name;
  }

  getColor() {
    return this.#color;
  }

  displayInfo() {
    console.log(`This is a ${this.getColor()} ${this.getName()}`);
  }
}

class Circle extends Shape {
  #radius;

  constructor(color, radius) {
    super("Circle", color);
    this.#radius = radius;
  }

  getRadius() {
    return this.#radius;
  }

  displayInfo() {
    console.log(
      `This is a ${this.getColor()} circle with radius ${this.getRadius()}.`
    );
  }
}

class Rectangle extends Shape {
  #height;
  #width;

  constructor(color, height, width) {
    super("rectangle", color);
    this.#width = width;
    this.#height = height;
  }

  getWidth() {
    return this.#width;
  }

  getHeight() {
    return this.#height;
  }

  displayInfo() {
    console.log(
      `This is a ${this.getColor()} rectangle with width ${this.getWidth()} and height ${this.getHeight()}`
    );
  }
}

// 9. Create instances of each class and demonstrate the use of methods and properties.

const redCircle = new Shape("Circle", "Red");
const blueCircle = new Circle('Blue', 10)
const yellowRectangle = new Rectangle('Yellow', 10, 20);

redCircle.displayInfo(); 
blueCircle.displayInfo(); 
yellowRectangle.displayInfo(); 



