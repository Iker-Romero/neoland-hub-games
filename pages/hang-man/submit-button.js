export const submitButton = (id) => {
  const button = document.createElement("button");

  button.id = id;
  button.className = "submit-button";
  button.innerHTML = "Send";

  return button.outerHTML;
};
