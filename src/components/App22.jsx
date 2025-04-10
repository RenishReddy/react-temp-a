import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>React Counter</h1>
      <h2>{count}</h2>
      <button onClick={decrement} style={{ marginRight: '10px' }}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
