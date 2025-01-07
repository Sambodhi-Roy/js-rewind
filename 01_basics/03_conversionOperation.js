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