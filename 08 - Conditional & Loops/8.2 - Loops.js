
// Loops:


// What is Iteration ?
// Iteration means repeating a block of code multiple times until a condition is met.
// In programming, this is usually achieved through loops or loop-like constructs.


// Why Iteration is Needed?
// To avoid writing the same code multiple times.
// To process collections of data (arrays, objects, maps, sets, etc.).
// To run a task until a certain condition is met.
// To perform calculations, searches, or transformations efficiently.


// Types of iteration:

// 1. Basic for loop
// for (let i = 0; i < 5; i++) {
//   console.log("Iteration:", i);
// }
// Initialization → runs once (e.g., let i = 0)
// Condition → checked every iteration (i < 5)
// Update → executed after each iteration (i++)


// 2. while loop
// Repeats while the condition is true.
// Used when you don’t know the number of iterations in advance.
// let i = 0;
// while (i < 5) {
//   console.log("Iteration:", i);
//   i++;
// }


// 3. do while
// Executes at least once, then checks condition.
// Useful when you need at least one execution, no matter the condition.
// let i = 0;
// do {
//   console.log("Iteration:", i);
//   i++;
// } while (i < 5);


// Advance Iteration
// 1. Iterators & Iterables
// An iterable is an object that implements Symbol.iterator.
// Example: Arrays, strings, Maps, Sets.
// const arr = [1, 2];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }



// 2. Generators (function*)
// Special functions that can pause and resume.
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const g = gen();
// console.log(g.next().value); // 1
// console.log(g.next().value); // 2
// console.log(g.next().value); // 3
// console.log(g.next().value); // undefined


// break → exit loop immediately.
// continue → skip current iteration and continue.
// label + break/continue → control nested loops.


// When to Use What?
// for / while → general looping, known or unknown count.
// for...in → objects.
// for...of → arrays, strings, maps, sets.
// forEach/map/filter/reduce → functional style array processing.
// Generators / async iteration → custom or async workflows.



// Manually creating an iterator:
// function createIterator(arr) {
//   let i = 0;
//   return {
//     next: function() {
//       if (i < arr.length) {
//         return { value: arr[i++], done: false };
//       } else {
//         return { value: undefined, done: true };
//       }
//     }
//   };
// }
// const iter = createIterator([10, 20, 30]);
// console.log(iter.next()); // { value: 10, done: false }
// console.log(iter.next()); // { value: 20, done: false }