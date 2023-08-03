// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]); 


// EXTRA  

// get multiple elements using getElements by class name 

const navItem = document.getElementsByClassName("nav-item");

console.log(navItem); // output HTMLCollection(3) // array like object aave


console.log(navItem[0]);

const navItem_1 = document.querySelectorAll(".nav-item");

console.log(navItem_1) // output NodeList(3)

console.log(navItem_1[2])

// getElementsByClassName and  document.querySelectorAll use kari aapde same class vada tag ma HTMLCollection(3)  and NodeList(3) aave chhe bey ma alag aave chhe je aadpe aagal study karisu

// HTMLCollection and NodeList aa bey array like object chhe aama aapde array ni 2 property use kari sakriye  indexing and lenght property