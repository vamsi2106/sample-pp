import React from "react";
import CartItem from "../components/CartItem";

const CartPage: React.FC = () => {
  const cartItems = [
    { name: "Laptop", quantity: 1 },
    { name: "Smartphone", quantity: 2 },
  ];

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.name} name={item.name} quantity={item.quantity} />
      ))}
    </div>
  );
};

export default CartPage;
