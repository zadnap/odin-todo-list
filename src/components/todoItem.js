import "../assets/styles/todoItem.css";

import { format } from "date-fns";

function createTodoItem(title, description, dueDate, isChosen) {
  const month = format(dueDate, "MMM");
  const day = format(dueDate, "dd");

  const todoItemElement = document.createElement("li");

  todoItemElement.classList.add("todo-item");
  if (isChosen) {
    todoItemElement.classList.add("chosen");
  }
  todoItemElement.innerHTML = `
        <div class="date">
            <span class="month">${month}</span>
            <span class="day">${day}</span>
        </div>
        <div class="content">
            <h4 class="title">${title}</h4>
            <p class="description">${description}</p>
        </div>
    `;

  return todoItemElement;
}

export default createTodoItem;
