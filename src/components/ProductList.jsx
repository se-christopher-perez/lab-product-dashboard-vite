import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, setProducts }) => {
  // TODO: Check if the product list is empty and display a message if needed

  function handleClick(id) {

    const filteredArray = products.filter((product) => {

      return product.id !== id

    })

    setProducts(filteredArray)

  }

  return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}

      {products.map((product) => {

        return <ProductCard key={product.id} product={product} handleClick={handleClick} />

      })}

    </div>
  );
};

export default ProductList;