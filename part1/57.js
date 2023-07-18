// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);


// extra


const numbers = [ 3,4,6,2,7,8];

const square = function(number){
    return number*number;
}

const squareNumber = numbers.map(square)
console.log(squareNumber)
// map new array banave forecah array modify kare

const numbers_1 = [ 3,4,6,2,7,8];


// map ni anadr pn function daclere kari sakay chhe
const squareNumber_1 = numbers.map(function(number){
    return number * number * number;
})
console.log(squareNumber_1)


const squareNumber_2 = numbers.map((number) =>{
    return number * number * number * number;
})
console.log(squareNumber_2)





const users = [
    {firstName: "ravi", age: 23},
    {firstName: "vishal", age: 24},
    {firstName: "ranjit", age: 22},
    {firstName: "sagar", age: 26},
]

const usersName = users.map((user)=>{
    return user.firstName;
})
console.log(usersName)