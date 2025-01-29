import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  // Cuando usemos react router din Aoo siki deberua teber ek router provider
  // El resto de cosas deberian de estar en RootLayout
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  );
}

export default App;
