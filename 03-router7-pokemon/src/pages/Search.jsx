import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Search = () => {
  const fetchedUrls = [];
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   fetchUrls();
  // }, []);
  useEffect(() => {
    if (!fetchedUrls.length) {
      console.log("jhdsgklfhkldsgfhkl")
      fetchUrls();
    }
    async function pokemonDetails() {
      console.log(
        search
          ? fetchedUrls.filter((pokemon) => pokemon.name.includes(search))
          : fetchedUrls
      );
      return await Promise.all(
        (search
          ? await fetchUrls().filter((pokemon) => pokemon.name.includes(search))
          : await fetchUrls()
        )
          .slice(0, 20)
          .map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
      );
    }

    setPokemons(pokemonDetails());
  }, [search]);

  const fetchUrls = async () => {
    setIsLoading(true);
    try {
      // Terminar el buscar en tiempo real
      // fetch todos los pokemons y on change hacer filter fetchedPokemons
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9999");
      ("https://pokeapi.co/api/v2/pokemon?limit=9999");
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
      fetchedUrls = await response.json().results;
      // navigate(`/search/${search.toLowerCase()}`);
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
      // e.target.value = "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // if (search) {
    //   toast.error("Error al buscar el pokemon", {
    //     style: {
    //       background: "#fee2e2",
    //       color: "white",
    //       border: "2px solid red",
    //     },
    //     icon: "❌",
    //   });
    // }
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
    </div>
  );
};

export default Search;
