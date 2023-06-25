/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

const ProductsCard = (props) => {
  const { img, rating, title, price } = props;
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const item = { ...props };
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 300);
  };

  return (
    <>
      <div className="product_card">
        <figure>
          <img src={img} alt="item-img" />
        </figure>
        <strong className="rating">{rating}</strong>
        <h4 className="title">{title}</h4>
        <h3 className="price">₹ {price.toLocaleString()}</h3>
        <button
          type="button"
          className={`btn ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {isAdded ? "Added" : "Add to cart"}
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
