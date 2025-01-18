// Primitive - Data types which are passed by value and changes to the variable are made to the copied value of the variable

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // userEmail is undefined by default

const id = Symbol('123')    
const anotherId = Symbol('123')
//-> Symbol is used for uniqueness

console.log(id === anotherId)  // -> Returns false

const bigNumber = 3000089n; //Stores this as a bigInt

// Reference Type (Non-primitive Types) - Data types whose reference can be allocated in the memory and changes is directly implemented in the original reference.

// Arrays, Objects, Functions

const cartoon = ["doraemon","shinchan","poppye"]

let myObj = {
    name: "Sam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof cartoon);
console.log(typeof null);
console.log(typeof myFunction);

// Is Javascript dynamically typed of statically typed? Ans: Dynamically

// TypeScript is statically typed.

// Statically typed languages - Languages where the data types of the variables is checked at compile time such as C,C++, Java etc. Also, you need to explicitly mention the datatypes of the variables.

// Dynamically typed languages - Languages where the data types of the variables are checked at runtime and there is no need to explicitly mention the datatypes of the variables such as Python, Javascript etc.


// Typeof operation Results

// Undefined - "undefined"
// null - "object"
// Boolean - "boolean"
// Number - "number"
// String - "string"
// Object/Arrays - "object"
// Function - "function"