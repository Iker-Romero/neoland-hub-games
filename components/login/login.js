import { hub } from "../hub/hub";

export const login = () => {
  if (localStorage.name) {
    hub();
  } else {
    const app = document.querySelector("#app");
    app.insertAdjacentHTML(
      "beforeend",
      `
    <div class="login">
      <h1>NEOLAND HUB-GAMES</h1>
      <label for="name">Introduce tu nombre:</label>
      <input type="text" autocomplete="off" id="name">
      <button id="submitName">👍</button>
    </div>
    `
    );
    const input = document.querySelector("#name");
    const button = document.querySelector("#submitName");
    button.addEventListener("click", () => {
      if ((button.value !== "") === false && typeof input.value == "string") {
        localStorage.setItem("name", input.value.trim());
        document.querySelector(".login").remove();
        hub();
      } else {
        alert("Introduce un nombre de usuario válido.");
      }
    });
  }
};
