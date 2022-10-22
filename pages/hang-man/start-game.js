import { checkLetters } from "./check-letters";
import { gameTemplate } from "./game-template";

export const startGame = () => {
  const input = document.querySelector("#wordInput");
  const secretWord = input.value;
  const wordLetters = [...secretWord];
  let attempts = 3;

  gameTemplate(wordLetters, attempts);

  checkLetters(wordLetters, attempts);
};
