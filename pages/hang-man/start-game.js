import { checkLetters } from "./check-letters";
import { gameTemplate } from "./game-template";

export const startGame = () => {
  const input = document.querySelector("#wordInput");
  const secretWord = input.value;
  const wordLetters = [...secretWord];

  gameTemplate(wordLetters);

  checkLetters(wordLetters);
};
