import React from "react";
import { addToCart, decreaseQuantity } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "./CartItem.css";

interface CartItemProps {
  id: number;
  title: string;
  quantity: number;
  price: number;
  item: any;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  item,
  title,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncrease = () => {
    dispatch(addToCart(item));
  };

  return (
    <tr className="cart-item">
      <td className="cart-item-title">{title}</td>
      <td className="cart-item-controls">
        <button className="quantity-btn decrease-btn" onClick={handleDecrease}>
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button className="quantity-btn increase-btn" onClick={handleIncrease}>
          +
        </button>
      </td>
      <td className="cart-item-price">&#x20b9; {price.toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
``;
