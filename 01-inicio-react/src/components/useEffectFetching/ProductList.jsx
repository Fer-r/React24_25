import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LiCartProduct from "./LiCartProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCarrito, setTotalCarrito] = useState(0);
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    setTotalCarrito(totalCart(cart));
  }, [cart]);
  const fetchProducts = async () => {
    try {
      // const response = await fetch("http://localhost:3000/books/");
      const response = await fetch("http://localhost:5173/src/data/db.json");
      if (!response.ok) {
        throw new Error("Error en la peticion");
      }
      setProducts(await response.json());
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };
  const addCart = (product) => {
    product = { ...product, cantidad: 1 };
    setCart((prevCart) => [...prevCart, product]);

  };
  const totalCart = (cart) => {
    return cart.reduce((acc, product) => acc + product.price, 0);
    
  };
  const removeCart = () => {};
  return (
    <>
      <div className="w-full max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Lista de Libros
        </h1>
        {/* Div que pinta las productsCard */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            // products.length>0
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addCart={addCart}
              />
              // <div key={product.id}>
              //   <p>{product.title}</p>
              //   <p>{product.price}</p>
              //   <p>{product.tags}</p>
              // </div>
            ))
            // Div que pinta el carrito de libros
          }
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Carrito de la Compra
          </h2>
          <p className="text-xl font-semibold text-center mb-4">
            Total: {totalCarrito}</p>
          {/* Si el carrito no esta vacio renderizo con UL los libros del carrito */}
          {cart.length > 0 ? (
            <ul>
              {cart.map((product, index) => (
                <LiCartProduct product={product} index={index} />
                // <li key={product.id}>
                //   {product.title} {product.price}
                // </li>
              ))}
            </ul>
          ) : (
            <p>Carrito vacio</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
