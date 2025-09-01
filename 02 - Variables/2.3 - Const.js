
// const

// Scope: Block-scoped, similar to let.
// Re-declaration and Reassignment: Cannot be re-declared or reassigned after initial assignment. It declares a read-only named constant.
// Initialization: Must be initialized at the time of declaration.
// Hoisting: Similar to let, const declarations are hoisted but are in a Temporal Dead Zone until initialized.


// const name;                  // SyntaxError: Missing initializer in const declaration
const name = "sonu";
// const name = "monu";         // SyntaxError: Identifier 'name' has already been declared
// name = "monu";              // TypeError: Assignment to constant variable


// const scope same as let scope


const obj = { key: "value" };
// obj = { OTHER_KEY: "value" };   // TypeError: Assignment to constant variable
obj.name = "Gurudeep"
console.log(obj)


const arr = [];
// arr = ["123"];                  // TypeError: Assignment to constant variable
arr.push("456");
console.log(arr)


// Recommendation
// let and const were introduced in ES6 (ECMAScript 2015) to address issues associated with var's function/global scope and hoisting behavior, such as variable collisions and unexpected behavior.
// The general recommendation in modern JavaScript development is to use const by default. If a variable's value needs to be reassigned later, then let should be used. var is generally discouraged due to its potential for creating less predictable code.


// This is bad practise and it is not allowed in use strict mode
x = 100;   // no let/var/const
console.log(x); // 100
// JavaScript automatically creates a global variable (attached to window in browsers or global in Node.js).


// BEST PRACTISE:
// Always use let or const to declare variables.
// "use strict" mode makes JavaScript more secure and less error-prone.