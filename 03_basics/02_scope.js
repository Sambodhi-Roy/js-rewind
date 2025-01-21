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

function one(){
    const username = "sam"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); -> Error (Out of scope)
    
    two()
}

one()

if(true)
{
    const username = "Sam"
    if(username === "Sam")
    {
        const website = "youtube"
        console.log(username + website);
    }

    // console.log(website);    -> Out of scope
}

// console.log(username);   -> Out of scope

addone(5)   // -> Doesnt throw an error when declared with the method below

function addone(num)
{
    return num+1
}


const addTwo = function(num){
    return num+2
}

addTwo(5)   // Throws an error if we try to access the function before its definition using Method 2
