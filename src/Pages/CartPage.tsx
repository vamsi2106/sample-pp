
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const CartPage: React.FC = () => {
  const {cart} = useSelector((state:any) => state)
  const cartItems = cart.items
  let totalPrice = 0

  for(let i of cartItems){
    totalPrice += (i.quantity) * (i.price)
  }
  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item:any,index:number) => (
        <CartItem key={index} title={item.title} price = {item.price} quantity = {item.quantity}/>
      ))}
      <div className="cart-details-container">
          <p>
              {totalPrice}
          </p>
          <button>CheckOut</button>
      </div>
    </div>
  );
};

export default CartPage;

