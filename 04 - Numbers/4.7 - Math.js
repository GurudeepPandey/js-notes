
// Math
// Math works with the Number type. It doesn't work with BigInt.
// All properties and methods of Math are static.
// Math is not a constructor. You cannot use it with the new operator or invoke the Math object as a function.



// Math numeric constants :
// console.log(Math.LN2    )  // ln(2)
// console.log(Math.LN10   )  // ln(10)
// console.log(Math.LOG2E  )  // log₂(e)
// console.log(Math.LOG10E )  // log₁₀(e)
// console.log(Math.PI     )  // π ≈ 3.14159
// console.log(Math.SQRT1_2)  // √(1/2) = 1/√2
// console.log(Math.SQRT2  )  // √2


// Math Methods :
// its return type number
// 1. Math.floor()
// It always gives you down value
console.log(Math.floor(5.9));       // 5
console.log(Math.floor(-5.1));      // -6
console.log(Math.floor("-5.1"));    // -6

// 2. Math.ceil()
// It always gives top value
console.log(Math.ceil(4.1));        // 5
console.log(Math.ceil(-4.9));       // -4
console.log(Math.ceil("-4.9"));     // -4

// 3. Math.round()
// It rounds the number to its nearst integear
console.log(Math.round(4.78));      // 5
console.log(Math.round(4.5));       // 5
console.log(Math.round(4.4));       // 4
console.log(Math.round(-4.7));      // -5

// 4. Math.trunc()
// It removes fractional part
console.log(Math.trunc(10.90));     // 10
console.log(Math.trunc(10));        // 10

// 5. Math.sign()
// It indicating x is positive, negative or zero
console.log(Math.sign(-20));        // -1
console.log(Math.sign(-0));         // -0
console.log(Math.sign(0));          // 0
console.log(Math.sign(56));         // 1

// 6. Math.abs()
// It return absolute value
console.log(Math.abs(-23));     // 23
console.log(Math.abs(3));       // 3
console.log(Math.abs(-0));      // 0
console.log(Math.abs(-34.78));      // 34.78

// 7. Math.max()
// It return max num
// console.log(Math.max(10, 40, 90));

// 8. Math.min()
// It return min num
// console.log(Math.min(10, 40, 90));

// Math.pow(x, y)      // x ** y is usually nicer
// x ** y              // exponentiation operator
// Math.sqrt(x)        // square root
// Math.cbrt(x)        // cube root

const toRad = deg => deg * Math.PI / 180;
const toDeg = rad => rad * 180 / Math.PI;


// random function
// console.log(Math.random());
// console.log(Math.round(Math.random() * 10) + 1);

// Generate a random number between a given range
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// Shuffle
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
console.log(shuffle([10, 20, 30]))