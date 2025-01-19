// const tinderUser = new Object()
// Generates empty object using a cobstructor. This is singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullName :{
            firstName: "Sambodhi",
            lastName: "Choudhary"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1,obj2}
// console.log(obj3);
// This doesnt merge the objects as we want

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const obj4 = {...obj1,...obj2}
console.log(obj4);
// Spreading the values to concatenate the objects

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(tinderUser));   
// Returns all the keys of the Object in the form of an array
console.log(Object.values(tinderUser));
// Returns all the values of the Object in the form of an array

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Returns a boolean if a particular property exists or not in the object

