import { label } from "./label";
import { letterInput } from "./letter-input";
import { lettersDisplay } from "./letters-display";
import { submitButton } from "./submit-button";

export const gameTemplate = (wordLetters) => {
  const chooseWord = document.querySelector(".choose-word");
  chooseWord.remove();
  
  const template = `
    <div class="game-container">
      <section class="tries-section">

      </sectin>
      <section class="guess-section">
        ${lettersDisplay(wordLetters)}
        ${label("letterInput", "Escoge una letra: ")}
        ${letterInput("letterInput")}
        ${submitButton("submitLetter")}
      </sectin>
    </div>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", template);
}