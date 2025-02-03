import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const PokemonDetail = () => {
  const pokemon = useLoaderData();
  // hook para navegar entre rutas (navegacion programatica)
  const navigate = useNavigate();
  const { addToFavorites } = usePokemon();

  return (
    <div className="container mx-auto p-4">
      <div className=" max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <button
          className="mb-4 text-blue-400 font-bold hover:text-blue-800"
          onClick={() => {
            navigate(-1);
          }}
        >
          Volver
        </button>
        {/* imagen del pokemon */}
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto"
        />
        <h1 className="text-3xl font-bold text-center mt-4">{pokemon.name}</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Estadisticas</h2>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                <p className="capitalize">
                  {stat.stat.name}:{stat.base_stat}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Tipos</h2>
            <div>
              {pokemon.types.map((type) => (
                <p key={type.type.name} className="capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>
          <button
            className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded font-bold hover:bg-slate-900 "
            onClick={() => {
              addToFavorites(pokemon);
            }}
          >
            Añadir a favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
