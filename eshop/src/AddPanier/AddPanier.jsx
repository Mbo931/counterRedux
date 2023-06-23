import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, panierInit } from '../reducer/panier';
import { createRef, useState } from 'react';

export default function AddPanier({ product }) {
  const panier = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  const quantityRef = createRef();

  const saveBasket = (e) => {
    e.preventDefault();
    const quantity = Number(quantityRef.current.value);

    const article = {
      id: product.id,
      item: product,
      quantity,
    };

    dispatch(addToBasket(article));
    console.log(panier)
  };

  return (
    <>
      <form className="addPanier" onSubmit={saveBasket}>
        Quantity:
        <input
          ref={quantityRef}
          className="quantity"
          type="number"
          name="quantity"
          min={1}
          step={1}
          defaultValue={1}
          required
        />
        <br />
        <button className="addBtn" type="submit">
          Add to Basket
        </button>
      </form>
    </>
  );
}
