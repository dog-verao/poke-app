export interface Pokemon {
  id: number;
  name: string;
  moves: Moves[];
  sprites: PokemonSprites;
  species: Species;
  types: PokemonTypes[];
};

type PokemonSprites = {
  front_default: string;
};

type Species = {
  name: string;
};

type Moves = {
  move: {
    name: string;
  };
};

type PokemonTypes = {
  type: {
    name: string;
  };
}