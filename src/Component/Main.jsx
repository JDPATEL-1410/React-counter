import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Handlers
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="body">
      <div className="counter-wrapper">
        <div className="counter-container">
          <div className="counter-glow"></div>
          <h2 className="counter-title">REACT - <span>COUNTER</span></h2>

          <div className="counter-display">
            <div className="count-number">{count}</div>

            {/* Button group: Decrement, Reset, Increment */}
            <div className="button-group">
              <button onClick={decrement} className="counter-button decrement" aria-label="Decrease">
                <span className="button-icon">－</span>
              </button>
              <button onClick={reset} className="counter-button reset" aria-label="Reset">
                <span className="button-icon">↺</span>
              </button>
              <button onClick={increment} className="counter-button increment" aria-label="Increase">
                <span className="button-icon">＋</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
