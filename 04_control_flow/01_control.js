// if
const isUserLoggedIn = true
const temperature = 41

if(isUserLoggedIn)
{
    console.log(`User Logged In`);
}

// >, <, <=, >=, ==, !=, ===

if(2=="2")
{
    console.log(`== Executed`);
}

if(2==="2")
{
    console.log(`=== Executed`);
}

// === -> Checks data type and value both

if(temperature<50)
    console.log(`Temperature less than 50`);
else
    console.log(`Temperature is greater than 50`);


const score = 200

if(score>100){
    const power = "fly"
    console.log(`User Power: ${power}`);
    // All the variables inside this block has a different scope and cannot be accessed outside this block.
}

const balance = 1000

if(balance > 500)   console.log("Test");

// if(balance > 500)   console.log("Test"), console.log('Test2');  
// -> Dont write like this using commas, not a good practice and not readable

if(balance<500)
{
    console.log("Less than 500");
}
else if(balance<750)
{
    console.log("Less than 750");
}
else if(balance<900)
{
    console.log("Less than 900");
}else
{
    console.log("Less than 1200");
}

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log('Allow to buy course');
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User Logged In");
}