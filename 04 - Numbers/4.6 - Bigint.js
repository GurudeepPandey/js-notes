
// Bigint Datatype :

// BigInt is a primitive data type in JavaScript introduced in ES2020.

// It allows you to represent integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).

// Unlike Number (which uses 64-bit floating-point), BigInt can store integers of arbitrary size.

// “arbitrary size” means the number can grow as big as your computer’s memory allows, with no fixed upper limit.

// BigInt only represents integers (no decimals).


// Creation of Bigint :
const a = 123456789012345678901234567890n;
const b = BigInt("123456789012345678901234567890");
const c = BigInt(123); // From number


// → Very large number (no precision loss)
const big = 999999999999999999999999999999999999999999n;
console.log(big * big);


// Operations on Bigint :
const x = 10n;
const y = 3n;

console.log(x + y); // 13n
console.log(x - y); // 7n
console.log(x * y); // 30n
console.log(x / y); // 3n  (integer division, no decimals!)
console.log(5n / 2n); // 2n, not 2.5
console.log(x % y); // 1n
console.log(x ** y); // 1000n


// Cannot directly mix num and bigint:
const j = 10n;
const k = 5;
// console.log(j + k); 
// TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(j + BigInt(k)); // 15n
console.log(Number(j) + k); // 15


// Comparison :
// Relational operators (<, >, <=, >=) work between Number and BigInt.
// == → allows type coercion.
// === → strict type check (different types).
console.log(10n == 10);  // true
console.log(10n === 10); // false
console.log(20n > 15);   // true



// Use Cases of BigInt :
// Cryptography (RSA, ECC, etc.).
// Large financial calculations (banking, trading).
// Scientific computations (astronomy, physics).
// Working with large IDs (databases, UUIDs).
// Blockchain (Ethereum, Bitcoin integers).



// Limitations of Bigint :
// 1. No decimals (only integers).
// BigInt(1.5); // RangeError
// 2. Cannot be used with built-in objects expecting Number:
// Math functions (Math.sqrt, Math.pow, etc.)
// JSON (JSON.stringify({val: 10n}) → ❌ error)
// 3. Performance: slower than normal Number for small calculations.
// 4. Typed Arrays (like Int32Array) don’t support BigInt.



console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// 9007199254740991 is the largest safe integer.
// Adding 1 works because the next representable integer (9007199254740992) still exists in floating-point format.
// Adding 2 fails, because 9007199254740993 cannot be represented exactly in 64-bit floating point.
// The binary representation "skips" that number, so the result is rounded back to 9007199254740992.

const bignum = 9007199254740991n;
console.log(bignum + 1n); // 9007199254740992n
console.log(bignum + 2n); // 9007199254740993n 