// filter method 

// const numbers = [1,3,2,6,4,8];



// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(evenNumbers);


// extra

const numbers = [1,2,3,4,5,6,7,8,9];

const isEven = function(number){
    return number%2===0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers)


const isOdd = function(number){
    return number%2!==0;
}

const oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers)


const evenNumbers_1 = numbers.filter((number)=>{
    return number%2===0;
})
console.log(evenNumbers_1)

// filter mathod pn new array banave 