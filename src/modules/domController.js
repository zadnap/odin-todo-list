import Header from "../components/header";
import createTodoListSection from "../components/todoListSection";

import { getCurrentProject, getCurrentTodo } from "./appController";

const contentContainer = document.querySelector("body");

function resetContent() {
  contentContainer.innerHTML = "";
}

function renderHeader() {
  const currentProject = getCurrentProject();

  const header = new Header(currentProject.title, currentProject.description);
  contentContainer.appendChild(header.createElement());
}

function renderTodoListSection() {
  const currentProject = getCurrentProject();
  const currentTodo = getCurrentTodo();

  const todoList = createTodoListSection(currentProject, currentTodo);
  contentContainer.appendChild(todoList);
}

export { resetContent, renderHeader, renderTodoListSection };
