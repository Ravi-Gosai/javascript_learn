// how to iterate object 
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }


// extra 

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

for(let key in person){
    console.log(key)
}

console.log("console ma alag padva mate")

for(let key in person){
    console.log(person[key])
    //console.log(person.key) aanahi na thai 
    // console.log(pesrson["key"]) aanathi pn na thai 
}

console.log("console ma alag padva mate")

for(let key in person){
    console.log(`${key} : ${person[key]}`)// 1st method
}

for(let key in person){
    console.log(key, ":", person[key]) // 2nd method
}


console.log(Object.keys(person)); // keys no array rerurn kare
console.log(typeof Object.keys(person)); // array chhe but console ma object j return kare

let confirmArray = Array.isArray(Object.keys(person))
console.log(confirmArray) // true aavse array che atale

// for of loop thi

for(key of Object.keys(person)){
    console.log(key)
}
for(key of Object.keys(person)){
    console.log(person[key])
}

