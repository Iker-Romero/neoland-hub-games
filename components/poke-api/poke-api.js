import { getData } from "../../services/sevices";

export const pokeAPI = () => {
  const template = `
  <main>
    <h1>POKE API</h1>
  </main>
  `;

  const target = document.querySelector("header");
  target.insertAdjacentHTML("afterend", template);

  const pokemonsIndex = getData(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
  );

  pokemonsIndex.results.forEach((pokemonEntrance) => {
    const pokemonURL = pokemonEntrance.url;
  });
};
