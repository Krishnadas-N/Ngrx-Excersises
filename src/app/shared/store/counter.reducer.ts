import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changechannel, customValue, decrement, increment, reset } from "./counter.action";

const _CounterReducerHelper = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customValue,(state,action)=>{
   console.log(state,action)
    return{
        ...state,
        counter:state.counter+action.value
    }
  }),
  on(changechannel,(state,action)=>{
    return {
        ...state,
        channel:action.name
    }
  })
  
);

export function CounterReducer(state: any, action: any) {
  return _CounterReducerHelper(state, action);
}
