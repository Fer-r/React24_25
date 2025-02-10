import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "./../pages/ErrorPage";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "./../pages/MovieList";
import Search from "./../pages/Search";
import Favorites from "../pages/Favorites";
import Reviews from "../pages/Reviews";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "movies",
        element: <MovieList />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
