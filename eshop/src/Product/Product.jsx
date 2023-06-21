import React from 'react';
import './Product.css'
export default function Product ({product}) {
    return (
        <div class="product">
            <div class="imageProduct">
                <img src={product.image}></img>
            </div>
            <div class="description">
                <h3>
                    {product.title}
                </h3>
                <p>
                    {product.description}
                </p>
                <p>
                    {product.price} €
                </p>
            </div>
        </div>
    )
}