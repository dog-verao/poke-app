import { useQueries } from 'react-query';
import React, { useState, useRef } from 'react';
import { Table, Search } from '../components';
import useGetPokemonByName from "../hooks/useGetPokemonByName";
import useGetPokemons from '../hooks/useGetPokemons';


const Homepage = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>('pikachu');
  const { data, isLoading, isError } = useGetPokemonByName(search);

  const handleFetch = () => {
    if (!searchRef.current) return;
    setSearch(searchRef?.current.value.toLowerCase());
  }

  return (
    <>
      <Search searchRef={searchRef} handleClick={handleFetch} />
      <Table data={data} isLoading={isLoading} isError={isError} />
    </>
  );
}

export default Homepage;