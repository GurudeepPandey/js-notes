
// 1. Arithmetic Operators
// Used for math operations.

console.log(5 + 3 )  // 8   addition
console.log(5 - 3 )  // 2   subtraction
console.log(5 * 3 )  // 15  multiplication
console.log(5 / 2 )  // 2.5 division (floating-point!)
console.log(5 % 2 )  // 1   remainder
console.log(5 ** 2)  // 25  exponentiation (ES2016+)


// 👉 + is special:
// If both operands are numbers → addition.
// If one is a string → string concatenation.
console.log(2 + "3") // "23"


// 2. Assignment Operators
// Assign values to variables.
// Shorthand forms combine with arithmetic:
let x = 10;
console.log(x += 5)     // 15  (x = x + 5)
console.log(x -= 2)     // 13
console.log(x *= 2)     // 26
console.log(x /= 2)     // 13
console.log(x %= 5)     // 3
console.log(x **= 2)    // 9


// 3. Comparison Operators
// Return a boolean (true or false).
console.log(5 == "5" )  // true  (loose equality, type conversion)
console.log(5 === "5")  // false (strict equality, no conversion)
console.log(5 != "5" )  // false
console.log(5 !== "5")  // true
console.log(7 > 5    )  // true
console.log(7 >= 7   )  // true
console.log(3 < 2    )  // false


// Tricky parts:
console.log("2" > "15")     // → true (lexical string comparison).
console.log(null == undefined)  // → true but null === undefined → false.


// 4. Logical Operators
// Used for boolean logic and short-circuit evaluation.

console.log(true && false) // false
console.log(true || false) // true
console.log(!true ) // false


// Short-circuiting:
let a = 0;
console.log(a && "hi");  // 0   (stops at falsy left)
console.log(a || "hi");  // "hi" (returns right because left falsy)


// Special Operators:
// Nullish coalescing (??) → returns right operand only if left is null or undefined.
console.log(null ?? "default") // "default"
console.log(0 ?? "default")   // 0  (unlike ||)


// Optional chaining (?.) → safe property access.
let user = null;
console.log(user?.name); // undefined (no error)


// 5. Unary Operators
// Act on a single operand.

console.log(+ "5")    // 5 (converts to number)
console.log(- "5")    // -5
console.log(++x  )    // pre-increment
console.log(x++  )    // post-increment
console.log(--x  )    // pre-decrement
console.log(x--  )    // post-decrement
// delete obj.prop     // removes property
// typeof 42           // "number"
// void expr           // evaluates but returns undefined


// ⚠️ typeof null === "object" → historical bug.


// 6. Bitwise Operators
// Work at the 32-bit integer level.

console.log(5 & 1  ) // 1   (AND)
console.log(5 | 1  ) // 5   (OR)
console.log(5 ^ 1  ) // 4   (XOR)
console.log(~5     ) // -6  (NOT → -(n+1))
console.log(5 << 1 ) // 10  (left shift)
console.log(5 >> 1 ) // 2   (sign-propagating right shift)
console.log(5 >>> 1) // 2   (zero-fill right shift)


// 7. Conditional (Ternary) Operator
// Inline if-else:
let age = 18;
let type = age >= 18 ? "adult" : "minor";


// 8. Comma Operator
// Evaluates multiple expressions, returns the last one.
let y = (2, 3); // x = 3


// 9. Spread / Rest (...)
// Spread: expand array/object.
let arr = [1,2,3];
console.log(...arr); // 1 2 3

// Rest: collect into array.
function sum(...nums) {
  return nums.reduce((a,b)=>a+b,0);
}


// 🔹 10. Precedence & Associativity
// When multiple operators appear, precedence decides order.
console.log(2 + 3 * 4)   // 14, because * > +


// Associativity matters:
2 ** 3 ** 2 // 512, because ** is right-associative


// 11. in and instanceof
console.log("name" in {name: "Sam"})   // true
console.log([1,2] instanceof Array )   // true


// 12. new, super, this, yield
// new → creates instance from constructor.
// super → access parent class methods.
// this → current execution context.
// yield → pause/resume inside generators.


// Common Pitfalls
console.log(NaN == NaN)     // → false. Use Number.isNaN().
console.log([] == ![])      // → true (because of coercion).
console.log({} + [])        // [object Object]
console.log([] + {});       // [object Object]

// Mixing ?? and || requires parentheses:
// (a ?? b) || c