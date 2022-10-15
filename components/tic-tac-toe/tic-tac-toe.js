export const ticTacToe = () => {
  const layout = `
  <main>
    <h1>⭕ 3 EN RAYA ❌</h1>
    <div class="squares-container">
      <div class="square" id="square1"></div>
      <div class="square" id="square2"></div>
      <div class="square" id="square3"></div>
      <div class="square" id="square4"></div>
      <div class="square" id="square5"></div>
      <div class="square" id="square6"></div>
      <div class="square" id="square7"></div>
      <div class="square" id="square8"></div>
      <div class="square" id="square9"></div>
    </div>
  </main>
  `
  const target = document.querySelector(".change-theme");
  target.insertAdjacentHTML("afterend", layout);
}