export const panierInit = [];

function sumValues(arr, propertyName) {
  return arr.reduce((total, obj) => total + obj[propertyName], 0);
}

export const itemCounter = sumValues(panierInit, 'quantity');

export const panierAction = {
  addItem: 'ADD_PANIER',
  removePanier: 'REMOVE_PANIER',
  clearPanier: 'CLEAR_PANIER',
};

export const addToBasket = (product) => {
  return {
    type: panierAction.addItem,
    payload: product,
  };
};

export const removeBasket = (product) => {
  return {
    type: panierAction.removePanier,
    payload: product,
  };
};

export const clearBasket = () => {
  return {
    type: panierAction.clearPanier,
  };
};

export default function panierReducer(state = panierInit, action) {
  switch (action.type) {
    case panierAction.addItem:
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case panierAction.removePanier:
      return state.filter((item) => item.id !== action.payload);

    case panierAction.clearPanier:
      return [];

    default:
      return state;
  }
}
