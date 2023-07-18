// lexical scope 
// const myVar = "value1";

// function myApp(){
    

//     function myFunc(){
//         // const myVar = "value59";
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//         }
//         myFunc2();
//     }


//     console.log(myVar);
//     myFunc();
// }

// myApp();





//extra

// // lexical scope 

const myVar = " value1"; // 1st

function myApp(){


    function myFunc(){
        // const myVar = "value2" //2nd
        const myFunc2 = () => {
            // const myVar = "value3"; // 3rd
            console.log("inside mFunc2", myVar)
        }
        myFunc2();
    }
    myFunc();
}
myApp();

// upar  dekhai tem myvar ni value 3 var aapel chhe but te priority ane aapse je value aa lexical scope ma chhe tene jo a function ma value ny hoy to bahar na function ni andr aapeli value count karse

//upar myVar ni value vara farti comment kari ne jovo