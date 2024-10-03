function getStorage() {
  return JSON.parse(localStorage.getItem("projects"));
}

function setStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export { getStorage, setStorage };
