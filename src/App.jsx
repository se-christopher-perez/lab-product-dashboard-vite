import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {

  const array = [
    { "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
    { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
    { "id": 3, "name": "Tablet", "price": "$499", "inStock": true }
  ]

  const [products, setProducts] = useState(array)



  return (
    <div>
      <h1>Product Dashboard</h1>

      <ProductList products={products} setProducts={setProducts} />

    </div>
  );
};

export default App;
