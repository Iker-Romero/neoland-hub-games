export const whakaTopo = () => {
  const holesGrid = `
    <div class="holes-grid" >
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
      <div class="hole"></div>
    </div>
  `;

  const template = `
  <main class="whaka-topo">
    <h1>🔨 Whaka-topo 🔨</h1>
    ${holesGrid}
    <div class="score-div">
      <p>Score: <span class="score-count">0</span></p>
      <button>Reset</button>
    </div>
  </main>
  `;

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterend", template);

  const topo = "🙉";

  let score = 0;

  let count = document.querySelector(".score-count");
  console.log(count);

  const limit = 1000;

  let calls = 0;

  const randomHole = (i) => {
    if (calls >= limit) {
      return;
    } else {
      calls++;

      const toRemove = document.querySelector(".holes-grid");
      toRemove.remove();

      const h1 = document.querySelector("h1");
      h1.insertAdjacentHTML("afterend", holesGrid);

      const holes = Array.from(document.querySelectorAll(".hole"));

      // console.log(holes)

      // Descarta última casilla elegida
      if (typeof i === "number") {
        holes.splice(i, 1);
      }

      const hole = holes[Math.floor(Math.random() * 12)];

      // console.log(hole);

      hole.insertAdjacentHTML("beforeend", topo);

      hole.addEventListener("click", () => {
        console.log("click");

        score++;

        count.innerHTML = score;

        const toRemove = document.querySelector(".holes-grid");
        toRemove.remove();

        // const h1 = document.querySelector("h1");
        h1.insertAdjacentHTML("afterend", holesGrid);

        // setTimeout(() => {
        //   randomHole(i);
        // }, 1000);
      });

      count.innerHTML = score;
      console.log(count);
    }
  };

  const moleInterval = setInterval(() => {
    randomHole();
  }, 800);

  // Stop trigger to avoid mole game from executing in the background in the next games
  const hubButton = document.querySelector(".hub-button");
  hubButton.addEventListener("click", () => {
    clearInterval(moleInterval);
  });
};
