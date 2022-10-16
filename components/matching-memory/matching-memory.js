export const matchingMemory = () => {
  const template = `
  <main class="memory">
    <h1>🍉 Memory: Matching Pairs 👨‍🤝‍👩</h1>
    <p>Click and find pair </p>
    <div class="pairs-container">

    </div>
  </main>
  `;

  const target = document.querySelector("nav");
  target.insertAdjacentHTML("afterend", template);

  const insertSquares = () => {
    const fruits = ["🥝", "🥥", "🍇", "🍉", "🍓", "🍑"]
    const pairsContainer = document.querySelector(".pairs-container");
    fruits.forEach()
  }

};
