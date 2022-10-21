import { disorder } from "./disorder-test";
import { saveAnswer } from "./save-answer";

export const printQuestion = (test, disorderedTest, i) => {
  const question = disorderedTest[i].question;

  const template = `
      <section class="exercise-section">
        <h2 class="question">${question}</h2>
        <div class="answers-container">
          <ol>
          
          </ol>
        </div>
      </section>
    `;

  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", template);

  const ol = document.querySelector("ol");

  // Desordenar opciones de respuesta
  const disorderedAnswers = disorder(disorderedTest[i].answers);

  disorderedAnswers.forEach((answer) => {
    const option = `
        <li>- ${answer}</li>
      `;

    ol.insertAdjacentHTML("beforeend", option);
  });

  saveAnswer(test, disorderedTest, i);
};
