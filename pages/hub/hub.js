import { matchingPairs } from "../matching-pairs/matching-pairs";
import { pokeApiInit } from "../poke-api/poke-api-init";
import { ticTacToe } from "../tic-tac-toe/tic-tac-toe";
import { whakaTopo } from "../whaka-topo/whaka-topo";
import { quizRide } from "../quiz-ride/quiz-ride";

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
        <p>🔨Whaka-topo🔨</p>
      </div>
      <div class="game">
        <p>🚗 Quiz Ride 🐎</p>
      </div>
    </div>
  </main>
  `;
  // <div class="game">
  //   <p>🍉 Memory: Matching Pairs 👨‍🤝‍👩</p>
  // </div>

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);

  // Array of functions for the scalability of games
  const gamesComponents = [ticTacToe, pokeApiInit, whakaTopo, quizRide];
  // matchingPairs

  const games = document.querySelectorAll(".game");
  games.forEach((game, i) => {
    game.addEventListener("click", () => {
      document.querySelector("main").remove();
      gamesComponents[i]();
    });
  });
};
