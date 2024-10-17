import "../assets/styles/todoListSection.css";

import TodoDetail from "./todoDetail";
import TodoItem from "./todoItem";
import { renderTodoListSection } from "../modules/domController";
import { setCurrentTodo } from "../modules/appController";

class TodoListSection {
  constructor(currentProject, currentTodo) {
    this.currentProject = currentProject;
    this.currentTodo = currentTodo;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("section");
    this.element.classList.add("todo-list");

    this.createTodoList();
    this.createTodoDetail();

    this.addListeners();

    return this.element;
  }

  createTodoList() {
    const list = document.createElement("ul");
    const todos = this.currentProject.todos;

    list.classList.add("list");

    todos.forEach((todo) => {
      const todoItem = new TodoItem(
        todo.title,
        todo.description,
        todo.dueDate,
        this.currentTodo === todo
      );
      list.appendChild(todoItem.createElement());
    });

    this.element.appendChild(list);
  }

  createTodoDetail() {
    const currentTodo = this.currentTodo;
    const todoDetail = new TodoDetail(currentTodo);

    this.element.appendChild(todoDetail.createElement());
  }

  addListeners() {
    const todoItems = Array.from(this.element.querySelectorAll(".todo-item"));

    this.element.addEventListener("click", (event) => {
      const todoItem = event.target.closest(".todo-item");

      if (!todoItem) return;

      this.handleChooseTodoItem(todoItems.indexOf(todoItem));
    });
  }

  handleChooseTodoItem(index) {
    setCurrentTodo(index);
    renderTodoListSection();
  }
}

export default TodoListSection;
