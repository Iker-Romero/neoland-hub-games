export const insertPokemons = (array) => {
  const template = `
      <main>
        <h1>POKE API</h1>
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

  array.forEach(async (pokemon, i) => {
    const figure = `
          <figure style="background-color:${typesColors[pokemon.types[0]]};">
            <figcaption>${pokemon.name.toUpperCase()}</figcaption>
            <div class="image-container">
              <img src="https://res.cloudinary.com/dvwva99mi/image/upload/v1666083956/neoland-hub-games/POKE%20API/shiny_s9opj1.png" alt="Shiny icon" class="shiny-icon">
              <img src="${pokemon.defaultImg}" alt="Default pokemon image" class="default-image">
            </div>
            <div class="types">

            </div>
          </figure>
          `;

    const pokemonsContainer = document.querySelector(".pokemons-container");
    pokemonsContainer.insertAdjacentHTML("beforeend", figure);

    if (pokemon.shinyImg) {
      const defaultContainer =
        document.querySelectorAll(".image-container")[i];

      defaultContainer.insertAdjacentHTML(
        "beforeend",
        `
        <img src="${pokemon.shinyImg}" alt="Shiny pokemon image" class="shiny-image">
        `
      );
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
