import React from "react";
import ButtonProduct from "./ButtonProduct";
import carrito from "../../assets/1413908.png";

const ProductCard = (props) => {
  const { product, addCart } = props;
  const handleClick = () => {
    addCart(product);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
      <p className="text-gray-700 mb-4">{product?.price}</p>
      <ButtonProduct  onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
        <img src={carrito} alt="" className="w-6 h-6 flex " />
        Añadir al carrito
      </ButtonProduct>
      {/* <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Añadir al carrito
      </button> */}
    </div>
  );
};

export default ProductCard;
