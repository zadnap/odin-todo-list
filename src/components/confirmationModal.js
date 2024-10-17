import { renderHeader, renderTodoListSection } from "../modules/domController";
import Modal from "./modal";

class ConfirmationModal extends Modal {
  constructor(title, message, action) {
    super();
    this.title = title;
    this.message = message;
    this.action = action;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.className = "modal";
    this.element.innerHTML = `
        <div class="container">
            <div class="head">
                <h4>${this.title}</h4>
                <button class="btn btn-default btn-square" id="close-modal-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="body">
                <p class="message">${this.message} <strong class="primary">${this.title}</strong></p>
            </div>
            <div class="foot">
                <button class="btn btn-discard" id="cancel-action">Cancel</button>
                <button class="btn btn-primary" id="confirm-action">Confirm</button>
            </div>
        </div>
    `;

    this.addListeners();
  }

  addListeners() {
    this.element.addEventListener("click", (event) => {
      this.handleClickClose(event.target);
      this.handleClickEvents(event.target);
    });
  }

  handleClickEvents(target) {
    const button = target.closest("button");

    if (!button) return;

    switch (button.id) {
      case "cancel-action":
        this.handleCancel();
        break;
      case "confirm-action":
        this.handleConfirm();
        break;
      default:
        break;
    }
  }

  handleConfirm() {
    this.action();
    this.close();
    renderHeader();
    renderTodoListSection();
  }

  handleCancel() {
    this.close();
  }
}

export default ConfirmationModal;
