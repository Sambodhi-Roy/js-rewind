// Singleton 

// If objects are made using a constructor, they are singleton ie. they only have one instance.

// If you create an object using literals, they are not singleton ie. they have multiple instances.

// Object literals
// Object.create -> Creating object using constructor

const mySym = Symbol("key1")

const JSUser = {
    name:"Sam",
    "full name": "Sambodhi Roy",
    [mySym]: "mykey1",  // To declare a symbol
    age: 19,
    location: "Jaipur",
    email: "sam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JSUser.email);
console.log(JSUser["email"]);

// console.log(JSUser.full name); -> Throws error

console.log(JSUser["full name"]); // -> Correct Method

console.log(JSUser[mySym]);

JSUser.email = "sambodhi@gmail.com"
// Object.freeze(JSUser) -> No changes are propagated after this point

JSUser.email = "Sambo@gmail.com"
console.log(JSUser);    // No changes propagated when object is freezed

JSUser.greeting = function(){
    console.log("Hello JS User");
}

JSUser.greetingName = function(){
    console.log(`Hello JS User, ${JSUser.name}`);
}

console.log(JSUser.greeting);   // Only a Function is returned

console.log(JSUser.greeting());
console.log(JSUser.greetingName());
