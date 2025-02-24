import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ action }) => {
  const { id } = useParams();
  return <>
  <h2>
    {id},{action}
  </h2>
  
  </>;
};

export default ProductPage;
