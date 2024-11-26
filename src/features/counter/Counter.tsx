import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { increment, decrement, incrementByAmount, fetchCounterValue } from './counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const status = useSelector((state: RootState) => state.counter.status);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>Increment by 3</button>
      <button onClick={() => dispatch(fetchCounterValue())}>Fetch Counter</button>
      {status === 'loading' && <p>Loading...</p>}
    </div>
  );
};

export default Counter;
