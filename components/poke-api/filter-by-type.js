import { typesColors } from "../../utilities/pokemon-types-colors";
import { pokemons } from "./transform-pokemons";
import { insertPokemons } from "./insert-pokemons";

export const filterByType = () => {
  const typesFilter = document.querySelector(".types-filter");

  const selectedTypes = [];

  const pokemonsByType = [];

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

        console.log(selectedTypes)


        selectedTypes.forEach((selectedType) => {
          const add = pokemons.filter((pokemon) => {
            return pokemon.types[0] === selectedType;
          });

          pokemonsByType.push(...add);
        });

        console.log(pokemonsByType)

        pokemonsContainer.remove();

        insertPokemons(pokemonsByType);
      } else {
        const pokemonsByType = [];
        
        selectedTypes.splice(selectedTypes.indexOf(event.target.value), 1);

        console.log(selectedTypes);

        selectedTypes.forEach((selectedType) => {
          const add = pokemons.filter((pokemon) => {
            return pokemon.types[0] === selectedType;
          });

          pokemonsByType.push(...add);
        });

        console.log(selectedTypes);

        pokemonsContainer.remove();

        insertPokemons(pokemonsByType);
      }
    });
  }
};
