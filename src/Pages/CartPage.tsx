import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import "./CartPage.css";

const CartPage: React.FC = () => {
  const { cart } = useSelector((state: any) => state);
  const cartItems = cart.items;
  let totalPrice = 0;

  cartItems.forEach((item: any) => {
    totalPrice += item.quantity * item.price;
  });

  if (cartItems.length === 0) {
    return <h1 className="cart-empty d-flex align-items-center justify-content-center">Your Cart is Empty!</h1>;
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: any, index: number) => (
            <CartItem
              key={index}
              id={item.id}
              item={item}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <p className="total-price">
          Total Price: &#x20b9; {totalPrice.toFixed(2)}
          <button className="checkout-btn">Checkout</button>
        </p>
      </div>
    </div>
  );
};

export default CartPage;
