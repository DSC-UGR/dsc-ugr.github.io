const formButton = document.querySelector("#button");
const form = document.querySelector("#core-team-form");

const onSubmit = () => {
  formButton.textContent = "¡Gracias!";
  formButton.setAttribute("disabled", "true");
};

form.addEventListener("submit", onSubmit);
