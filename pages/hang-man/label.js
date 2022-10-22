export const label = (targetID, text) => {
  const label = document.createElement("label");

  label.setAttribute("for", targetID);
  label.innerHTML = text;

  // To get the html representation and not the object type of the element
  return label.outerHTML;
}
