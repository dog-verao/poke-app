import React from "react";
import { PokemonAdaptedInterface } from "../api/adapters/pokemonAdapter";
import PokemonAvatar from './PokemonAvatar';
import PokemonMoves from './PokemonMoves';

type TableRowProps = {
  pokemon: PokemonAdaptedInterface
}

const TableRow: React.FC<TableRowProps> = ({ pokemon }) => {
  const { img, name, moves, types } = pokemon;
  return (
    <tr className="bg-gray-100 border-b">
      <td className="px-6 py-4 whitespace-nowrap w-1/6 border-r-2">
        <PokemonAvatar avatar={img} name={name} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap w-1/6 border-r-2 text-black text-lg font-bold">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap w-3/6 border-r-2">
        <PokemonMoves moves={moves} />
      </td>
      <td className="w-1/6">
        {types?.map((type, i) => (
          <span
            className={`px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max active:bg-gray-300 transition duration-300 ease mx-auto my-0`}
            key={`type-${i}`}>
            {type}
          </span>
        ))}
      </td>
    </tr>
  );
}

export default TableRow;