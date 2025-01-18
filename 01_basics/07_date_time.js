// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // -> Object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString()); 

// Months start from 0 in js

let myCreatedDate2 = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toDateString());

let myCreatedDate3 = new Date("2023-1-14")
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);   //Returns in miliseconds

console.log(myCreatedDate.getTime());   //Returns in miliseconds
console.log(Date.now());    //Miliseconds

console.log(Math.floor(Date.now()/1000));
// To remove decimals

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString("default",{
    weekday: "long"
})