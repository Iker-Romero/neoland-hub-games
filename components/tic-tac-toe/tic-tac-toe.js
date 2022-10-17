export const ticTacToe = () => {
  const template = `
  <main>
    <h1>⭕ 3 EN RAYA ❌</h1>
    <table class="squares-container">
      <tbody>
        <tr>
          <td class="square"></td>
          <td class="square"></td>
          <td class="square"></td>
        </tr>
        <tr>
          <td class="square"></td>
          <td class="square"></td>
          <td class="square"></td>
        </tr>
        <tr>
          <td class="square"></td>
          <td class="square"></td>
          <td class="square"></td>
        </tr>
      </tbody>
    </table>
  </main>
  `;

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);

  const squaresNodeList = document.querySelectorAll(".square");

  let userMoves = 3;

  squaresNodeList.forEach((square) => {
    square.addEventListener("click", () => {
      if (userMoves > 0) {
        if (square.innerHTML === "") {
          square.innerHTML = "⭕";
          userMoves--;

          // Delay para darle tiempo a la casilla de rellenarse antes del alert() de victoria
          setTimeout(() => {
            if (userMoves === 0 && winCheck("⭕") === true) {
              alert("¡ENHORABUENA HAS GANADO!");

              document.querySelector("main").remove();

              ticTacToe();
            } else {
              computerMove();
            }
          }, 100);
        } else {
          alert("Esta casilla ya está ocupada.");
        }
      } else if (square.innerHTML === "⭕") {
        square.innerHTML = "";
        userMoves++;
      } else {
        alert(
          "No te quedan fichas, escoge una que ya hayas colocado para recuperarla."
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

      computerMoves--;

      // Delay para darle tiempo a la casilla de rellenarse antes del alert() de victoria
      setTimeout(() => {
        if (computerMoves === 0 && winCheck("❌") === true) {
          alert("El rival ha ganado.");

          document.querySelector("main").remove();

          ticTacToe();
        }
      }, 100);
    } else {
      const ownSquares = squares.filter((square) => {
        return square.innerHTML === "❌";
      });

      const takeRandom =
        ownSquares[Math.floor(Math.random() * ownSquares.length)];
      takeRandom.innerHTML = "";

      computerMoves++;
      computerMove();
    }
  };

  const winCheck = (player) => {
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
      if (situation.toString() === combination.toString()) {
        winner = true;
      }
    });

    return winner;
  };
};
