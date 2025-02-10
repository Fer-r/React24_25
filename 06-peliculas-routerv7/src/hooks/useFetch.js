import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setData(await fetchFunction());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // abortController es un objerto que me permite abortar la peticion fetch
    const abortController = new AbortController();
    // me pongo en modo de carga
    setLoading(true);
    fetchData();
    // limpio los errores
    setError(null);
    return () => {
      // cuando el componente se muere/desmonta hace lo que pone en el return del useEffect
      abortController.abort();
    };
  }, dependencies);

  return { data, loading, error };
};
