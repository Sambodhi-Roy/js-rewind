// Object literal
const user = {
    username: "Sam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);    
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor Function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
    // this is returned implicitly
}

const userOne = new User("Sam",12,true)
const userTwo = new User("Sambodhi",9,false)
console.log(userOne);
console.log(userTwo);
// Values are overwritten in userOne if you dont write new

console.log(userOne.constructor);
console.log(userOne instanceof User);
console.log(userOne instanceof Object);
