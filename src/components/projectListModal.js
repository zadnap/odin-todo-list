import "../assets/styles/modal.css";
import "../assets/styles/projectListModal.css";

import { getProjects } from "../modules/appController";

function ProjectListModal() {
  const projectList = getProjects();

  const projectListModal = document.createElement("div");
  projectListModal.classList.add("modal");

  projectListModal.innerHTML = `
    <div class="container">
      <div class="head">
          <h4>Your Project List</h4>
          <button class="btn btn-default btn-square"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="body">
          ${projectList
            .map((project) => {
              return `
                <div class="project">
                  <h4 class="title">${project.title}</h4>
                </div>`;
            })
            .join("")}
      </div>
    </div>
  `;

  return projectListModal;
}

export default ProjectListModal;
