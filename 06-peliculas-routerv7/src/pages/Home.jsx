import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "./../components/MovieCard";
import PacmanLoader from './../../node_modules/react-spinners/PacmanLoader.d';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );
const handlePageChange=(newPage)=>{
  window.scrollTo({top:0,behavior:"smooth"});
  setPage(newPage);
}


  // Si se produce un error
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar las peliculas {error}
        </p>
        <Link to="/" className="text-blue-500">
          Volver al inicio
        </Link>
      </div>
    );
  }
  // Y si no ... pues cargo las peliculas
  return (
    <div className="space-y-10 mx-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido al Videoclub DWEC
        </h1>
        <p className="mt-4 text-gray-800">
          Aqui podras encontrar las peliculas mas populares del momento
        </p>
      </header>
      <section>
        <h2 className="text-2xl font-bold text-sky-900 mb-8">Peliculas Populares</h2>
        {loading ? (
          <PacmanLoader color="#15387b"/>
        ) : (
          <>
            {/* Grid para las peliculas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {data?.results?.map((movie) => (
                // Aqui pinto las tarjetas
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
             {/* botones para moverme entre páginas */}
             <div className="flex justify-center mt-8 gap-2 mb-10">
              <button
                className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                onClick={() => handlePageChange(page-1)}
                disabled={page === 1}
              >
                Anterior
              </button>
              <span className="text-gray-800 flex items-center">
                Página {data?.page} de {data?.total_pages}
              </span>
              <button
                className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === data?.total_pages}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
