import React from "react";
import { PokemonAdaptedInterface } from "../api/adapters/pokemonAdapter";

import { TableRow, TableHead, NotFound, Loading } from "./";

type TableProps = {
  data: PokemonAdaptedInterface;
  isLoading: boolean;
  isError?: boolean | null;
}

const Table: React.FC<TableProps> = ({ data, isLoading, isError }) => {
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
                data && <TableRow pokemon={data} />
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