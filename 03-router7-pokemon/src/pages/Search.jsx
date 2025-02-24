import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PokemonCard from "../components/PokemonCard";
const Search = () => {
  const [allPokemonUrls, setAllPokemonUrls] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchUrls();
  }, []);
  useEffect(() => {
    async function fetchPokemonData() {
      try {
        if (allPokemonUrls.length === 0) {
          return;
        }
        // First fetch all URLs
        const filteredUrls = allPokemonUrls
          .filter((pokemon) => (search ? pokemon.name.includes(search) : true))
          .slice(0, 21);

        // Make concurrent requests for the filtered URLs
        const pokemonData = await Promise.all(
          filteredUrls.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        // Filter out any failed requests
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        throw error;
      }
    }
    fetchPokemonData();
  }, [search, allPokemonUrls]);

  const fetchUrls = async () => {
    setIsLoading(true);
    try {
      // Terminar el buscar en tiempo real
      // fetch todos los pokemons y on change hacer filter fetchedPokemons
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=9999"
      );
      if (!response.ok) {
        toast.error("Failed to fetch pokemons", {
          style: {
            background: "#fee2e2",
            color: "white",
            border: "2px solid red",
          },
          icon: "❌",
        });
        return;
      }
      const data = await response.json();
      setAllPokemonUrls(data.results);
      return allPokemonUrls;
    } catch (error) {
      toast.error("Failed to fetch pokemons", {
        style: {
          background: "#fee2e2",
          color: "white",
          border: "2px solid red",
        },
        icon: "❌",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemon a Buscar:</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={search}
            placeholder="Buscar Pokemon"
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-rose-400"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
        >
          Buscar
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Search;
