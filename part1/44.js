// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }



// isEven
// input : 1 number 
// output : true , false 

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("zbc"));

// function 
// input : array, target (number)
// output: index of target if target present in array 

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 3);
// console.log(ans);



//extra


function singHappyBirthday(){
    console.log("happy birthday to you ......")
}
singHappyBirthday();

function sumTwoNumber(number1,number2){
    return number1 + number2;
}

const returnedValue = sumTwoNumber(4, 5);// jo sumTwoNumber() ma value na aapiye to output NaN aave [undefined + undefined = NaN]
console.log(undefined + undefined)
console.log(returnedValue)





// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     return false;    //upar aapde else lakhyu chhe to na lakho to chale
// }

function isEven(number){
    return number % 2 === 0; // upar vada karta haju nano kari sakay if else vagar pn banavi sakay
}
console.log(5 % 2 === 0) // true false ma output aavse
console.log(isEven(5))


// function isEven(number){
//     return (number % 2 === 0)? "even" : "odd"; 
// }
// console.log(isEven(4))


function firstchar(anystring){
    return anystring[0];
}
console.log(firstchar("ravi"))

let age = "23";
console.log(firstchar(age))





function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return  i + " index of target";
        }
    }
    return -1;
}


const myArray = [1,2,3,4,5,7,8,,9,45] 
let ans = findTarget(myArray, 7);
console.log(ans)