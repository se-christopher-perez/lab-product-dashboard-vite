import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { colors } from '@mui/material';

const ProductCard = ({ product, handleClick }) => {

  return (
    <div className={product.inStock ? "inStockClass" : "outOfStockClass"} style={{color: product.inStock ? "green" : "red"}} >

      <h1>{product.name}</h1>

      <h2>{product.price}</h2>

      <h3>{product.inStock ? "In Stock" : "Out of Stock"}</h3>

      <button onClick={() => handleClick(product.id)} >Remove</button>

    </div>
  );
};

export default ProductCard;