// // objects reference type  
// // arrays are good but not sufficient 
// // for real world data 
// // objects store key value pairs 
// // objects don't have index

// // how to create objects 

// // const person = {name:"Harshit",age:22};
// const person = {
//     name: "harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);

// // how to access data from objects 
// // console.log(person["name"]);
// // console.log(person["age"]);
// // console.log(person.hobbies);

// // how to add key value pair to objects
// person["person"] = "male";
// console.log(person);


// extra 



const man = {
    name: "ravi gosai",
    village:"visavdar",
    age : "23",
    hobbies: ["guitar", "playing chess", "watch cricket"],

}
console.log(man)
console.log(man.age) 
console.log(man["age"])
console.log(man.hobbies[1])

man.gender = "male"// add karva object or man["gender"] = "male";

console.log(man)


