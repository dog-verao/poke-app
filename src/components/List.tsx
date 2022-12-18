import React from 'react';
import { Result } from '../api/interfaces/Pokemons';

type ListProps = {
  pokemons: Result[],
  handleClick: (name: any) => void
}

const List: React.FC<ListProps> = ({ pokemons, handleClick }) => {

  return (
    <>
      <h2 className="text-2xl font-bold">Most Searched:</h2>
      <ul className="flex flex-wrap justify-around">
        {pokemons.map(({ name }) => (
          <li
            onClick={() => handleClick(name)}
            className="px-4 py-2 cursor-pointer rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max active:bg-gray-300 transition duration-300 ease mx-2 my-2"
            key={name}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
