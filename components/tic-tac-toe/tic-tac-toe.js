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
  `
  const target = document.querySelector("nav");
  target.insertAdjacentHTML("afterend", template);
}