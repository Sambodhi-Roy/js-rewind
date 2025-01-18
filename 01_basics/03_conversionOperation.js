let score = 33

console.log(typeof score);
console.log(typeof(score));

score = "33abc"
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = null
valueInNumber = Number(score)
console.log(valueInNumber);

score = undefined
valueInNumber = Number(score)
console.log(valueInNumber);

score = true // Prints 1
valueInNumber = Number(score)
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (but the data type is still a number)
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sam" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **************Operations**************

let value = 3
let negValue = -value
console.log(negValue);

// Basic Arithmetic Operations (+,-,/,*,**,%)

let str1 = "Hitesh"
let str2 = " hitesh"

let str3 = str1+str2
console.log(str3);

console.log(1+"2"); 
console.log("1"+2);
console.log("1"+"2");
// All the 3 above console logs result in 12.

console.log(1+2+"2"); //Output: 32
console.log("1"+2+2); //Output: 122

// All of this is derived from the ECMA standards

// Prefix and Postfix Increment

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);



