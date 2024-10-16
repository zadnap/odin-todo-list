import "../assets/styles/header.css";
import { getProjects } from "../modules/appController";
import ProjectListModal from "./projectListModal";

const contentContainer = document.querySelector("body");

class Header {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  createElement() {
    const element = document.createElement("header");

    element.innerHTML = `
        <h1 class="title">${this.title}</h1>
        <p class="description">${this.description}</p>
        <div class="actions">
          <button class="btn btn-primary create-todo" id="create-todo-btn"><i class="fa-solid fa-plus"></i>New Todo</button>
          <button class="btn btn-default" id="create-project-btn">New Project</button>
          <button class="btn btn-discard" id="discard-project-btn">Discard</button>
          <button class="btn btn-default" id="project-list-btn"><i class="fa-solid fa-bars"></i></button>
        </div>
    `;
    element.addEventListener("click", (event) =>
      this.handleClickEvents(event.target)
    );

    return element;
  }

  handleClickEvents(target) {
    const button = target.closest("button");
    if (!button) return;

    switch (button.id) {
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
    contentContainer.appendChild(modal.createElement());
  }
}

export default Header;
