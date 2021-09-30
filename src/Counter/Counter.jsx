import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [countervalue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div>
      <h1>My Counter</h1>
      <h2
        data-testid="counter"
        className={
          countervalue >= 100 ? 'green' : countervalue <= -100 ? 'red' : ''
        }
      >
        {countervalue}
      </h2>
      <button
        onClick={() => setCounterValue((prev) => +prev - +inputValue)}
        // convertin the values to number with +
        data-testid="subtract-btn"
      >
        -
      </button>
      <input
        style={{ textAlign: 'center' }}
        type="number"
        data-testid="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => setCounterValue((prev) => +prev + +inputValue)}
        data-testid="add-btn"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
