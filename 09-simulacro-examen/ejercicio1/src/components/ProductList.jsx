import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
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
      console.error("Errror en el fetching",error);
      throw error;
    }
  };
  return <div className="grid grid-cols-3 gap-4">
        {products&&products.map((product)=>(
            <div key={product._id} className="grid grid-cols-1">
                <span>{product.name}</span>
                <span>{product.description}</span>
                <span>{product.price}</span>
            </div>
        ))}
  </div>;
};

export default ProductList;
