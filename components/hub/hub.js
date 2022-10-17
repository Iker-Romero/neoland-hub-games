import { matchingPairs } from "../matching-pairs/matching-pairs";
import { pokeAPI } from "../poke-api/poke-api";
import { ticTacToe } from "../tic-tac-toe/tic-tac-toe";

export const hub = () => {
  const template = `
  <main>
    <h1>¡Bienvenido/a 👋 ${localStorage.name}!</h1>
    <div class="games-container">
      <div class="game">
        <p>⭕ TIC-TAC-TOE ❌</p>
      </div>
      <div class="game">
        <p>POKE API</p>
      </div>
      <div class="game">
        <p>🍉 Memory: Matching Pairs 👨‍🤝‍👩</p>
      </div>
    </div>
  </main>
  `;

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);

  // Array of functions for the scalability of games
  const gamesComponents = [ticTacToe, pokeAPI, matchingPairs];

  const games = document.querySelectorAll(".game");
  games.forEach((game, i) => {
    game.addEventListener("click", () => {
      document.querySelector("main").remove();
      gamesComponents[i]();
    });
  });
};
