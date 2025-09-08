
// Conditional or Control flow statements:
// A conditional is just decision making in code.
// It checks whether an expression is truthy or falsy and then runs a block of code.


// 1. if else
// The expression in parentheses is coerced to boolean via the “ToBoolean” rule.
// if (conditionA) {
//     // runs if conditionA is truthy
// } else if (conditionB) {
//     // runs if A was falsy and B is truthy
// } else {
//     // runs if none above were truthy
// }



// 2. switch
// switch uses strict equality (===) for case matching.
// Use break to prevent accidental fallthrough.
// switch (expression) {
//     case 'a':
//     case 'b':            // fallthrough: 'a' or 'b' run the same block
//         doThing();
//         break;
//     case 'c':
//         doOther();
//         break;             // omit intentionally only if you WANT fallthrough
//     default:
//         fallback();
// }



// 3. Ternary Operator
// Expression, not a statement—great inside assignments and JSX.
// Keep nested ternaries rare and parenthesized for readability.
// const label = score >= 40 ? 'Pass' : 'Fail';



// Truthy and Falsy Values
// Falsy values (exactly 8):
// false, 0, -0, 0n (BigInt zero), '' (empty string), null, undefined, NaN
// Everything else is truthy (e.g., '0', 'false', [], {}, function(){}).
// if ('0') console.log('runs');     // truthy
// if ([]) console.log('runs');      // truthy
// if (NaN) console.log('nope');     // falsy



// Logical operators & short-circuiting
// console.log('a' && 'b')     // 'b'
// console.log('' && 'b')      // ''
// console.log('b' && '')      // ''
// console.log(false && 0)      // false

// console.log('' || 'fallback')       // 'fallback'
// console.log('fallback' || '')       // 'fallback'
// console.log('hi' || 'x')            // 'hi'
// console.log(false || 0)            // 0



// ?? Nullish coalescing
// Uses nullish check (null or undefined) only; does not treat 0, '', or false as missing.
// let val;
// val = 5 ?? 10
// console.log(val);
// val = null ?? 10
// console.log(val);
// val = undefined ?? 10
// console.log(val);
// val = null ?? 10 ?? 20
// console.log(val);
// val = null ?? undefined ?? 20
// console.log(val);
// val = false ?? 20
// console.log(val);

// Precedence (important!)
// && binds tighter than ||. ?? has similar precedence to ||, but cannot be mixed with ||/&& without parentheses.
// a || b && c    // a || (b && c)
// (a ?? b) || c  // be explicit with parens



// Equality & comparisons in conditions
// Prefer === and !== to avoid implicit type conversion surprises with ==/!=.
// NaN === NaN is false. Use Number.isNaN(x) or Object.is(x, NaN).
// switch uses ===. If you need looser matching, normalize first (e.g., to string or number).
// if (x === 0) { /* exact zero */ }
// if (Number.isNaN(x)) { /* x is NaN */ }



// Patterns you’ll actually use
// Guard clauses (early returns)
// function save(user) {
//     if (!user) throw new Error('No user');   // guard
//     if (!user.email) return;                 // early exit
//     // main path
// }


// Defaulting values
// const page = Number(req.query.page) || 1;      // beware: 0 becomes 1
// const pageSafe = req.query.page ?? 1;          // 0 stays 0, null/undefined → 1


// Optional chaining (?.)
// const city = user?.address?.city; // undefined if any link is nullish
// user?.login?.();                  // calls only if function exists
let user = { name: "Sam" };
console.log(user?.address?.city); // undefined, no error
let city = user?.address?.city ?? "Unknown";



// Object lookup instead of long if/else or switch
// const ops = {
//   add: (a,b) => a + b,
//   sub: (a,b) => a - b,
// };
// const result = (ops[action] ?? ((a,b)=>NaN))(x, y);



// Common pitfalls:
// Assignment in condition:
// if (x = 5) { ... } // assigns and checks 5 → truthy → bug
// if (x === 5) { ... } // correct

// Accidental fallthrough in switch: always add break unless you intend to fall through.
// Using || when 0/''/false are valid: use ?? instead.
// Relying on coercion: be explicit with Boolean(), Number(), or strict equality.
// Function calls in conditions: remember short-circuiting prevents calls on the right if not needed.



// Notes:
// &&/||/?? return operands (not booleans); chain thoughtfully.
// For performance, prefer simple conditions and early returns over deeply nested branches; micro-perf differences between if and switch are negligible compared to readability.
// Relational operators (<, >, etc.) coerce strings to numbers if compared with numbers. Compare like-types to avoid surprises.
// Arrays/objects are always truthy—even if empty.


// Safe property access with sensible defaults
function getCity(user) {
  return user?.address?.city ?? 'Unknown';
}


// Validate input with guards
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Numbers only');
  }
  if (b === 0) return Infinity; // or throw
  return a / b;
}


// Role-based behavior with a map
const handlers = {
  admin:   () => 'Full access',
  editor:  () => 'Edit content',
  viewer:  () => 'Read only',
};
function getPermissions(role) {
  return (handlers[role] ?? (() => 'No access'))();
}


// Clean ternary vs. if/else
// Ternary when assigning a single value:
// const badge = points > 100 ? 'Gold' : 'Silver';

// If/else for multi-step blocks:
// if (points > 100) {
//   upgradeAccount();
//   notify();
// } else {
//   encourage();
// }



console.log(0 || 'A');           // A
console.log(0 ?? 'A');           // 0
console.log(false || 'A');       // A
console.log(false ?? 'A');       // false
console.log('' && 'A');          // ""


// false == 0       => true
// false == ""      => true
// "" == 0          => true


// How to check object is empty or not
// const myobj = {}
// if (Object.keys(myobj).length === 0) {
//     console.log("Object is empty");
// } else {
//     console.log("Object is not empty");
// }


// How to check array is empty or not
// let myArray = []
// if (myArray.length === 0) {
//     console.log("Array is empty");
// } else {
//     console.log("Array is not empty");
// }