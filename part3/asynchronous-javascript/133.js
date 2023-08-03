// // callbacks , callback hell, pyramid of doom
// // asynchronous programming
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

// // Text       Delay   Color

// // one        1s      Violet
// // two        2s      purple
// // three      2s      red
// // four       1s      Pink
// // five       2s      green
// // six        3s      blue
// // seven      1s      brown

// // callback hell  
// // setTimeout(()=>{
// //   heading1.textContent = "one";
// //   heading1.style.color = "violet";
// //   setTimeout(()=>{
// //     heading2.textContent = "two";
// //     heading2.style.color = "purple";
// //     setTimeout(()=>{
// //       heading3.textContent = "three";
// //       heading3.style.color = "red";
// //       setTimeout(()=>{
// //         heading4.textContent = "four";
// //         heading4.style.color = "pink";
// //         setTimeout(()=>{
// //           heading5.textContent = "five";
// //           heading5.style.color = "green";
// //         },2000)
        
// //       },1000)
      
// //     },2000)
    
// //   },2000)
  
// // },1000)

// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
//   setTimeout(()=>{
//     if(element){
//       element.textContent = text;
//       element.style.color = color;
//       if(onSuccessCallback){
//         onSuccessCallback();
//       }
//     }else{
//       if(onFailureCallback){
//         onFailureCallback();
//       }
//     }
//   },time)
// }
// // pyramid of doom
// changeText(heading1, "one","violet",1000,()=>{
//   changeText(heading2, "two","purple",2000,()=>{
//     changeText(heading3, "three","red",1000,()=>{
//       changeText(heading4, "four","pink",1000,()=>{
//         changeText(heading5, "five","green",2000,()=>{
//           changeText(heading6, "six","blue",1000,()=>{
//             changeText(heading7, "seven","brown",1000,()=>{
//               changeText(heading8, "eight","cyan",1000,()=>{
//                 changeText(heading9, "nine","#cda562",1000,()=>{
//                   changeText(heading10, "ten","dca652",1000,()=>{
                    
//                   },()=>{console.log("Heading10 does not exist")})
//                 },()=>{console.log("Heading9 does not exist")})
//               },()=>{console.log("Heading8 does not exist")})
//             },()=>{console.log("Heading7 does not exist")})
//           },()=>{console.log("Heading6 does not exist")})
//         },()=>{console.log("Heading5 does not exist")})
//       },()=>{console.log("Heading4 does not exist")})
//     },()=>{console.log("Heading3 does not exist")})
//   },()=>{console.log("Heading2 does not exist")})
// },()=>{console.log("Heading1 does not exist")})





// extra 

// aa file callback-Demo.html sathe link chhe
//
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");

// setTimeout(()=>{
//   heading1.textContent = "heading 1";
//   heading1.style.color = "violet";
// },1000)


// setTimeout(()=>{
//   heading2.textContent = "heading 2";
//   heading2.style.color = "purple";
// },3000)
// // upar pramne aapde 1 sec pachhi heading 1 aave anna pachhi heading 2 chnage thai pn badha mate aapde alag alag setTime banavu pade aanu solution niche pramane chhe tem karvu


// callback hell

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

setTimeout(()=>{
  heading1.textContent = "one";
  heading1.style.color = "violet";

  setTimeout(()=>{
    heading2.textContent = "two";
    heading2.style.color = "purple";
    setTimeout(()=>{
      heading3.textContent = "three";
      heading3.style.color = "red";
      setTimeout(()=>{
        heading4.textContent = "four";
        heading4.style.color = "pink";
        setTimeout(()=>{
          heading5.textContent = "five";
          heading5.style.color = "green";
          setTimeout(()=>{
            heading6.textContent = "six";
            heading6.style.color = "blue";
            setTimeout(()=>{
              heading7.textContent = "seven";
              heading7.style.color = "brown";
              
              
            },1000)
            
            
          },1000)
          
        },1000)
        
      },1000)
      
    },1000)
  },1000)
},1000)

// aa same kam aapde function thi 133_1.js file ma karel chhe







// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");


// function changeText(element, text, color, time){
//   setTimeout(()=>{
//     if(element){ // elemet hoy toj aa kam kare baki
//       element.textContent = text;
//       element.style.color = color;
//     }
//     else{
//       console.log("your element does not exist")
//     }
//   }, time)
// }
 


// changeText(heading8, "eight", "red", 3000,)









const heading8 = document.querySelector(".heading");
const heading9 = document.querySelector(".heading9");

function changeText_1(element, text, color, time, onSuccessCallback, onFailureCallback){
  setTimeout(()=>{
    if(element){ // elemet hoy toj aa kam kare baki
      element.textContent = text;
      element.style.color = color;
      if(onSuccessCallback){    // aam karvathi error na aave 
        onSuccessCallback(); // means ke jo aapel hoy to run karvo 
      }
    }
    else{
      if(onFailureCallback){
        onFailureCallback();
      }
    }
  }, time)
}
 


changeText_1(heading8, "eight", "green", 1000, ()=>{
  console.log("success bro")
},()=>{console.log("heading does not exist")})


