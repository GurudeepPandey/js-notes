
// String Datatype :

// A string is a sequence of characters enclosed in quotes.
// It represents textual data such as words, sentences, or symbols.
// Strings are primitive data types in JavaScript but also have methods (because JavaScript wraps them in String objects when needed).
let str1 = "Hello";       // Double quotes
let str2 = 'World';       // Single quotes
let str3 = `Hi ${str1}`;  // Template literal (backticks)



// There are two ways to create string :

// 1. String Literal
let name = "John";
console.log(typeof name); // String

// 2. Using String Constructor (Object wrapper)
// Rarely used because it creates a String object, not a primitive string.
let objStr = new String("John");  
console.log(typeof objStr); // object



// String Characteristics :

// 1. Immutable: Once created, strings cannot be changed.
let str = "hello";
str[0] = "H";  //  does nothing
console.log(str); // "hello"

// 2. Index-based access: Strings are like arrays of characters (zero-based index).
let word = "JavaScript";
console.log(word[0]);  // "J"
console.log(word[4]);  // "S"
console.log(word.charAt(4));    // S
console.log(word.charAt(-1));   // " "
console.log(word.at(-1));       // t

// 3. Length Property
console.log("Hello".length); // 5

// 4. Escape Characters
console.log("She said \"Hello\"");
console.log("First line\nSecond line");
console.log("C:\\Users\\Admin");
console.log("hello \n world");
console.log("hello\tworld");

// 5. Template Literals (ES6)
// Use backticks (`).
// Allow multiline strings and string interpolation.
let name1 = "Alice";
let age = 22;
let info = `My name is ${name1}, 
and I am ${age} years old.`;
console.log(info);


//  String vs String Object :
// Always use string literals, not new String().
let s1 = "hello";              // primitive
let s2 = new String("hello");  // object
console.log(typeof s1); // "string"
console.log(typeof s2); // "object"
console.log(s1 === s2); // false (different types)


// String Datatype conversion :
console.log(String(null));  // "null"
console.log(String(undefined)); // "undefined"
console.log(String(true));  // "true"
console.log(String(false)); // "false"
console.log(String(45));    // "45"
console.log(String(76n));   // "76"
console.log(76n);
console.log(String(Symbol("a")));  // "Symbol(a)"
console.log(Symbol("a"));  // "Symbol(a)"



console.log("😁".length)    // 2 (because emoji uses surrogate pairs)