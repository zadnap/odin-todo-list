import "../assets/styles/header.css";

function Header(title, description) {
  const headerElement = document.createElement("header");

  headerElement.innerHTML = `
        <h1 class="title">${title}</h1>
        <p class="description">${description}</p>
        <div class="actions">
          <button class="btn btn-primary create-todo"><i class="fa-solid fa-plus"></i>New Todo</button>
          <button class="btn btn-default">New Project</button>
          <button class="btn btn-discard">Discard</button>
          <button class="btn btn-default"><i class="fa-solid fa-bars"></i></button>
        </div>
    `;

  return headerElement;
}

export default Header;
