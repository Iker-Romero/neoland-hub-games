import { typesColors } from "../../utilities/pokemon-types-colors";
import { pokemons } from "./transform-pokemons";
import { insertPokemons } from "./insert-pokemons";

export const filterByType = () => {
  const typesFilter = document.querySelector(".types-filter");

  let selectedTypes = [];

  let pokemonsByType = [];

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

      if (event.target.checked) {
        pokemonsByType = [];
        
        selectedTypes.push(event.target.value);

        selectedTypes.forEach((selectedType) => {
          const add = pokemons.filter((pokemon) => {
            return pokemon.types[0] === selectedType;
          });

          pokemonsByType.push(...add);
        });

        pokemonsContainer.remove();

        insertPokemons(pokemonsByType);
      } else {
        const pokemonsByType = [];

        selectedTypes.splice(selectedTypes.indexOf(event.target.value), 1);

        if (selectedTypes.length === 0) {
          pokemonsContainer.remove();

          insertPokemons(pokemons);
        } else {
          selectedTypes.forEach((selectedType) => {
            const add = pokemons.filter((pokemon) => {
              return pokemon.types[0] === selectedType;
            });

            pokemonsByType.push(...add);
          });

          pokemonsContainer.remove();

          insertPokemons(pokemonsByType);
        }
      }
    });
  }
};
