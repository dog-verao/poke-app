import React, { useState, useRef } from 'react';
import { Table, Search, List } from '../components';
import useFetch from '../hooks/useFetch';
import endpoints from '../api/endpoints/endpoints';

const Homepage: React.FC = () => {
  const searchRef = useRef<any>(null);
  const [search, setSearch] = useState<string>('pikachu');
  const { data: pokemon, isLoading, isError } = useFetch(endpoints.getPokemonByName(search));
  const { data: pokemons } = useFetch(endpoints.getPokemons(0, 30));

  const handleFetch = () => {
    if (!searchRef.current) return;
    setSearch(searchRef?.current.value.toLowerCase());
  }

  return (
    <>
      <List pokemons={pokemons?.results ?? []} handleClick={setSearch} />
      <Search searchRef={searchRef} handleClick={handleFetch} />
      <Table data={pokemon} isLoading={isLoading} isError={isError} />
    </>
  );
}

export default Homepage;