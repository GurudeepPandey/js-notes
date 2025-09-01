
// What is datatypes ?
// Data types are used to specify the type of data that a variable can hold.
// Each datatype has its own set of operations and properties that can be used to manipulate and work with the data.


// There are two types of datatypes in js :

// 1. Primitive Datatypes :
// immutable (cannot be changed) 
// It store single values
// when you assign them, they are copied by value (not by reference).
// It stored in stack.

// 2. Non-primitive Datatypes :
// mutable (can be changed) 
// It store multiple values
// when you assign them, they are copied by reference so affect changes on original data.
// It stored in heap (reference of variable is stored in stack).
// It also known as reference or derived datatypes.


// Types of Primitive Datatypes :

// 1. NUMBER :
// It stores both integers and floating point numbers.
// It stores Infinity, -Infinity and NaN(Not-a-Number).
// NaN represent infinite values and computational errors
let x = 25
const pi = 3.14
const d = NaN
console.log(d)
console.log(typeof x, typeof pi, typeof d);


// 2. STRING :
// String is a squence of characters.
let str = "hello"
let str1 = 'bye'
let str2 = `${str}, Gurudeep`
console.log(str2)


// 3. BOOLEAN : true or false
let isTrue = true
console.log(typeof isTrue)


// 4. UNDEFINED :
// A variable that has been declared but not assigned a value.
let salary;
console.log(typeof salary)


// 5. NULL : standalone value 
// Represents the intentional absence of any value.
let empty = null
console.log(typeof empty)


// 6. SYMBOL :
// Represents a unique and immutable identifier.
// Often used as object keys where uniqueness is required.
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);  // false (unique values)


// 7. BIGINT :
// Represents very large integers beyond the safe limit of Number.
// Denoted by n at the end of the number.
let big = 123456789012345678901234567890n;
console.log(big + 2n);



// Types of Non-Primitive datatypes :

// 1. OBJECT :
// A collection of key-value pairs.
// Keys are usually strings (or symbols), values can be any type (including objects).
let person = {
  name: "Alice",
  age: 22,
  isStudent: true
};
console.log(person)
console.log(typeof person)


// 2. ARRAY :
// A special kind of object used to store ordered lists.
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits)
console.log(typeof fruits)


// 3. FUNCTIONS :
// Functions are objects that can be called (invoked).
function greet() {
  console.log("Hello!");
}
console.log(greet)
console.log(typeof greet)


// 4. OTHER BUILT-IN DATATYPES :
// date, regular expressions
// map, weakmap
// set, weakset


// Some Facts :
// 1. dynamically typed or loosed typed language
let z = 20
z = "hello"
z = [1, 2, 3]

// 2. Everything is an object in js

// 3. NaN is not equal to itself: 
console.log(typeof NaN);
console.log(NaN === NaN);

// 4. A Symbol is Never Equal to Another One:
let s1 = Symbol("abc");
let s2 = Symbol("abc");
console.log(s1 === s2);

// 5. A character is also a string.
let a1 = "gfg";   // String
let a2 = 'g';    // Character
console.log(typeof a1); 
console.log(typeof a2);