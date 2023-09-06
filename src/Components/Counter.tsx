import "./Counter.scss";
import React, { useState } from "react";

export const componentName = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default componentName;
