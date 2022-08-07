import {initialState} from "./counter.state";
import {createReducer, on} from "@ngrx/store";
import {changeChanelName, customIncrement, decrement, increment, reset} from "./counter.actions";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      counter: 0,
      channelName: ''
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeChanelName, (state) => {
    return {
      ...state,
      channelName : 'Toriqul Islam Dipro',
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

