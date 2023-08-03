const newTodoItem = document.createElement("li");

newTodoItem.textContent = "teach students 1";

const todoList = document.querySelector(".todo-list");

todoList.append(newTodoItem);

// append ni jagya pr appendChild pn use kari sakay but aa append new chhe atale upar pramane j append karvu




// prepend

const newabout = document.querySelector("#newabout")

const newText = document.createTextNode("more your self")

newabout.prepend(newText);  // prepend last ma ny but upar add kare ok



// remove 

const todo1 = document.querySelector(".todo-list li")

console.log(todo1)

todo1.remove() // website pr jovo have do not vadu todo remove thai gayu