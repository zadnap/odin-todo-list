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

function setProjects() {
  setStorage(projects);
}

function addProject(newProject) {
  projects.push(newProject);
  setProjects();
}

function discardCurrentProject() {
  projects.splice(currentProjectIndex, 1);
  setCurrentProject(currentProjectIndex - 1);
  setProjects();
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

function setCurrentTodo(index) {
  currentTodoIndex = index;
}

function discardCurrentTodo() {
  const currentProject = getCurrentProject();
  currentProject.todos.splice(currentTodoIndex, 1);

  setCurrentTodo(currentTodoIndex - 1);

  setProjects(projects);
}

function createProject() {
  const newProject = new Project("New Project", "Description");
  const defaultTodo = new Todo(
    "Default todo",
    "This is your default todo",
    new Date(),
    0
  );
  newProject.todos.push(defaultTodo);

  addProject(newProject);
  setCurrentProject(projects.indexOf(newProject));
}

function createTodo() {
  const currentProject = getCurrentProject();
  const newTodo = new Todo("New todo", "This is your new todo", new Date(), 0);

  currentProject.todos.push(newTodo);

  setProjects(projects);
}

export {
  getProjects,
  setProjects,
  addProject,
  discardCurrentProject,
  setCurrentProject,
  getCurrentProject,
  getCurrentTodo,
  setCurrentTodo,
  discardCurrentTodo,
  createProject,
  createTodo,
};
