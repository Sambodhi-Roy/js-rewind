// Global scope
let a =10
const b = 20
var c = 30

if(true)
{
    // Block scope
    let i= 10       // -> Cannot be used outside the block
    var j = 20;     // -> Can be used outside the block
}

console.log(a);
console.log(b);
console.log(c);

// Why was let necessary when var was already there?

// This is because var doesnt follow the block scoping. The variables declared with var can be called outside the block too.

// The scope in the console and the scope in the code(node) environment is different