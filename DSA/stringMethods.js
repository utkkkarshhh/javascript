const str = "Hi, how are you?";
const str2 = "Lorem ipsum dolor sit amet, consectetur adip";

// charAt(index): Returns the character at the specified index in a string.

// charCodeAt(index): Returns the Unicode value of the character at the specified index in a string.

// concat(str1, str2, ...): Combines one or more strings and returns a new string.

// indexOf(searchValue[, fromIndex]): Returns the index of the first occurrence of a specified value within a string.

// lastIndexOf(searchValue[, fromIndex]): Returns the index of the last occurrence of a specified value within a string.

// slice(startIndex[, endIndex]): Extracts a section of a string and returns it as a new string.

// substring(startIndex[, endIndex]): Returns the part of the string between the start and end indexes.

// substr(startIndex[, length]): Returns the characters in a string beginning at the specified location through the specified number of characters.
// const result = substr(0, str.length -1);

// toLowerCase(): Converts a string to lowercase letters.
// const result = str.toLowerCase();

// toUpperCase(): Converts a string to uppercase letters.
// const result= str.toUpperCase();

// trim(): Removes whitespace from both ends of a string.
// const result = str.trim();

const result = str2.slice(2);

console.log(result);
