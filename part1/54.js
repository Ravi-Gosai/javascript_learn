// callback functions 

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }


// myFunc(myFunc2);


//extra

function myFunc2(){
    console.log("inside myFunc 2");
}

function myFunc(a){
    a();
}

myFunc(myFunc2);


// function ni andar function pass kariyo aane j callback function kevay aama a ni jagya pr callback lakhe atle samajay ke calback function chhe

console.log(" console ma alag padva mate")

function myFunc_2(name_1){
    console.log("inside myFunc 2")
    console.log(`your name is ${name_1}`)
}
function myFunc_1(callback){
    console.log("hello there i am a funcction 1")
    callback("ravi");
}
myFunc_1(myFunc_2);


