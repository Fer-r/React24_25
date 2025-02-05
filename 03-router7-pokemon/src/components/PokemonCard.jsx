import React from "react";
import { usePokemon } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";
const PokemonCard = (props) => {
  const { pokemon } = props;
  const { addToFavorites } = usePokemon();
  return (
    <div className=" bg-white rounded-xl p-6 hover:shadow-sm">
      <div className="relative group">
        <img
          className="mx-auto w-16"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <h2 className="text-xl font-bold text-center mt-4">{pokemon.name}</h2>
        <div className="flex justify-center space-x-2 mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-slate-900"
            onClick={() => addToFavorites(pokemon)}
          >
            Añadir a favoritos
          </button>
          {/* voy a ir a ver los detalles usando elementos de react router */}
          <Link
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-slate-900"
            to={`${ROUTES.SEARCH}/${pokemon.name}`}
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
