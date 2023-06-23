<label htmlFor="">Your email: </label>
<input type="mail" name="mail" id="mail" />

{inputFields.map((field) => (

<div key={field.name}>
<label htmlFor={field.name}>{field.label}</label>
<input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChanges}
            />
</div>
))}

{selectedOption.map((value) => (

<option value={value} key={value}>
{value}
</option>
))}

<label htmlFor="">Your firstname</label>
<input type="text" name="firstname" id="firstname" />

        <label htmlFor="">Your lastname: </label>
        <input type="text" name="lastname" id="lastname" />

const panierInit = [];

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
case panierActionTypes.ADD_ITEM:
const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case panierActionTypes.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);

    case panierActionTypes.CLEAR_CART:
      return [];

    default:
      return state;

}
}

{panierProducts && panierProducts.map((product) => (
<div key={product.id}>
<h4>{product.title}</h4>
<p>{product.description}</p>
<p>{product.price} €</p>
</div>
))}
