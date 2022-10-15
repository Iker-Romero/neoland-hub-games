export const ticTacToe = () => {
  // const template = `
  // <main>
  //   <h1>⭕ 3 EN RAYA ❌</h1>
  //   <div class="squares-container">
  //     <div class="square" id="square1"></div>
  //     <div class="square" id="square2"></div>
  //     <div class="square" id="square3"></div>
  //     <div class="square" id="square4"></div>
  //     <div class="square" id="square5"></div>
  //     <div class="square" id="square6"></div>
  //     <div class="square" id="square7"></div>
  //     <div class="square" id="square8"></div>
  //     <div class="square" id="square9"></div>
  //   </div>
  // </main>
  // `
  const template = `
  <main>
    <h1>⭕ 3 EN RAYA ❌</h1>
    <table class="squares-container">
      <tbody>
        <tr>
          <td class="square" id="square1"></td>
          <td class="square" id="square1"></td>
          <td class="square" id="square1"></td>
        </tr>
        <tr>
          <td class="square" id="square1"></td>
          <td class="square" id="square1"></td>
          <td class="square" id="square1"></td>
        </tr>
        <tr>
          <td class="square" id="square1"></td>
          <td class="square" id="square1"></td>
          <td class="square" id="square1"></td>
        </tr>
      </tbody>
    </table>
  </main>
  `;

  const target = document.querySelector("nav");
  target.insertAdjacentHTML("afterend", template);

  const squares = document.querySelectorAll(".square");

  let userMoves = 3;

  let computerMoves = 3;

  const computerMove = () => {
    const availableSquares = squares.filter((square) => {
      return square.innerHTML === "";
    });
    const randomSquare =
      availableSquares[Math.floor(Math.random() * availableSquares.length)];
    randomSquare.innerHTML = "❌";
  };

  squares.forEach((square) => {
    square.addEventListener("click", () => {
      console.log("FUNCIONANDO");
      if (square.innerHTML === "⭕") {
        square.innerHTML = "";
        userMoves++;
      } else if (userMoves > 0) {
        if (square.innerHTML === "") {
          square.innerHTML = "⭕";
          userMoves--;
        } else {
          alert("Esta casilla ya está ocupada.");
        }
      } else {
        alert(
          "Se han agotado las fichas, escoge una que ya hayas colocado para recuperarla."
        );
      }
    });
  });

  
};
