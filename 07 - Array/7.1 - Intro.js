
// Array Datatype :


// What is an Array in JavaScript?
// An Array in JavaScript is a special type of object used to store an ordered collection of values.
// These values (called elements) can be of any type: numbers, strings, objects, other arrays, functions, etc.
// Arrays in JS are dynamic → their size is not fixed (can grow/shrink).
// Arrays are zero-indexed → the first element is at index 0.
// It enables storing a collection of multiple items under a single variable name.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// Arrays are reference types → assigning one array to another does not copy, it shares reference.

// let arr = [10, "hello", true, {name: "John"}, [1,2,3]];
// console.log(arr[0]); // 10
// console.log(arr[3].name); // John
// console.log(arr[4][1]); // 2



// Internal Representation :
// Technically, an Array is an object where indexes (0, 1, 2, …) are stored as keys (strings).
// The length property is automatically maintained by JS.
// let arr1 = [1, 2, 3];
// console.log(typeof arr1); // "object"
// console.log(Array.isArray(arr1)); // true
// console.log(arr1["2"])      // 3
// console.log(arr1[2])        // 3
// console.log(arr1["02"])     // undefined



// Ways of Array creation:
// Array Literal (most common)
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// Array Constructor
let arr1 = new Array(3);   // creates an empty array of length 3
let arr2 = new Array(1,2,3); // creates [1,2,3]
console.log(arr1);
console.log(arr2);

// Array.of()
let arr3 = Array.of(5); // [5]
console.log(arr3);

// Array.from()
let str = "hello";
let arr4 = Array.from(str); // ['h','e','l','l','o']
console.log(arr4);



// Accessing & Modifying Elements:
let colors = ["red", "green", "blue"];
console.log(colors[1]); // "green"
console.log(colors[16]); // undefined
console.log(colors.length - 1); // blue
colors[1] = "yellow";   // modify
console.log(colors);    // ["red","yellow","blue"]



// length property :
// let arr = [1,2,3];
// console.log(arr.length); // 3
// arr.length = 5;
// console.log(arr); // [1,2,3, <2 empty items>]



// What are Sparse Arrays ?
// Arrays can have “holes” (missing indexes).
let arr = [];
arr[3] = "hi";
console.log(arr); // [ <3 empty items>, 'hi' ]
console.log(arr.length); // 4


// Multidimensional Arrays :
// JavaScript doesn’t have native multi-dimensional arrays, but you can create arrays inside arrays.
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
console.log(matrix[1][2]); // 6



// Playing with length property:
let games = ["puzzle", "car racing", "bgmi", "freefire"]
games[6] = "bubble shooter"
console.log(games);
console.log(games.length);    // 7

games.length = 10
console.log(games);
console.log(games[9]);    // undefined
console.log(games.length);    // 10

games.length = 2
console.log(games);
console.log(games.length);  // 2



// These methods return new array & don't change original array:
// concat() → merges arrays and returns a new one
// slice(start, end) → extracts elements into a new array
// map(callback) → transforms each element, returns a new array
// filter(callback) → filters elements, returns a new array
// reduce() / reduceRight() → return a single value (not an array)
// flat(depth) → flattens nested arrays, returns a new one
// flatMap(callback) → maps and flattens in one step
// toSorted(callback) → ES2023 method, returns a sorted copy
// toReversed() → ES2023 method, returns reversed copy
// toSpliced(start, deleteCount, ...items) → ES2023 method, like splice but non-mutating
// join(separator) → returns a string (does not change original)
// find(callback), findIndex(), findLast(), findLastIndex() → return value/index, no mutation
// every(), some(), includes(), indexOf(), lastIndexOf() → return boolean or index, no mutation



// These methods change original array:
// push(...items) → add elements to the end
// pop() → remove last element
// shift() → remove first element
// unshift(...items) → add elements to the start
// splice(start, deleteCount, ...items) → add/remove elements anywhere
// sort(compareFn) → sorts the array in place
// reverse() → reverses the array in place
// fill(value, start, end) → fills array with value
// copyWithin(target, start, end) → copies part of array within itself


// An easy way to change a mutating method into a non-mutating alternative is to use the spread syntax or slice() to create a copy first:

// Nodelist, HTMLCollection and function arguments are array like objects.