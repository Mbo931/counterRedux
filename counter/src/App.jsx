import React from 'react';
import { useSelector } from 'react-redux';
import Increment from './components/Increment';

function App() {
  const counterValue = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Counter Value: {counterValue}</p>
      <Increment /> {}
      <p>{counterValue % 2 === 0 ? 'Pair' : 'Impair'}</p>
    </div>
  );
}

export default App;
