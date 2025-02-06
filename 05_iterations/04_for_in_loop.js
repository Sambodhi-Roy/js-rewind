const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js','rb','py','java','cpp']

for(const key in programming)
{
    console.log(key,' ',programming[key]);
}

// For in loop gives us the keys of the array or object whereas the for of loops directly gives us the value.

// Keys of an array also exist, it is actually the indices of the array such as 0,1,2,3....

// In objects, we can give custom keys as per our needs

