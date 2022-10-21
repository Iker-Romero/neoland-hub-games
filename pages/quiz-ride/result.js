import { printQuestion } from "./print-question";
import { userAnswers } from "./save-answer";

let corrects = 0;
let incorrects = 0;

const countResult = () => {
  console.log(userAnswers)
  userAnswers.forEach((answer) => {
    answer === "correct" ? corrects++ : incorrects++;
  });
  console.log(corrects);
};



export const showResult = (test, disorderedTest) => {
  countResult();
  const template = `
  <section class="result-section">
    <h2>Resultado</h2>
    <div class="quiz-stats">
      <p>Fallos: ${incorrects}</p>
      <p>Aciertos: ${corrects}</p>
    </div>
    <button class="quiz-reset">Reiniciar</button>
  </section>
  `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", template);

  const resultSection = document.querySelector(".result-section");

  const quizReset = document.querySelector(".quiz-reset");
  quizReset.addEventListener("click", () => {
    resultSection.remove();
    printQuestion(test, disorderedTest, 0);
  });
};
