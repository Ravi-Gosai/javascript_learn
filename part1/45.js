// // function expression 
// // function singHappyBirthday(){
// //     console.log("happy birthday to you ......");
// // }

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// // singHappyBirthday();

// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const ans = sumThreeNumbers(2,3,4);
// // console.log(ans);


// // function isEven(number){
// //     return number % 2 === 0;
// // }
// const isEven = function(number){
//     return number % 2 === 0;
// }
// // console.log(isEven(2));

// const firstChar = function(anyString){
//     return anyString[0];
// }

// const findTarget = function(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }




// extra

//  function expression 

// function singHappyBirthday(){
//     console.log("happy birthday to you ......")
// }
// singHappyBirthday();

//upar nu function neche pramane pn lakhai jene function expression  kevay
let = singHappyBirthday = function(){
    console.log("happy birthday to you ......")
}
singHappyBirthday();

// function sumTwoNumber(number1,number2){
//     return number1 + number2;
// }
// upar no fuction neche pramane pn lakhai
const sumTwoNumber = function (number1,number2){
    return number1 + number2;
}
console.log(sumTwoNumber(5, 7))

// aane function expression kevay const ke let thi kariye tene and aagal ni file 44.js ma jem function banaviye ane function decleretion kevay


// arrow function

function singHappyBirthday_0(){
    console.log("happy birthday to you ......0")// function decleretion
}
singHappyBirthday_0();

let = singHappyBirthday_1 = function(){
    console.log("happy birthday to you ......1")// array expression
}
singHappyBirthday_1();

let = singHappyBirthday_2 = () =>{
    console.log("happy birthday to you ......2")//arrow function
}
singHappyBirthday_2();



const sumTwoNumber_0 = function (number1,number2){
    return number1 + number2;
}
console.log(sumTwoNumber_0(4, 7))

const sumTwoNumber_1 = (number1, number2) => {
    return number1 + number2; 
}
console.log(sumTwoNumber_1(6, 8))

// arrow function ne short ma lakhavani rito

const firstchar = (anystring) => {
    return anystring[0];
}
console.log(firstchar("rajan"))

const firstChar_1 = anystring => {
    return anystring[0];
}
//ek perameter hoy toj upar counce var anystring lakhyu tem lakhi sakay baki counce farajiyat chhe
console.log(firstChar_1("vishal"))

const firstChar_2 = anystring => anystring[0];
console.log(firstChar_2("satish"))


const sumTwoNumber_2 = (number1, number2) => {
    return number1 + number2; 
}
console.log(sumTwoNumber_2(55, 98))

//upar na function ne niche pramane return bi value ek line ma hoy to { } aa counce no use kariya vagar sidhu return ni value lakhi devi

const sumTwoNumber_3 = (number1, number2) =>  number1 + number2;
console.log(sumTwoNumber_1(34, 8))