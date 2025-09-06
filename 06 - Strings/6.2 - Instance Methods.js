
// SEARCHING METHODS :
// case sensitive
// indexOf(searchValue, fromIndex)
let a = "hello world"
// console.log(a.indexOf("l")) // 2
// console.log(a.indexOf(" ")) // 5
// console.log(a.indexOf())    // -1
// console.log(a.indexOf("x")) // -1
// console.log(a.indexOf("o")) // -1
// console.log(a.indexOf("o", 5)) // -1


// includes(searchValue, fromIndex)
// let b = "aafhfa"
// console.log(b.lastIndexOf("a"));    // 5
// console.log(b.lastIndexOf("A"));    // -1
// console.log(b.lastIndexOf("aa"));    // 0
// console.log(b.lastIndexOf("fa"));    // 4
// console.log(b.lastIndexOf("fh"));    // 2
// console.log(b.lastIndexOf("f"));    // 4
// console.log(b.lastIndexOf("fj"));    // -1
// console.log(b.lastIndexOf("x"));    // -1


let c = "Js is my first learning language"
// console.log(c.includes("j"));   // false
// console.log(c.includes("J"));   // true
// console.log(c.includes("my"));   // true
// console.log(c.includes("MY"));   // false


// startsWith(searchValue, fromIndex = 0)
// console.log(c.startsWith("a"));     // false
// console.log(c.startsWith("js"));    // false
// console.log(c.startsWith("Js"));    // true
// console.log(c.startsWith("Js is "));    // true


// endsWith(searchValue, length = str.length)
// console.log(c.endsWith("g"));       // false
// console.log(c.endsWith("E"));       // false
// console.log(c.endsWith("age"));     // true



// EXTRACTING METHODS :

// Swapping Arguments: If indexStart is greater than indexEnd, substring will swap the two arguments
// Negative Values: If any argument is negative or NaN, it is treated as 0.
// Out of Range Values: Values greater than the string length are treated as the string length.
// const fName = "Gurudeep Pandey"
// const newString = fName.substring(0, 4)
// console.log(newString);
// console.log(fName.substring(4, 0));
// console.log(fName.substring(-4, 6));     // It treat negative value as 0
// console.log(fName.substring(2, 60));
// console.log(fName.substring(7));
// console.log(typeof fName);


// SLICE METHOD:
// Negative Values: slice can accept negative indices, which count back from the end of the string.
// No Swapping: slice does not swap the arguments. If beginIndex is greater than endIndex, it returns an empty string.
// Out of Range Values: Values greater than the string length are treated as the string length.
// const fullName = "Gurudeep Pandey"
// const anotherString = fullName.slice(0, 4)
// console.log(anotherString);
// console.log((fullName.slice(4, 10)));
// console.log((fullName.slice(10, 4)));
// console.log((fullName.slice(-1, -3)));
// console.log((fullName.slice(-3, -1)));
// console.log((fullName.slice(7)));
// console.log(fullName);



// MODIFYING METHODS :

// Uses of trim()
// It remove only start and end spaces only
// const newString = "    Gurud  p   "
// console.log(newString);
// console.log(newString.trim());
// console.log(newString.trimStart());
// console.log(newString.trimEnd());

// console.log("   hi there   ".toUpperCase());
// console.log("   hi there   ".toLowerCase());



// REPLACING METHOD ;
// let text = "I like cats cats";
// console.log(text.replace("cats", "dogs")); 
// "I like dogs"

// console.log("Ha ha ha".replaceAll("ha", "he")); 
// "Ha ha ha" -> doesn't replace "Ha" (case-sensitive)



// Splitting & Joining
// let fruits = "apple,banana,orange";
// let arr = fruits.split(",");
// console.log(arr); // ["apple", "banana", "orange"]
// console.log(fruits.split()) // ["apple,banana, orange]
// console.log(fruits.split(" ")) // ["apple,banana, orange]
// console.log(fruits.split(""))
// console.log(fruits.split(",", 1)); // ["apple", "banana"]


// console.log(arr.join(" - ")); // "apple - banana - orange"
// console.log(arr.join()); // apple,banana,orange
// console.log(arr.join("")); // applebananaorange
// console.log(arr.join(" ")); // apple banana orange


// at()
// let b = "Gurudeep"
// console.log(b.at(2));   // r
// console.log(b.at(20));  // undefined
// console.log(b.at(-2));  // e
// It result in browser without using console
// console.log("😁".at(0));
// console.log("😒".at(0));



// charAt()
// let d = "Gurudeep"
// console.log(d.charAt(2));   // r
// console.log(d.charAt(20));  // " "
// console.log(d.charAt(-2));  // " "
// It result in browser without using console
// console.log("😁".charAt(0));
// console.log("😒".charAt(0));


// charCodeAt()
// let d = "Gurudeep"
// let emoji = "😁"
// console.log(d.charCodeAt(2));   // 114
// console.log(d.charCodeAt(-2));  // NaN
// console.log("a".charCodeAt(0));  // 97
// console.log("A".charCodeAt(0));  // 65
// console.log(emoji.charCodeAt(0));  // 55357


// concat()
// console.log("Guru".concat("deep"))
// console.log("Guru".concat("deep", " Pandey"))
// console.log("Guru" + "deep" + " Pandey")


// padStart(targetLength, padString)
// let str = "5";
// console.log(str.padStart(3, "0"));  // "005"
// console.log(str.padStart(5, "x"));  // "xxxx5"
// console.log(str.padStart(2));       // " 5" (space by default)
// console.log("12345".padStart(3, "0")); // "12345" (no change, already >= length)


// padEnd(targetLength, padString)
// let str = "5";
// console.log(str.padEnd(3, "0"));  // "500"
// console.log(str.padEnd(5, "."));  // "5...."
// console.log(str.padEnd(2));       // "5 " (space by default)
// console.log("12345".padEnd(3, "0")); // "12345" (no change)


// repeat(count)
// console.log("ha".repeat(3));   // "hahaha"
// console.log("x".repeat(5));    // "xxxxx"
// console.log("abc".repeat(0));  // "" (empty string)
// console.log("hi".repeat(-1));   // RangeError
// console.log("hi".repeat(2.5));  // "hihi" (decimal is floored to 2)