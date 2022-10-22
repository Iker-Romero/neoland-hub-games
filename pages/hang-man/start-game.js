import { submitButton } from "./submit-button";
import { wordInput } from "./word-input";

export const startGame = () => {
  const input = document.querySelector("#wordInput");
  const secretWord = input.value;

  const chooseWord = document.querySelector(".choose-word");
  chooseWord.remove();
  
  const template = `
    <div class="game-container">
      <section class="info-side">

      </sectin>
      <section class="interactive-side">
        ${wordInput("letterInput")}
        ${submitButton("submitLetter")}
      </sectin>
    </div>
  `;
  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", template);



}