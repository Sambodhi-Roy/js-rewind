const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc, currVal){
    console.log(`Accumulator: ${acc} and Current Value: ${currVal}`);
    return acc+currVal
}, 0)

// Reduce can also take a call back function. It has 2 parameters - the accumulator and the current Value. 

// The initial accumulator value needs to be provided after the ','. In this case, we start with 0. Then the accumulator updates itself as the return value of the function hence in this case, accumulator + currentValue. 

console.log(myTotal);

const myTotalArrowFunc = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotalArrowFunc);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => item.price,0)

console.log(priceToPay);
