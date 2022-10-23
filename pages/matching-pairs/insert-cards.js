import { insertFruits } from "./insert-fruits";

export const insertCards = (randomFruits, n) => {
  const pairsContainer = document.querySelector(".pairs-container");

  const paired = [];
  let pairing = false;
  let fruit;
  let fruitID;

  for (let i = 1; i <= n; i++) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = "❓";
    div.id = i;

    div.addEventListener("click", () => {
      if (div.innerHTML === "❓") {
        insertFruits(randomFruits, i);

        if (!pairing) {
          fruit = randomFruits[i - 1];
          fruitID = div.id;
          pairing = true;
        } else if (div.innerHTML === fruit && div.id !== fruitID) {
          paired.push(fruitID);

          pairing = false;

          setTimeout(() => {
            paired.length === n / 2 && alert("YOU WON!");
          }, 100);
        } else {
          setTimeout(() => {
            document.getElementById(fruitID).innerHTML = "❓";
            div.innerHTML = "❓";
          }, 1000);

          pairing = false;
        }
      } else {
        alert("Select a card that is face down.");
      }
    });

    pairsContainer.appendChild(div);
  }
};
