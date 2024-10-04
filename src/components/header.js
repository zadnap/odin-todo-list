import "../assets/styles/header.css";

function Header(title, description) {
  const headerElement = document.createElement("header");

  headerElement.innerHTML = `
        <h1 class="title">
            ${title}
        </h1>
        <p class="description">${description}</p>
    `;

  return headerElement;
}

export default Header;
