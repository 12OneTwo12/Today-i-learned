//string을 생성하는 법

// 1. 원시타입으로 문자열 생성
const stringPrimitive = 'A new string';
// 2. 참조타입으로 문자열 생성
const stringObject = new String('A new string');

console.log(`${typeof stringPrimitive}, ${typeof stringObject}`);


const aString = 'how are you?';
console.log(aString);
console.log(typeof aString);
console.log('01234567891011');
console.log(aString[4]);
console.log(aString[3]);
console.log(aString.length);
console.log(aString[10]);
console.log(aString.charAt(5)); 

console.log(aString.indexOf('o'));
console.log(aString.lastIndexOf('o'));


// Splitting strings
const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ");

console.log(splitString, Array.isArray(splitString)); 
console.log(splitString[1]);

// Trimming Whitespace
const tooMuchWhitespace = "     How are you?     ";

const trimmed = tooMuchWhitespace.trim();

console.log(trimmed);

// Finding and Replacing String values

// Replace the first instance of "How" with "Where"
const newString = originalString.replace("How", "Where");

console.log(newString);
