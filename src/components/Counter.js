import React from "react";

export default function Counter({
  number,
  diff,
  onhandleIncrease,
  onhandleDecrease,
  onhandleSetdiff
}) {
  const onChange = e => {
    let value = e.target.value ? e.target.value : 0;
    onhandleSetdiff(parseInt(value, 10));
  };
  return (
    <div>
      <div>
        <h1>Counter</h1>
      </div>
      <div>{number}</div>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
      </div>
      <div>
        <button onClick={onhandleIncrease}>+</button>
        <button onClick={onhandleDecrease}>-</button>
      </div>
    </div>
  );
}
