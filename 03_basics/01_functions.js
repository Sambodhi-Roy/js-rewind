function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
}

// sayMyName - Reference of the function
// sayMyName() - Executes the function
 
sayMyName()

function addTwoNumbers(number1,number2)
{
    console.log(number1 + number2);
}

addTwoNumbers(3,4)

function returnSum(number1, number2)
{
    // let result = number1 + number2
    // console.log("Sam");
    // return result

    return number1+number2
}

const result = returnSum(4,5);

console.log("Result: ",result);

// function loginUserMessage(username = "sam") -> sam is default value of username
function loginUserMessage(username)
{
    if(username === undefined)
    // if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sam"));
 
// console.log(loginUserMessage());    
// -> Results in "undefined just logged in"

function calculateCartPrice(...num1)
{
    return num1
}

// ... -> Rest operator or spread operator depending on the use case

console.log(calculateCartPrice([200, 500, 4000, 100]));

// function calculateCartPrice(num1, num2,...num1)
// {
//     return num1
// }

// Returns [4000,100] because value1 = 200 and value2 = 500

const user = {
    username: "Sam",
    price: 199
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)


