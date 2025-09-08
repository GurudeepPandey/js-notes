
// Array built-in Methods :
// const arr = ["apple", "banana", "mango", 10, 20]


// Adding and Removing elements Methods:
// 1. push() - add element at end
// arr.push(100)
// arr.push(100, 200)
// arr.push([100, 200])
// console.log(arr);

// 2. unshift() - add element at beginning
// arr.unshift(100)
// arr.unshift(2, 3)
// arr.unshift([2, 3])
// console.log(arr);

// 3. pop() - remove last element and return it
// arr.pop()
// let a = arr.pop()
// console.log(a)
// console.log(arr)

// 4. shift() - remove from beginning
// arr.shift()
// let b = arr.shift()
// console.log(b);
// console.log(arr);



// Searching Methods:
// const arr = [10, 20, 20, 30, 10, 30, 20, 20]
// 1. indexof(searchElement, fromIndex)
// console.log(arr.indexOf())      // -1
// console.log(arr.indexOf(10))      // 0
// console.log(arr.indexOf(10, 2))      // 4
// console.log(arr.indexOf(100))      // -1

// 2. lastIndexOf(searchElement, fromIndex)
// console.log(arr.lastIndexOf());     // -1
// console.log(arr.lastIndexOf(10));   // 4
// console.log(arr.lastIndexOf(20));   // 7
// console.log(arr.lastIndexOf(20, 2));    // 2
// console.log(arr.lastIndexOf(200));    // -1

// 3. includes(searchElement, fromIndex)
// console.log(arr.includes());        // false
// console.log(arr.includes(20));      // true
// console.log(arr.includes(20, 10));  // false
// console.log(arr.includes(50));      // true

// 4. find(callback(value, index))
// It takes callback function and run this function on each element of array where find method first get true it return that element.
// It does not real array
// If not found return undefined 
// let trueElem = arr.find(function(elem){
//     return elem > 100
// })
// console.log(trueElem);      // 20
// console.log(arr)

// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// const result = inventory.find(({ name }) => name === "cherries");
// console.log(result); // { name: 'cherries', quantity: 5 }

// console.log(arr.find((value, index) => {
//     console.log(index, value)
//     return true         // it return 1st ele
//     return false        // it log all ele
// }))

// 5. findIndex(callback(value, index))
// same as find method but it return element index in place of element
// if not found return -1



// Sorting and Reversing Method:
// const arr = [20, 1, 5, 50, 4]
// const arr1 = ["june", "july", "apply"]

// 1. sort(compareFn)
// It returns a reference to the original array,
// arr.sort()
// console.log(arr);   // [1,20,4,5,50]
// arr.sort((a, b) => a - b)     // ascending order
// console.log(arr);
// arr.sort((a, b) => b - a)     // descending order
// console.log(arr);

// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];
// // sort by value
// items.sort((a, b) => a.value - b.value);
// console.log(items);

// const numbers = [3, 1, 4, 1, 5];
// // [...numbers] creates a shallow copy, so sort() does not mutate the original
// const sorted = [...numbers].sort((a, b) => a - b);
// sorted[0] = 10;
// console.log(numbers[0]); // 3

// console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
// console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]


// 2. toSorted(compareFn)
// same as sort function but it return new array


// 3. reverse()
// const numbers = [3, 2, 4, 1, 5];
// const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
// reversed[0] = 5;
// console.log(numbers[0]); // 5

// [...numbers] creates a shallow copy, so reverse() does not mutate the original
// const reverted = [...numbers].reverse();
// reverted[0] = 5;
// console.log(numbers[0]); // 3

// console.log([1, , 3].reverse()); // [3, empty, 1]
// console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]


// 4. toReversed()
// It is same as reverse function but it return new array not original array reference.



// Conversion:

// 1. join(seperator)
// It return string
// const arr = ["apple","banana","orange"];
// console.log(arr.join(" - ")); // "apple - banana - orange"
// console.log(arr.join()); // apple,banana,orange
// console.log(arr.join("")); // applebananaorange
// console.log(arr.join(" ")); // apple banana orange

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
// console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

// console.log([1, , 3].join()); // '1,,3'
// console.log([1, undefined, 3].join()); // '1,,3'


// 2. toString()
// It convert into string
// console.log([1, 2, "a", "1a"].toString());

// When an array is cyclic (it contains an element that is itself), browsers avoid infinite recursion by ignoring the cyclic reference.
// const arr = [];
// arr.push(1, [3, arr, 4], 2);
// console.log(arr.toString()); // 1,3,,4,2

// console.log([1, , 3].toString()); // '1,,3'


// 3. flat(depth)
// It return new array
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());

// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());
// console.log(arr2.flat(2));
// console.log(arr2.flat(Infinity));


// 4. flatMap(callbackFn)
// It is combintion of flat and map method
// const arr = [1, 2, 3, 4];
// console.log(arr.flatMap((x) => [x, x * 2]))
// console.log(arr.map((x) => [x, x * 2]))