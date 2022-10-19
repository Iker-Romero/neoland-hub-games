import { filterByType } from "./filter-by-type";
import { pokemonLayout } from "./pokemon-layout";
import { search } from "./search";
import { transformPokemons } from "./transform-pokemons";

export const pokeApiInit = () => {
  pokemonLayout();
  filterByType();
  search();
  transformPokemons();
};
