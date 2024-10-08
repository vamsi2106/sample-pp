import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetailsPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const product = useSelector((s: any) => s.products.selectedItem);
  const { title, description, image, rating, category } = product;

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-detailed-page">
      <div className="card-1">
        <div className="p-d-img-card">
          <img src={image} className="product-img" alt={title} />
        </div>
        <div className="p-details-info-card">
          <h3>{title}</h3>
          <h6>
            Rating: <span className="badge bg-warning">{rating.rate}</span>
          </h6>
          <h6>
            Category: <span className="badge bg-primary">{category}</span>{" "}
          </h6>
          <h6>
            No of ratings:{" "}
            <span className="badge bg-warning"> {rating.count}</span>
          </h6>
          <p>{description}</p>
          <button onClick={onAddToCart} className="btn btn-primary w-25">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
