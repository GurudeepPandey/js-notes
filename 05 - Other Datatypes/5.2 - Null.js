
// Null Datatype
// null is a primitive value in JavaScript.
// It represents the intentional absence of any object value.
// It means "nothing," "empty," or "no value."
let a = null
console.log(a)      // null
console.log(typeof a)   // "object" (not "null" for legacy reasons)


// Why typeof null is object ?
// This is a well-known bug in JavaScript.
// It happens because, in the very first implementation of JavaScript (1995), values were stored as tags with a type.
// The tag for objects was 000, and null was represented as a null pointer (0x00).
// JavaScript mistakenly identifies it as an object.
// This bug cannot be fixed because it would break millions of existing scripts.


// Difference between null and undefined :
// Meaning      Explicitly no value                 Variable declared but not assigned a value
// Type	        Primitive (buggy typeof → object)	Primitive
// Assigned By	Developer (manually)	            JavaScript engine (default)
// Use Case	    Reset a variable, clear an object, represent "empty"	Variable not initialized, missing function argument


let x;
console.log(x); // undefined (default)
x = null;
console.log(x); // null (explicitly empty)


// Equality Comparisons
console.log(null == undefined);  // true (loose equality → both mean "no value")
console.log(null === undefined); // false (strict equality → different types)
console.log(typeof undefined); // "undefined"
console.log(null === null); // true
console.log(null == null); // true
console.log(!null); // true
console.log(Number.isNaN(1 + null)); // false
console.log(Number.isNaN(1 + undefined)); // true



// Usage of null
// Initialization – When you want to assign "empty" value:
let user = null; 

// Clearing a variable or object:
let person = { name: "Alice" };
person = null; // clear reference, allows garbage collection

// Checking object existence:
if (document.getElementById("myDiv") === null) {
    console.log("Element does not exist");
}



// Falsy Value :
// null is a falsy value in JavaScript.
// Falsy values are: false, 0, "", null, undefined, NaN.
if (!null) {
  console.log("null is falsy"); // This runs
}


// When to Use null vs undefined?
// Use null when you want to intentionally clear a variable or show that "this has no value right now."
// Let JavaScript assign undefined when a variable is not initialized yet.