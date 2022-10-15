import { randomColor } from "../random-color/random-color";

export const changeTheme = () => {
  const template = `
  <div class="change-theme">
    <img src="https://res.cloudinary.com/dvwva99mi/image/upload/v1665760073/neoland-hub-games/icons/dados_qkqcfo.png" alt="dices">
    <button>Random theme</button>
  </div>
  `;
  const target = document.querySelector("nav");
  target.insertAdjacentHTML("beforeend", template);
  const div = document.querySelector(".change-theme");
  div.addEventListener("click", () => {
    randomColor();
  });
};
