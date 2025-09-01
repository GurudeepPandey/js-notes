// Variable - variable is container name which is used to store data

// variables are declare using three keywords in js:
// var, let and const


// Var
// Scope: Function-scoped or global-scoped. Variables declared with var are accessible throughout the entire function in which they are declared, or globally if declared outside any function.
// Re-declaration and Reassignment: Can be re-declared and reassigned within the same scope.
// Hoisting: var declarations are hoisted to the top of their scope and initialized with undefined.
// var is generally discouraged due to its potential for creating less predictable code.
// In both NodeJS CommonJS modules and native ECMAScript modules, top-level variable declarations are scoped to the module, and are not added as properties to the global object.

var name = "John";
if(true) {
    var name = "sonu"
    console.log(name)
}
console.log(name)


function test() {           // var has function scope
    var name = "monu"
    var bla = 123
    console.log(name)
    console.log(bla)
}
test()
// console.log(bla)            // bla is not defined in this scope or global scope
console.log(name)


var num = 23                // redeclare and reassign
var num = 30
console.log(num)
var num;
console.log(num)



console.log(age)            // hoisted
age = 20
var age;

function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}


// What if the name of variable and function are same
var a = 1;
function a() {}
console.log(a); // 1
// This is because function declarations are hoisted before any initializer gets evaluated, so the initializer comes later and overrides the value.


var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared


// let b = 1;
// {
//   var b = 1; // SyntaxError: Identifier 'a' has already been declared
// }


var c = 1;
{
  let c = 2;
}


// A var declaration within a function's body can have the same name as a parameter.
function foo(a) {
  var a = 1;
  console.log(a);
}
foo(2); // Logs 1