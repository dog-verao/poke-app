import React, { useState } from 'react';

type PokemonMovesProps = {
  moves: string[]
}

const PokemonMoves: React.FC<PokemonMovesProps> = ({ moves }) => {
  const [isOpen, setIsOpen] = useState(false);
  const firstMoves = [...moves].splice(0, 2);
  return (
    <div>
      {
        isOpen ? (
          <>
            <div className="overflow-auto h-[200px] flex flex-row flex-wrap justify-between">
              {moves.map((move, i) => (
                <span key={`move-${i}`} className="before:content-[' '] px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max active:bg-gray-300 transition duration-300 ease mx-auto my-1">{move}</span>
              ))}
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2 mx-auto"
              role="button"
              onClick={() => setIsOpen(false)}
            >
              See Less
            </button>
          </>
        ) :
          (
            <>
              {firstMoves.map((move, i) => (
                <p key={`move-${i}`} className="before:content-[' '] px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max active:bg-gray-300 transition duration-300 ease mx-auto my-1">{move}</p>
              ))}
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2 mx-auto"
                role="button"
                onClick={() => setIsOpen(true)}
              >
                See More
              </button>
            </>
          )
      }
    </div>
  );
}

export default PokemonMoves;