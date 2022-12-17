import { Pokemon } from "../interfaces/Pokemon";

const pokemonAdapter = (pokemon: Pokemon): PokemonAdaptedInterface => {
  const {
    sprites: {
      front_default
    },
    species: {
      name
    },
    moves,
    types,
    id
  } = pokemon;

  return ({
    img: front_default,
    name,
    id,
    moves: moves.map(({ move }) => move.name),
    types: types.map(({ type }) => type.name),
  })
}

export interface PokemonAdaptedInterface {
  img: string,
  name: string,
  id: number,
  moves: string[],
  types: string[]
}

export default pokemonAdapter;