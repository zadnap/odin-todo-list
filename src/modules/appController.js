import { getStorage, setStorage } from "../utils/storage";
import { Project, Todo } from "./models";

if (!localStorage.getItem("projects")) {
  (function createDefaultProject() {
    const defaultProject = new Project(
      "Default project",
      "This is your default project"
    );
    const defaultTodo = new Todo(
      "Default todo",
      "This is your default todo",
      new Date(),
      0
    );
    defaultProject.todos.push(defaultTodo);

    setStorage([defaultProject]);
  })();
}

const projects = getStorage();
let currentProjectIndex = 0;
let currentTodoIndex = 0;

function getProjects() {
  return projects;
}

function addProject(newProject) {
  projects.push(newProject);
}

function discardProject(index) {
  projects.splice(index, 1);
}

function setCurrentProject(index) {
  currentProjectIndex = index;
}

function getCurrentProject() {
  return projects[currentProjectIndex];
}

function getCurrentTodo() {
  const currentProject = getCurrentProject();
  return currentProject.todos[currentTodoIndex];
}

export {
  getProjects,
  addProject,
  discardProject,
  setCurrentProject,
  getCurrentProject,
  getCurrentTodo,
};
