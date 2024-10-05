import "../assets/styles/todoList.css";

import Todo from "../components/todo";

function TodoList(todoList) {
  const todoListElement = document.createElement("section");
  todoListElement.classList.add("todo-list");

  const list = document.createElement("ul");
  todoList.forEach((todo) => {
    list.appendChild(Todo(todo.title, todo.description, todo.dueDate));
  });

  todoListElement.appendChild(list);

  return todoListElement;
}

export default TodoList;
