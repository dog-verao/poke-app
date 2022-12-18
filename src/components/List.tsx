import React from 'react';
import { Result } from '../api/interfaces/Pokemons';

type ListProps = {
  pokemons: Result[],
  handleClick: (name: any) => void,
  setPokemonsEndpoint: (endpoint: string) => void
  pages?: {
    next: string,
    previous: string
  } | null
}

const List: React.FC<ListProps> = ({ pokemons, handleClick, pages, setPokemonsEndpoint }) => {

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
      <div className="flex justify-around">
        {pages?.next && (
          <button
            className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setPokemonsEndpoint(pages.next)}>
            Next
          </button>
        )}
        {pages?.previous && (
          <button
            className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setPokemonsEndpoint(pages.previous)}>Previous</button>
        )}
      </div>
    </>
  );
}

export default List;
