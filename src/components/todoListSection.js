import "../assets/styles/todoListSection.css";

import TodoDetail from "./todoDetail";
import TodoItem from "./todoItem";

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
}

export default TodoListSection;
