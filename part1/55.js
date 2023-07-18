// function returning function 

// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans());


// extra
// function returning function 

function myFunc(){
    function hello(){
        console.log("hello world")
    }
    return hello;
}

const ans = myFunc();
console.log(ans)                 // aakho function return karse output
ans();                          // function ne call kri dese

console.log("console ma alag padva")



function myFunc_1(){
    function hello(){
        return "hello world";
    }
    return hello;
}

const ans_1 = myFunc_1();

console.log(ans_1());
   