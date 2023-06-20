import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, incrementAsync } from '../reducer/CounterSlice';

function Increment() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    dispatch(increment(randomValue));
  };

  const handleAsyncIncrement = () => {
    dispatch(incrementAsync(1)); // Passer la quantité (amount) désirée en argument de incrementAsync
  };
  
  return (
    <>
      <button  onClick={handleIncrement}>Increment</button>
      <button  onClick={handleAsyncIncrement}>Async Increment</button>
    </>
  );
}

export default Increment;
