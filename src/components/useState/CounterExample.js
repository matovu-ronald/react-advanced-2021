import React, { useState } from "react";

const CounterExample = () => {
  const [counter, setCounter] = useState(0);
  const [complexCounter, setComplexCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const incrementComplexCounter = () => {
    setTimeout(() => {
      setComplexCounter((prevComplexCounter) => {
        return prevComplexCounter + 1;
      });
    }, 1000);
  };

  return (
    <React.Fragment>
      <div className="mb-2">
        <h2>Regular Counter</h2>
        <h4>Counter: {counter}</h4>
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
      <div>
        <h2>Complex Counter</h2>
        <h4>Counter: {complexCounter}</h4>
        <button className="btn" onClick={incrementComplexCounter}>
          Increment
        </button>
      </div>
    </React.Fragment>
  );
};

export default CounterExample;
