const accountId = 12548
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Calcutta"
let accountState;

// accountId = 2        -> Not allowed as this is a constant

accountEmail = "test124@gmail.com"
accountPassword = "21211212"
accountCity = "Bengaluru"

console.log(accountId);

/*

We prefer not to use var
Because of issue in block scope and functional scope

Function Scope: Variables declared inside a function using 
var are accessible anywhere within that function. They are 
not limited to any specific block within the function.

Block Scope: Variables declared inside a specific block 
using let or const are only accessible within that block. 
They are not accessible outside of the block in which they 
are declared. 

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

// JS considers a variable "undefined" if its not assigned any value