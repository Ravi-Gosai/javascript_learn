// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

// function addTwo(a,b=0){
//     return a+b;
// }

// const ans = addTwo(4, 8);
// console.log(ans);



// extra

// default parameters 


function addTwo(a, b){
    if(typeof b === undefined){
        b = 0;
    }
    return a + b;
}
console.log(addTwo(4, 5))

// have aa short ma karva mate 

function addTwo_1(a, b=1){
    return a + b;
}
console.log(addTwo_1(23, 4)) // output 27

console.log(addTwo_1(23)) // output 24

