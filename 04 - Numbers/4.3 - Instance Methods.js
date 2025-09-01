
// Number instance Methods :

// 1. toExponential() - return string
// It convert number into exponential notation string.
const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1



// 2. toFixed(digit) - return string
// it rounds up
console.log(342.467.toFixed(4))     // 342.4670
console.log(342.467.toFixed(1))     // 342.5
console.log(342.455.toFixed(1))     // 342.5


// 3. toPrecision(value) - return string
// return string of length = value
console.log(123.45.toPrecision(3)); // 123
console.log(123.45.toPrecision(4)); // 123.5
console.log(123.45.toPrecision(2)); // 1.2e+2


// 4. toString(radix) - convert num into string
// radix range - 2 to 36 default 10
console.log((78).toString())    // 78
console.log((752.89).toString())    // 752.89
console.log((7).toString(2))    // 111
console.log((6).toString(2))    // 110
console.log((0b111).toString(10))    // 7


// 5. toLocalString()
// It is used to convert number into different country number system
const hundred = 100000000
console.log(hundred)
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-US'));
console.log(hundred.toLocaleString('en-IN'));
console.log(hundred.toLocaleString("ar-EG"));
console.log(hundred.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
console.log(hundred.toLocaleString(["ban", "id"]));     // fallback language option


// 6. valueOf() - return number
// returns the value of this number
const num1 = new Number(10);
console.log(typeof num1); // object

const num2 = numObj.valueOf();
console.log(num2); // 10
console.log(typeof num2); // number