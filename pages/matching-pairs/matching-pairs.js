import { insertCards } from "./insert-cards";
import { disorder } from "../quiz-ride/disorder-test";
import { insertFruits } from "./insert-fruits";

export const matchingPairs = () => {
  const template = `
  <main class="memory">
    <h1>🍉 Memory: Matching Pairs 👨‍🤝‍👩</h1>
    <p>Click and find pair </p>
    <div class="pairs-container">

    </div>
  </main>
  `;

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);

  const fruits = ["🥝", "🥥", "🍇", "🍉", "🍓", "🍑"];
  const fruitsX2 = [...fruits, ...fruits];
  const n = fruitsX2.length;
  const randomFruits = disorder(fruitsX2);
  
  insertCards(randomFruits, n);
};
