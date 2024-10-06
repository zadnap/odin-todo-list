import Header from "../components/header";
import TodoDetail from "../components/todoDetail";
import TodoList from "../components/todoList";

import { getCurrentProject, getCurrentTodo } from "./appController";

const currentProject = getCurrentProject();
const currentTodo = getCurrentTodo();
const body = document.querySelector("body");

function renderProject() {
  body.appendChild(Header(currentProject.title, currentProject.description));
}

function renderTodoList() {
  body.appendChild(TodoList(currentProject.todos));
}

function renderTodoDetail() {
  const todoListSection = document.querySelector(".todo-list");
  todoListSection.appendChild(TodoDetail(currentTodo));
}

export { renderProject, renderTodoList, renderTodoDetail };
