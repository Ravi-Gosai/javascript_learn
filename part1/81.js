// function hello(){
//     console.log("hello world");
// }

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());


// extra



// javascript ma function me khali space hoy chhe jene aapde as a object use kari sakay jene protoype kevay


function hello(){
    console.log("hello world");
}

hello(); 

// you can add your own properties 

hello.myOwnProperties = "value23";

console.log(hello.myOwnProperties) // output value23

console.log(hello.prototype); // output {constructor: function hello()} ek object malse . have function ma rahela object ma aapde biji item add kari sakiye chhiye

// only functions provide prototype property (array ke object bije kyay aa property jova malati nathi)

// aapde aa function   prototype ne as a empty object use karisu

 hello.prototype.abc = "value1";
 hello.prototype.xyx = "value2";
 hello.prototype.sing = function(){
    return "la la la";
 }

 console.log(hello.prototype);

 console.log(hello.prototype.sing());