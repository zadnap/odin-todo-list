import "../assets/styles/modal.css";
import "../assets/styles/projectListModal.css";

import { getCurrentProject, getProjects } from "../modules/appController";

function ProjectListModal() {
  const projectList = getProjects();
  const currentProject = getCurrentProject();

  const projectListModal = document.createElement("div");
  const container = document.createElement("div");

  projectListModal.classList.add("modal");

  container.classList.add("container");
  container.innerHTML = `
    <div class="head">
        <h4>Your Project List</h4>
        <button class="btn btn-default"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="body">
        ${projectList
          .map((project) => {
            return `<div class="project">
            <h4 class="title">${project.title}</h4>
            ${
              currentProject === project
                ? ""
                : `<button class="btn btn-default">View</button>`
            }
          </div>`;
          })
          .join("")}
    </div>
  `;

  projectListModal.appendChild(container);

  return projectListModal;
}

export default ProjectListModal;
