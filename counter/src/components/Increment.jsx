import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../reducer/CounterSlice';

function Increment() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    dispatch(increment(randomValue));
  };

  return (
    <button onClick={handleIncrement}>Increment</button>
  );
}

export default Increment;