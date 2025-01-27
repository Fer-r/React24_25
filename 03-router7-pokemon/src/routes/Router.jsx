import { ROUTES } from "./paths";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "./../pages/Home";
import Favorites from './../pages/Favorites';
import Search from './../pages/Search';
import PokemonDetail from './../pages/PokemonDetail';

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
      },
    ],
  },
]);
