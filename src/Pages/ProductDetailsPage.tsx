import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Details of product with ID: {id}</p>
    </div>
  );
};

export default ProductDetailsPage;
