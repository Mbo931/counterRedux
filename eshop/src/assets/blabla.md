import React, { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../actions';
import { nanoid } from 'nanoid';

function AddToBasketForm({ product }) {
// Obtient la fonction dispatch de Redux pour envoyer des actions
const dispatch = useDispatch();

// Crée une référence à l'élément input pour récupérer sa valeur
const quantityRef = createRef();

// Fonction appelée lors de la soumission du formulaire
function addItem(event) {
event.preventDefault(); // Empêche le rechargement de la page

    // Récupère la valeur du champ de quantité en tant que nombre
    const quantity = Number(quantityRef.current.value);

    // Construit l'objet payload avec les informations nécessaires
    const payload = {
      item: product, // L'objet product passé en tant que prop
      quantity, // La quantité extraite du champ de quantité
      id: nanoid(), // Un identifiant unique généré
    };

    // Envoie l'action addToBasket à Redux avec le payload
    dispatch(addToBasket(payload));

}

return (
<form onSubmit={addItem}>
{/_ Champ de quantité _/}
Quantity: {' '}
<input
ref={quantityRef} // Utilise la référence pour récupérer la valeur
type="number"
min="1"
step="1"
defaultValue="1"
required
style={{ width: '30px' }}
/>
<br />

      {/* Bouton pour ajouter au panier */}
      <button type="submit">Add to basket</button>
    </form>

);
}

export default AddToBasketForm;
