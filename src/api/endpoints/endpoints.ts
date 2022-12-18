const BASE_URL_API = 'https://pokeapi.co/api/v2';

const endpoints = Object.freeze({
  getPokemonByName: (name: string) => `${BASE_URL_API}/pokemon/${name}`,
  getPokemons: (limit = 30, offset = 0) => `${BASE_URL_API}/pokemon?limit=${limit}&offset=${offset}`
});

export default endpoints;
