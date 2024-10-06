import createHeader from "../components/header";
import createTodoListSection from "../components/todoListSection";

import { getCurrentProject, getCurrentTodo } from "./appController";

const currentProject = getCurrentProject();
const currentTodo = getCurrentTodo();
const body = document.querySelector("body");

function renderHeader() {
  const header = createHeader(currentProject.title, currentProject.description);
  body.appendChild(header);
}

function renderTodoListSection() {
  const todoList = createTodoListSection(currentProject, currentTodo);
  body.appendChild(todoList);
}

export { renderHeader, renderTodoListSection };
