
// ****************************** For Of Loop ***************************
// Iterates over values of an iterable (array, string, set, map).
// Works on iterables → arrays, strings, maps, sets, NodeLists, etc.


// for of loop on array
// const myarray = [10, 20, 30]
// for (const value of myarray) {
//     console.log(value);
// }


// for of loop on string
// const string = "Gurudeep"
// for (const char of string) {
//     console.log(char);
// }


// for of loop on map object
// here new keyword is constructor
// Map object does not carry duplicate value
// Order same as written
// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United State of America")
// map.set("Fr", "France")
// map.set("IN", "India")

// console.log(map);
// console.log(typeof map);

// for (const key of map) {
//     console.log(key);
// }
// for (const [key, value] of map) {
//     console.log(key, "=>", value);
// }


// for of loop on object
// Means for of loop not working on Object
// let myobj = {
//     game1: "freefire",
//     game2: "racing game"
// }

// for (const key of myobj) {          // here myobj is not iterable
//     console.log(key);
// }



// ****************************** For In Loop ***************************
// Iterates over keys (property names) of an object.
// Best for objects, not arrays (because order isn’t guaranteed).

// For in loop in on object
// It returns only key not value
// let myobj = {
//     py: "Python",
//     js: "Javascript",
//     ru: "Ruby"
// }
// for (const key in myobj) {
//     console.log(key, myobj[key]);
// }


// For in loop on array
// let myarray = [10, 20, 30]
// for (const key in myarray) {
//     console.log(key, myarray[key]);
// }


// For in loop on string
// let mystr = "Gurudeep"
// for (const key in mystr) {
//     console.log(key, mystr[key]);
// }


// For in loop on map object
// for in loop not working on map
// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United State of America")
// map.set("Fr", "France")
// map.set("IN", "India")
// for (const key in map) {
//     console.log(key);
// }



// ****************************** For Each Loop ***************************
// It is a special loop of array
// It is a type of method of array
// In which we pass a function so, it is known as callback function
// Runs a function once for each element.
// Can’t break or return out of forEach.

// const language = ["c", "py", "js", "java"]

// language.forEach( function (value) {
//     console.log(value);
// })

// language.forEach( (value) => {              // Using arrow function
//     console.log(value);
// })


// We can also pass function in for each method
// function printMe(value) {
//     console.log(value);
// }
// language.forEach(printMe)


// It also carry item, index and array in each iteration
// language.forEach( (item, index, array) => {
//     console.log(item, index, array);
// })


// How to extract data from array
// const mycoding = [
//     {
//         language: "Python",
//         extension: ".py"
//     },
//     {
//         language: "Javascript",
//         extension: ".js"
//     },
//     {
//         language: "Ruby",
//         extension: ".ru"
//     }
// ]
// mycoding.forEach((item) => {
//     console.log(item.language);
// })

// At last, For each loop does not return any value only print value in console

// let a = [1, 2, 3]
// let b = a.forEach( (value) => {
//     return value
// })
// console.log(b);             // Undefined


// for of loop => Access only value
// for in loop => Access only key
// for each loop => Access key, value and array in each iteration



// Modern JS provide higher order function to iterate:
// forEach, map, filter, reduce, some, every, find, findIndex, etc.

