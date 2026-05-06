import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, setProducts }) => {

  function handleClick(id) {

    const filteredArray = products.filter((product) => {

      return product.id !== id

    })

    setProducts(filteredArray)

  }

  return (
    <div>

      {products.map((product) => {

        return <ProductCard key={product.id} product={product} handleClick={handleClick} />

      })}

    </div>
  );
};

export default ProductList;