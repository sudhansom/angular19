import { Action, createReducer, on } from "@ngrx/store";
import { DECREMENT, INCREMENT, CounterActions, IncrementAction, DecrementAction } from "./app.actions";

const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value),
//   on(decrement, (state, action) => state - action.value)
//   );

export function counterReducer(state = initialState, action: CounterActions | Action) {
  if(action.type === INCREMENT) {
    return state + (action as IncrementAction).value;
  }

  if(action.type === DECREMENT) {
    return state - (action as DecrementAction).value;
  }

  return state;
}
