const userEmail = "sam@gmail.com"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Dont have user email");
}

// Falsy Values : false, 0, -0, BigInt 0n, "", null,undefined, NaN

// Truthy values : Everything except falsy values
// Some unique truthy values : "0", 'false', " ", [], {}, function(){}

const userArr = []

if(userArr.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??)

// This operator is made to handle all null and undefined values which can create confusion or unwanted output. This operator checks if the value of the variable is null or undefined and assigns it a value accordingly to avoid that situation.

let val1;
// val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined??15
val4 = null ?? 10 ?? 20     // Takes the first value, hence 10.

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");
