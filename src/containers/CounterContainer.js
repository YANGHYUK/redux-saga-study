import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/CounterReducer";

export default function CounterContainer() {
  const { number, diff } = useSelector(state => ({
    number: state.CounterReducer.number,
    diff: state.CounterReducer.diff
  }));

  const dispatch = useDispatch();

  const onhandleIncrease = () => dispatch(increase());
  const onhandleDecrease = () => dispatch(decrease());
  const onhandleSetdiff = diff => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onhandleIncrease={onhandleIncrease}
        onhandleDecrease={onhandleDecrease}
        onhandleSetdiff={onhandleSetdiff}
      />
    </div>
  );
}
