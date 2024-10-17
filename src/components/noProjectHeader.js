import "../assets/styles/header.css";

import { createProject } from "../modules/appController";
import { renderHeader, renderTodoListSection } from "../modules/domController";

class NoProjectHeader {
  constructor() {
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("header");
    this.element.innerHTML = `
        <h1 class="title">You do not have any projects</h1>
        <p class="description">Create one to start your todo list</p>
        <div class="actions">
          <button class="btn btn-primary" id="create-project-btn">New Project</button>
        </div>
    `;

    this.element
      .querySelector("#create-project-btn")
      .addEventListener("click", this.handleCreateProject);

    return this.element;
  }

  handleCreateProject() {
    createProject();
    renderHeader();
    renderTodoListSection();
  }
}

export default NoProjectHeader;
