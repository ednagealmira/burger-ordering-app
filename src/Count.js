import { useState } from "react";

const Count = (props) => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h3>{props.order}</h3>
      <p>${props.price}</p>
      <div>
        <button onClick={add}>+</button>
        <p>{count}</p>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
};

export default Count;
