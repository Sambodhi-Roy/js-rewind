// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);
console.log("02">1);
// Gives absurd and unexpected answers when you compare two values with different datatypes.

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// === Strict Comparison

console.log(2==="2");   //False

// The best practice is to not compare two values with different data types