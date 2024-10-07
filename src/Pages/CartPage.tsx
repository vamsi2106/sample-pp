import React from "react";
import CartItem from "../components/CartItem";

const CartPage: React.FC = () => {
  const cartItems = [
    { title: "Laptop", price:60000,quantity:1},
    { title: "Smartphone",price:35000, quantity: 2 },
    { title: "earphones",price:5000, quantity: 2 },
  ];

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item,index) => (
        <CartItem key={index} title={item.title} price = {item.price} quantity = {item.quantity}/>
      ))}
    </div>
  );
};

export default CartPage;
