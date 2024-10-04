import Header from "../components/header";
import TodoList from "../components/todoList";
import { getCurrentProject } from "./appController";

const currentProject = getCurrentProject();
const body = document.querySelector("body");

function renderProject() {
  body.prepend(Header(currentProject.title, currentProject.description));
}

function renderTodoList() {
  body.appendChild(TodoList(currentProject.todos));
}

export { renderProject, renderTodoList };
