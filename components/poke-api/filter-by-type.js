import { typesColors } from "../../utilities/pokemon-types-colors";
import { pokemons } from "./transform-pokemons";
import { insertPokemons } from "./insert-pokemons";

export const filterByType = () => {
  const typesFilter = document.querySelector(".types-filter");

  const selectedTypes = [];

  for (const type in typesColors) {
    const template = `
      <label for="${type}">
        <input type="checkbox" value="${type}" id="${type}" class="type-checkbox" />
        ${type.toUpperCase()}
      </label>
    `;

    typesFilter.insertAdjacentHTML("beforeend", template);

    typesFilter.lastElementChild.addEventListener("click", (event) => {
      const pokemonsContainer = document.querySelector(".pokemons-container");

      if (event.target.checked === true) {

        selectedTypes.push(event.target.value);

        // const pokemonsByType = pokemons.filter((pokemon) => {
        //   return pokemon.types[0] === event.target.value;
        // });
        const pokemonsByType = [];

        selectedTypes.forEach((selectedType) => {
          const add = pokemons.filter((pokemon) => {
            return pokemon.types[0] === selectedType;
          });
          pokemonsByType.push(...add)
        })



        pokemonsContainer.remove();
        // console.log(selectedTypes)
        insertPokemons(pokemonsByType);
      } else {
        console.log(selectedTypes)
        selectedTypes.slice(selectedTypes.indexOf(event.target.value), 1);
        console.log(selectedTypes)
        insertPokemons(pokemons);
      }
      console.log(selectedTypes)
    });
  }
};
