// const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })

// extra 

// script clickevent.html  ma add karel chhe

// const firstButton = document.querySelector("#one");

// console.log(firstButton)

// firstButton.addEventListener("click", function(){
//     console.log("u click me")
// })

// badha button ek sathe select karva

const allButtons = document.querySelectorAll("button");


console.log(allButtons)

// for (let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log("u click me")
//         console.log(this) // samjava mate
//         console.dir(this)// property jova and samajva mate
//         console.log(this.textContent)
//     })
// }

// aa same kam for loop thi

// for(let i = 0; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log("u click me")
//         console.log(this) // samjava mate
//         console.dir(this)// property jova and samajva mate
//         console.log(this.textContent)
//     } )
// }

// arrow function ma this ni value window aave atale a use na karai aam

allButtons.forEach(function(button){
    button.addEventListener("click",  function(){
        console.log("u click me")
        console.log(this) // samjava mate
        console.dir(this)// property jova and samajva mate
        console.log(this.textContent)
    })
})