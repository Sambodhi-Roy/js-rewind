// Immediately Invoked Function Expressions (IIFE)

// Normal function
function dbConnection() {
    console.log(`DB Connected`);
}

dbConnection();

// IIFE -> Wrap the function declaration inside parentheses

// Named IIFE - IIFE that has a name
(function dbIIFE() {
    console.log(`DB Connected IIFE`);
})();

// Why do we need IIFE?
// Sometimes problems occur due to global scope pollution.
// To reduce the pollution caused by variable declarations in the global scope, we use IIFE.

// IIFE with an arrow function (Unnamed IIFE)
(() => {
    console.log(`DB Connected using Arrow Function IIFE`);
})();

// IIFE with parameters
((name) => {
    console.log(`DB connected to ${name}`);
})('Sam');
