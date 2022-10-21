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

    disorderTest();

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

      const ol = document.querySelector("ol");

      const disorderAnswers = () => {
        const disorderedAnswers = [];

        while (disorderedAnswers.length <= test.answers.length) {
          const random = Math.floor(Math.random() * test.answers.length);
          disorderedAnswers.push(test.answers[random]);
          test.answers.splice(random, 1);
        }
      };

      disorderedTest[i].answers.forEach((answer) => {
        const option = `
          <li>${i + 1}- ${answer}</li>
        `;

        ol.insertAdjacentHTML("beforeend", option);
      });

      const saveAnswer = () => {
        const options = document.querySelectorAll("li");

        const userAnswers = [];

        options.forEach((option) => {
          option.addEventListener("click", () => {
            // The first answer of the API is the correct.
            if (option.innerHTML === test[i].answers[0]) {
              userAnswers.push("correct");
            } else {
              userAnswers.push("incorrect");
            }
            
            if (i < test.length - 1) {
              printQuestion(i + 1);
            } else {
              // SHOW RESULTS AND ALLOW TO REPEAT
            }
          });
        });
      };
    };
  } catch (error) {
    console.log(error);
  }
};
