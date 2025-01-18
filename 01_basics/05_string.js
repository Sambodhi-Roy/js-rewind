const name = "sam"
const repoCount = 50

// console.log(name+ repoCount+ " value");    -> Not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sam-sr-com')   //Another way of declaring strings -> Stores the string in the form of a character array

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4);
console.log(newString);
// The first index is included but the last index is not included

const anotherString = gameName.slice(-1,4);
console.log(anotherString);

// Difference between substring and slice:

// Slice takes in negative indices and starts from the back in that case. 

// Substring doesnt take in negative indices and starts from 0

const newStringOne = "    sam      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sam.com/sam%20roy"
console.log(url.replace('%20','-'));

console.log(url.includes('sam')); 

console.log(gameName.split('-'));