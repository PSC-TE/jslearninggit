var str= "hello World welcome to ty.";

/*
console.log(str.charAt(8));

// charCodeAt()==>Returns the Unicode value of the character at the specified location.
console.log(str.charCodeAt(10));

console.log(str.concat("hello sdet32"));

console.log(str.indexOf("o"));

console.log(str.lastIndexOf("l"));

console.log(str.split(" "));

console.log(str.substring(5,15));

console.log(str.length)
console.log("==================================");
// trim()==>Removes the leading and trailing white space and line terminator characters from a string.
console.log(str.trim().length);

console.log(str.slice(6,16));

console.log(str.toLowerCase());

console.log(str.toUpperCase());*/


// split()==>Split a string into substrings using the specified separator and return them as an array.
console.log(str.split(" "));

console.log(str.split("o"));

// slice()==>Returns a section of a string.
console.log(str.slice(1, 5))

// substring()==>Returns the substring at the specified location within a String object. includes -ve integers
console.log(str.substring(-100, 50));

