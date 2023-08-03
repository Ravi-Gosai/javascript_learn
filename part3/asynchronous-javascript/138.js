// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");


// function changeText(element, text, color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(element){
//               element.textContent = text;
//               element.style.color = color;
//               resolve();
//             }else{
//               reject("element not found");
//             }
//           },time)
//     })  
//   }

// changeText(heading1, "one", "red", 1000)
//   .then(()=>changeText(heading2, "two", "purple", 1000))
//   .then(()=>changeText(heading3, "three", "green", 1000))
//   .then(()=>changeText(heading4, "four", "orange", 1000))
//   .then(()=>changeText(heading5, "four", "orange", 1000))
//   .then(()=>changeText(heading6, "four", "orange", 1000))
//   .then(()=>changeText(heading7, "four", "orange", 1000))
//   .then(()=>changeText(heading8, "four", "orange", 1000))
//   .then(()=>changeText(heading9, "four", "orange", 1000))
//   .then(()=>changeText(heading10, "four", "orange", 1000))
//   .catch((error)=>{
//       alert(error);
//   })




// extra 



const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText_1(element, text, color, time) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) { // elemet hoy toj aa kam kare baki
        element.textContent = text;
        element.style.color = color;
        resolve();
      }
      else {
        reject("element not found");
      }
    }, time)
  })

}

// const changeHeading_2 = changeText_1(heading2,"two", "blue", 1000)


changeText_1(heading1, "one", "red", 1000)
  .then(() => {
    return changeText_1(heading2, "two", "green", 1000)
  })
  .then(() => {
    return changeText_1(heading3, "three", "yellow", 1000)
  })
  .then(() => {
    return changeText_1(heading4, "four", "purple", 1000)
  })
  .then(() => {
    return changeText_1(heading5, "five", "orange", 1000)
  })
  .then(() => {
    return changeText_1(heading6, "six", "red", 1000)
  })
  .then(() => {
    return changeText_1(heading7, "seven", "green", 1000)
  })
  .then(() => {
    return changeText_1(heading8, "eight", "brown", 1000)
  })
  .then(() => {
    return changeText_1(heading9, "nine", "yellow", 1000)
  })
  .then(() => {
    return changeText_1(heading10, "ten", "red", 1000)
  })
  .catch((value)=>{
    console.log(value)
  })


// upar khas return keyword lakhavo jaruri chhe baki 3rd thi badha ek sathe change thai jse


// jo return keyword lakhya vagr short ma pn niche pramane lakhi sakay chhe

const heading11 = document.querySelector(".heading11");
const heading12 = document.querySelector(".heading12");
const heading13 = document.querySelector(".heading13");
const heading14 = document.querySelector(".heading14");
const heading15 = document.querySelector(".heading15");
const heading16 = document.querySelector(".heading16");
const heading17 = document.querySelector(".heading17");
const heading18 = document.querySelector(".heading18");
const heading19 = document.querySelector(".heading19");
const heading20 = document.querySelector(".heading20");

// jo return keyword lakhya vagr short ma pn niche pramane lakhi sakay chhe

changeText_1(heading11, "one", "red", 1000)
  .then(() => changeText_1(heading12, "zzz", "green", 1000))
  .then(() => changeText_1(heading13, "ddd", "red", 1000))
  .then(() => changeText_1(heading14, "fff", "green", 1000))
  .then(() => changeText_1(heading15, "hhh", "red", 1000))
  .then(() => changeText_1(heading16, "jjj", "green", 1000))
  .then(() => changeText_1(heading17, "rrr", "blue", 1000))
  .then(() => changeText_1(heading18, "ddd", "green", 1000))
  .then(() => changeText_1(heading19, "ddd", "blue", 1000))
  .then(() => changeText_1(heading20, "jjj", "green", 1000))
  .catch((error)=>{
    alert(error)
  })