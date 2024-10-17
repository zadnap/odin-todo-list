import "../assets/styles/projectListModal.css";

import Modal from "./modal";

import { setCurrentProject } from "../modules/appController";
import { renderHeader, renderTodoListSection } from "../modules/domController";

class ProjectListModal extends Modal {
  constructor(projectList) {
    super();
    this.projectList = projectList;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.className = "modal project-list-modal";
    this.element.innerHTML = `
      <div class="container">
        <div class="head">
            <h4>Your Project List</h4>
            <button class="btn btn-default btn-square" id="close-modal-btn"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="body">
          <ul class="project-list">
            ${this.renderProjectList()}
          </ul>
        </div>
      </div>
    `;
    this.element.addEventListener("click", (event) => {
      this.handleClickClose(event.target);
      this.handleClickProject(event.target);
    });

    return this.element;
  }

  renderProjectList() {
    return this.projectList
      .map(
        (project, index) =>
          `<li class="project" id="${index}">${project.title}</li>`
      )
      .join("");
  }

  handleClickProject(target) {
    const listItem = target.closest("li");

    if (!listItem) return;

    setCurrentProject(listItem.id);
    renderHeader();
    renderTodoListSection();
  }
}

export default ProjectListModal;
