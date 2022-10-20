import { getData } from "../../services/sevices";

export const quizRide = async (url) => {
  try {
    const template = `
      <main>
        <h1>🚗 Quiz Ride 🐎</h1>
        
      </main>
    `;

    const header = document.querySelector("header");
    header.insertAdjacentHTML("afterend", template);

    const test = await getData(url).test;

    const disorderedTest = [];

    const disorderTest = () => {
      while (disorderedTest.length <= test.length) {
        const random = Math.floor(Math.random() * test.length);
        disorderedTest.push(test[random]);
        test.splice(random, 1);
      }
    };

    const printQuestion = (i) => {
      const question = disorderedTest[i].question;

      const template = `
        <section exercise-section>
          <h2 class="question">${question}</h2>
          <div class="answers-container">
            <ol>
            
            </ol>
          </div>
        </section>
        
      `;

      const main = document.querySelector("main");
      main.insertAdjacentHTML("beforeend", template);

      // const exerciseSection = document.querySelector(".exercise-section");

      const ol = document.querySelector("ol");

      disorderedTest[i].answers.forEach((answer) => {
        const option = `
          <li>${i + 1}- ${answer}</li>
        `;

        ol.insertAdjacentHTML("beforeend", option);
      });

      const option = document.querySelector
    };
  } catch (error) {
    console.log(error);
  }
};
