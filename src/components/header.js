import "../assets/styles/header.css";
import {
  getCurrentProject,
  getProjects,
  setProjects,
} from "../modules/appController";
import { renderHeader } from "../modules/domController";
import ProjectListModal from "./projectListModal";

const contentContainer = document.querySelector("body");

class Header {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("header");

    this.element.innerHTML = `
        <h1 class="title">
          <span>${this.title}</span>
          <button class="btn btn-default btn-square" id="edit-project-title"><i class="fa-solid fa-pen"></i></button>
          <input type="text" placeholder="Title" maxlength="30" id="edit-project-title-input">
        </h1>
        <p class="description">
          <span>${this.description}</span>
          <button class="btn btn-default btn-square" id="edit-project-description"><i class="fa-solid fa-pen"></i></button>
          <input type="text" placeholder="Description" maxlength="50" id="edit-project-description-input">
        </p>
        <div class="actions">
          <button class="btn btn-primary create-todo" id="create-todo-btn"><i class="fa-solid fa-plus"></i>New Todo</button>
          <button class="btn btn-default" id="create-project-btn">New Project</button>
          <button class="btn btn-discard" id="discard-project-btn">Discard</button>
          <button class="btn btn-default" id="project-list-btn"><i class="fa-solid fa-bars"></i></button>
        </div>
    `;
    this.element.addEventListener("click", (event) =>
      this.handleClickEvents(event.target)
    );
    this.element.addEventListener("focusout", (event) =>
      this.handleFocusOutEvents(event.target)
    );

    return this.element;
  }

  handleClickEvents(target) {
    const button = target.closest("button");
    if (!button) return;

    switch (button.id) {
      case "edit-project-title":
        this.handleEditTitle();
        break;
      case "edit-project-description":
        this.handleEditDescription();
        break;
      case "create-todo-btn":
        this.handleCreateTodo();
        break;
      case "create-project-btn":
        this.handleCreateProject();
        break;
      case "discard-project-btn":
        this.handleDiscardProject();
        break;
      case "project-list-btn":
        this.handleShowProjectList();
        break;
      default:
        break;
    }
  }

  handleFocusOutEvents(target) {
    const input = target.closest("input");

    if (!input) return;

    switch (input.id) {
      case "edit-project-title-input":
        this.handleSaveTitle();
        break;
      case "edit-project-description-input":
        this.handleSaveDescription();
        break;
      default:
        break;
    }
  }

  handleEditTitle() {
    const currentProject = getCurrentProject();

    const title = this.element.querySelector(".title");
    const input = title.querySelector("input");

    title.classList.add("editing");
    input.value = currentProject.title;
    input.focus();
  }

  handleEditDescription() {
    const currentProject = getCurrentProject();

    const description = this.element.querySelector(".description");
    const input = description.querySelector("input");

    description.classList.add("editing");
    input.value = currentProject.description;
    input.focus();
  }

  handleSaveTitle() {
    const title = this.element.querySelector(".title");
    const input = title.querySelector("input");

    title.classList.remove("editing");

    const currentProject = getCurrentProject();
    currentProject.title = input.value || "Add Title";

    setProjects();
    renderHeader();
  }

  handleSaveDescription() {
    const description = this.element.querySelector(".description");
    const input = description.querySelector("input");

    description.classList.remove("editing");

    const currentProject = getCurrentProject();
    currentProject.description = input.value || "Add Description";

    setProjects();
    renderHeader();
  }

  handleCreateTodo() {
    // TODO
  }

  handleCreateProject() {
    // TODO
  }

  handleDiscardProject() {
    // TODO
  }

  handleShowProjectList() {
    const projects = getProjects();
    const modal = new ProjectListModal(projects);
    modal.open();
  }
}

export default Header;
