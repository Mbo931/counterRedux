import React from 'react';
import './Product.css'
export default function Product ({product}) {
    return (
        <div className="product">
            <div className="imageProduct">
                <img src={product.image}></img>
            </div>
            <div className="description">
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