export const wordInput = (id) => {
  const input = document.createElement("input");

  input.id = id;
  input.className = "word-input";
  input.setAttribute("type", "password");
  input.setAttribute("maxlength", 20);
  input.setAttribute("autocomplete", "off");
  input.pattern = /^[A-Za-z]+$/;

  return input.outerHTML;
};
