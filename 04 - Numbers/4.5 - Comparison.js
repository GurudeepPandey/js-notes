
// If we compare same datatype then it is ok
// console.log(2 > 3);



// If we campare different datatype then implicit conversion (except when both are strings, then it compares alphabetically)
// console.log(2 < "1");           // false
// console.log("2" > 1);           // true
// console.log("-3" > 1);          // false
// console.log("3" > "2");         // true



//The reason is that an equality check == and comparison > < >= >= work differently.
//Comparisons convert null to a number, treating it as 0.
//That why null >= 0 is true and null > 0 is false.
// console.log(null > -4);             // true
// console.log(null > 0);              // false
// console.log(null == 0);             // false
// console.log(null >= 0);             // true


console.log(null == undefined)      // true
console.log(null === undefined)     // false


// undefined becomes NaN in numeric comparisons → always false.
// console.log(undefined > -3);         // false
// console.log(undefined > 0);          // false
// console.log(undefined == 0);         // false
// console.log(undefined < 0);          // false


// === is used to check value and its datatype
// console.log(2 === 2);
// console.log(2 === "2");



// ****************************** OPERATIONS **********************************


// + → if any operand is a string, result is a string (concatenation).
// Other operators (-, *, /) → convert operands to numbers.
// Strings are converted to numbers, unless not possible → NaN.

// console.log("2" + "2");          // 22 string        
// console.log("2" + 3);            // 23 string
// console.log(2 +  "3");           // 23 string
// console.log("2" + 3 + 5);        // 235 string
// console.log(2 + 3 + "5");        // 55 string
// console.log("3" + +3);           // 33 string
// console.log(3 + + "3");          // 6 number

// console.log("3" + "3" - "3");    // 30 number
// console.log(3 - "1");            // 2 number
// console.log("21" - "1");         // 20 number

// console.log("3" * 4);       // 12 number
// console.log( 8 * "3");      // 24 number
// console.log("3" * "4");     // 12 number
// console.log("a" * "4");     // NaN

// console.log( 8 / "2");      // 4 number
// console.log( "10" / 2);     // 5 number
// console.log( "10" / "2");   // 5 number
// console.log( "10" / "b");   // NaN


// Increment operator :
// a++ → post-increment (returns old value, then increases).
// ++a → pre-increment (increases first, then returns new value).
// let a = 100
// console.log(a++); //100
// a++
// console.log(a); // 102

// let b = 100
// console.log(++b); // 101
// ++b
// console.log(b); // 102


// Decrement Operator :
// c-- -> post-decrement (returns old value, then decreases).
// --c -> pre-decrement (decreases first, then returns new value).
// let c = 100
// console.log(c--);   // 100
// c--
// console.log(c);     // 98

// let d = 100
// console.log(--d);   // 99
// --d
// console.log(d);     // 98


// JavaScript is a loosely typed (dynamic) language, and it automatically tries to convert (coerce) values when different datatypes are used together.
// Type Coercion (automatic conversion)
// JavaScript automatically converts datatypes behind the scenes (type coercion), based on old design decisions made to make the language "easy for beginners."