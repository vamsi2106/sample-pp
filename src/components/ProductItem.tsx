import React from "react";

interface ProductItemProps {
  name: string;
  price: number;
  description: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  description,
}) => {
  return (
    <div className="product-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductItem;
