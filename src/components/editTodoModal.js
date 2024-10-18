import "../assets/styles/input.css";
import "../assets/styles/editTodoModal.css";

import Modal from "./modal";
import {
  discardChecklistItem,
  getCurrentTodo,
  setProjects,
} from "../modules/appController";
import { renderTodoListSection } from "../modules/domController";

import { format } from "date-fns";
import { CheckListItem } from "../modules/models";

class EditTodoModal extends Modal {
  constructor() {
    super();
    this.currentTodo = getCurrentTodo();
    this.temporaryAddedChecklist = [];
    this.temporaryDiscardedChecklist = [];
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.className = "modal edit-todo-modal";
    this.element.innerHTML = `
        <div class="container">
            <div class="head">
                <h4>Edit Todo</h4>
                <button class="btn btn-default btn-square" id="close-modal-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="body">
                <p>
                    <label for="edit-todo-title">Title</label>
                    <input type="text" placeholder="Edit title" id="edit-todo-title" value="${
                      this.currentTodo.title
                    }">
                </p>
                <p>
                    <label for="edit-todo-description">Description</label>
                    <input type="text" placeholder="Edit description" id="edit-todo-description" value="${
                      this.currentTodo.description
                    }">
                </p>
                <p>
                    <label for="edit-todo-due">Due date</label>
                    <input type="date" id="edit-todo-due" value="${format(
                      this.currentTodo.dueDate,
                      "yyyy-MM-dd"
                    )}">
                </p>
                <p>
                    <label class="checklist-title">Checklist</label>
                    <ul class="checklist"></ul>
                </p>
            </div>
            <div class="foot">
                <button class="btn btn-discard" id="cancel-change-todo">Cancel</button>
                <button class="btn btn-primary" id="save-change-todo">Save Changes</button>
            </div>
        </div>
    `;
    this.renderChecklist();
    this.addListeners();

    return this.element;
  }

  renderChecklist() {
    const checklist = this.element.querySelector(".checklist");
    const addNewItemHTML = `<li class="new-item">
            <input type="text" placeholder="New">
            <button class="btn btn-default" id="new-checklist-item"><i class="fa-solid fa-plus"></i></button>
        </li>`;
    const newChecklistHTML = this.currentTodo.checklist
      .concat(this.temporaryAddedChecklist)
      .map(
        (item, index) => `
        <li class="checklist-item">
            <span>${item.title}</span>
            <button class="btn btn-default btn-square" id="delete-checklist-item-${index}"><i class="fa-solid fa-xmark"></i></button>
        </li>`
      )
      .join("");

    checklist.innerHTML = newChecklistHTML + addNewItemHTML;
  }

  addListeners() {
    this.element.addEventListener("click", (event) => {
      this.handleClickClose(event.target);
      this.handleClickActions(event.target);
      this.handleClickDiscardItem(event.target);
    });
  }

  handleClickActions(target) {
    const button = target.closest("button");

    if (!button) return;

    switch (button.id) {
      case "new-checklist-item":
        this.handleCreateChecklistItem();
        break;
      case "cancel-change-todo":
        this.handleCancelChange();
        break;
      case "save-change-todo":
        this.handleSaveChange();
        break;
      default:
        break;
    }
  }

  handleClickDiscardItem(target) {
    const button = target.closest(".checklist-item button");

    if (!button) return;

    const index = button.id.charAt(button.id.length - 1);

    if (index >= this.currentTodo.checklist.length) {
      this.handleDiscardTempChecklistItem(
        index - this.currentTodo.checklist.length
      );
    } else {
      this.handleDiscardChecklistItem(index);
    }
  }

  handleDiscardChecklistItem(index) {
    discardChecklistItem(index);

    this.temporaryDiscardedChecklist.push(this.currentTodo.checklist[index]);
    this.renderChecklist();
  }

  handleDiscardTemporaryChecklistItem(index) {
    this.temporaryAddedChecklist.splice(index, 1);
    this.renderChecklist();
  }

  handleCreateChecklistItem() {
    const newItemTitle = this.element.querySelector(".new-item input").value;

    if (!newItemTitle) return;

    const newItem = new CheckListItem(newItemTitle);

    this.temporaryAddedChecklist.push(newItem);
    this.renderChecklist();
  }

  handleCancelChange() {
    this.clearTemporaryChecklist();
    this.undoDiscardedChecklist();
    this.close();
  }

  clearTemporaryChecklist() {
    this.temporaryAddedChecklist = [];
  }

  undoDiscardedChecklist() {
    this.currentTodo.checklist.concat(this.temporaryDiscardedChecklist);
  }

  handleSaveChange() {
    const newTitle =
      this.element.querySelector("#edit-todo-title").value || "New title";
    const newDescription =
      this.element.querySelector("#edit-todo-description").value ||
      "New description";
    const newDueDate =
      this.element.querySelector("#edit-todo-due").value || new Date();
    const newChecklist = this.currentTodo.checklist.concat(
      this.temporaryAddedChecklist
    );

    this.currentTodo.title = newTitle;
    this.currentTodo.description = newDescription;
    this.currentTodo.dueDate = newDueDate;
    this.currentTodo.checklist = newChecklist;

    setProjects();
    renderTodoListSection();
    this.close();
  }
}

export default EditTodoModal;
