import "../assets/styles/todoList.css";

import Todo from "../components/todo";
import { getCurrentTodo } from "../modules/appController";

function TodoList(todoList) {
  const todoListElement = document.createElement("section");
  todoListElement.classList.add("todo-list");

  const currentTodo = getCurrentTodo();

  const list = document.createElement("ul");
  todoList.forEach((todo) => {
    list.appendChild(
      Todo(todo.title, todo.description, todo.dueDate, currentTodo === todo)
    );
  });

  todoListElement.appendChild(list);

  return todoListElement;
}

export default TodoList;
