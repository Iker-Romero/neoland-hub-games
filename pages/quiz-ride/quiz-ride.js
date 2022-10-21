import { quizData } from "../../utilities/quiz-data";
import { disorder } from "./disorder-test";
import { printQuestion } from "./print-question";
import { quizTemplate } from "./template";

export const quizRide = () => {
  quizTemplate();

  const { test } = quizData;

  const disorderedTest = disorder(test);

  printQuestion(test, disorderedTest, 0);
};