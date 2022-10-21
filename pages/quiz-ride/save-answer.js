import { printQuestion } from "./print-question";
import { userAnswers } from "./quiz-neo";

export const saveAnswer = (test, disorderedTest, i) => {
  // let questionIndex = start;

  const options = document.querySelectorAll("li");

  // const userAnswers = [];

  const exerciseSection = document.querySelector(".exercise-section");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      console.log(test)
      console.log(i)
      // The first answer of the API is the correct.
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

        // return userAnswers;
      }
    });
  });
};
