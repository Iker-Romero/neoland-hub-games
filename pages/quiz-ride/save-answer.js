import { printQuestion } from "./print-question";
import { showResult } from "./result";

export const userAnswers = [];

export const saveAnswer = (test, disorderedTest, i) => {
  const options = document.querySelectorAll("li");

  const exerciseSection = document.querySelector(".exercise-section");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      // The first answer of the API is the correct.
      console.log(option.innerHTML)
      console.log(test[i].answers[0])
      if (option.innerHTML === test[i].answers[0]) {
        userAnswers.push("correct");
      } else {
        userAnswers.push("incorrect");
      }

      if (i < disorderedTest.length - 1) {
        exerciseSection.remove();
        i++;
        printQuestion(test, disorderedTest, i);
      } else {
        exerciseSection.remove();

        showResult(test, disorderedTest);
      }
    });
  });
};
