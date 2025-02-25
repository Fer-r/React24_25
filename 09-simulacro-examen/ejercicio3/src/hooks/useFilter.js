import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

export const useFilter = () => {
  const { products, loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [formData, setFormData] = useState({
    search: "",
    // Stock tiene que ser mayor que si es distinto de 0
    stock: 0,
    // El precio tiene que ser menor que el filtro si el filtro es distinto de 0
    price: 0,
  });
  useEffect(() => {
    formData.search != ""
      ? setFilteredProducts(
          products.filter((product) =>
            product.name
              .toLowerCase()
              .includes(formData.search.toLowerCase().trim())
          )
        )
      : setFilteredProducts(products);
    formData.stock > 0
      ? setFilteredProducts((prevValue) =>
          prevValue.filter((product) => product.stock >= formData.stock)
        )
      : null;
    formData.price > 0
      ? setFilteredProducts((prevValue) =>
          prevValue.filter((product) => product.price <= formData.price)
        )
      : null;
  }, [products, formData]);

  return { formData, setFormData, filteredProducts, error, loading };
};
