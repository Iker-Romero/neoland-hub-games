import { pokemonTypes } from "../../utilities/pokemon-types-colors";
import { pokemons } from "./transform-pokemons";
import { insertPokemons } from "./insert-pokemons";

export const filterByType = () => {
  const typesContainer = document.querySelector(".types-container");

  let selectedTypes = [];

  let pokemonsByType = [];

  for (const type in pokemonTypes) {
    const template = `
      <div class="type-div checkbox-unselected" style="background-color: ${pokemonTypes[type].color};">
        <img src="${pokemonTypes[type].icon}" alt="${type} icon" />
        <input type="checkbox" value="${type}" id="${type}" class="type-checkbox "/>
      </div>
    `;
    console.log(pokemonTypes[type].color);

    typesContainer.insertAdjacentHTML("beforeend", template);
  }

  const checkboxes = document.querySelectorAll(".type-checkbox");
  console.log(checkboxes);

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      const pokemonsContainer = document.querySelector(".pokemons-container");

      checkbox.parentElement.classList.toggle("checkbox-unselected");

      if (checkbox.checked) {
        pokemonsByType = [];

        selectedTypes.push(event.target.value);

        console.log(selectedTypes)

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
  });
};
