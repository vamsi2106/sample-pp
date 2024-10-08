import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  }|null;
}

export interface ProductItemProps {
  productDetails: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({
  productDetails,
}: ProductItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, price, description, image, rating } = productDetails;


  const onClickViewMore = () => {
    dispatch<any>(selectProduct(id));
    navigate(`/product/${id}`);
  };

  const onClickAddToCart = () =>{
    dispatch(addToCart<any>(productDetails))
  }

  // console.log(selectedItem);
  return (
    <>
      <div className="product-card-item">
        <img className="product-img" src={image} alt={title} />
        <div className="card-body">
          <h6>{title}</h6>
          <p>
            <strong>Price:</strong> {price}
          </p>
          <p>
            {" "}
            <strong>Description: </strong>
            {description.slice(0, 40) + "..."}
          </p>
          <p>Rating: {rating!.rate}</p>
        </div>
        <button
         type="button"
         className="btn btn-primary"
         onClick={onClickAddToCart}
         >Add to Cart</button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickViewMore}
        >
          View More
        </button>
      </div>
    </>
  );
};

export default ProductItem;
