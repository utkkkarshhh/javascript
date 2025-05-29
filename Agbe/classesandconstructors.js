class Student {
  name = "";
  age = 0;

  constructor(name, age) {
    // Constructor to intialise the Student
    this.name = name; // This refers to the global object.
    this.age = age;
  }

  getStudentDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  //Methods to update the values
  //   updateName(name) {
  //     this.name = name;
  //   }

  //   getName() {
  //     return this.name;
  //   }

  //Getter Function to get the values.
  get name() {
    return this.name;
  }

  //Setter Function to set the value.
  set name(Name) {
    this.name = name;
  }
}

class Department extends Student {
  // Inheritance
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  getDepartment() {
    return `${this.name} is a student of ${this.department} department!`;
  }
}

const student1 = new Department("Utkarsh", 20, "Computer Science"); //Object creation, class instance creation
student1.name = "Ram";
console.log(student1.getDepartment());
