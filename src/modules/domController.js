import Header from "../components/header";
import NoProjectHeader from "../components/noProjectHeader";
import TodoListSection from "../components/todoListSection";

import { getCurrentProject, getCurrentTodo } from "./appController";

const contentContainer = document.querySelector("body");

function renderHeader() {
  resetHeader();

  const currentProject = getCurrentProject();

  if (currentProject) {
    const header = new Header(currentProject.title, currentProject.description);
    contentContainer.prepend(header.createElement());
  } else {
    const noProjectHeader = new NoProjectHeader();
    contentContainer.prepend(noProjectHeader.createElement());
  }
}

function renderTodoListSection() {
  resetTodoListSection();

  const currentProject = getCurrentProject();

  if (currentProject) {
    const currentTodo = getCurrentTodo();

    const todoListSection = new TodoListSection(currentProject, currentTodo);
    contentContainer.append(todoListSection.createElement());
  }
}

function resetHeader() {
  const header = contentContainer.querySelector("header");
  if (header) header.remove();
}

function resetTodoListSection() {
  const totoListSection = contentContainer.querySelector(".todo-list");
  if (totoListSection) totoListSection.remove();
}

export { renderHeader, renderTodoListSection };
