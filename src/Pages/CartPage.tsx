import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const CartPage: React.FC = () => {
  const { cart } = useSelector((state: any) => state);
  const cartItems = cart.items;
  let totalPrice = 0;

  for (let i of cartItems) {
    totalPrice += i.quantity * i.price;
  }

  if (cartItems.length === 0) {
    return <h1 className="cart-container">Cart is Empty!</h1>;
  }

  return (
    <>
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.map((item: any, index: number) => (
          <CartItem
            key={index}
            item={item}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="cart-details-container">
        <p>Total Price: &#x20b9;{totalPrice.toFixed(2)}</p>
        <button className="btn btn-primary">CheckOut</button>
      </div>
    </>
  );
};

export default CartPage;
