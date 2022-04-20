import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail(prop) {
  const { product_id } = useParams();

  return <h1>Product Detail will be shown here for : {product_id}</h1>;
}

export default ProductDetail;
