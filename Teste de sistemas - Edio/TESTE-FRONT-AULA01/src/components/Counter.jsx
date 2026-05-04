import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((currentValue) => currentValue + 1);
  }

  return (
    <div>
      <p>Contador: {count}</p>
      <button type="button" onClick={handleIncrement}>
        Incrementar
      </button>
    </div>
  );
}