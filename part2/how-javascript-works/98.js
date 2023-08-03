// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("harshit", "sharma");
// console.log(ans);
ans();

// upar na function nu aapde analyse kariye niche cmnt vada function ne jovo



// function printFullName(firstName, lastName){
//     function printName(_NOTE 1_niche_jovo){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }

// const ans = printFullName("harshit", "sharma");

// upar ni line call kariye atale agal nu result nicheni line pramane aave

// const ans = printName()// aavu thai but printname ma perameter ni value te printFullname vada function ni local memory mathi lese  aane closure kevay

// // console.log(ans);
// ans();

// note 1 => aahiya aapde ek pn perameter aapel nathi jyare line 42 run thase tyare printfullname function run thase a printName vado function return karse but a printName vado function return thase tyare localMemory ma rahel varivale ni value laine return thase aathi firstname and lastname ni value tyathi lese
