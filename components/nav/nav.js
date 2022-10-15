export const nav = () => {
  const template = `
  <nav>
    <span>HUB</span>
  </nav>
  `;
  const target = document.querySelector("#app");
  target.insertAdjacentHTML("afterbegin", template);
};
