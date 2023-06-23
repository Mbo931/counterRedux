import { useDispatch, useSelector } from 'react-redux';
import { clearBasket, removeBasket } from '../reducer/panier';
import { useProducts } from '../services/Products';

export default function Panier() {
  const user = useSelector((state) => state.user);
  const panier = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  const products = useProducts();

  // Vérifier si la valeur de `products` est null avant d'utiliser `filter`
  

  const removeItem = (id) => {
    dispatch(removeBasket(id));
  };

  return (
    <>
      <div className="banPanier">
        <h2>Hi {user.firstname}</h2>
        <h3>There are {panier.length} items in your basket</h3>
        <button onClick={() => dispatch(clearBasket())}>Clear Basket</button>
      </div>
      <div className="basket-container">
        {panier.map((article) => (
            <div key={article.id}>
              <div className="imageProduct">
                <img src={article.item.image}></img>
            </div>
              <h4>{article.item.title}</h4>
              <p>{article.item.description}</p>
              <p>{article.item.price} €</p>
              <p>Quantity: {article.quantity}</p>
              <button onClick={() => removeItem(article.id)}>Remove</button>
            </div>
          ))}
      </div>
    </>
  );
}
