import Header from "../components/header";
import TodoListSection from "../components/todoListSection";

import { getCurrentProject, getCurrentTodo } from "./appController";

const contentContainer = document.querySelector("body");

function resetHeader() {
  const header = contentContainer.querySelector("header");
  if (header) header.remove();
}

function resetTodoListSection() {
  const totoListSection = contentContainer.querySelector(".todo-list");
  if (totoListSection) totoListSection.remove();
}

function renderHeader() {
  resetHeader();

  const currentProject = getCurrentProject();

  const header = new Header(currentProject.title, currentProject.description);
  contentContainer.prepend(header.createElement());
}

function renderTodoListSection() {
  resetTodoListSection();

  const currentProject = getCurrentProject();
  const currentTodo = getCurrentTodo();

  const todoListSection = new TodoListSection(currentProject, currentTodo);
  contentContainer.append(todoListSection.createElement());
}

export { renderHeader, renderTodoListSection };
