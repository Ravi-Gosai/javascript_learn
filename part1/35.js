// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);


// extra

const array_1 = ["value1", "value2"];
// let arr1 = array_1[0];
// let arr2 = array_1[1];
// upar nu kam short method thi
let [arr1, arr2] = array_1;
// arr1 ni vaule array_1 ma je 0 index ma hase te lai lese arr2 1 index vadi value lai lese and let aagal aapde 5 value lakhi hoy and array ma 4 j value hoy to last vada mate undefined aavse 

// const array_1 = ["value1", "value2","value3"];
// let [arr1, , arr2] = array_1; // aahoya arr2 mate value3 levi hati atale aapde double dot mukel chhe arr1 and arr2 vache 

// const array_1 = ["value1", "value2","value3"];
// let [arr1, arr2, arr3, arr4] = array_1; // aama arr4 mate undefined aavse


console.log(arr1)
console.log(arr2)



// prac 2

let raviArray = [1,2,3,4,5,6]

let [amit, prayag, gopy, ...baki_vadhela] = raviArray;

// upar ... aam aagal lakhvthi baki rahel badhi item aama store thai jase

console.log(amit)
console.log(prayag)
console.log(gopy)
console.log(baki_vadhela)
// baki je vadheli array ni item aam print kari sakay let baki_vadhela =raviArray.slice(4)