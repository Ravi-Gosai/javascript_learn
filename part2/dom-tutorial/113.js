// Add new HTML elements to page 


// innerHTML to add html element

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// when you should use it , when you should not
// todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')



// extra  

// Add new HTML elements to page 

const todoList = document.querySelector(".todo-list");

// console.log(todoList)

console.log(todoList.innerHTML)
todoList.innerHTML = "<li>new todo </li>"; // website jovo aa add karine idea aave 
// upar kariye tema todo replace thai chhe new todo add ny thato

// niche pramane new todo add thai

todoList.innerHTML = todoList.innerHTML + "<li> new todo 2 </li>";


todoList.innerHTML += "<li> new todo 3 </li>"; //   += use kari short ma add kari sakay chhe

// but innerHTML no use new element add karva na karvo perfomance issue aave . jo aapde code change karvo hoy to aa rite aakho code change kari sakay chhe

// aapde new element add karva mate document.createElement no use karsu je aapde next file ma joisu