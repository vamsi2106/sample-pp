import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";

export interface Product{
  id:number,
  title:string,
  price:number,
  description:string,
  image:string,
  category:string,
  rating:{
    rate:number,
    count:number
  }
}

export interface ProductItemProps{
  productDetails: Product
  
}

const ProductItem: React.FC<ProductItemProps> = ({productDetails}:ProductItemProps) => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  // const selectedItem = useSelector((s:any) => s.products.selectedItem)
  const {id, title,price,description,image,rating } = productDetails;
  const onClickViewMore = () =>{
    // functionality Needs to be Completed...
    dispatch<any>(selectProduct(id));
    navigate(`/product/${id}`)
    
  }

  // console.log(selectedItem);
  return (
    <div className="product-item">
      <img src={image} alt={title} style={{"width": "100px"}} />
      <h4>{title}</h4>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating.rate}</p>
      <button type="button" onClick={onClickViewMore}>View More</button>
    </div>
  );
};

export default ProductItem;
