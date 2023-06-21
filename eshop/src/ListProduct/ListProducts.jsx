import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

function ListProducts({ products }) {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product key={index} product={product}>
        </Product>
      ))}
    </div>
  );
}

export default ListProducts;