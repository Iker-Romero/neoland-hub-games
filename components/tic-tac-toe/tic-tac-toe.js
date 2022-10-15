export const ticTacToe = () => {
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

  const squaresNodeList = document.querySelectorAll(".square");

  let userMoves = 3;

  squaresNodeList.forEach((square) => {
    square.addEventListener("click", () => {

      console.log(userMoves)

      if (square.innerHTML === "⭕" && userMoves === 0) {
        square.innerHTML = "";
        userMoves++;
      } else if (userMoves > 0) {
        if (square.innerHTML === "") {
          square.innerHTML = "⭕";
          userMoves--;
          computerMove();
          if (winCheck("⭕")  === true) {
            alert("¡ENHORABUENA HAS GANADO!");
          }
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

  let computerMoves = 3;

  // Convertimos el nodeList a un array iterable, para que no solo lo sea con forEach() y poder usar el metodo filter()
  const squares = Array.from(squaresNodeList);

  const computerMove = () => {
    if (computerMoves > 0) {
      const availableSquares = squares.filter((square) => {
        return square.innerHTML === "";
      });
      const randomSquare =
        availableSquares[Math.floor(Math.random() * availableSquares.length)];
      randomSquare.innerHTML = "❌";
    } else if (winCheck("❌")) {
      alert("El rival ha ganado.");
    } else {
      const ownSquares = squares.filter((square) => {
        return square.innerHTML === "❌";
      })
      const takeRandom = ownSquares[Math.floor(Math.random() * ownSquares.length)];
      takeRandom.innerHTML = "";
      computerMoves++;
    }
  };

  const winCheck = (player) => {
    console.log("WINCHECK");

    const combinations = [
      [1, 1, 1,
      0, 0, 0,
      0, 0, 0],
      [0, 0, 0,
      1, 1, 1,
      0, 0, 0],
      [0, 0, 0,
      0, 0, 0,
      1, 1, 1],
      [1, 0, 0,
      1, 0, 0,
      1, 0, 0],
      [0, 1, 0,
      0, 1, 0,
      0, 1, 0],
      [0, 0, 1,
      0, 0, 1,
      0, 0, 1],
      [1, 0, 0,
      0, 1, 0,
      0, 0, 1],
      [0, 0, 1,
      0, 1, 0,
      1, 0, 0]
    ];

    const situation = squares.map((square) => {
      if (square.innerHTML === player) {
        return 1;
      } else {
        return 0;
      }
    });

    let winner;

    combinations.forEach((combination) => {
      
      console.log(situation)
      console.log(combination)

      console.log(situation === combination)

      if (situation === combination) {
        console.log("winner");
        winner = true;
      }
    });
    return winner;
  }
};
