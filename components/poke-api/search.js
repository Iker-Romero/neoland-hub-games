import { insertPokemons } from "./insert-pokemons";
import { pokemons } from "./transform-pokemons";

export const search = () => {
  const input = document.createElement("input");
  input.classList.add("search-input");

  const filter = document.querySelector(".types-filter");
  filter.appendChild(input);

  const selectInput = document.querySelector(".search-input");

  selectInput.addEventListener("input", () => {
    const match = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(input.value.toLowerCase());
    });

    const pokemonsContainer = document.querySelector(".pokemons-container");
    pokemonsContainer.remove();

    insertPokemons(match);
  });
};
