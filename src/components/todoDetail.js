import { format } from "date-fns";

import "../assets/styles/todoDetail.css";

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
        <button class="btn btn-default btn-square"><i class="fa-solid fa-minus"></i></button>
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
          <button class="btn btn-default">Edit</button>
          <button class="btn btn-discard">Discard</button>
        </div>
        <ul class="checklist">
            ${this.checklist
              .map(
                (item, index) =>
                  `<li class="checklist-item">
                    <label for=${index}>
                      <input id=${index} type="checkbox" ${
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

    return this.element;
  }
}

export default TodoDetail;
