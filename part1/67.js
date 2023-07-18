// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);


// extra


//diffrent between sets and array

// niche aapde set ni anadar aapde  array store karel chhe

const numbers = new Set([1, 2, 3, 3]); //unique items only (no duplicates allowed)

console.log(numbers)
console.log(numbers[2]) //  No index-based access
// Order is not guaranteed


const number_1 = new Set();
let newArray = ['item1', 'item2'];
number_1.add(1);

number_1.add(2);
number_1.add(2); // 2 biji var add ny thai

number_1.add(newArray);
number_1.add(newArray); // 2nd time add ny thai

number_1.add(['item3', 'item4']); 
number_1.add(['item3', 'item4']); 
// aahiya add thai jase aadpe same array alag alag nakhel chhe bhale array ni iteam same hoy but array ni alag hoy atale memrey loction alag alag hoy aathi array set ma biji var add thai jai 

console.log(number_1)





const set1 = new Set([1, 2, 3, 4]);

// set ma koi item chhe ke ny a cheak karva

let presentIN = set1.has(1);
console.log(presentIN); // true false ma output aapse 

if(set1.has(1)){
    console.log(" 1 is present")
}
else{
    console.log("1 is not present")
}

for(let set of set1){
    console.log(set)
}
// set ma for loop chalavi sakay aathi set (it is iterable)


const myArray = [1,2,3,4,4,5,6,6,7,8,8,9];
const uniqueElements = new Set(myArray);

console.log(myArray)
console.log(uniqueElements)// repeat thata element ek var j aavse 

console.log(uniqueElements.length) // aa length property set ma work ny kare 

// set ni length kem find karvi

let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length)

