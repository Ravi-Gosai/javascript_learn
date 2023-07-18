// difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person["person hobbies"]);// key nu nam aavu hoy space vadu tyare bracket notaion no use karvo

// person[key] = "harshitvashisth@gmail.com";
// console.log(person);



// extra 

const key = "email";

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

// person.key = "rbgosai@gmail.com";// aam karsu to object upar email ni value ny leee  
// niche mujab karvu

person[key] = "rbgosai@gmail.com"// aam karvathi key ni value upar thi store karse most imp ke person["xxx"] ma "" ny lakhava baki key email ny aave as sting ny varible lakhva mate "" use na karvu atale aavu karva mate bracket notaion no use thai chhe
console.log(person)