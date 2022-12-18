import React from "react";
import pokemonAdapter from '../api/adapters/pokemonAdapter';
import { TableRow, TableHead, NotFound, Loading } from "./";
import { Pokemon } from "../api/interfaces/Pokemon";

type TableProps = {
  data: Pokemon;
  isLoading: boolean;
  isError?: boolean | null;
}

const Table: React.FC<TableProps> = ({ data, isLoading, isError }) => {
  const pokemon = data && pokemonAdapter(data);
  return (
    <>
      {
        !isLoading ? (
          <table className="min-w-full">
            <thead>
              <TableHead />
            </thead>
            <tbody className="bg-gray-100 border-b">
              {
                pokemon && <TableRow pokemon={pokemon} />
              }
            </tbody>
          </table>
        ) : (
          <Loading />
        )
      }
      {isError && <NotFound />}
    </>
  );
}

export default Table;