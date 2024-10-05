import "../assets/styles/todoList.css";

import Todo from "../components/todo";

function TodoList(todoList) {
  const todoListElement = document.createElement("section");
  todoListElement.classList.add("todo-list");

  const newTodoBtn = document.createElement("button");
  newTodoBtn.classList.add("create-todo", "btn");
  newTodoBtn.innerHTML = `New <i class="fa-solid fa-plus"></i>`;

  const list = document.createElement("ul");
  todoList.forEach((todo) => {
    list.appendChild(Todo(todo.title, todo.description, todo.dueDate));
  });

  todoListElement.appendChild(newTodoBtn);
  todoListElement.appendChild(list);

  return todoListElement;
}

export default TodoList;
