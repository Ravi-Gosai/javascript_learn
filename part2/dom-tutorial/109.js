// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach 
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);


// extra  


let navItems = document.getElementsByTagName("a");

console.log(navItems); // output HTMLCollection(3) 
// we can't use forEach method to iterate through HTMLCollection 

// HTMLCollection and NodeList aa bey array like object chhe aama aapde array ni 2 property use kari sakriye  indexing and lenght property niche pramane



// for(let i = 0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor ="#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }
// aa same kam for of loop thhi niche pramne

for(let navItem of navItems){
    navItem.style.backgroundColor ="#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// html collection ma forEach loop use na thai

// let navItems = document.getElementsByTagName("a"); nu output HTMLCollection aave aapde ane array ma change kariye

navItems = Array.from(navItems);
console.log(navItems) // array aavse output have aapde aama use kari sakay chhe array method 

