import "../assets/styles/input.css";
import "../assets/styles/editTodoModal.css";

class EditTodoModal extends Modal {
  constructor() {
    super();
  }

  createElement() {
    element.className = "modal edit-todo-modal";
    element.innerHTML = `
        <div class="container">
            <div class="head">
                <h4>Edit Todo</h4>
                <button class="btn btn-default btn-square"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="body">
                <p>
                    <label for="edit-todo-title">Title</label>
                    <input type="text" placeholder="Edit title" id="edit-todo-title">
                </p>
                <p>
                    <label for="edit-todo-desc">Description</label>
                    <input type="text" placeholder="Edit description" id="edit-todo-desc">
                </p>
                <p>
                    <label class="checklist-title">
                        Checklist
                        <button class="btn btn-default btn-square add-item"><i class="fa-solid fa-plus"></i></button>
                    </label>
                    <ul class="checklist">
                        <li class="checklist-item">
                            This is check list item 1
                            <button class="btn btn-default btn-square"><i class="fa-solid fa-xmark"></i></button>
                        </li>
                        <li class="checklist-item">
                            This is check list item 1
                            <button class="btn btn-default btn-square"><i class="fa-solid fa-xmark"></i></button>
                        </li>
                        <li class="checklist-item new">
                            <input type="text" placeholder="New">
                        </li>
                    </ul>
                </p>
            </div>
            <div class="foot">
                <button class="btn btn-primary">Save Changes</button>
            </div>
        </div>
    `;

    return element;
  }
}

export default EditTodoModal;
