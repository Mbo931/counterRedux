import React from 'react';
import Counter from './components/Counter';
import Increment from './components/Increment';


function App() {
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Increment />
      <Counter/>
    </div>
  );
}

export default App;
