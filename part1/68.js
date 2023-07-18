// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);



// extra 

const person_1 = { 
    firstName: "ravi",
    age: 7,
    1: "one"
}
// upr je key chhe 99% to te string ka symbol j hoy chhe aapde tya one lakhel che a string j chhe
// 

console.log(person_1.firstName)
console.log(person_1['firstName'])
console.log(person_1['1'])
console.log(person_1[1]) // coma vagar pn run karse code aapde 1 string chhe toy coma ni andar lakhel ny 


const person_2 = new Map();
person_2.set('firstName', 'ravi');
person_2.set('age', 34);
person_2.set(1, 'one'); 
// opar aapde as key aapde 1 a number j lai sakay .  object ma aa number na lai sakay as a key

// niche pramane object and array ne pn as key rakhi sakay 
person_2.set('[1,2,3]', 'one two three')
person_2.set({name: 'raviGosai'}, 'it is my name')

console.log(person_2)

console.log(person_2.get('age')); // object method ahiya ny apply thai
console.log(person_2.get(1)); // aa rite access kari sakay

console.log(person_2.keys()); // ek aahiya problem aave chhe

for(let key of person_2.keys()){
    console.log(key, typeof key)
}



// object ma for of loop na lagavi sakay but for in loop lagavi sakay
// jene for of loop lagavi sakay ane iterable kevay

for(let key of person_2){
    console.log(key) // aanu output 2 item vadu array hase 
    console.log(Array.isArray(key)) // true return kare matalab array chhe
}
for(let[key, value] of person_2){
    console.log(key, value)
}





const person_3 = new Map([['firstName','raviGosai'],['age', 7]]);
// upar khas jovu map ma  [...] aani andar add karvu

console.log(person_3)







const person_4 = {
    id: 1,
    firstName: "raviGosai"
}
const person_5 = {
    id: 2,
    firstName: "rajvi"
}

const extraInfo_1 = new Map();
extraInfo_1.set(person_4, {age: 22, gender: "male"});
extraInfo_1.set(person_5, {age: 23, gender: "female"})

console.log(person_4.id);
console.log(extraInfo_1.get(person_4));
console.log(extraInfo_1.get(person_5).gender);
