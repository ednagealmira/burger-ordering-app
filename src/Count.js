import { useState } from "react";
import "./App.css";

const Count = (props) => {
  // const button = document.querySelectorAll("button");
  // if (count <= 0) {
  //   button.disabled = true;
  // } else {
  //   button.disabled = false;
  // }
  const [count, setCount] = useState(0);
  const [button, setButton] = useState(true);
  const add = () => {
    if (count == 0) {
      setButton(false);
    }
    setCount(count + 1);
  };
  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count == 1) {
      setButton(true);
    }
  };

  return (
    <div className="menu">
      <div className="container-img">
        <img src={props.imglink}></img>
      </div>
      <div className="container-content">
        <h3>{props.order}</h3>
        <p>${props.price}</p>
        <div className="counter">
          <button disabled={button} onClick={minus} className="btn-left">
            -
          </button>
          <p>{count}</p>
          <button onClick={add} className="btn-right">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
