export const pokemonLayout = () => {
  // Add Loading Icon
  const loadingIcon = document.createElement("div");
  loadingIcon.classList.add("pokemon-loading");
  const app = document.querySelector("#app");
  app.appendChild(loadingIcon);

  const template = `
      <main>
        <h1>POKE API</h1>
        <div class="search-container">
          <label for="search-input">Search by name: </label>
        </div>
        <fieldset class="types-filter">
          <legend>Filter by main type: </legend>
          <div class="types-container">
          
          </div>
        </fieldset>
      </main>
      `;

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterend", template);
}