export const pokemonLayout = () => {
  const template = `
      <main>
        <h1>POKE API</h1>
        <fieldset class="types-filter">
          <legend>Filter by main type: </legend>
        
        </fieldset>
      </main>
      `;

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterend", template);
}