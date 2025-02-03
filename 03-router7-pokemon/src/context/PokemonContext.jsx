import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const PokemonContext = createContext();

// Creacion del provveror del contexto
export function PokemonProvider({ children }) {
  // hook
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {
    // verificamos si el pokemon ya esta en favoritos
    if (favorites.some((poke) => poke.id == pokemon.id)) {
      console.error();
      toast.error("El pokemon ya esta en favoritos",{style:{
        background:"#ff0050",
        color:"black",
        border:"2px solid red"
      }})
      return
    }
    // si no esta repetido lo agregamos
    setFavorites((prevFavs) => [...prevFavs, pokemon]);
    toast.error("Pokemon añadido",{style:{
      background:"#d1fae5",
      color:"black",
      border:"2px solid green"
    }})
    // sonner de todo ok
  };
  const removeFromFavorites = (pokemonId) => {
    setFavorites(
      (prevFavs) => prevFavs.filter((pokemon) => pokemon?.id !== pokemonId)
      // sonner de pokemon borrado de favoritos
    );
    toast.error("El pokemon eliminado",{style:{
      background:"#d1fae5",
      color:"black",
      border:"2px solid green"
    }})
  };

  // Funcionalidades del provider
  return (
    <PokemonContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
// Me creo un hook presonalizado para cargar elñ contexto
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error(
      "usePokemon debe estar dentro del proeedor PokemonProvider"
    );
  } else {
    return context;
  }
};
