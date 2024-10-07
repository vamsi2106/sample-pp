import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";


const ProductDetailsPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();

  const dispatch=useDispatch()

  const product:any = useSelector((s:any )=> s.products.selectedItem)
  const {title,description,image,rating,category}=product

  const onAddToCart=()=>{
    dispatch(addToCart(product));
  }


  return (
    <div className="product-detailed-page">
      <h2>{title}s</h2>
      <img src={image} alt={title} />
      <h4>Rating: {rating.rate}</h4>
      <h4>Category: {category}</h4>
      <h4>No of Users: {rating.count}</h4>
      <p>{description}</p>
      <button onClick={onAddToCart} className="nf-btn" >Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
