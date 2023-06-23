import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const API_ENDPOINT = 'https://fakestoreapi.com/products';

// Products.js
export function useProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // store the data as it is
      })
      .catch((err) => console.log(`Cannot fetch products`, err));
  }, []);

  return products;
}