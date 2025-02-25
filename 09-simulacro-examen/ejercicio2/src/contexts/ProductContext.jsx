import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "useProducts debe estar dentro del proveedor ProductProvider"
    );
  }
  return context;
};
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);
  const URL_API = import.meta.env.VITE_URL_API;
  const fetchProducts = async () => {
    try {
      console.log(`${URL_API}api/products`);
      const response = await fetch(`${URL_API}api/products`);
      if (!response.ok) {
        throw new Error("Error en la peticion");
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Errror en el fetching", error);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const value = { products, loading, error };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
