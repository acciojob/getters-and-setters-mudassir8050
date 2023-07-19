// //complete this code
// class Person {}

// class Student extends Person {}

// class Teacher extends Person {}

// // Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;


class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Example usage:
const person = new Person("John", 25);
console.log(person.name); // Output: John
person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 20);
console.log(student.name); // Output: Alice
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 35);
console.log(teacher.name); // Output: Bob
teacher.teach(); // Output: Bob is teaching
