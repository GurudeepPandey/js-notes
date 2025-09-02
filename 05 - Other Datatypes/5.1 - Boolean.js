
// Boolean datatype :

// How boolean is created ?

// 1. direct assignment
let flag = true

// 2. comparison or relational operator
let result = 6 > 10

// 3. Boolean constructor
console.log(Boolean(23))    // true

// 4. Boolean Object
// But don't use this because objects are always truthy, even if the value inside is false
// Always use primitive booleans (true / false)
let x = new Boolean(false)
let y = false
console.log(x, typeof x);
console.log(x == false)
console.log(x === false)

if(x) {
    console.log(123);
}
if(y) {
    console.log(456);
}


// Boolean conversion :
console.log(Boolean(0))         // false
console.log(Boolean(0n))         // false
console.log(Boolean(1))         // true
console.log(Boolean(123))       // true

console.log(Boolean(""))        // false
console.log(Boolean(" "))       // true
console.log(Boolean("abc"))     // true

console.log(Boolean(null))      // false
console.log(Boolean(undefined))     // flase
console.log(Boolean(NaN))     // false


// Falsy value
// except this all are truthy
// false, 0, -0, Bigint 0n, "", null, undefined, NaN


// Truthy value
// "0", "false", " ", [], {}, function(){}

if ([]) {
  console.log("[] is truthy");
}
if ([] == false) {
  console.log("[] == false");
}
// [] is truthy
// [] == false