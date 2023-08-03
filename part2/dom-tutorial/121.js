// this keyword
// const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click",function(){
//     console.log("you clicked me !!!!");
//     console.log("value of this")
//     console.log(this);
// });

// extra 

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", function(){
    console.log("you click me");
    console.log("value of this");
    console.log(this);
})

// aahiya this value btn chhe bhale aapde function bahar add kariye toy but aapde arrow function banaviye to this ni value window object hoy chhe 

// console ma click kariya pachhi dekhase output