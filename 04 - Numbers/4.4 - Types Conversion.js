
// What is type Coercion ?
// It means automatic and implict conversion of values from one datatype to another. It is done so that operations can processed.


// conversion from other datatype to NUMBER Datatype :

// 1. from string to number:
// Number () - Returns a number, converted from its argument
console.log(Number(123))            // 123
console.log(Number("123"))          // 123
console.log(Number("123 78"))       // NaN
console.log(Number("123.56"))       // 123.56
console.log(Number("123abc"))       // NaN
console.log(Number("Gurudeep"))     // NaN
console.log(Number(""))             // 0
console.log(Number(" "))            // 0
console.log(Number("Infinity"))     // Infinity
console.log(Number("-Infinity"))    // -Infinity

// parseInt(value, radix) - Parses a string and returns an integer
console.log(parseInt("78"))         // 78
console.log(parseInt("57.89"))      // 57
console.log(parseInt("78abc"))      // 78
console.log(parseInt("abc453"))     // NaN
console.log(parseInt("45abc53"))    // 45
console.log(parseInt("45 53"))      // 45
console.log(parseInt(""))           // NaN
console.log(parseInt(" "))          // NaN

// parseFloat(value) - Parses a string and returns a floating point number
// little different from parseInt()
// it has not radix param
// it can parse decimal
console.log(parseFloat("57.89"))

// unary opeartor (+) - used to convert into number:
console.log(+"123abc")              // NaN
console.log(+"abc")                 // NaN
console.log(+"590")                 // 590
console.log(+"")                    // 590
console.log(+" ")                   // 590

// other methods :
console.log("45" * 1)               // 45
console.log("45.70" * 1)            // 45.7
console.log(1 * "45")               // 45
console.log("abc" * 1)              // NaN
console.log("67" / 1)               // 67
console.log("67ab" / 1)             // NaN
console.log("56" - 0)               // 56
console.log("56.89" - 0)            // 56.89
console.log(~~"90")                 // 90
console.log(~~"90.6")               // 90
console.log(~~"9000098001")         // 410163409
console.log(~~"90abc")              // 0
console.log(~~"abc")                // 0
Math.floor()
Math.ceil()
Math.round()



// 2. from undefined to number :
// console.log(Number(undefined))      // NaN


// 3. from null to number :
// console.log(Number(null))           // 0


// 4. from boolean to number :
// console.log(Number(true))           // 1
// console.log(Number(false))          // 0


// 5. from bigint to number :
// console.log(Number(1235898747647647648937398n))


// 6. from symbol to number :
// Typeerror - Cannot convert a Symbol value to a number
// console.log(Number(Symbol(123)))


// How to convert into base 10 ?
console.log(Number(0b11))               // 3
console.log(Number(0x11))               // 17
console.log(Number(0o11))               // 9

console.log(Number([]))                 // 0
console.log(Number([30]))               // 30
console.log(Number([30, 20]))           // NaN
console.log(Number(["twenty"]))         // NaN
console.log(Number(function(){}))       // NaN
console.log(Number({}))                 // NaN