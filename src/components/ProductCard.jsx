import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, handleClick }) => {

  return (
    <div className={product.inStock ? "inStockClass" : "outOfStockClass"} >
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}

      {/* TODO: Display product name */}
      <h1>{product.name}</h1>

      {/* TODO: Display product price */}
      <h2>{product.price}</h2>

      {/* TODO: Show if the product is in stock or out of stock */}
      <h3>{product.inStock ? "In Stock" : "Out of Stock"}</h3>

      <button onClick={() => handleClick(product.id)} >Remove</button>

    </div>
  );
};

export default ProductCard;