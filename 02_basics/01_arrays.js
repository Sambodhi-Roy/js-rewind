// Arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "Sam"];
console.log(myArr[2]);

// Javascript array-copy operations create shallow copies.

// Shallow copies -> Copies have the same reference point. Any change in the copied array reflects in the original one.

// Deep Copies -> Copies do not have the same reference point. Hence, the changes in the copied array do not reflect in the original one.

const myArr2 = new Array(1,2,3,4);
console.log(myArr2);
console.log(myArr2[1]);
console.log(myArr2.length);

// Array methods
myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)    // Puts the element in the first position and shifts all the other elements
console.log(myArr);

myArr.shift();  //Removes the first element
console.log(myArr);

console.log(myArr.includes(9)); // Returns boolean
console.log(myArr.indexOf(9));  //-1 if doesn't exist

const newArr = myArr.join() // Generates a comma-separated string from the array elements
console.log(myArr);
console.log(newArr);

// Slice, Splice

console.log("A ".myArr);

const myn1 = myArr.slice(1,3)
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);
