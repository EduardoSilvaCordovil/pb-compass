import { CounterAction } from "../types/actions";

export const countReducer = (
    state: number, 
    action: CounterAction
): number => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
