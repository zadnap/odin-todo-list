import "../assets/styles/modal.css";

class Modal {
  constructor() {
    this.element = null;
  }

  handleClickClose(target) {
    const button = target.closest("button");

    if (button && button.id === "close-modal-btn") {
      this.closeModal();
    }
  }

  closeModal() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }
}

export default Modal;
