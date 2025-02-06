// For loop

for(let index=0;index<=10;index++)
{
    const element = index;
    console.log(element);
}

console.log("----------------------------");

for(let i=0;i<=10;i++)
    {
        const element = i;
        if(element==5){
            console.log("5 is best number");
        }
        console.log(element);
    }
    
    
console.log("----------------------------");

for(let i=0;i<=2;i++)
{
    console.log(`Outer loop value: ${i}`);
    
    for(let j=0;j<=5;j++)
    {
    console.log(`Outer loop value: ${i} and inner loop ${j}`);
    }
}

console.log("----------------------------");

for(let i=0;i<=2;i++)
{
    console.log(`Outer loop value: ${i}`);
        
    for(let j=0;j<=5;j++)
    {
        console.log(i+' x '+j+' = '+i*j);
    }
}
        

console.log("----------------------------");

let myArray = ["flash","batman","superman"]

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

console.log("----------------------------");
// break and continue statements

for(let index = 1;index<=20;index++)
{
    if(index==5){
        console.log('Detected 5');
        break
    }
    console.log(`Value of i is ${index}`);
}

console.log("----------------------------");

for(let index = 1;index<=20;index++)
{
    if(index==5){
        console.log('Detected 5');
        continue
    }
    console.log(`Value of i is ${index}`);
}
    