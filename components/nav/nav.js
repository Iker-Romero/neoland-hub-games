import { hub } from "../hub/hub";

export const nav = () => {
  const template = `
  <header>
    <nav>
      <button class="hub-button">HUB</button>
    </nav>
  </header>
  `;
  const target = document.querySelector("#app");
  target.insertAdjacentHTML("afterbegin", template);

  const hubButton = document.querySelector(".hub-button");
  hubButton.addEventListener("click", () => {
    document.querySelector("main").remove();
    hub();
  });
};
