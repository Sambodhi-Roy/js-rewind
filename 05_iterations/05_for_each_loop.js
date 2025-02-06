const coding = ["js","cpp","java","c","python"]

coding.forEach( function (item){
    console.log(item);
} )

// In a for each loop, we put a callback function inside the loop. Callback functions dont have a name. It can be an arrow function as well. Hence, these functions go to every element in the array and perform the given code-block inside the function.

console.log("-----------Using arrow function-------");

coding.forEach( (item) => {
    console.log(item);
})

console.log("-----------Using another custom function-------");

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

// Other parameters that the for Each loop can hold

console.log("-----------Other parameters that the for Each loop can hold-------");

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// Array containing objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})