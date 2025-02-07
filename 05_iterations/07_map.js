const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map( (num) => num+10)
console.log(newNums);

// Map also takes in a callback function.
// Filter works for true/false stuff.

// Chaining - Attach one or more methods to one another

const newNumsChain = myNums
                .map((num) => num+10)
                .map( (num) => num+1)
                .filter( (num) => num>=10)

console.log(newNumsChain);
