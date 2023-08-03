// keypress event
// mouseover event
// const body = document.body;

// body.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });
// const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
// mainButton.addEventListener("mouseover", () => {
//   console.log("mouseover event ocurred!!!");
// });

// mainButton.addEventListener("mouseleave", () => {
//   console.log("mouseleave event ocurred!!!");
// });


// extra


const body = document.body;

body.addEventListener("keypress", (e)=>{
    console.log(e); // console ma property ma aapde web page open hoy tyare kai key press kari ani information aape 
})


const mainButton =document.querySelector(".btn-headline");
// console.log(mainButton)

mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseover even ocurred !!!")
})

mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave even ocurred !!!")
})