import { ROUTES } from "./paths";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "./../pages/Home";
import Favorites from "./../pages/Favorites";
import Search from "./../pages/Search";
import PokemonDetail from "./../pages/PokemonDetail";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <Favorites />,
      },
      {
        path: ROUTES.SEARCH,
        element: <Search />,
      },
      {
        path: ROUTES.POKEMON_DETAIL,
        element: <PokemonDetail />,
        // Loader es una caracterista de react-router-dom nueva
        // que permite cargar los datos antes de renderizar el componenete
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${params.name}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch pokemon");
            }
            return await response.json();
          } catch (error) {}
        },
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
