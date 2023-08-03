// html file index2.html ma add karel che 


// const rootNode = document.getRootNode();

// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// sibling relation 
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
// 


//extra

const rootNode = document.getRootNode();
console.log(rootNode);

const htmlElementNode = rootNode.childNodes;

console.log(htmlElementNode);

console.log(htmlElementNode[0]); 

console.log(htmlElementNode[0].childNodes);

const headElementNode = htmlElementNode[0].childNodes[0];
const textNode1 = htmlElementNode[0].childNodes[1];
const bodyElementNode = htmlElementNode[0].childNodes[2];

console.log(headElementNode);

console.log(headElementNode.parentNode);

// sibling relation 

console.log(headElementNode.nextSibling);

console.log(headElementNode.nextElementSibling); // aam j karavanu textnode to bov badha hoy to khbr na pde nextsibling kon chhe a

// textnode ma space and newline count thai chhe aahiya but broswer ma show ny thati aa textnode(newline vadi spaces)
// aavu thavanu reason che ke css ma universel white_space: normal ; hoy chhe bydefoult  atale jo aapde normal mathi white_space: pre ; to broswer ma show thase extra newline spaces


const h1 = document.querySelector("h1");

console.log(h1.parentNode)

const div = h1.parentNode;

div.style.color = "#efefef";
div.style.backgroundColor = "#333";

const body = document.body; // diret body select karva
console.log(body)

const head = document.querySelector("head");
console.log(head);

const title = head.querySelector("title"); // jo aam pn querySelector no use kari sakay chhe
console.log(title)

const container = document.querySelector(".container");

console.log(container);
console.log(container.childNodes); // NodeList(5) [text, h1, text, p, text]
// upar aadpe newline vada textnode na jota hoy to niche pramane karsu

console.log(container.children) // HTMLCollection(2) [h1, p]

