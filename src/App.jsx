import { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(50);

  const handlerAdd = () => {
    setCount(count + 1);
  };

  const handlerSubstract = () => {
    setCount(count - 1);
  };

  const handlerReset = () => {
    setCount(0);
  };

  return (
    <>
      <>
        <div className="container">
          <h1>Counter: {count}</h1>
          <hr />
          <button className="btn btn-primary" onClick={handlerAdd}>+</button>
          <button className="btn btn-outline-info" onClick={handlerReset}>Reset</button>
          <button className="btn btn-primary" onClick={handlerSubstract}>-</button>
        </div>
      </>
    </>
  );
};

export default App;
