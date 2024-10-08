import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";

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
  };
}

export interface ProductItemProps {
  productDetails: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({
  productDetails,
}: ProductItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const selectedItem = useSelector((s:any) => s.products.selectedItem)
  const { id, title, price, description, image, rating } = productDetails;
  const onClickViewMore = () => {
    // functionality Needs to be Completed...
    dispatch<any>(selectProduct(id));
    navigate(`/product/${id}`);
  };

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
          <p>Rating: {rating.rate}</p>
        </div>
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
