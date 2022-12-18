export interface Pokemons {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Result>;
};

export type Result = {
  name: string;
  url: string;
};
