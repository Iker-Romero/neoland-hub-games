export const hub = () => {
  const greeting = `
  <h1>¡Bienvenido 👋 ${localStorage.name}!</h1>
  `;
  let gamesDiv = document.createElement("div");
  gamesDiv.classList.add("games-div");
  gamesDiv = `
  <div class="game">
    <p>3 en Raya</p>
  </div>
  `;
  const app = document.querySelector("#app");
  app.innerHTML += `
  ${greeting}
  ${gamesDiv}
  `;
};
