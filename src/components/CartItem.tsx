import React from "react";
import {addToCart,CartItemSlice,decreaseQuantity} from '../features/cart/cartSlice'
import { useDispatch } from "react-redux";
import { Product } from "./ProductItem";



interface CartItemProps {
  id:number,
  title: string;
  quantity: number;
  price:number,
  item:CartItemSlice
}

const CartItem: React.FC<CartItemProps> = ({id, item,title, quantity, price }) => {
 
 const dispatch=useDispatch()

  const decreaseQuantityy = () =>{
    console.log("decrease clicked")
      dispatch<any>(decreaseQuantity(id))
      
  }

  const increaseQuantity = () =>{
      dispatch<any>(addToCart(item))
  }

  return (
    <div className="cart-item">
      <h4 className="cart-item-title">{title}</h4>
     <div className="quantity-container">
        <button onClick={decreaseQuantityy}>-</button>
        <p className="m-1">Quantity: {quantity}</p>
        <button onClick={increaseQuantity}>+</button>
     </div>
     <div className="cart-item-price">
        <h2>&#x20b9; {price}</h2>
     </div>
    </div>
  );
};

export default CartItem;