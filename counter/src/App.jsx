import React from 'react';
import { useSelector } from 'react-redux';
import Increment from './components/Increment';

function App() {
  const counterValue = useSelector((state) => state.counter.value); // Récupération de la valeur du compteur depuis le state du store
  const incrementedValue = useSelector((state) => state.counter.incrementedValue); // Récupération de la valeur incrémentée depuis le state du store
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Counter Value: {counterValue}</p> 
      <Increment /> 
      <p>
        Incremented Value: {incrementedValue} - {incrementedValue % 2 === 0 ? 'Pair' : 'Impair'}
      </p>  

    </div>
  );
}

export default App;
