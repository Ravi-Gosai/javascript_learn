// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();


// extra

// aapde file 71.js ma joyu ke this a as a object work kare 

console.log(this)

console.log(window) // window a JS ma global object chhe aathi this and window mu same output aavse 

function myFunc(){

    console.log(this, "it");
}
window.myFunc(); // window global object chhe aathi JS ma aapde window lakhta nathi skip kariye

function myFunc1(){
    "use strict";    // how to apply strict mode
    console.log(this, "it");
}
myFunc1();

// Java script na strict mode on karva upar lakhyu tem karavanu .
// strict mode ma this chhe a undefined aavse 
// "use strict"; game tyathi active kari sakay chhe jya lakho tyari apply thai jai

