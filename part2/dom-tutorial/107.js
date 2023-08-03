// get and set attrubutes 

// tag ni anar aapde class id type name href avu badhu aapiye ne ane attrubute kevay

// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));



const link = document.querySelector("a"); // by defoult pahelo <a> tag j select thai

console.log(link.getAttribute("href"))  // output #home

console.log(link.getAttribute("href").slice(1)) // output home

link.setAttribute("name", "ravi") // name nam thi atrutube add karel

console.log(link.getAttribute("name"))


link.setAttribute("href", "https://facebook.com") // href ni value change kari
// #home => "https://facebook.com" value change thai
