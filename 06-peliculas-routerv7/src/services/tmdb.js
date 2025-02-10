export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

// TAMAÑOS DE LAS IMAGENES
export const SIZE = {
  POSTER: "w500",
  ORIGINAL: "original",
};

export const fetchFromAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&language=es_ES`
    );
    if (!response.ok) {
      throw new Error("Error en la peticion");
    }
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const getPopularMovies = async () => {
  return await fetchFromAPI("/movie/popular");
};
export const getMovieDetail = async (id) => {
  return await fetchFromAPI(`movie/${id}`);
};
export const getMovieVidesos = async (id) => {
  return await fetchFromAPI(`movie/${id}/videos`);
};
