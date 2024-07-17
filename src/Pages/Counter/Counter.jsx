import { useState } from 'react';
import './style.css';

function Counter() {
  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count + 1)
  }

  const minus = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="flex">
      <button onClick={minus}>-</button>
      <div className={count < 0 ? 'red ' : 'green'}>{count}</div>
      {/* <div className={count < 0 ? 'red ' : (count > 0 ? 'green ' : '')}>{count}</div> */}
      <button onClick={plus}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;