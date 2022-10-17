export const pokeAPI = () => {
  const template = `
  <main>
    <h1>POKE API</h1>
  </main>
  `;

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);
};
