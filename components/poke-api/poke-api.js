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

        const typesDiv = document.querySelector(".types")
        types.forEach((slot) => {
          const {type} = slot
          typesDiv.insertAdjacentHTML("afterbegin", type);
        })
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
