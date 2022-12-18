import React from 'react';
import { Result } from '../api/interfaces/Pokemons';

type ListProps = {
  pokemons: Result[]
}

const List: React.FC<ListProps> = ({ pokemons }) => {
  return (
    <ul>
      {pokemons.map(({ name }) => <li>{name}</li>)}
    </ul>
  );
}

export default List;
