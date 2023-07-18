// important array methods 

//  const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }



//extra


const numbers = [4,2,5,8];

function multiplyBy2(number, index){
    console.log("index is", index);
    console.log(`${number}*2 = ${number*2}`);
}

for(let i =0; i<numbers.length; i++){
    multiplyBy2(numbers[i], i)           // for loop thi
}


const numbers_1 = [4,2,5,8];

function myFunc(number, index){
    console.log(`index is ${index} and number is ${number}`);

}
numbers_1.forEach(myFunc);    // foreach loop thi

// upar nu kam niche pramane pn thai
numbers_1.forEach(function(number, index){
    console.log(`index is ${index} and number is ${number}`);

})


numbers_1.forEach(function(number, index){
    console.log(number*3, index)
})
// forEach ma thodu doubt chhe ny samajayu baroabr


const users = [
    {firstName: "ravi", age: 23},
    {firstName: "vishal", age: 24},
    {firstName: "ranjit", age: 22},
    {firstName: "sagar", age: 26},
]

users.forEach(function(user){
    console.log("foreach ", user.firstName)
})

users.forEach((user) =>{
    console.log("arrow ", user.firstName)
})

// upar nu same kam for of loop thi

for(let user of users){
    console.log(user.firstName)
}