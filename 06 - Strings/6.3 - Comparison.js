
// String Comparison :

// Strings are compared lexicographically (dictionary order) using Unicode values.
console.log("apple" < "banana");   // true
console.log("Zebra" > "apple");    // false (uppercase < lowercase)
console.log("A" === "a");       // false
console.log("A" < "a");       // true
// Comparison is case-sensitive ("A" < "a" because "A" has smaller Unicode)



// Unicode Values :
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
console.log("😊".charCodeAt(0)); // 55357 (part of surrogate pair)



// Problems with Direct Comparison :
// Direct <, >, == comparisons:
// Don’t handle local alphabets (like ä, ö, ü).
// Don’t handle different cases properly in sorting.
// Treat "Z" < "a", which may be unexpected in some languages.


// localeCompare(str2, [locale], [options]):
// To solve these issues, JavaScript provides localeCompare():
// Returns:
// -1 → str1 comes before str2
// 0 → both strings equal
// 1 → str1 comes after str2
// Can respect locale-specific rules.
console.log("apple".localeCompare("banana")); // -1
console.log("banana".localeCompare("apple")); // 1
console.log("apple".localeCompare("apple"));  // 0


console.log("ä".localeCompare("z", "de")); // -1 (in German, ä < z)
console.log("ä".localeCompare("z", "sv")); // 1 (in Swedish, ä > z)
console.log("a".localeCompare("A", "en", { sensitivity: "base" })); // 0 (case-insensitive)
// sensitivity options:
// "base" → ignores case & accents (a = A = á)
// "accent" → considers accents but ignores case (a ≠ á, a = A)
// "case" → considers case but ignores accents (a ≠ A, a = á)
// "variant" → considers both case & accents (strictest)


// Use <, > for basic lexicographic checks (ASCII/Unicode order).
// Use localeCompare() for sorting and internationalized comparisons.
// Use .toLowerCase() or .toUpperCase() when you need case-insensitive equality checks.