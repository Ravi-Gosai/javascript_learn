// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)


// extra 

let array_1 = [ 1,2,3,4]

let oneMoreArray_1 = ["apple", "banana"];

// upar no same array clone karvo hoy to
// let array_2 =  [ 1,2,3,4] // copy kari lo aa rit sari nathi

// let array_2 = array_1.slice(0) // 2nd method

// let array_2 = [].concat(array_1)  // 3rd method

// let array_2 = [...array_1]  // 4th method


// let array_2 = array_1.slice(0).concat([" ravi", "amit","prayag"])  // array clone kari ane amuk item add karva mate

// let array_2 = [].concat(array_1,["ram","sita"]) // aa rite pn item add kari sakay array clone kariya pachhi

let array_2 = [...array_1,...oneMoreArray_1, "rajiv", "vicky"] // alag thi item add karva

console.log(array_2)
