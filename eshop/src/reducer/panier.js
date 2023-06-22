import { v4 as uuidv4 } from 'uuid';

export const panierInit = [
  {
    ref: uuidv4(),
    quantity: 0
  }
];

export const panierAction = {
  addItem: 'ADD_PANIER',
  removePanier: 'REMOVE_PANIER',
  clearPanier: 'CLEAR_PANIER'
};

export const addToBasket = (payload) => {
  return {
    type: panierAction.addItem,
    payload: payload
  };
};

export const removeBasket = (payload) => {
  return {
    type: panierAction.removePanier,
    payload: payload
  };
};

export const clearBasket = () => {
  return {
    type: panierAction.clearPanier
  };
};

export default function panierReducer(state = panierInit, action) {
  switch (action.type) {
    case panierAction.addItem:
      return [...state, action.payload];
    case panierAction.removePanier:
      // Ajoutez ici la logique pour supprimer un élément du panier
      return state;
    case panierAction.clearPanier:
      // Ajoutez ici la logique pour vider le panier
      return [];
    default:
      return state;
  }
}
