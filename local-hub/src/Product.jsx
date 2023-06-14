import React from 'react';
import './Product.css';

const Product = (props) => {
  const { id, title, image, price, rating } = props;

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <strong>${price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span key={index} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img className="product-image" src={image} alt={title} />
      <button className="product-button">Add to Basket</button>
    </div>
  );
};

export default Product;
