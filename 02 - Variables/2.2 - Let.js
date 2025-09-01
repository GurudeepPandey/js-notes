
// let

// Scope: Block-scoped. Variables declared with let are only accessible within the block (e.g., if statement, for loop, or any curly braces {}) where they are defined.
// Re-declaration and Reassignment: Can be reassigned but cannot be re-declared within the same block scope.
// Hoisting: let declarations are hoisted to the top of their block, but they are not initialized. Attempting to access them before their declaration results in a ReferenceError (known as the Temporal Dead Zone). 


// let city = "pune"                 // cannot redeclare 
let city = "Delhi"
city = "bombay"                     // can reinitialize


if(true) {
    let city = "Patna"
    console.log(city)
}
console.log(city)


function test() {
    console.log(city)
    let home = "banglore"           // reference error
}
test()
// console.log(home)


{
  console.log(bar); 
// console.log(foo);            // ReferenceError:
  var bar = 1;
  let foo = 2;                  // End of TDZ (for foo)
}


{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); 

//   func()                 // ReferenceError
  let letVar = 3;           // End of TDZ (for letVar)
  func();                   // Called outside TDZ!
}


{
//   typeof i;                 // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}


function foo(a) {
//   let a = 1;            // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
//   let e;             // SyntaxError: Identifier 'e' has already been declared
}


var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined

// if(branch) {
//     // let branch = 123
// }


function test() {
  var foo = 33;
  if (foo) {
    // let foo = foo + 55;         // ReferenceError
  }
}
test();


let z = 1;
{
//   var z = 2;                        // SyntaxError for re-declaration
}