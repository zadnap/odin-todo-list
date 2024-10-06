import "../assets/styles/modal.css";
import "../assets/styles/discardProjectModal.css";

import { getCurrentProject } from "../modules/appController";

function DiscardProjectModal() {
  const currentProject = getCurrentProject();

  const discardProjectModal = document.createElement("div");
  discardProjectModal.classList.add("modal");

  discardProjectModal.innerHTML = `
        <div class="container">
            <div class="head">
                <h4 class="title">Discard Project</h4>  
                <button class="btn btn-default btn-square"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="body">
                <p class="message">
                    Are you sure to discard 
                    <strong class="project-title">${currentProject.title}</strong> ?
                </p>
            </div>
            <div class="foot">
                <button class="btn btn-primary">Confirm</button>
            </div>
        </div>
    `;

  return discardProjectModal;
}

export default DiscardProjectModal;
