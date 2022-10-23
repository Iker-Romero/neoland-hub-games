import { hub } from "../hub/hub";

export const login = () => {
  const template = `
    <main class="login">
      <h1>NEOLAND HUB-GAMES</h1>
      <label for="name">Introduce tu nombre:</label>
      <input type="text" autocomplete="off" id="name">
      <button id="submitName">👍</button>
    </main>
    `;

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);

  const input = document.querySelector("#name");
  const button = document.querySelector("#submitName");

  button.addEventListener("click", () => {
    if (input.value.match(/^[A-Za-z]+$/)) {
      localStorage.setItem("name", input.value.trim());
      document.querySelector(".login").remove();
      hub();
    } else {
      alert("Introduce un nombre de usuario válido.");
    }
  });
};
