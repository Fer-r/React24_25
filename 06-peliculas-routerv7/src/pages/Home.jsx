import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "./../components/MovieCard";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );

  // Si se produce un error
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar las peliculas {error}
        </p>
        <Link to="/" className="text-blue-500">
          Volver
        </Link>
      </div>
    );
  }
  // Y si no ... pues cargo las peliculas
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido al Videoclub DWEC
        </h1>
        <p className="mt-4 text-gray-800">
          Aqui podras encontrar las peliculas mas populares del momento
        </p>
      </header>
      <section>
        <h2 className="text-2xl font-bold text-sky-800">Peliculas Populares</h2>
        {loading ? (
          <div>Cargando ... aqui pondre el spinner</div>
        ) : (
          <>
            {/* Grid para las peliculas */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data?.results?.map((movie) => (
                // Aqui pinto las tarjetas
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
