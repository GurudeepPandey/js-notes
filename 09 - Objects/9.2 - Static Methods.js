
// Static Methods:

// 1. Object.assign(target, source1, source2, ..)
// It copy properties from sourec obj to target obj.
// const obj5 = { a: 1 };       // Object Cloning
// const copy = Object.assign({}, obj5);
// console.log(copy); // { a: 1 }

// const obj1 = { a: 0, b: { c: 0 } }; // shallow cp
// const obj2 = Object.assign({}, obj1);
// console.log(obj2); // { a: 0, b: { c: 0 } }
// obj1.a = 1;
// console.log(obj1); // { a: 1, b: { c: 0 } }
// console.log(obj2); // { a: 0, b: { c: 0 } }
// obj2.b.c = 3;
// console.log(obj1); // { a: 1, b: { c: 3 } }
// console.log(obj2); // { a: 2, b: { c: 3 } }

// const o1 = { a: 1 };        // merging object
// const o2 = { b: 2 };
// const o3 = { c: 3 };
// const obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
// console.log(o2)   // {b: 2}



// 2. object.create()
// It is used to create new object using an existing object.
// used in setting inheritance
let ex = {
    name: "Gurudeep",
    age: 20,
    branch: "CSE",
    // __proto__: Array.prototype
}
const newObj = Object.create(ex)
console.log(ex)
console.log(newObj)



// 3. object.entries()
// It convert into array
const obj = Object.entries(ex)
console.log(obj);   // [ [ 'name', 'Gurudeep' ], [ 'age', 20 ] ]
console.log(typeof obj);
console.log(Array.isArray(obj));
console.log(Object.entries("Aman"))
console.log(Object.entries("100"))
console.log(Object.entries(100))



// 4. Object.freeze()
// It makes object immutable
// After using it, We cannot add, update and delete properties in object.
// console.log(ex);
// ex.name = "Gaurav"
// delete ex.age
// console.log(ex);
// console.log(Object.isFrozen(ex))
// Object.freeze(ex)
// console.log(Object.isFrozen(ex))
// ex.name = "Ankit"
// console.log(ex);

// const arr = [10, 20, 30]
// Object.freeze(arr)
// arr[0] = 200
// console.log(arr);



// 5. Object.seal()
// prevents adding/removing but allows modify
// console.log(ex);
// ex.name = "Gaurav"
// delete ex.age
// console.log(ex);
// console.log(Object.isSealed(ex))
// Object.seal(ex)
// console.log(Object.isSealed(ex))
// ex.name = "Ankit"
// delete ex.branch
// ex.address = "INDIA"
// console.log(ex)



// 6. Object.keys()
// It return array of keys in string form of object.
// const obj1 = Object.keys(ex)
// console.log(typeof obj1);
// console.log(obj1);
// console.log(Object.keys([100, 300, 500]))
// console.log(Object.keys("Aman"))
// console.log(Object.keys(900))



// 7. Object.values()
// It return an array of values of object.
// console.log(Object.values(ex))
// console.log(Object.values([100, 300, 500]))
// console.log(Object.values("Aman"))
// console.log(Object.values(900))



// 8. Object.hasOwn()
// It return true only if property exist in object through nto inheritance.
// console.log(Object.hasOwn(ex, "age"))   // true
// console.log(Object.hasOwn(ex, "name"))  // false
// console.log(Object.hasOwn(ex, "salary")) // false
// console.log(Object.hasOwn(ex, "toString")) // false
// console.log("toString" in ex) // true
// const arr = [10, 20, 30]
// console.log(Object.hasOwn(arr, 3)); // false
// console.log(Object.hasOwn(arr, 2)); // true
// hasOwn is applicable on any JS Object but hasOwnProperty is only applicable on String Literal.



// 9. Object.is()
// Case 1: Evaluation result is the same as using ===
// Object.is(25, 25); // true
// Object.is("foo", "foo"); // true
// Object.is("foo", "bar"); // false
// Object.is(null, null); // true
// Object.is(undefined, undefined); // true
// Object.is(window, window); // true
// Object.is([], []); // false
// const foo = { a: 1 };
// const bar = { a: 1 };
// const sameFoo = foo;
// Object.is(foo, foo); // true
// Object.is(foo, bar); // false
// Object.is(foo, sameFoo); // true

// // Case 2: Signed zero
// Object.is(0, -0); // false
// Object.is(+0, -0); // false
// Object.is(-0, -0); // true

// // Case 3: NaN
// Object.is(NaN, 0 / 0); // true
// Object.is(NaN, Number.NaN); // true