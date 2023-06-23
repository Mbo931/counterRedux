import React from 'react';
import './Product.css'
import AddPanier from '../AddPanier/AddPanier';
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
                <h3> 
                    {product.price} €
                </h3>
                <AddPanier product={product} />
            </div>
            
        </div>
    )
}