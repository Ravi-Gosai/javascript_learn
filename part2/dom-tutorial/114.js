// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before 
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);




// extra 

// document.createElement()


const newTodoItem = document.createElement("li"); // <li> tag create thase

console.log(newTodoItem)

const newTodoItemText = document.createTextNode("teach students");

// have aapde <li> tag ma teach students vadi text node add karvi chhe

newTodoItem.append(newTodoItemText)

// have aa badhu <ul> tag ma add karva todo-list ma add karvu padse

const todoList = document.querySelector(".todo-list");

todoList.append(newTodoItem); // website pr jovo tech student add thai gayu aapde aa process ma su kariyu li ma text node append kari (append atale add kari) and li ne ul ma append kari 

// upar ni method thi new element add kari sakay chhe pn long method chhe te

// new file 114_1.js ma next method thi kariye element add







