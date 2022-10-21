export const template = () => {
  const template = `
    <main>
      <h1>🪢 Hang Man 🪢</h1>
      <div class="game-container">
        <section class="info-side">

        </sectin>
        <section class="interactive-side">
        
        </sectin>
      </div>
    </main>
  `;

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterend", template);
}