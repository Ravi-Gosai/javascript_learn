const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]



// prototype    

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);




// extra 


const obj_1 = {
    key1: "value1",
    key2: "value2"
}

const obj_2 = {
    key3: "value3"
}


console.log(obj_2.key3) // value3 aavse output

console.log(obj_2.key1) //aahiya undefined aavse 






const obj_3 = {
    key1: "value1",
    key2: "value2"
}

// const obj_4 = {}; // empty object banvyo
// obj_4.key3 = "value3";
//  there is one more way to create empty object

const obj_4 = Object.create(obj_3);

console.log(obj_4); // output empty object aavse

obj_4.key3 = "value3";  // have aapde value add kari chhe aama 

console.log(obj_4); // output {key3 : value3}


console.log(obj_4.key3) // obj4 pase chhe key3 atale print thai

console.log(obj_4.key2)  // obj4 pase key2 nathi toy te obj3 mathi cheak karine print karse upar aapde aa rite aapde empty object create karel chhe const obj_4 = Object.create(obj_3); 

//const obj_4 = Object.create(obj_3); aano mtlb ke jo obj_4 pase koi key value na hoy to undefined ny but obj_3 pase na object ma te key value chaek karvi tema hoy to te print karvi and obj_3 proto ma rese 

console.log(obj_4) // aane console ma open karo and jovo down arrow open kari jovo tema amne proto or prototype jova malse tama obj_3 hase atale j aapne obj_4 ma je key nohti ani value obj_3 mathi mali and print thai hti 

console.log(obj_4.__proto__) 
// obj_4 no proto or protoype print thase tema obj_3 ni value print thase 

// aa prototype and function prototype alag alag chhe ok 