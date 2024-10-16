import Header from "../components/header";
import TodoListSection from "../components/todoListSection";

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

  const todoListSection = new TodoListSection(currentProject, currentTodo);
  contentContainer.appendChild(todoListSection.createElement());
}

export { resetContent, renderHeader, renderTodoListSection };
