import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data

  const array = [
    { "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
    { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
    { "id": 3, "name": "Tablet", "price": "$499", "inStock": true }
  ]

  // TODO: Implement state to manage filtering

  const [products, setProducts] = useState(array)

  // TODO: Implement logic to filter products based on availability


  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}

      <ProductList products={products} setProducts={setProducts} />

    </div>
  );
};

export default App;
