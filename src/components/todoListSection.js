import "../assets/styles/todoListSection.css";

import createTodoItem from "./todoItem";
import createTodoDetail from "./todoDetail";

function createTodoListSection(currentProject, currentTodo) {
  const todoListSectionElement = document.createElement("section");
  todoListSectionElement.classList.add("todo-list");

  renderTodoList(todoListSectionElement, currentTodo, currentProject.todos);
  renderTodoDetail(todoListSectionElement, currentTodo);

  return todoListSectionElement;
}

function renderTodoList(todoListSectionElement, currentTodo, todos) {
  const list = document.createElement("ul");

  list.classList.add("list");

  todos.forEach((todo) => {
    list.appendChild(
      createTodoItem(
        todo.title,
        todo.description,
        todo.dueDate,
        currentTodo === todo
      )
    );
  });

  todoListSectionElement.appendChild(list);
}

function renderTodoDetail(todoListSectionElement, currentTodo) {
  const todoDetail = createTodoDetail(currentTodo);

  todoListSectionElement.appendChild(todoDetail);
}

export default createTodoListSection;
