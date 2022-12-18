import React, { useState, useRef, useEffect } from 'react';
import { Table, Search, List } from '../components';
import useFetch from '../hooks/useFetch';
import endpoints from '../api/endpoints/endpoints';

const defaultPokemon = 'pikachu';
const Homepage: React.FC = () => {
  const searchRef = useRef<any>(null);
  const [search, setSearch] = useState<string>(defaultPokemon);
  const [pages, setPages] = useState<{ next: string, previous: string } | null>(null);
  const [pokemonsEndpoint, setPokemonsEndpoint] = useState<string>(endpoints.getPokemons(30, 0));
  const { data: pokemon, isLoading, isError } = useFetch(endpoints.getPokemonByName(search));
  const { data: pokemons } = useFetch(pokemonsEndpoint);

  useEffect(() => {
    if (!pokemons) return;
    const { next, previous } = pokemons;
    setPages({
      next, previous
    })
  }, [pokemonsEndpoint, pokemons]);

  const handleFetch = () => {
    if (!searchRef.current) return;
    setSearch(searchRef?.current.value.toLowerCase());
  }

  return (
    <>
      <List pokemons={pokemons?.results ?? []} handleClick={setSearch} pages={pages} setPokemonsEndpoint={setPokemonsEndpoint} />
      <Search searchRef={searchRef} handleClick={handleFetch} />
      <Table data={pokemon} isLoading={isLoading} isError={isError} />
    </>
  );
}

export default Homepage;