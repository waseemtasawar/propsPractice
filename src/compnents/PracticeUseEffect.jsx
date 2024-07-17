import React, { useState } from "react";

const PracticeUseEffect = () => {
  const [count, setCount] = useState(0);

  function Incriment() {
    setCount(count + 1);
  }
  function Incriment() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={Incriment}>Incriment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default PracticeUseEffect;
