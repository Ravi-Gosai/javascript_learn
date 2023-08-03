// clone nodes

// bov use ny thato aano but GK mate

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);
