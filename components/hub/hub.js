export const hub = () => {

  const layout = `
  <h1>¡Bienvenido 👋 ${localStorage.name}!</h1>
  <div class="games-container">
    <div class="game">
      <p>3 en Raya</p>
    </div>  
  </div>
  `;

  const app = document.querySelector("#app");
  app.innerHTML += layout;

  const gamesComponents = [];
  const games = document.querySelectorAll(".game");
  games.forEach((game, i) => {
    game.addEventListener("click", () => {
      gamesComponents[i];
    });
  });
};
