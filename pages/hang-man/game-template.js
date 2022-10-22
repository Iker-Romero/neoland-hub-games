import { label } from "./label";
import { letterInput } from "./letter-input";
import { lettersDisplay } from "./letters-display";
import { submitButton } from "./submit-button";

export const gameTemplate = (wordLetters, attempts) => {
  const chooseWord = document.querySelector(".choose-word");
  chooseWord.remove();
  
  const template = `
    <div class="game-container">
      <section class="attempts-section">
        <div class="hang-man-container">
          <img src="" alt="Hang Man Draw" class="hang-man-image" />
        </div>
        <p>Attempts remaining: <span class="remaining">${attempts}</span></p>
      </section>
      <section class="guess-section">
        ${lettersDisplay(wordLetters)}
        ${label("letterInput", "Escoge una letra: ")}
        <div>
          ${letterInput("letterInput")}
          ${submitButton("submitLetter")}
        </div>
      </section>
    </div>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", template);
}