import React from "react";

interface CartItemProps {
  name: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, quantity }) => {
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;
