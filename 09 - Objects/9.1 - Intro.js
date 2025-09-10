
// Objects Datatype:
// An object is a non-primitive datatype in JavaScript.
// It is used to store collections of key-value pairs.
// Keys are always strings (or symbols), and values can be any datatype (primitive or non-primitive).
// Objects are containers that group related data and behavior together.

const person = {
  name: "John",
  age: 25,
  isStudent: false,
  greet: function () {
    console.log("Hello!");
  }
};
// name, age, isStudent, greet → keys (also called properties).
// "John", 25, false, function(){...} → values.



// Ways of object creation:
// (a) Object Literal (most common)
const obj = { key: "value" };

// (b) Using new Object()
const obj1 = new Object();
obj1.key = "value";

// (c) Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Alice", 30);

// (d) ES6 class
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}
const c1 = new Car("Tesla");

// (e) Object.create()
const proto = { greet() { console.log("Hi"); } };
const obj2 = Object.create(proto);
obj2.name = "Bob";



// Accessing and modifying object properties:
// Inside an object method, this refers to the object.
const bioData = {
  fName: "Gurudeep",
  lName: "Pandey",
  age: 20,
  "college name": "GEC Kaimur",
  greet() {
    console.log(`Hello ${this.fName} ${this.lName}`)
  }
}
// Bracket notation is useful when property names are dynamic or contain spaces/special chars.
console.log(bioData.fName);     // dot notation
console.log(bioData.lName);
// console.log(bioData.college name);
console.log(bioData["college name"]);   // bracket notation
bioData.greet()

bioData.skills = ["node", "JS", "C++"]  // add new property
bioData.age = 21        // update
delete bioData["college name"]      // remove
console.log(bioData)



// Objects are reference type:
// Objects are stored in heap memory and assigned by reference, not by value.
const a = { name: "Sam" };
const b = a;   // b points to same object
b.name = "Alex";
console.log(a.name); // "Alex"



// Nested Object:
const student = {
  name: "John",
  marks: {
    math: 90,
    science: 85
  }
};
console.log(student.marks.math); // 90



// What is method in object ?
// A method is just a function stored in an object.
const calculator = {
  add: function (a, b) { return a + b; },
  sub(a, b) { return a - b; }  // shorthand
};
console.log(calculator.add(5, 3)); // 8



// Object Comparison:
// Objects are compared by reference, not by value.
const obj3 = { x: 1 };
const obj4 = { x: 1 };
const obj5 = obj3
console.log(obj3 === obj4); // false
console.log(obj3 === obj5); // true
console.log(obj1 === obj1); // true
console.log(obj3.constructor);  // [Function Object]




// Everything is built on objects
// Array → special object with numeric keys.
// Function → callable object.
// Date, RegExp, Map, Set → all objects internally.

// Every object in JavaScript has a hidden link to another object called prototype.This allows inheritance of properties and methods.
const arr = [1, 2, 3];
console.log(arr.constructor)    // [Function: Array]
console.log(arr.__proto__ === Array.prototype); // true


const nullProtoObj = Object.create(null);
console.log(nullProtoObj);


// How to check object constructor ?
const z = 45
console.log(z.constructor); // [Function: Number]
const h = "string"
console.log(h.constructor); // [Function: String]
Object.setPrototypeOf(Array, String.prototype)
const k = [1, 2]
console.log(k.constructor)



// Object Conversion:
// Objects are returned as-is.
// undefined and null throw a TypeError.
// Number, String, Boolean, Symbol, BigInt primitives are wrapped into their corresponding object wrappers.
const f = new Object(324)
console.log(f.constructor)
console.log(f.prototype)
console.log(f.toFixed(4))



// How to declare symbol datatype and used in object
// const mysym = Symbol("key1")
// const jsuser = {
//     name: "Ankit",
//     [mysym]: "mykey1"
// }
// console.log(jsuser);
// console.log(jsuser[mysym]);


const tinderUser = {
  id: "123abc",
  name: "Gurudeep",
  isLoggedIn: false
}
// console.log(Object.getOwnPropertyDescriptors(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));    // Check value is present or not in object 
let { id: value, name: myName } = tinderUser
console.log(value);
console.log(myName);