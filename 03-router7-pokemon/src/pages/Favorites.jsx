import React from "react";
import { usePokemon } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Favorites = () => {
  const { favorites, removeFromFavorites } = usePokemon();
  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          No hay pokemons en favoritos
        </h1>
        <Link
          to={ROUTES.HOME}
          className="text-blue-500 hover:underline block mt-4"
        >
          Volver al Inicio
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Pokemons Favoritos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white rounded-xl p-6 hover:shadow-sm
             tansform hover:scale-105 transition duration-300
             "
            >
              <div className="relative group">
                <img
                  className="mx-auto w-32 h-32"
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                />
                <h2 className="text-xl font-bold text-center mt-4">
                  {pokemon.name}
                </h2>
                <div className="flex justify-center space-x-2 mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-slate-900 "
                    onClick={() => {
                      removeFromFavorites(pokemon.id);
                    }}
                  >
                    Eliminar de favoritos
                  </button>
                  <Link
                    className="bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-slate-900 "
                    to={`${ROUTES.SEARCH}/${pokemon.name}`}
                  >
                    Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
