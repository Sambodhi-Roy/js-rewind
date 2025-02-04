const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

// this indicates "current context" ie. the current values

user.welcomeMessage()

// context changed
user.username = "Sam"
user.welcomeMessage()

console.log(this);  
// Returns empty context in Node
// But returns Window context in browser console

function chai1(){
    let username = "Sam"
    console.log(this);  // Returns a Global object with a lot of parameters

    // console.log(this.username);  
    // The above line returns undefined. Hence, we can only access info from an object using the this keyword and not from functions.
}

chai1()

const chai2 = function(){
    let username = "Sam"
    console.log(this.username);
    // Still this returns undefined
}

chai2()

const chai3 = () =>{
    // Arrow function
    let username = "Sam"
    console.log(this.username);
    // Still returns undefined
}

chai3()

// Arrow function
// Syntax:
// () => {  }

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4));

// Implicit Arrow Function
const multTwo = (num1,num2) => num1*num2

console.log(multTwo(2,3));

const subTwo = (num1,num2) => (num1-num2)

console.log(subTwo(3,2));

const returnObject = () => ({username: "John"})
console.log(returnObject());

