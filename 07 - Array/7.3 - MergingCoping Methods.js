
// Merging & Copying:

// 1. concat(arr, arr1, arr3, ..)
// It is used to merge two or more arrays.
// It return new array.
// const arr = [10, 20]
// const arr1 = [30, 40]
// const mergeArr = arr.concat(arr) // [10,20,10,20]
// const mergeArr = arr.concat(arr1)    // [10,20,30,40]
// console.log(mergeArr);
// arr.push(100)
// console.log(mergeArr);

// const arr3 = [5,6].concat(3,4,[8,9])
// console.log(arr3);

// When nested array encounter it create shallow copy
// const num1 = [[1]];
// const num2 = [2, [3]];
// const numbers = num1.concat(num2);
// console.log(numbers);       // [[1], 2, [3]]
// num1[0].push(4);
// console.log(numbers);       // [[1, 4], 2, [3]]

// const num3 = num1 + num2
// console.log(num3);      // 1,42,3

// spread operator
// It also fail in nested array. It copy value from origional array and put into new array but if it found nested array it paste array reference.
// let a = [1, 2, 3, 4]
// let b = [5, [6, 7], 8]
// let c = [...a, ...b]
// console.log(c);
// b[1].push(100)
// console.log(c);


// 2. slice(start, end)
// It returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// It is used to get subarray from array.
// const arr = [10, 20, 30, 40, 50, 60]
// console.log(arr.slice()); //[10,20,30,40,50,60]
// console.log(arr.slice(3));  // [40,50,60]
// console.log(arr.slice(2, 5));   // [30,40,50]
// console.log(arr.slice(2, -2));  // [30,40]
// console.log(arr.slice(-2));  // [50,60]]

// It create shallow copy.
// const arr2 = [100, [200, 300], 400]
// const arr3 = arr2.slice(0, 2)
// console.log(arr3);
// arr2[1].push(500)
// console.log(arr3);


// 3. splice(start, deleteCount, item1, item2, .)
// It affects real array
// In this method we can insert element in real array
// It return remove elements in new array and remove elements from start index to delecount and add elememts in original array
// const array = [10, 20, 30, 40, 50, 60, 70]
// console.log("Before splice: ", array);

// const array2 = array.splice(-2, 1)
// const array2 = array.splice(2, 1)   // it remove one elem
// const array2 = array.splice(2, 0)
// const array2 = array.splice(2, 3, 500, 700, 1000)
// console.log(array2);
// console.log("After splice: ", array);


// 4. tospliced(start, deleCount, item1, item2, ..)
// It is same as splice but it does not affect original array like in splice method.



// Returns true if the argument is an array, or false otherwise.
console.log(Array.isArray("Gurudeep Pandey"));
console.log(Array.isArray([]));


// Creates a new Array instance from an iterable or array-like object.
console.log(Array.from("Gurudeep Pandey"));
console.log(Array.from({name: "Gurudeep", branch: "CSE"}));         // It gives []


// Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
console.log(Array.of({name: "Gurudeep", branch: "CSE"}));