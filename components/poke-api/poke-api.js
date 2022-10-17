import { getData } from "../../services/sevices";

export const pokeAPI = async () => {
  try {
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
      flying: "##A491EA",
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
      water: "#B8B8CE"
    };

    const pokemonsIndex = await getData(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );

    pokemonsIndex.results.forEach(async (pokemonEntrance, index) => {
      try {
        const pokemonURL = pokemonEntrance.url;
        const pokemon = await getData(pokemonURL);
        
        const {
          name,
          sprites: {
            other: {
              home: { front_default: defaultIMG, front_shiny: shinyIMG },
            },
          },
          // types.forEach((type) => {
          // }):
          types,
        } = pokemon;

        const figure = `
          <figure>
            <figcaption>${name.toUpperCase()}</figcaption>
            <div class="image-container">
              <img src="${defaultIMG}" alt="Default pokemon image" class="default-image">
            </div>
            <div class="types">

            </div>
          </figure>
          `;

        const pokemonsContainer = document.querySelector(".pokemons-container")
        pokemonsContainer.insertAdjacentHTML("beforeend", figure);

        if (shinyIMG) {
          const defaultContainer = document.querySelectorAll(".image-container")[index];
          
          defaultContainer.insertAdjacentHTML("afterend", `
          <img src="${shinyIMG}" alt="Shiny pokemon image" class="shiny-image">
          `);
        }

        const typesDiv = document.querySelectorAll(".types")[index];

        types.forEach((slot) => {
          const { type } = slot;

          const template = `
          <p style="background-color:${typesColors[type.name]};">${type.name.toUpperCase()}</p>
          `;

          typesDiv.insertAdjacentHTML("afterbegin", template);
        });

      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
