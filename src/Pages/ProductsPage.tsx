import React from "react";
import ProductItem from "../components/ProductItem";

const ProductsPage: React.FC = () => {
  const products = [
    { name: "Laptop", price: 1200, description: "A high-performance laptop" },
    { name: "Smartphone", price: 800, description: "Latest model smartphone" },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem
          key={product.name}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
