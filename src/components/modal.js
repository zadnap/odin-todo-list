import "../assets/styles/modal.css";

class Modal {
  constructor() {
    this.element = null;
  }

  handleClickClose(target) {
    const button = target.closest("button");

    if (button && button.id === "close-modal-btn") {
      this.close();
    }
  }

  open() {
    this.createElement();
    const contentContainer = document.querySelector("body");
    contentContainer.appendChild(this.element);
  }

  close() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }
}

export default Modal;
