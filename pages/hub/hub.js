import { matchingPairs } from "../matching-pairs/matching-pairs";
import { pokeApiInit } from "../poke-api/poke-api-init";
import { ticTacToe } from "../tic-tac-toe/tic-tac-toe";
import { whakaTopo } from "../whaka-topo/whaka-topo";
import { quizRide } from "../quiz-ride/quiz-ride";
import { hangMan } from "../hang-man/hang-man";
import { login } from "../login/login";

export const hub = () => {
  if (!localStorage.name) {
    login();
  } else {
    const template = `
    <main>
      <h1>Β‘Bienvenido/a π ${localStorage.name}!</h1>
      <div class="games-container">
        <div class="game">
          <p>β­ TIC-TAC-TOE β</p>
        </div>
        <div class="game">
          <p>POKE API</p>
        </div>
        <div class="game">
          <p>π¨ Whaka-mole π¨</p>
        </div>
        <div class="game">
          <p>π Quiz Ride π</p>
        </div>
        <div class="game">
          <p>πͺ’ Hang Man πͺ’</p>
        </div>
        <div class="game">
          <p>π Memory: Matching Pairs π¨βπ€βπ©</p>
        </div>
      </div>
    </main>
    `;

    const target = document.querySelector("header");
    target.insertAdjacentHTML("afterend", template);

    const gamesPages = [
      ticTacToe,
      pokeApiInit,
      whakaTopo,
      quizRide,
      hangMan,
      matchingPairs,
    ];

    const games = document.querySelectorAll(".game");
    games.forEach((game, i) => {
      game.addEventListener("click", () => {
        document.querySelector("main").remove();
        gamesPages[i]();
      });
    });
  }
};
