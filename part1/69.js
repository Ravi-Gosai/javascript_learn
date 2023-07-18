// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);



// extra

const obj_1 = {
    key1: "value1",
    key2: "value2"
}

const obj_2 = obj_1; // aam karvathi memory ma ek j loction ma obj1 and obj2  store thai ek ma change karta bey ma change thai

obj_1.key3 = "value3"; // aahiya ek ma change karta bey ma change hai gayu

console.log(obj_1)
console.log(obj_2)


const obj_3 = {
    key1: "value1",
    key2: "value2"
}

const obj_4 = {...obj_3}; // aam clone karvathi ek ma chnage karta bey ma change thato nathi

obj_3.key4 = "value5";

console.log(obj_3)
console.log(obj_4)

// const obj_4 = {...obj_3};  aa new mathod chhe clone karavani old method pela niche mujaab hti
// const obj_4 = Object.assign({}, obj_3); khali GK mate aapde new method j use karvi 





