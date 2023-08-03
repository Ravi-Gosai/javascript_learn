// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);

// closure na consept apply thai when function return function

function myFunction(power){
    return function(number){
        return number ** power
    }
}
const square = myFunction(2);
const ans = square(3);
console.log(ans);


const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);

// upar na code ne short ma pn lakhi sakay niche pramne arrow function thi

const myFunction_1 = (power) =>{
    return (number)=> {
        return number ** power
    }
}
const square_1 = myFunction_1(2);
const ans_1 = square_1(3);
console.log(ans_1);


const cube_1 = myFunction_1(3);
const ans_2 = cube_1(3);
console.log(ans2);

// upar na code ne short ma pn lakhi sakay niche pramne arrow function thi



const myFunction_2 = (power) =>(number)=> number ** power

const square_2 = myFunction_2(2);
const ans_3 = square_2(3);
console.log(ans_3);


const cube_2 = myFunction_2(3);
const ans_4 = cube(3);
console.log(ans_4);