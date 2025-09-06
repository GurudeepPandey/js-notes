
// String Immutability & Performance tricks


// 1. String Immutability
// Strings in JavaScript are immutable → once created, they cannot be changed.
// Any operation that seems to modify a string actually creates a new string.
let str = "Hello";
str[0] = "h";      // does nothing
console.log(str);  // "Hello"
str = "h" + str.slice(1); 
console.log(str);  // "hello" ✅ (new string created)
// "Hello" and "hello" are two different strings in memory.
// Old string remains unchanged, but may be garbage-collected later.



// 2. Concatenation Methods
// There are multiple ways to combine strings:
// a) Using + operator
// let str1 = "Hello";
// let str2 = "World";
// let result = str1 + " " + str2;
// console.log(result); // "Hello World"
// Simple, but for many concatenations in loops, it can be inefficient.

// b) Using concat()
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(" ", str2)); // "Hello World"
// Not commonly used → + is shorter & faster.

// c) Using Template Literals (`)
// let name = "Alice";
// let age = 22;
// let info = `My name is ${name}, and I am ${age} years old.`;
// console.log(info);
// Best for readability & interpolation.



// 3. Performance Concerns

// When dealing with large strings or many concatenations:
// Using += in loops
// let result = "";
// for (let i = 0; i < 100000; i++) {
//   result += "a";  // Creates a new string every time
// }
// Creates 100,000 new strings → memory & CPU heavy.

// Better: Use Array + join()
let arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push("a");
}
let result = arr.join("");
// Much faster & memory-efficient.



// 4. String Building Best Practices
// For small strings / few concatenations → use + or template literals.
// For dynamic content → use template literals.
// For large text / heavy loops → use arrays + join().



// 5. Memory Considerations
// Since strings are immutable:
// "Hello" + "World" → creates a brand new string "HelloWorld".
// Intermediate values may exist temporarily in memory.
// That’s why repeated concatenation in loops is slower.



// 6. Practical Example – HTML Builder
// Inefficient way:
// let html = "";
// for (let i = 0; i < 1000; i++) {
//   html += `<div>Item ${i}</div>`;
// }

// Efficient way:
// let arr = [];
// for (let i = 0; i < 1000; i++) {
//   arr.push(`<div>Item ${i}</div>`);
// }
// let html = arr.join("");



// 7. Advanced: String Buffers
// In other languages (like Java’s StringBuilder), mutable strings exist for performance.
// 👉 In JavaScript, we simulate this with arrays + join().



// Conclusion:
// Strings are immutable → every modification creates a new string.
// For small concatenations → use + or template literals.
// For large loops or performance-critical code → use arrays + join().