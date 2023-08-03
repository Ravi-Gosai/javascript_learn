// prac 1 

// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
        
//             }
//         }, 2000)
//     })
// }

// function resolve(){
//     console.log('resolved')
    
// }
// function reject(){
//     console.log('rejected')
// }

// myPromise()
//     .then(resolve)
//     .catch(reject)







// prac 2 


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");


// function changeText_1(element, text, color, time) {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (element) { // elemet hoy toj aa kam kare baki
//         element.textContent = text;
//         element.style.color = color;
//         resolve("my name is ravi");
//       }
//       else {
//         reject("element not found");
//       }
//     }, time)
//   })

// }

// function heyy (zzz){
//     console.log(zzz)
// }

// changeText_1(heading1, "one", "red", 1000)
//   .then(() => {
//     return changeText_1(heading2, "two", "green", 1000)
//   })
//   .then(() => {
//     return changeText_1(heading3, "three", "yellow", 1000)
//   })
//   .then(() => {
//     return changeText_1(heading4, "four", "purple", 1000)
//   })
//   .then(() => {
//     return changeText_1(heading5, "five", "orange", 1000)
//   })
//   .then((xxx) => {
//     return heyy(xxx); // jovo aam kam kare
//   })
//   .then(() => {
//     return changeText_1(heading6, "six", "orange", 1000)
//   })













  
// prac 3

  function myPromise_2(){
    return new Promise((resolve,reject)=>{
      resolve("foo");
    })
  }
  
  myPromise_2().then((value)=>{
    console.log(value);
    value += "bar";
    // return undefined; [note_1]
    return "rajveer"; // aahiya promise return thai chhe [Promise.resolve(value)] ni jem
  }).then((value)=>{
    console.log(value);
    value += "baaaz";
    return value;
  }).then((value)=>{
    console.log(value)
  })

  // note_1 => return undefined; aabye defoult hoy chhe jo aapde kai return na kariye to then() je promise return kare ani value undefined hase


  