import { getData } from "../../services/sevices";
import { insertPokemons } from "./insert-pokemons";

export const pokemons = [];

export const transformPokemons = async () => {
  try {
    for (let i = 1; i <= 151; i++) {
      const pokemon = await getData(`https://pokeapi.co/api/v2/pokemon/${i}/`);

      const obj = {
        name: pokemon.name,
        defaultImg: pokemon.sprites.other.home["front_default"],
        shinyImg: pokemon.sprites.other.home["front_shiny"],
        types: [],
      };

      pokemon.types.forEach((slot) => {
        obj.types.push(slot.type.name);
      });

      pokemons.push(obj);
    }
    
    document.querySelector(".pokemon-loading").remove();

    insertPokemons(pokemons);
  } catch (error) {
    console.log(error);
  }
};
