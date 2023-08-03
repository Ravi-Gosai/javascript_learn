
// pyramid of doom callback hell


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

function changeText_1(element, text, color, time, onSuccessCallback, onFailureCallback){

  setTimeout(()=>{
    if(element){ // elemet hoy toj aa kam kare baki
      element.textContent = text;
      element.style.color = color;
      if(onSuccessCallback){
        onSuccessCallback(); // means ke jo aapel hoy to run karvo aam karavathi error na aave 
      }
    }
    else{
      if(onFailureCallback){
        onFailureCallback();
      }
    }
  }, time)
}
 


changeText_1(heading1, "one", "green", 1000, ()=>{
    changeText_1(heading2, "two", "red", 1000, ()=>{
        changeText_1(heading3, "three", "purple", 1000, ()=>{
            changeText_1(heading4, "four", "violet", 1000, ()=>{
                changeText_1(heading5, "five", "green", 1000, ()=>{
                    changeText_1(heading6, "six", "blue", 1000, ()=>{
                        changeText_1(heading7, "seven", "pink", 1000, ()=>{
                            changeText_1(heading8, "eight", "red", 1000, ()=>{
                                changeText_1(heading9, "nine", "green", 1000, ()=>{
                                    changeText_1(heading10, "ten", "brown", 1000, ()=>{
    
                                    },()=>{console.log("heading does not exist")})
                                },()=>{console.log("heading does not exist")})
                            },()=>{console.log("heading does not exist")})
                        },()=>{console.log("heading does not exist")})
                    },()=>{console.log("heading does not exist")})   
                },()=>{console.log("heading does not exist")})
            },()=>{console.log("heading does not exist")})
        },()=>{console.log("heading does not exist")})
         
  },()=>{console.log("heading does not exist")})
    
},()=>{console.log("heading does not exist")})





// upar je code chhe te aa nicheno je code dekhai a code ma aj code ne copy paste karine lakhyo chhe nicheno code only samajva ke upar no code kem aavyo
changeText_1(heading1, "one", "green", 1000, ()=>{
    
},()=>{console.log("heading does not exist")})