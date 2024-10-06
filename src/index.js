import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import "./assets/styles/main.css";
import "./assets/styles/button.css";

import { renderHeader, renderTodoListSection } from "./modules/domController";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderTodoListSection();
});
