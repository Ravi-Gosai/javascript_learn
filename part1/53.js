// param destructuring 

// object 
// react 

// const person = {
//     firstName: "harshit",
//     gender: "male",
//     age: 500
// }

// // function printDetails(obj){
// //     console.log(obj.firstName);
// //     console.log(obj.gender);
// // }


// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);



// extra



const person = {
    firstname : "ravi",
    gender : "male",
    age : 23
}

function printdetails(obj){
    console.log(obj.firstname);
    console.log(obj.gender);
}
printdetails(person);
// upar nu aa kam niche pramane kri sakay 

function printDetails_1({firstname, gender, age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}
printDetails_1(person)
// na samajay to pachal ni badhi file sarkhi vachavi

