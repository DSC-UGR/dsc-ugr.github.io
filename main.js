const formButton = document.querySelector("#button");

formButton.onclick = (e) => {
  formButton.textContent = "¡Gracias!";
  formButton.setAttribute("disabled", "true");
};
