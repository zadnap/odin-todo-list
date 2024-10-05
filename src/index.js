import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import "./assets/styles/main.css";
import "./assets/styles/button.css";
import {
  renderProject,
  renderTodoDetail,
  renderTodoList,
} from "./modules/domController";

renderProject();
renderTodoList();
renderTodoDetail();
