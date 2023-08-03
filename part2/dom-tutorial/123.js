// event object 
// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 

// pra 1

//  const allButtons = document.querySelectorAll(".my-buttons button");


// for (let button of allButtons){
//     button.addEventListener("click", function(event){
//        console.log(event)// upar event pera meter ma inforemation store thai user kya click kariyu ne a badhu console ma cheak karo tema currntTarget and target use vadi chhe 
//         console.log(this.textContent)
//     })
// }




// prac 2

const allButtons = document.querySelectorAll(".my-buttons button");

// arrow funtion ma e perameter event ni information store kare aapde e ni jagya pr game te name aapi sakay chhe
for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
        console.log(e.currentTarget.textContent);
    })
}

// upar arrow function thi perameter use kari tema store thayeli information thi button element console ma print kariyu 

// target and currentTarget no diff aagal joisu aapde




