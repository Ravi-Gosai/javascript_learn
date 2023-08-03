// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) 
// const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });


// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });







// extra

const btn = document.querySelector(".btn-headline")

console.log(btn)

console.dir(btn) // object tarike property jova mate 

// btn.onclick = function (){
//     console.log("you click me")
// }

// but upar pramane karvu pn barobar nathi  eventlistener no use karvo


// method add eventlistener 

btn.addEventListener("click", function(){
    console.log("you click me")
})

// btn.addEventListener("xxx", yyy)
// xxx = event nu name 
// yyy = a event thi je karvu hoy tee

// event listener viche vadhare mdn karvu

