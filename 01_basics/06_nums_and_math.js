const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));

// ----------------------Maths-------------

console.log(Math);
console.log(Math.abs(-4));  //Absolute value
console.log(Math.round(4.6));   //Round-off
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); //Returns a random number between 0 and 1

console.log(Math.floor(Math.random()*10)+1);  //Returns a random number between 1 and 10

// Trick to generate a random number between min and max
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1) 
)+min);



