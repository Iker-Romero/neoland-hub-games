export const insertPokemons = (pokemons) => {
  const template = `
      <main>
        <h1>POKE API</h1>
        <fieldset class="types-filter">
          <legend>Filter by main type: </legend>
        
        </fieldset>
        <div class="pokemons-container">
        
        </div>
      </main>
      `;

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);

  const typesColors = {
    bug: "#ABB842",
    dark: "#6C594A",
    dragon: "#6D48D2",
    electric: "F2D153",
    fairy: "#ECA4DD",
    fight: "#85372D",
    fire: "#DE5C3D",
    flying: "#A491EA",
    ghost: "#6C5994",
    grass: "#8BC660",
    ground: "#DBC174",
    ice: "#A6D6D7",
    normal: "#A8A87D",
    poison: "#97489C",
    psychic: "#E66388",
    rock: "#B4A14A",
    shadow: "#3E3345",
    steel: "#B8B8CE",
    uknown: "#B8B8CE",
    water: "#708FE9",
  };

  const pokemonsContainer = document.querySelector(".pokemons-container");

  // FILTER
  const typesFilter = document.querySelector(".types-filter");

  for (const type in typesColors) {
    const template = `
      <label for="${type}">
        <input type="checkbox" value="${type}" id="${type}" class="type-checkbox" />
        ${type.toUpperCase()}
      </label>
    `;
    
    typesFilter.insertAdjacentHTML("beforeend", template);

    console.log(typesFilter.lastElementChild)

    typesFilter.lastElementChild.addEventListener("click", (event) => {

      console.log("HOLA")

      const pokemonsByType = pokemons.filter((pokemon) => {
        return pokemon.types[0] === event.target.value;
      });
      pokemonsContainer.remove();
      insertPokemons(pokemonsByType);
    });
  }

  pokemons.forEach(async (pokemon, i) => {
    const figure = `
          <figure style="background-color:${typesColors[pokemon.types[0]]};">
            <figcaption>${pokemon.name.toUpperCase()}</figcaption>
            <div class="image-container">
              <img src="${
                pokemon.defaultImg
              }" alt="Default pokemon image" class="default-image">
            </div>
            <div class="types">

            </div>
          </figure>
          `;

    pokemonsContainer.insertAdjacentHTML("beforeend", figure);

    if (pokemon.shinyImg) {
      const defaultContainer = document.querySelectorAll(".image-container")[i];

      defaultContainer.insertAdjacentHTML(
        "beforeend",
        `
        <img src="https://res.cloudinary.com/dvwva99mi/image/upload/v1666083956/neoland-hub-games/POKE%20API/shiny_s9opj1.png" alt="Shiny icon" class="shiny-icon">
        <img src="${pokemon.shinyImg}" alt="Shiny pokemon image" class="shiny-image hidde-shiny">
        `
      );

      // SHOW/HIDDE SHINY
      const shinyIcon = document.querySelectorAll(".shiny-icon")[i];
      const shinyImage = document.querySelectorAll(".shiny-image")[i];
      const defaultImage = document.querySelectorAll(".default-image")[i];
      shinyIcon.addEventListener("click", () => {
        defaultImage.classList.toggle("hidde-shiny");
        shinyImage.classList.toggle("hidde-shiny");
      });
    }

    const typesDiv = document.querySelectorAll(".types")[i];

    pokemon.types.forEach((type) => {
      const template = `
          <p style="background-color:${
            typesColors[type]
          };">${type.toUpperCase()}</p>
          `;

      typesDiv.insertAdjacentHTML("beforeend", template);
    });
  });
};
