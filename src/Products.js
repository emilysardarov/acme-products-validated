import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useSelector((state) => state);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} (${product.price})
              <br />
              In stock: {product.numberInStock}
              <br />
              <Link to={`/products/${product.id}`}>Edit</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
