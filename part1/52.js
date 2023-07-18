// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(4,5,4,2,10);
// console.log(ans);



// extra 
// rest parameters 


function myFunc(a,b,c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

myFunc(3,4,5);


function myFunc_1(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

myFunc_1(3,4,5,3,5,56,7,4,7,);



function myFunc_2(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is `, c) // ahiya array print thase
}

myFunc_2(3,4,5,3,5,56,7,4,7,);


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,6,);

console.log(ans)



function mulNumber(...numbers){
    let gunakar = 1;
    for(let number of numbers){
        gunakar = gunakar * number;
    }
    return gunakar;
}

const gun = mulNumber(4,5,6,);

console.log(gun)







