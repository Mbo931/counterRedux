import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { panierAction, addToBasket, panierInit } from '../reducer/panier';

export default function AddPanier() {
  const idItem = useSelector((state) => state.ref);
  const dispatch = useDispatch();

  const saveBasket = (e) => {
    e.preventDefault();
    const quantity = parseInt(e.target.elements.quantity.value); // Récupère la valeur du champ de formulaire

    const item = {
      ref: idItem,
      quantity: quantity
    };

    dispatch(addToBasket(item)); // Dispatch l'action avec les données de l'item

    console.log(panierInit);
  };

  return (
    <>
      <form className="addPanier" onSubmit={saveBasket}>
        Quantity:
        <input className="quantity" type="number" name="quantity" id={idItem} min={1} step={1} defaultValue={1} required />
        <br />
        <button className="addBtn" type="submit">Add to Basket</button>
      </form>
    </>
  );
}
