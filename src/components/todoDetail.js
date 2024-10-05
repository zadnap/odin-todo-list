import { format } from "date-fns";
import "../assets/styles/todoDetail.css";

function TodoDetail({ title, description, dueDate, checklist }) {
  const todoDetailElement = document.createElement("article");

  todoDetailElement.classList.add("todo-detail");
  todoDetailElement.innerHTML = `
    <div class="head">
        <h4 class="title">${title}</h4>
        <button class="btn btn-default btn-square"><i class="fa-solid fa-minus"></i></button>
    </div>
    <div class="body">
        <div class="text">
          <p class="description">${description}</p>   
          <p class="due-date">Due date: ${format(dueDate, "MM/dd/yyyy")}</p>
        </div>
        <div class="actions">
          <button class="btn btn-default">Edit</button>
          <button class="btn btn-discard">Discard</button>
        </div>
        <ul class="checklist">
            ${checklist
              .map(
                (item, index) =>
                  `<li>
                  <input id=${index} type="checkbox" ${
                    item.isChecked ? "checked" : ""
                  }> 
                  <label for=${index}>${item.title}</label>
                </li>`
              )
              .join("")}
        </ul>
    </div>
  `;

  return todoDetailElement;
}

export default TodoDetail;
