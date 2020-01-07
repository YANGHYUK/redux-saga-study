const INCREASE = "CounterReducer/INCREASE";
const DECREASE = "CounterReducer/DECREASE";
const SET_DIFF = "CounterReducer/SET_DIFF";

export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

export const setDiff = diff => ({
  type: SET_DIFF,
  diff
});

const initialState = {
  number: 0,
  diff: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    default:
      return state;
  }
};
export default reducer;
