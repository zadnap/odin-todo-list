import "../assets/styles/todo.css";

import { format } from "date-fns";
import { getMonthName } from "../utils/date-format";

function Todo(title, description, dueDate, isChosen) {
  const month = getMonthName(dueDate);
  const day = format(dueDate, "dd");

  const todoElement = document.createElement("li");

  todoElement.classList.add("todo");
  if (isChosen) {
    todoElement.classList.add("chosen");
  }
  todoElement.innerHTML = `
        <div class="date">
            <span class="month">${month}</span>
            <span class="day">${day}</span>
        </div>
        <div class="content">
            <h4 class="title">${title}</h4>
            <p class="description">${description}</p>
        </div>
    `;

  return todoElement;
}

export default Todo;
