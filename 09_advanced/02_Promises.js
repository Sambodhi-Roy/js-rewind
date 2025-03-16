const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calls, Cryptography, Network calls
    setTimeout(function(){
        console.log("Async Task is Complete");
        resolve()
    },3000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Sam", email:"sample@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"Sam",pwd:"123"})
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")
);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"javascript",pwd:"123"})
        }
        else
        {
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);   
//     }
//     catch(error){
//         console.log("Error",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// Note: If we get returned with a status 404 from a fetch, is it resolve or reject?

// The fetch() function will reject the promise on some errors, but not if the server responds with an error status like 404: so we also check the response status and throw if it is not OK. 