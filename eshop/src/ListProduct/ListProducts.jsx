import React from 'react';
import Product from '../Product/Product';
import AddPanier from '../AddPanier/AddPanier';
import './ProductList.css';


 function ListProducts({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} /> // Utilisez l'ID unique comme clé
      ))}
    </div>
  );
}

export default ListProducts;


