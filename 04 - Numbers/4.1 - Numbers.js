
// Number Datatype :

// Numbers in js are stored in double-precision 64-bit binary format.
// 1 bit - for sign
// 11 bits - for exponent
// 52 bits - for represent number


// Declaration of number :
let num = 23                // Integer
let a = new Number(20)      // object
let e = Number("20")        // number
console.log(num, a)
console.log(a == 20)        // true
console.log(a === 20)       // false

let b = 23.5        // floating-point or decimal
let c = -10         // negative number

console.table([typeof num, typeof a, typeof b, typeof c])



// Ranges of Number :
// numbers are safely represent without losing its precision and accuracy
// safe range - 1 to 2^53 -1
console.log(Math.pow(2, 53) - 1 == Number.MAX_SAFE_INTEGER);


// Beyond this range, integers lose precision.
console.log(`Max safe Integer = ${Number.MAX_SAFE_INTEGER}`)
console.log(`Min safe Integer = ${Number.MIN_SAFE_INTEGER}`)


// The largest positive representable number.
console.log(Number.MAX_VALUE);


// The smallest positive representable number—that is, the positive number closest to zero (without actually being zero).
console.log(Number.MIN_VALUE);


// we can write extra-large or extra-small numbers using scientific (exponent) notation
let z = 156e4               // 1560000
let y = 123e-3              // 0.123
console.log(y, z);


// Integers are accurate up to 16 digits without using scientific notation
console.log(1234567891011121)
console.log(12345678910111213)


// There are some special number values in JS :
// 1. NaN - return when operation is mathematically invalid or cannot be expressed as a number
console.log(0/0)                        // NaN
console.log(Number("abc"))              // Nan
console.log(typeof (NaN))               // Object
// NaN is the only value that is not equal to itself:
console.log(NaN == NaN)
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(20))
console.log(Number.isNaN(0/0))


console.log(Number.NaN);                // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity


// 2. Infinity and -Infinity
console.log(1/0);       // Infinity
console.log(-1/0);      // - Infinity
console.log(Number.isFinite(1/0));      // false
console.log(Number.isFinite(100));      // true


// Floating point or Decimal Precision
// decimal operations are not always 100% accurate due to binary represenation limitation.
// Use BigInt or libraries like decimal.js for exact decimal math.
console.log(0.1 + 0.2)
console.log(Number((0.1 + 0.2).toFixed(2)));


// Integer vs Floating Point
let j = 10          // stored as floating-point
let k = 10.0        // same thing
console.log(j === k)


// can use small or capital letter O,o,b,B
console.log(0O562);         //Octal Number
console.log(0b011);         //Binary Number
console.log(0xfff);         //Hexadecimal Number