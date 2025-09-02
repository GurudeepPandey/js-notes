
// Undefined Datatype
// undefined is a primitive data type in JavaScript.
// It represents the absence of a value at the uninitialized level.
// In simple words: if a variable exists but has not been assigned a value → it is undefined.
let a;
console.log(a); // undefined
console.log(typeof undefined); // "undefined"



// JavaScript assigns undefined in several situations:
// 1. Uninitialized Variables
let x;
console.log(x); // undefined

// 2. Missing Function Arguments
function greet(name) {
  console.log(name);
}
greet(); // undefined (no argument passed)

// 3. Functions Without Return
function hello() {}
console.log(hello()); // undefined

// 4. Accessing Non-Existent Object Properties
let user = { name: "Alice" };
console.log(user.age); // undefined (property doesn’t exist)

// 5. Accessing Array Elements Out of Range
let arr = [10, 20];
console.log(arr[5]); // undefined

// 6. Deleting Object Properties
let obj = { a: 1 };
delete obj.a;
console.log(obj.a); // undefined



// Undefined is global variable
// In older JavaScript (before ES5), undefined could be overwritten:
var undefined = "oops";
console.log(undefined); // "oops"
// From ES5 onwards, undefined is read-only (safe).



// DON'T DO THIS
(() => {
  const undefined = "foo";
  console.log(undefined, typeof undefined); // foo string
})();

((undefined) => {
  console.log(undefined, typeof undefined); // foo string
})("foo");
// While you can use undefined as an identifier (variable name) in any scope other than the global scope (because undefined is not a reserved word), doing so is a very bad idea that will make your code difficult to maintain and debug.