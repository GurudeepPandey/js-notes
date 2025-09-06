
// UTF-16 :


// 1. What is UTF-16?
// UTF-16 (Unicode Transformation Format – 16-bit) is a way of encoding Unicode characters.
// Each character is represented using 16-bit code units (2 bytes).
// Some characters fit into a single 16-bit unit, while others (like emoji or rare symbols) need two 16-bit units (called a surrogate pair).
// Unicode = a big standard that assigns a unique number (code point) to every character in every language/script (letters, symbols, emoji).
// UTF-16 = one way to represent those code points in memory.


// 2. How UTF-16 Works
// Unicode code points range from U+0000 to U+10FFFF.
// UTF-16 encoding rules:
// If code point ≤ U+FFFF → stored in one 16-bit unit.
// If code point > U+FFFF → stored in two 16-bit units (surrogate pair).
// let A = "A";        // U+0041 → single 16-bit unit
// let smile = "😊";   // U+1F60A → needs surrogate pair


// 3. JavaScript & UTF-16
// In JavaScript, strings are stored as UTF-16 sequences.
// Each string[index] gives you one 16-bit code unit, not necessarily a full character.
// console.log("A".length);    // 1
// console.log("😊".length);   // 2 (because surrogate pair = 2 code units)
// So "😊" looks like 1 character, but JavaScript treats it as 2 units internally.


// 4. Surrogate Pairs
// A surrogate pair is two 16-bit code units that represent a single character beyond U+FFFF.
// let smile = "😊"; 
// console.log(smile.charCodeAt(0).toString(16)); // "d83d"
// console.log(smile.charCodeAt(1).toString(16)); // "de0a"
// Together, 0xD83D + 0xDE0A = Unicode code point U+1F60A (😊).


// 5. Why Does This Matter?
// Because of UTF-16:
// length doesn’t always equal "number of visible characters".
// String methods (slice, substring, charAt) may break surrogate pairs.
// Regex with /./g may split surrogate pairs incorrectly.
// let str = "😊👍";
// console.log(str.length);       // 4 (two emoji → 2 code units each)
// console.log([...str].length);  // 2 (spread operator handles properly)


// 6. Fixing the Problem
// Modern JS has methods to handle full Unicode characters correctly:
// codePointAt() → gives full Unicode code point.
// console.log("😊".codePointAt(0).toString(16)); // "1f60a"

// fromCodePoint() → creates a string from full code point.
// console.log(String.fromCodePoint(0x1F60A)); // "😊"

// Spread operator [...str] or Array.from(str) → correctly splits characters (including emoji).
// console.log([... "😊👍"]); // ["😊", "👍"]


// Why the Web prefers UTF-8
// Most websites contain mostly ASCII/Latin characters → UTF-8 is smaller & efficient.
// UTF-8 is backward compatible with ASCII → no issues with old systems.
// Web standards (HTML5, JSON, HTTP headers) recommend UTF-8 by default.
// UTF-8 is universally supported across all operating systems and browsers.


// What is Unicode?
// Unicode = a universal standard that assigns a code point to every character.
// "A" → U+0041
// "😊" → U+1F60A
// But Unicode doesn’t specify how to store those numbers. That’s where UTF encodings (UTF-8, UTF-16, UTF-32) come in.


// UTF-8 (8-bit Encoding)
// Variable-length encoding:
// ASCII (U+0000 – U+007F) → 1 byte.
// Most common characters (Latin, symbols) → 2 or 3 bytes.
// Rare characters / emoji → 4 bytes.
// Backward-compatible with ASCII (English text = same as ASCII).
// Most common on the web.


// Practical Example
// Let’s encode "A😊":
// UTF-8:
// "A" → 41
// "😊" → F0 9F 98 8A
// Total = 5 bytes

// UTF-16:
// "A" → 0041
// "😊" → D83D DE0A
// Total = 6 bytes
// 👉 UTF-8 is smaller for ASCII-heavy text, UTF-16 can be slightly better for text with many emojis/Asian scripts.



// UTF-8 → Default for web, compact for ASCII, variable-length (1–4 bytes).
// UTF-16 → Used by JS internally, 2 or 4 bytes, still variable-length.
// UTF-32 → Rare, simple but memory-heavy (always 4 bytes).
// Browsers, HTML, JSON → use UTF-8.
// JavaScript strings in memory → use UTF-16.