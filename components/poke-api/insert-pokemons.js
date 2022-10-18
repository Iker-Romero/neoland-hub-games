import { typesColors } from "../../utilities/pokemon-types-colors";

export const insertPokemons = (pokemons) => {
  const pokemonsContainer = document.createElement("div");
  pokemonsContainer.classList.add("pokemons-container");
  // const template = `<div class="pokemons-container"></div>`;
  const main = document.querySelector("main");
  main.appendChild(pokemonsContainer)
  // const pokemonsContainer = document.querySelector(".pokemons-container");

  pokemons.forEach((pokemon, i) => {
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

    pokemonsContainer.insertAdjacentHTML("beforeend", figure)

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
