import { format } from "date-fns";

import "../assets/styles/todoDetail.css";
import {
  discardCurrentTodo,
  getCurrentTodo,
  toggleChecked,
} from "../modules/appController";
import ConfirmationModal from "./confirmationModal";
import EditTodoModal from "./editTodoModal";
import { renderTodoListSection } from "../modules/domController";

class TodoDetail {
  constructor({ title, description, dueDate, checklist }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.checklist = checklist;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("article");

    this.element.classList.add("detail");
    this.element.innerHTML = `
      <div class="head">
          <h4 class="title">${this.title}</h4>
          <button class="btn btn-default btn-square" id="hide-todo-detail">
            <i class="fa-solid fa-minus"></i>
          </button>
      </div>
      <div class="body">
          <div class="text">
            <p class="description">${this.description}</p>   
            <p class="due-date">Due date: ${format(
              this.dueDate,
              "MM/dd/yyyy"
            )}</p>
          </div>
          <div class="actions">
            <button class="btn btn-default" id="edit-todo-item">Edit</button>
            <button class="btn btn-discard" id="discard-todo-item">Discard</button>
          </div>
          <ul class="checklist">
              ${this.checklist
                .map(
                  (item, index) =>
                    `<li class="checklist-item">
                      <label for="list-item-${index}">
                        <input id="list-item-${index}" type="checkbox" ${
                      item.isChecked ? "checked" : ""
                    }> 
                        ${item.title}
                      </label>
                    </li>`
                )
                .join("")}
          </ul>
      </div>
    `;

    this.addListeners();

    return this.element;
  }

  addListeners() {
    this.element.addEventListener("click", (event) => {
      this.handleClickActions(event.target);
      this.handleClickCheck(event.target);
    });
  }

  handleClickActions(target) {
    const button = target.closest("button");

    if (!button) return;

    switch (button.id) {
      case "edit-todo-item":
        this.handleEditTodo();
        break;
      case "discard-todo-item":
        this.handleDiscardTodo();
        break;
      case "hide-todo-detail":
        this.handleHideTodoDetail();
        break;
      default:
        break;
    }
  }

  handleClickCheck(target) {
    const listItemArray = Array.from(
      this.element.querySelectorAll(".checklist-item")
    );
    const listItem = target.closest(".checklist-item");

    if (!listItem) return;

    this.handleToggleChecked(listItemArray.indexOf(listItem));
  }

  handleDiscardTodo() {
    const currentTodo = getCurrentTodo();

    const discardTodoModal = new ConfirmationModal(
      currentTodo.title,
      "Are you sure to discard",
      () => discardCurrentTodo()
    );

    discardTodoModal.open();
  }

  handleEditTodo() {
    const modal = new EditTodoModal();
    modal.open();
  }

  handleHideTodoDetail() {
    this.element.classList.add("hidden");
  }

  handleToggleChecked(index) {
    toggleChecked(index);

    renderTodoListSection();
  }
}

export default TodoDetail;
