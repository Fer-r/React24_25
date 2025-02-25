import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContext";

const ProductList = () => {
  const {loading,error,products}=useProducts();
  return <div className="grid grid-cols-3 gap-4">
        {products?.map((product)=>(
            <div key={product._id} className="grid grid-cols-1">
                <span>{product.name}</span>
                <span>{product.description}</span>
                <span>{product.price}</span>
            </div>
        ))}
  </div>;
};

export default ProductList;
