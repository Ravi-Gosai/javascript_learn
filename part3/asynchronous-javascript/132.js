// understand callback

// function myFunc(callback) {
//   console.log("Function is doing task 1 ");
//   callback();
// }

// myFunc(() => {
//   console.log("function is doing task 2");
// });

// function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     onSuccess(number1, number2);
//   } else {
//     onFailure();
//   }
// }

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// function onFail(){
//     console.log("Wrong data type");
//     console.log("please pass numbers only")
// }
// getTwoNumbersAndAdd(4, 4,addTwoNumbers, onFail);



//extra 

// method 1

function myFunc(callback){
  console.log("function is doing some task 1");
  callback();
}


function myFunc2(){
  console.log("function is doing some task 2");
}

myFunc(myFunc2);




// method 2

function myFunc(callback){
  console.log("function is doing some task 1");
  callback();
}

myFunc(function (){
  console.log("function is doing some task 2");
});// upar aahiya aapde arrow function pn pass kari sakay chhe






function getTwoNumbersAndAdd(number1, number2, callback){
  // console.log(number1, number2);
  if(typeof number1 === "number" && typeof number2 === "number"){
    callback(number1,number2)

  }
  else{
    console.log("wrong data type");
  }
}

function addTwoNumbers(num1, num2){
  console.log(num1+num2);
}

getTwoNumbersAndAdd(3, 4, addTwoNumbers);











function getTwoNumbersAndAdd_1(number1, number2, onSuccess, onFailure){
  // console.log(number1, number2);
  if(typeof number1 === "number" && typeof number2 === "number"){
    onSuccess(number1,number2)

  }
  else{
    onFailure();
  }
}



getTwoNumbersAndAdd_1("d", 4, (num1, num2)=>{
  console.log(num1+num2);
},
()=>{
  console.log("wrong data type");
  console.log("type only number");
} );
// upar aapde perameter j bey onsuccess and onfailure vada function enter kri didha chhe aapde aane bahar pn alag thi define kari sakiye chhiye  



