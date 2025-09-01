
// Number datatype methods :

// Static Properties :

// The smallest interval between two representable numbers.
console.log(Number.EPSILON)

// The maximum safe integer (2^53 - 1).
console.log(Number.MAX_SAFE_INTEGER);

// The minimum safe integer (-(2^53 - 1)).
console.log(Number.MIN_SAFE_INTEGER);

// The largest positive representable number.
console.log(Number.MAX_VALUE);

// The smallest positive representable number—that is, the positive number closest to zero (without actually being zero).
console.log(Number.MIN_VALUE);

// Special "Not a Number" value.
console.log(Number.NaN);

// Special value representing negative infinity. Returned on overflow.
console.log(Number.NEGATIVE_INFINITY);

// Special value representing infinity. Returned on overflow.
console.log(Number.POSITIVE_INFINITY);



// Static Methods :

// 1. Determine whether the passed value is a finite number.
console.log(Number.isFinite(20));
console.log(Number.isFinite(1/0));


// 2. Determine whether the passed value is an integer.
console.log(Number.isInteger(30));
console.log(Number.isInteger(30.0));
console.log(Number.isInteger(30.23));
Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false
Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true, because of loss of precision
Number.isInteger(4500000000000000.1); // true, because of loss of precision


// 3. Determine whether the passed value is NaN.
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Number("abc")));
console.log(Number.isNaN(Number("123")));
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, this is coerced to 1
isNaN(null); // false, this is coerced to 0
isNaN("37"); // false, this is coerced to 37
isNaN("37.37"); // false, this is coerced to 37.37
isNaN(""); // false, this is coerced to 0
isNaN(" "); // false, this is coerced to 0


// 4. Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1).
console.log(Number.isSafeInteger(12345678910111213));
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true


// 5. parseInt(value, radix) function.
// it return number
// it convert string into number
// global function = this method
//
console.log(Number.parseInt === parseInt)
console.log(Number.parseInt("123"));
console.log(Number.parseInt("123.89"));
console.log(Number.parseInt("123abc"));
console.log(Number.parseInt("abc", 16));
console.log(Number.parseInt("111", 2)); // 7



// 6. parseFloat() function
// global function = this method
console.log(Number.parseFloat === parseFloat)
console.log(Number.parseFloat("123.89"));
console.log(Number.parseFloat("123abc"));