import { getData } from "../../services/sevices";

export const pokeAPI = async () => {
  try {
    const template = `
      <main>
        <h1>POKE API</h1>
      </main>
      `;

    const target = document.querySelector("header");
    target.insertAdjacentHTML("afterend", template);

    const pokemonsIndex = await getData(
      "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );

    pokemonsIndex.results.forEach(async (pokemonEntrance) => {
      try {
        const pokemonURL = pokemonEntrance.url;
        const pokemon = await getData(pokemonURL);
        const figure = `
          <figure>
            <figcaption>${name}</figcaption>
            <img src="${defaultIMG}" alt="Default pokemon image" class="default-image">
            <img src="${shinyIMG}" alt="Shiny pokemon image" class="shiny-image">
            <div class="types">

            </div>
          </figure>
          `;
        const {
          name,
          sprites: {
            other: {
              home: { front_default: defaultIMG, front_hiny: shinyIMG },
            },
          },
          // types.forEach((type) => {
          // }):
          types,
        } = pokemon;

        typesColors = {
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

        const typesDiv = document.querySelector(".types");
        types.forEach((slot) => {
          const { type } = slot;
          typesDiv.insertAdjacentHTML(
            "afterbegin",
            `
            <p>${type}</p>
            `
          );
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
