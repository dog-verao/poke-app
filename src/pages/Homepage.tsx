import React, { useState, useRef } from 'react';
import { Table, Search } from '../components';
import useFetch from '../hooks/useFetch';
import endpoints from '../api/endpoints/endpoints';

const Homepage: React.FC = () => {
  const searchRef = useRef<any>(null);
  const [search, setSearch] = useState<string>('pikachu');
  const { data, isLoading, isError } = useFetch(endpoints.getPokemonByName(search));

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