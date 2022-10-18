import { pokemonLayout } from "./pokemon-layout";
import { transformPokemons } from "./transform-pokemons"

export const pokeApiInit = () => {
  pokemonLayout();
  transformPokemons();
}