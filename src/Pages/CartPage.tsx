
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const CartPage: React.FC = () => {
  const {cart} = useSelector((state:any) => state)
  const cartItems = cart.items
  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item:any,index:number) => (
        <CartItem key={index} item={item} id={item.id} title={item.title} price = {item.price} quantity = {item.quantity}/>
      ))}
    </div>
  );
};

export default CartPage;

