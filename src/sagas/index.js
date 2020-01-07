import { combineReducers } from "redux";
import counter, { CounterSaga } from "./CounterSaga";

// import { delay } from "redux-saga";
// import { put, takeEvery } from "redux-saga/effects";
// import { handleActions, createAction } from "redux-actions";

// // 비동기 액션 타입 생성자
// export const asyncActionTypeCreator = prefix => {
//   const asyncTypeAction = ["_INDEX", "_REQUEST", "_SUCCESS", "_FAILURE"];

//   const actionNameIndex = asyncTypeAction[0];
//   const actionNameRequest = asyncTypeAction[1];
//   const actionNameSuccess = asyncTypeAction[2];
//   const actionNameFailure = asyncTypeAction[3];

//   return {
//     INDEX: prefix + actionNameIndex,
//     REQUEST: prefix + actionNameRequest,
//     SUCCESS: prefix + actionNameSuccess,
//     FAILURE: prefix + actionNameFailure
//   };
// };

// // 비동기 액션 생성자
// export function asyncActionCreator(actions) {
//   let actionCreator = createAction(actions.INDEX);
//   actionCreator.request = createAction(actions.REQUEST);
//   actionCreator.success = createAction(actions.SUCCESS);
//   actionCreator.failure = createAction(actions.Failure);

//   return actionCreator;
// }
