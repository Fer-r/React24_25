import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

// Creacion del provveror del contexto
export function PokemonProvider({ children }) {
  // hook
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {};
  const removeFromFavorites = (pokemonId) => {};

  // Funcionalidades del provider
  return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
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
