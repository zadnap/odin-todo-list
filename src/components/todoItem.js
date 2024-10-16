import "../assets/styles/todoItem.css";

import { format } from "date-fns";

class TodoItem {
  constructor(title, description, dueDate, isChosen) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isChosen = isChosen;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("li");

    this.element.classList.add("todo-item");
    if (this.isChosen) {
      this.element.classList.add("chosen");
    }
    this.element.innerHTML = `
        <div class="date">
            <span class="month">${format(this.dueDate, "MMM")}</span>
            <span class="day">${format(this.dueDate, "dd")}</span>
        </div>
        <div class="content">
            <h4 class="title">${this.title}</h4>
            <p class="description">${this.description}</p>
        </div>
    `;

    return this.element;
  }
}

export default TodoItem;
