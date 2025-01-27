import React, { useEffect, useState } from "react";
import { NavLink, Router } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchPokemons();
  }, []);
  const fetchPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
      }
      const data = await response.json();
      // obtenemos los datos de los pokemons en paralelo
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemons(pokemonDetails);
      console.log(pokemons);
    } catch (error) {
      console.error("Error fetching Pokemons", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Pokemons Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white rounded-xl p-6 hover:shadow-sm
              tansform hover:scale-105 transition duration-300
              "
            >
              <div className="relative group">
                <img
                  className="mx-auto"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <h2 className="text-xl font-bold text-center mt-4">
                  {pokemon.name}
                </h2>
                <div className="grid grid-cols-1 justify-items-center gap-4 pt-2">
                  <button className="bg-green-600 text-white rounded-md font-bold p-2 min-w-fit"></button>
                  <button className="bg-yellow-300 text-white rounded-md flex justify-center p-2 items-center max-w-fit">
                    {}
                    {/*  Marcar favorito*/}
                    <svg
                      className="w-8 fill-white bold"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            // cada uno tiene 2 botones 1 de favoritos y otro de detalles
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
