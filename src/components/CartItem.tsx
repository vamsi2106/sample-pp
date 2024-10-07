import React from "react";

interface CartItemProps {
  title: string;
  quantity: number;
  price:number
}

const CartItem: React.FC<CartItemProps> = ({ title, quantity, price }) => {

  const decreaseQuantity = () =>{

  }

  const increaseQuantity = () =>{

  }

  return (
    <div className="cart-item">
      <h4 className="cart-itme-title">{title}</h4>
     <div className="quantity-container">
        <button onClick={decreaseQuantity}>-</button>
        <p>Quantity: {quantity}</p>
        <button onClick={increaseQuantity}>+</button>
     </div>
     <div className="cart-item-price">
        <h2>{price}</h2>
     </div>
    </div>
  );
};

export default CartItem;